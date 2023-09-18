import { FilterOutlineIcon, SearchIcon, TimesIcon, TrashIconOutline } from '@/assets'
import {
  Modal,
  NotFound,
  Pagination,
  ProductFilterSidebar,
  ProductItem,
  ProductsLoadingSlice,
  Tabs,
} from '@/components'
import { DEFAULT_LIMIT, PRODUCT_FILTER_TABS, SWR_KEY, WEB_TITTLE } from '@/constants'
import { generateFilterProductParamFormRouter, isArrayHasValue, isObjectHasValue } from '@/helper'
import { useModal, useProductQuery } from '@/hooks'
import { Main } from '@/templates'
import { ProductfilterSortType } from '@/types'
import { Breadcrumb } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade'

const SearchPage = () => {
  const router = useRouter()
  const [currentTab, setCurrentTab] = useState<string>('default')
  const { visible: showFilters, openModal: openFilters, closeModal: closeFilters } = useModal()

  const {
    products,
    filter,
    isValidating,
    isFilter,
    price_max,
    price_min,
    total,
    limit,
    offset,
    paginate,
  } = useProductQuery({
    key: `${SWR_KEY.filter_product}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  useEffect(() => {
    const searchParams = generateFilterProductParamFormRouter(router)

    filter({
      ...searchParams,
    })

    if (router?.query?.sort_by) {
      setCurrentTab(router?.query?.sort_by as string)
    } else {
      setCurrentTab('default')
    }
  }, [router?.query])

  const handleSelectFilterTab = (value: ProductfilterSortType) => {
    setCurrentTab(value || '')
    router.push({
      query: { ...router?.query, sort_by: value },
    })
  }

  const handlePaginate = (page: number) => {
    paginate({ page })
  }

  return (
    <Main title={WEB_TITTLE} description="">
      <div className="container min-h-[100vh]">
        <div className="px-12 py-24">
          <Breadcrumb
            items={[
              {
                title: 'Trang chủ',
                path: '/',
              },
              {
                title: 'Danh sách sản phẩm',
                path: undefined,
              },
            ]}
          />
        </div>

        <div className="grid grid-cols-4">
          <div className="col-span-1 hidden md:block px-12 pb-12">
            <ProductFilterSidebar price_max={price_max} price_min={price_min} />
          </div>

          <div className="col-span-4 md:col-span-3 px-12">
            {/* search bar */}
            <div className="p-12 rounded-lg bg-white z-50 mb-12 box-shadow-xs border border-gray-200">
              <Tabs
                list={PRODUCT_FILTER_TABS}
                tabActive={currentTab}
                onChange={(val: any) => handleSelectFilterTab(val)}
                className="overflow-scroll scrollbar-hide mb-8"
                labelClassName="px-12 py-8 text-center border-b border-white"
                tabActiveClassName="!border-primary text-primary"
              />
              <div
                onClick={openFilters}
                className="flex md:hidden mb-8 items-center gap-4 cursor-pointer hover:text-primary duration-150"
              >
                <FilterOutlineIcon className="w-20 h-20" />
                <span className="text-base">Lọc</span>
              </div>

              {/* modal in mobile */}
              <Modal
                visible={showFilters}
                animationType="slideFromLeft"
                headerClassName="hidden"
                modalClassName="h-full w-full max-w-[350px] fixed right-0"
              >
                <div>
                  <div className="flex-between bg-primary px-12 py-8">
                    <div onClick={closeFilters} className="cursor-pointer">
                      <TimesIcon className="text-white" />
                    </div>
                    <span className="flex-1 text-center text-white text-md">Lọc sản phẩm</span>
                  </div>

                  <div className="p-16 h-[100vh] overflow-scroll scrollbar-hide">
                    <ProductFilterSidebar price_max={price_max} price_min={price_min} />
                  </div>
                </div>
              </Modal>
            </div>

            {isObjectHasValue(router?.query) && (
              <div className="mb-12 flex items-center justify-between flex-wrap">
                <div>
                  {router.query.keyword && (
                    <div className="flex items-center">
                      <SearchIcon className="mr-8 min-w-14 h-14" />

                      <p className="text-md line-clamp-2">
                        Kết quả tìm kiếm cho từ khóa{' '}
                        <span className="text-primary">{`"${router.query.keyword}"`}</span>
                      </p>
                    </div>
                  )}
                </div>

                <div
                  onClick={() => {
                    router.push('/search')
                  }}
                  className="flex items-center border border-red rounded-md p-4 cursor-pointer bg-white"
                >
                  <TrashIconOutline className="text-red text-base mr-8" />
                  <p className="text-red text-base">Xóa bộ lọc</p>
                </div>
              </div>
            )}

            {/* product slide here */}
            <div className="">
              {isValidating || isFilter ? (
                <ProductsLoadingSlice className="grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-12" />
              ) : isArrayHasValue(products) ? (
                <div className="">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {products?.map((product) => (
                      <Fade bottom key={product?.product_id}>
                        <ProductItem data={product} key={product?.product_id} />
                      </Fade>
                    ))}
                  </div>

                  {!isValidating && (
                    <div className="flex-center my-32">
                      <Pagination
                        forcePage={offset / limit}
                        className={classNames('my-[24px]')}
                        pageCount={Math.ceil(total / DEFAULT_LIMIT)}
                        onPageChange={({ selected }) => handlePaginate(selected + 1)}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="">
                  {!isValidating && !isFilter && (
                    <NotFound notify="Không tìm thấy sản phẩm phù hợp!" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Main>
  )
}

export default SearchPage
