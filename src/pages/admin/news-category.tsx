import {
  Button,
  Modal,
  ModalConfirm,
  NewsCategoryAdminItem,
  NewsCategoryForm,
  NotFound,
  SearchForm,
  TagAdminItemLoading,
} from '@/components'
import {
  DEFAULT_LIMIT,
  DOMAIN_URL,
  SWR_KEY,
  WEB_DESCRIPTION,
  WEB_TITTLE,
  thumbnailImageUrl,
} from '@/constants'
import { isArrayHasValue } from '@/helper'
import { useModal, useNewsCategories } from '@/hooks'
import { AdminContainer, MainNoFooterAndHeader } from '@/templates'
import { CreateNewsCategoryParams, NewsCategory } from '@/types'
import { Pagination } from 'antd'
import classNames from 'classnames'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Fade from 'react-reveal/Fade'

const NewsCategory = () => {
  const {
    visible: showModalCategory,
    closeModal: closeModalCategory,
    openModal: openModalCategory,
  } = useModal()

  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>()
  const [newsCategoryForm, setNewsCategoryForm] = useState<NewsCategory>()

  const {
    data,
    isValidating,
    createNewsCategory,
    deleteNewsCategory,
    updateNewsCategory,
    total,
    paginate,
    filter,
  } = useNewsCategories({
    key: `${SWR_KEY.news_category_list}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  const handleCreateNewsCategory = async (data: CreateNewsCategoryParams) => {
    if (!data) return

    createNewsCategory(
      data,
      () => {
        toast.success('Thêm danh mục thành công!')
        closeModalCategory()
      },
      () => {
        toast.error('Có lỗi xảy ra!')
      }
    )
  }

  const handleDeleteNewsCategory = async (data: NewsCategory) => {
    if (!data) return

    deleteNewsCategory(
      { category_ids: [data?.category_id] },
      () => {
        toast.success('Xóa danh mục thành công!')
        setSelectedCategory(undefined)
      },
      () => {
        toast.error('Có lỗi xảy ra!')
      }
    )
  }

  const hanldeUpdateNewsCategory = (props: NewsCategory) => {
    updateNewsCategory(
      {
        category_id: props.category_id,
        category_name: props.category_name,
      },
      () => {
        toast.success('Cập nhật danh mục thành công!')
      },
      () => {
        toast.error('Có lỗi xảy ra')
      }
    )

    setNewsCategoryForm(undefined)
  }

  const hanldeSearchNewsCategory = (props: string) => {
    filter({
      category_name: props
    })
  }

  return (
    <MainNoFooterAndHeader title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <AdminContainer>
        <div className={classNames('p-24')}>
          <div className="border border-gray-200 rounded-md shadow-md">
            {/* header */}
            <div className="p-12 border-b border-gray-200">
              <p className="mb-12 text-2xl">Danh sách danh mục</p>

              <div className="flex items-center justify-between mb-12">
                <div className="flex-1">
                  <SearchForm
                    placeholder="Tìm kiếm danh mục"
                    className="p-0"
                    buttonClassName="hidden"
                    onChangeWithDebounceValue={(value) => {
                      hanldeSearchNewsCategory(value)
                    }}
                  />
                </div>

                <div className="flex-1 ">
                  <Button
                    title="Thêm danh mục"
                    className="bg-primary-gradient p-8 ml-auto"
                    textClassName="text-white"
                    onClick={openModalCategory}
                  />
                </div>
              </div>
            </div>

            {/* content */}
            <div className="max-h-[60vh] overflow-scroll scrollbar-hide">
              {isValidating ? (
                Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
                  <TagAdminItemLoading key={index} />
                ))
              ) : isArrayHasValue(data) ? (
                <div>
                  {data?.map((item) => (
                    <Fade bottom key={item.category_id}>
                      <div className="border-b border-gray-200 last:border-none">
                        <NewsCategoryAdminItem
                          className=""
                          key={item?.category_id}
                          data={item}
                          onDelete={() => setSelectedCategory(item)}
                          onEdit={() => setNewsCategoryForm(item)}
                        />
                      </div>
                    </Fade>
                  ))}

                  <div className="flex-center p-12">
                    <Pagination
                      defaultCurrent={1}
                      total={total}
                      onChange={(page) => {
                        paginate({
                          page: page,
                        })
                      }}
                      pageSize={DEFAULT_LIMIT}
                    />
                  </div>
                </div>
              ) : (
                <NotFound notify="Không tìm thấy danh mục" className="py-32" />
              )}
            </div>
          </div>

          {/* form create newscategory */}
          <Modal
            visible={showModalCategory}
            animationType={'fade'}
            headerClassName="hidden"
            modalClassName="w-[550px] max-w-[90%] h-fit rounded-lg"
          >
            <div>
              <NewsCategoryForm
                onSubmit={(data) => handleCreateNewsCategory(data)}
                onClose={closeModalCategory}
              />
            </div>
          </Modal>

          {/* form update newscategory */}
          <Modal
            visible={newsCategoryForm !== undefined}
            animationType={'fade'}
            headerClassName="hidden"
            modalClassName="w-[550px] max-w-[90%] h-fit rounded-lg"
          >
            <div>
              <NewsCategoryForm
                type="update"
                onSubmit={(data) =>
                  hanldeUpdateNewsCategory({
                    category_id: newsCategoryForm?.category_id || 0,
                    category_name: data?.category_name,
                  })
                }
                onClose={() => {
                  setNewsCategoryForm(undefined)
                }}
                defaultNewsCategory={newsCategoryForm}
              />
            </div>
          </Modal>

          {/* confirm before delete */}
          <ModalConfirm
            visible={selectedCategory !== undefined}
            title="Bạn có chắc muốn xóa danh mục?"
            onConfirm={() => {
              selectedCategory && handleDeleteNewsCategory?.(selectedCategory)
            }}
            onDeny={() => {
              setSelectedCategory(undefined)
            }}
          />
        </div>
      </AdminContainer>
    </MainNoFooterAndHeader>
  )
}

export default NewsCategory

export const getStaticProps = async () => {
  return {
    props: {
      openGraphData: [
        {
          property: 'og:image',
          content: thumbnailImageUrl,
          key: 'ogimage',
        },
        {
          property: 'og:image:alt',
          content: thumbnailImageUrl,
          key: 'ogimagealt',
        },
        {
          property: 'og:image:width',
          content: '400',
          key: 'ogimagewidth',
        },
        {
          property: 'og:image:height',
          content: '300',
          key: 'ogimageheight',
        },
        {
          property: 'og:url',
          content: DOMAIN_URL,
          key: 'ogurl',
        },
        {
          property: 'og:image:secure_url',
          content: thumbnailImageUrl,
          key: 'ogimagesecureurl',
        },
        {
          property: 'og:title',
          content: WEB_TITTLE,
          key: 'ogtitle',
        },
        {
          property: 'og:description',
          content: WEB_DESCRIPTION,
          key: 'ogdesc',
        },
        {
          property: 'og:type',
          content: 'website',
          key: 'website',
        },
      ],
    },
  }
}
