import { PlusIcon } from '@/assets'
import {
  Button,
  Modal,
  ModalConfirm,
  NewsTagForm,
  NotFound,
  SearchForm,
  TagAdminItem,
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
import { useModal, useTags } from '@/hooks'
import { AdminContainer, MainNoFooterAndHeader } from '@/templates'
import { CreateTagParams, Tag } from '@/types'
import { Pagination } from 'antd'
import { useState } from 'react'
import { toast } from 'react-hot-toast'
import Fade from 'react-reveal/Fade'

const Tag = () => {
  const [currentTag, setCurrentTag] = useState<Tag>()
  const [updateTagForm, setUpdateTagForm] = useState<Tag>()

  const { visible: showModalTag, closeModal: closeModalTag, openModal: openModalTag } = useModal()

  const {
    data: tagList,
    isValidating: isLoadingTag,
    total,
    paginate,
    filter,
    deleteTag,
    createTag,
    updateTag,
  } = useTags({
    key: `${SWR_KEY.tag_list}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  const hanldeSearchTag = (props: string) => {
    filter({
      tag_name: props,
    })
  }

  const hanldeDeleteTag = (props: Tag) => {
    deleteTag(
      {
        tag_ids: [props.tag_id],
      },
      () => {
        toast.success('Xóa tag thành công')
      },
      () => {
        toast.error('Có lỗi xảy ra')
      }
    )

    setCurrentTag(undefined)
  }

  const hanldeCreateTag = (props: CreateTagParams) => {
    createTag(
      {
        tag_name: props.tag_name,
      },
      () => {
        toast.success('Thêm tag thành công')
      },
      () => {
        toast.error('Có lỗi xảy ra')
      }
    )
    closeModalTag()
  }

  const hanldeUpdateTag = (props: Tag) => {
    updateTag(
      {
        tag_id: props.tag_id,
        tag_name: props.tag_name,
      },
      () => {
        toast.success('Cập nhật tag thành công!')
      },
      () => {
        toast.error('Có lỗi xảy ra')
      }
    )

    setUpdateTagForm(undefined)
  }

  return (
    <MainNoFooterAndHeader title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <AdminContainer>
        <div className="p-24">
          <div className="border border-gray-200 rounded-md shadow-md">
            {/* header  */}
            <div className="p-12 border-b border-gray-200">
              <p className="mb-12 text-2xl">Danh sách Tag</p>

              <div className="flex items-center justify-between mb-12">
                <div className="flex-1">
                  <SearchForm
                    placeholder="Tìm kiếm tag"
                    className="p-0"
                    buttonClassName="hidden"
                    onChangeWithDebounceValue={(value) => {
                      hanldeSearchTag(value)
                    }}
                  />
                </div>

                <div className="flex-1 ">
                  <Button
                    icon={<PlusIcon className="text-white" />}
                    title="Thêm tag"
                    className="bg-primary-gradient px-12 py-8 ml-auto"
                    textClassName="text-white"
                    onClick={openModalTag}
                  />
                </div>
              </div>
            </div>

            {/* content */}
            <div className="max-h-[60vh] overflow-scroll scrollbar-hide">
              {isLoadingTag ? (
                Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
                  <TagAdminItemLoading key={index} />
                ))
              ) : isArrayHasValue(tagList) ? (
                <>
                  {tagList?.map((tag) => (
                    <Fade bottom key={tag?.tag_id}>
                      <div className="border-b border-gray-200 last:border-none">
                        <TagAdminItem
                          data={tag}
                          className=""
                          onDelete={(value) => setCurrentTag(value)}
                          onEdit={(value) => setUpdateTagForm(value)}
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
                </>
              ) : (
                <div>
                  <NotFound notify="Không tìm thấy tag" className="py-32" />
                </div>
              )}
            </div>
          </div>

          <ModalConfirm
            title="Bạn có chắc muốn xóa tag"
            visible={currentTag !== undefined}
            onDeny={() => {
              setCurrentTag(undefined)
            }}
            onConfirm={() => {
              currentTag && hanldeDeleteTag(currentTag)
            }}
          />

          {/* create tag modal */}
          <Modal
            visible={showModalTag}
            animationType={'fade'}
            headerClassName="hidden"
            modalClassName="w-[550px] max-w-[90%] h-fit rounded-lg"
          >
            <div>
              <NewsTagForm onClose={closeModalTag} onSubmit={(data) => hanldeCreateTag(data)} />
            </div>
          </Modal>

          {/* update tag modal */}
          <Modal
            visible={updateTagForm !== undefined}
            animationType={'fade'}
            headerClassName="hidden"
            modalClassName="w-[550px] max-w-[90%] h-fit rounded-lg"
          >
            <div>
              <NewsTagForm
                type="update"
                onClose={() => {
                  setUpdateTagForm(undefined)
                }}
                onSubmit={(data) => {
                  hanldeUpdateTag({
                    tag_id: updateTagForm?.tag_id || 0,
                    tag_name: data?.tag_name,
                  })
                }}
                defaultTag={updateTagForm}
              />
            </div>
          </Modal>
        </div>
      </AdminContainer>
    </MainNoFooterAndHeader>
  )
}

export default Tag

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
