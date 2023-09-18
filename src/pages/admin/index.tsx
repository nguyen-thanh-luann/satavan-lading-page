import { PlusIcon } from '@/assets'
import { Button, NewsAdminItem, NotFound, SearchForm, TagAdminItemLoading } from '@/components'
import {
  DEFAULT_LIMIT,
  DOMAIN_URL,
  SWR_KEY,
  WEB_DESCRIPTION,
  WEB_TITTLE,
  thumbnailImageUrl,
} from '@/constants'
import { isArrayHasValue } from '@/helper'
import { useNews } from '@/hooks'
import { AdminContainer, MainNoFooterAndHeader } from '@/templates'
import { Pagination } from 'antd'
import Fade from 'react-reveal/Fade'

const AdminPage = () => {
  const {
    data: newsList,
    isValidating: isLoadingNews,
    total,
    paginate,
    filter,
  } = useNews({
    key: `${SWR_KEY.news}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  const hanldeSearchNews = (props: string) => {
    filter({
      title: props,
    })
  }

  return (
    <MainNoFooterAndHeader title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <AdminContainer>
        <div className="p-24">
          <div className="border border-gray-200 rounded-md shadow-md">
            {/* header */}
            <div className="p-12 border-b border-gray-200">
              <p className="mb-12 text-2xl">Danh sách Bài viết</p>

              <div className="flex items-center justify-between mb-12">
                <div className="flex-1">
                  <SearchForm
                    placeholder="Tìm kiếm bài viết"
                    className="p-0"
                    buttonClassName="hidden"
                    onChangeWithDebounceValue={(value) => {
                      hanldeSearchNews(value)
                    }}
                  />
                </div>

                <div className="flex-1 ">
                  <Button
                    icon={<PlusIcon className="text-white" />}
                    title="Thêm bài viết"
                    className="bg-primary-gradient px-12 py-8 ml-auto"
                    textClassName="text-white"
                  />
                </div>
              </div>
            </div>

            <div className="max-h-[60vh] overflow-scroll scrollbar-hide">
              {isLoadingNews ? (
                Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
                  <TagAdminItemLoading key={index} />
                ))
              ) : isArrayHasValue(newsList) ? (
                <>
                  {newsList?.map((news) => (
                    <Fade bottom key={news?.new_id}>
                      <div className="border-b border-gray-200 last:border-none">
                        <NewsAdminItem data={news} />
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
                  <NotFound notify="Không tìm thấy bài viết" className="py-32" />
                </div>
              )}
            </div>
          </div>
        </div>
      </AdminContainer>
    </MainNoFooterAndHeader>
  )
}

export default AdminPage

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
