import { DOMAIN_URL, SWR_KEY } from '@/constants'
import { formatMoneyVND } from '@/helper'
import { useCreateOrderDone, usePayment } from '@/hooks'
import { GetOrderDraftRes, OrderLineDelivery, Payment } from '@/types'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { toast } from 'react-hot-toast'
import useSWR from 'swr'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button'
import { Spinner } from '../spinner'

interface CartSummaryProps {
  className?: string
}

export const OrderSummary = ({ className }: CartSummaryProps) => {
  const router = useRouter()
  const { data, isValidating } = useSWR<GetOrderDraftRes>(SWR_KEY.orders)
  const { createOrderDone, checkDataValid } = useCreateOrderDone()
  const { createPayment } = usePayment()
  const checkoutPaymentMethod: Payment = useSWR(SWR_KEY.checkout_paymet_method)?.data
  const checkoutCarrierMethod: OrderLineDelivery = useSWR(SWR_KEY.checkout_carrier_method)?.data

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

  const { totalPromotion, amountSubtotal, amountTotal } = useMemo(() => {
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

  if (!data?.sale_orders?.length) return null

  return (
    <div
      className={twMerge(
        classNames(
          'sticky top-header_group_height bg-white rounded-[10px] box-shadow-xs',
          className
        )
      )}
    >
      <div className="flex-between p-16 border-b border-gray-200">
        <p className="text-text-color text-lg font-bold leading-9">{`Đơn hàng tạm tính`}</p>
        <p className="text-text-color text-lg font-bold leading-9">
          {formatMoneyVND(amountSubtotal)}
        </p>
      </div>

      {data?.sale_orders?.map((saleOrder) =>
        saleOrder?.category_minor_promotion?.map((promotion) => (
          <div key={promotion?.category_id} className="flex-between p-16 border-b border-gray-200">
            <p className="text-text-color text-base font-semibold leading-9">{`${promotion?.category_name} (-${promotion?.percent}%)`}</p>
            <p className="text-text-color text-base font-semibold leading-9">{`-${formatMoneyVND(
              promotion?.promotion_total
            )}`}</p>
          </div>
        ))
      )}

      <div className="flex-between p-16 border-b border-gray-200">
        <p className="text-text-color text-base font-semibold leading-9">{`Khuyến mãi tổng`}</p>
        {isValidating ? (
          <Spinner />
        ) : (
          <p className="text-text-color text-base font-semibold leading-9">
            {formatMoneyVND(totalPromotion)}
          </p>
        )}
      </div>

      {checkoutCarrierMethod && (
        <div className="flex-between p-16 border-b border-gray-200">
          <p className="text-text-color text-base font-semibold leading-9">{`Phí vận chuyển`}</p>
          <p className="text-text-color text-base font-semibold leading-9">
            {formatMoneyVND(checkoutCarrierMethod?.shipping_fee)}
          </p>
        </div>
      )}

      <div className="flex-between p-16">
        <p className="text-text-color text-lg font-bold leading-9">{`Thanh toán`}</p>
        <p className="text-primary text-lg font-bold leading-9">{formatMoneyVND(amountTotal)}</p>
      </div>

      <div className="p-16 pt-0">
        <Button
          title="Đặt hàng"
          className="bg-primary rounded-lg py-8 w-full"
          textClassName="text-base font-medium text-white"
          onClick={handleCreateOrder}
        />
      </div>
    </div>
  )
}
