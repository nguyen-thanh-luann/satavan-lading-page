import { NewsItem, NewsItemLoading, NotFound } from '@/components'
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
import { Main } from '@/templates'
import { Breadcrumb } from 'antd'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Fade from 'react-reveal/Fade'

import { Pagination } from 'antd'

const NewsPage = () => {
  const {
    data: newsList,
    isValidating: isLoadingNews,
    total,
    paginate,
  } = useNews({
    key: `${SWR_KEY.news}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="container py-32 px-12">
        <Breadcrumb
          className="mb-12"
          separator="/"
          items={[
            {
              title: 'Trang chủ',
              href: '/',
            },
            {
              title: 'Tin tức',
              href: '',
            },
          ]}
        />

        <p className="text-center text-3xl md:text-4xl font-bold mb-24">
          Cập nhật tin tức và sự kiện cùng Satavan
        </p>

        <div>
          {isLoadingNews ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
                <NewsItemLoading key={index} />
              ))}
            </div>
          ) : isArrayHasValue(newsList) ? (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
                {newsList?.map((item) => (
                  <Fade bottom key={item?.new_id}>
                    <NewsItem data={item} key={item?.new_id} />
                  </Fade>
                ))}
              </div>

              <div className="flex-center">
                <Pagination
                  defaultCurrent={1}
                  total={total}
                  pageSize={DEFAULT_LIMIT}
                  onChange={(page) => {
                    paginate({
                      page,
                    })
                  }}
                />
              </div>
            </div>
          ) : (
            <div>
              <NotFound notify="Không tìm thấy bài viết" />
            </div>
          )}
        </div>
      </div>
    </Main>
  )
}

export default NewsPage

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
