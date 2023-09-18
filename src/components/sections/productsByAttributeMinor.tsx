import { DEFAULT_LIMIT, SWR_KEY } from '@/constants'
import { useProductQuery } from '@/hooks'
import { AttributeMinor } from '@/types'
import classNames from 'classnames'
import React from 'react'
import { Button } from '../button'
import { ProductItem, ProductItemLoading } from '../product'
import { isArrayHasValue } from '@/helper'
import { NotFound } from '../notFound'
import { toast } from 'react-hot-toast'
import Fade from 'react-reveal/Fade'

interface ProductsByAttributeMinorProps {
  className?: string
  attribute: AttributeMinor
}

export const ProductsByAttributeMinor = ({
  attribute,
  className,
}: ProductsByAttributeMinorProps) => {
  const { products, isValidating: isProductLoading } = useProductQuery({
    key: `${SWR_KEY.attribute_minor_list}_${attribute?.attribute_id}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  return (
    <div className={classNames('', className)}>
      <div className="flex items-center flex-wrap justify-between mb-12">
        <p className="uppercase text-xl md:text-2xl font-bold">{attribute?.attribute_name}</p>

        <Button
          title="Xem thêm"
          className="rounded-lg bg-primary-gradient p-8 w-fit"
          textClassName="text-white text-sm md:text-base"
          onClick={() => {
            toast.success('Comming soon!')
          }}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
        {isProductLoading ? (
          Array?.from({ length: DEFAULT_LIMIT }).map((_, index) => (
            <ProductItemLoading key={index} />
          ))
        ) : isArrayHasValue(products) ? (
          products?.map((product) => (
            <Fade bottom key={product?.product_id}>
              <ProductItem key={product?.product_id} data={product} />
            </Fade>
          ))
        ) : (
          <div>
            <NotFound notify="Không có sản phẩm" />
          </div>
        )}
      </div>
    </div>
  )
}
