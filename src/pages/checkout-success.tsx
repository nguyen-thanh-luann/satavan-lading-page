import { orderDoneIcon } from '@/assets'
import { Button, Image, OrderConfirmTicket } from '@/components'
import { STATIC_PATH, WEB_DESCRIPTION, WEB_TITTLE } from '@/constants'
import { MainShop } from '@/templates'
import { useRouter } from 'next/router'

const CheckoutSuccessPage = () => {
  const router = useRouter()
  const { sale_order_id } = router.query

  return (
    <MainShop title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="container min-h-[100vh] w-[90vw] lg:w-[50vw] mx-auto py-24">
        <div className="bg-white p-16 box-shadow-xs rounded-lg">
          <div className={`min-h-[200px] flex items-center justify-center flex-col mb-12`}>
            
            <Image
              alt=""
              src={orderDoneIcon}
              imageClassName="w-[161px] h-[144px] object-cover"
              className="mb-18"
            />

            <p className="text-text-color font-bold text-lg mb-18">Đặt hàng thành công!</p>

            <div className="flex justify-center gap-8 flex-wrap">
              <Button
                onClick={() => {
                  router.push(STATIC_PATH.apps)
                }}
                title="Tiếp tục mua sắm"
                className="bg-primary p-8"
                textClassName="text-white font-bold text-base"
              />
            </div>
          </div>

          {typeof sale_order_id === 'string' ? (
            <div>
              <OrderConfirmTicket sale_order_id={Number(sale_order_id)} />
            </div>
          ) : (
            <div>
              {(sale_order_id as string[])?.map((item, index) => (
                <div key={index} className="mb-24">
                  <OrderConfirmTicket sale_order_id={Number(item)} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </MainShop>
  )
}

export default CheckoutSuccessPage
