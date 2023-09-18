import { DOMAIN_URL, STATIC_PATH, SWR_KEY, WEB_DESCRIPTION, WEB_TITTLE, thumbnailImageUrl } from '@/constants'
import { Main } from '@/templates'
import { Breadcrumb } from 'antd'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import {
  NewsDetail,
  NewsDetailLoading,
  NewsItemHorizontal,
  NewsItemHorizontalLoading,
  NotFound,
  RelatedNews,
} from '@/components'
import {
  fromProductSlugToProductId,
  isArrayHasValue,
  isObjectHasValue
} from '@/helper'
import { useNews, useNewsDetail } from '@/hooks'
import router from 'next/router'
import Fade from 'react-reveal/Fade'

const NewsDetailPage = () => {
  const newsId = fromProductSlugToProductId((router?.query?.id as string) || '')

  const { data: lastestNews, isValidating: isLoadingLastestNews } = useNews({
    key: `${SWR_KEY.news}`,
    params: {
      limit: 4,
      sort_by: 'release_date_decrease',
    },
  })

  const { data: newsDetail, isValidating: isLoadingNewsDetail } = useNewsDetail({
    key: `${SWR_KEY.news_detail}_${newsId}`,
    params: {
      news_id: Number(newsId),
    },
  })

  return (
    <Main title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="container py-32 px-12">
        {isLoadingNewsDetail ? (
          <NewsDetailLoading />
        ) : isObjectHasValue(newsDetail) ? (
          <div className="flex gap-24">
            <div>
              {newsDetail && (
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
                      href: STATIC_PATH.news,
                    },
                    // {
                    //   title: newsDetail?.category_id?.category_name || undefined,
                    //   href: `/news/?category=${generateProductSlug(
                    //     newsDetail?.category_id?.category_name,
                    //     newsDetail?.category_id?.category_name
                    //   )}`,
                    // },
                  ]}
                />
              )}

              <NewsDetail data={newsDetail} className="mb-24" />

              <RelatedNews category_id={newsDetail?.category_id?.category_id} />
            </div>

            <div className="hidden md:block min-w-[300px]">
              <div className="sticky top-header_height">
                <p className="text-xl uppercase font-bold border-b-2 border-primary w-fit text-primary-gradient mb-12">
                  Bài viết mới nhất
                </p>

                <div className="">
                  {isLoadingLastestNews
                    ? Array.from({ length: 2 })?.map((_, index) => (
                        <NewsItemHorizontalLoading key={index} className="mb-12 last:mb-0" />
                      ))
                    : isArrayHasValue(lastestNews)
                    ? lastestNews?.map((news) => (
                        <Fade right key={news.new_id}>
                          <NewsItemHorizontal
                            className="mb-12 last:mb-0 border-b border-gray-200 last:border-none py-8"
                            imageClassName="min-w-[70px] w-[70px] h-[70px] object-cover rounded-lg"
                            key={news.new_id}
                            data={news}
                          />
                        </Fade>
                      ))
                    : null}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <NotFound notify="Không tìm thấy thông tin bài viết" />
        )}
      </div>
    </Main>
  )
}

export default NewsDetailPage

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
