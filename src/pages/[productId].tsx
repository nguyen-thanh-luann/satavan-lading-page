import { useProductDetail } from '@/hooks'
import { productAPI } from '@/services'
import { MainShop } from '@/templates'
import { BreadcrumbItem, Product } from '@/types'
import type { GetStaticPaths, GetStaticPropsContext } from 'next'
import { useRouter } from 'next/router'

import { Breadcrumb, NotFound, ProductDescription, ProductDetail, ProductDetailLoading } from '@/components'
import { SWR_KEY, WEB_TITTLE } from '@/constants'
import { fromProductSlugToProductId, isArrayHasValue, isObjectHasValue } from '@/helper'
import { useEffect, useState } from 'react'

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const res: any = await productAPI.filterProduct({ product_type: 'product_product', limit: 12 })

    return {
      paths: res?.data?.result.map((item: Product) => ({
        params: { productId: item.product_id + '' },
      })),
      fallback: true,
    }
  } catch (err) {
    console.log(err)
    return {
      paths: [''],
      fallback: true,
    }
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      productId: context?.params!.productId,
    },
  }
}

const ProductDetailPage = () => {
  const router = useRouter()
  const [breadcrumbList, setBreadcrumbList] = useState<BreadcrumbItem[]>([])
  const productId = fromProductSlugToProductId((router.query?.productId as string) || '')

  const { data, isValidating } = useProductDetail({
    key: `${SWR_KEY.get_product_detail}_${productId}`,
    params: {
      product_id: Number(productId),
    },
  })

  const breadcrumb = isArrayHasValue(data?.descendants_structor)
    ? data?.descendants_structor?.map((item) => {
        return {
          name: item?.category_name || '',
          path: `/search/?category_${item?.category_id}=${item?.category_id}`,
        }
      })
    : []

  // Get category breadcrumb & set viewed product
  useEffect(() => {
    setBreadcrumbList([
      ...breadcrumb,
      { name: data?.product_data?.product_name || '', path: '' },
    ])
  }, [router.query.productId, data])

  return (
    <MainShop title={WEB_TITTLE} description="Product Detail">
      <div className="container my-12 min-h-[100vh]">
        {isValidating ? (
          <ProductDetailLoading />
        ) : isObjectHasValue(data?.product_data) ? (
          <div className="mb-38">
            <Breadcrumb breadcrumbList={breadcrumbList} />

            <ProductDetail data={data?.product_data} className="mb-24" />

            <ProductDescription
              product_id={data?.product_data?.product_id || 0}
              className="mb-24"
            />
          </div>
        ) : (
          <div className="min-h-[60vh] flex items-center justify-center">
            <NotFound notify="Không tìm thấy sản phẩm!" />
          </div>
        )}
      </div>
    </MainShop>
  )
}

export default ProductDetailPage
