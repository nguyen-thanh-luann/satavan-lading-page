import { UpIcon } from '@/assets'
import { DOMAIN_URL, SWR_KEY } from '@/constants'
import { formatMoneyVND } from '@/helper'
import { useCreateOrderDone, usePayment } from '@/hooks'
import { cartAPI } from '@/services'
import { GetOrderDraftRes, Payment } from '@/types'
import { useRouter } from 'next/router'
import { useMemo, useState } from 'react'
import { toast } from 'react-hot-toast'
import useSWR from 'swr'
import { Button } from '../button'
import { OrderSummaryMobileDetail } from './orderSummaryMobileDetail'

export const OrderSummaryMobile = () => {
  const router = useRouter()
  const [showCartSummaryDetail, setShowCartSummaryDetail] = useState<boolean>(false)
  const { data } = useSWR<GetOrderDraftRes>(SWR_KEY.orders)
  const checkoutPaymentMethod: Payment = useSWR(SWR_KEY.checkout_paymet_method)?.data
  const { createPayment } = usePayment()

  const { data: cartLength } = useSWR(SWR_KEY.cart_count, () =>
    cartAPI.getCartLength().then((res) => res?.data?.cart_product_count)
  )

  const toggleCartSummaryDetail = () => {
    setShowCartSummaryDetail(!showCartSummaryDetail)
  }

  const { amountTotal } = useMemo(() => {
    let totalPromotion = 0
    let amountSubtotal = 0
    let amountTotal = 0

    if (!data?.sale_orders?.length) {
      return {
        totalPromotion,
        amountSubtotal,
        amountTotal,
      }
    }

    data.sale_orders.forEach((item) => {
      amountSubtotal += item.amount_subtotal
      totalPromotion += item.promotion_total
    })

    amountTotal = data?.amount_total

    return { totalPromotion, amountSubtotal, amountTotal }
  }, [data])

  const { createOrderDone, checkDataValid } = useCreateOrderDone()

  const handleCreateOrder = () => {
    if (checkoutPaymentMethod?.provider === 'vnpay') {
      if (data?.sale_orders?.[0] && checkDataValid()) {
        const order_id = data.sale_orders[0].order_id

        createPayment(
          {
            sale_order_id: order_id,
            acquirer_id: checkoutPaymentMethod.acquirer_id,
            returned_url: `${DOMAIN_URL}/checking-checkout-status?sale_order_id=${order_id}`,
          },
          (data: any) => {
            router.push(data.vnpay_payment_url)
          },
          () => {
            toast?.error('Tạo thanh toán không thành công')
          }
        )
      } else {
        // Not hanlde for multi company
        return
      }
    } else {
      createOrderDone({}, (data) => {
        let query = ''
        data?.sale_order_id.forEach((item) => (query += `sale_order_id=${item.sale_order_id}&`))
        router.push(`/checkout-success?${query.slice(0, query.length - 1)}`)
      })
    }
  }

  return (
    <div className={`fixed w-full z-100 bottom-0 `}>
      <div>
        {showCartSummaryDetail ? (
          <OrderSummaryMobileDetail
            onClose={() => {
              toggleCartSummaryDetail()
            }}
          />
        ) : null}
      </div>
      <div className="relative">
        <div className="h-cart_summary_mobile_height bg-white border-t border-gray-200 p-12 flex items-center justify-between">
          <div
            onClick={() => {
              if (cartLength || 0 > 0) {
                toggleCartSummaryDetail()
              }
            }}
            className="flex-1 flex items-center"
          >
            <p className="text-base text-text-color font-bold">{formatMoneyVND(amountTotal)}</p>

            {cartLength || 0 > 0 ? (
              <div className="cursor-pointer">
                <UpIcon
                  className={`${
                    showCartSummaryDetail ? '' : 'rotate-180'
                  } text-gray text-sm ml-8 duration-200 ease-in-out`}
                />
              </div>
            ) : null}
          </div>

          <Button
            title={`Đặt hàng`}
            className="bg-primary rounded-[10px] py-8 flex-1"
            textClassName="text-base font-medium text-white"
            onClick={handleCreateOrder}
          />
        </div>
      </div>
    </div>
  )
}
