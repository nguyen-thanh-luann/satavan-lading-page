import { DEFAULT_LIMIT, STATIC_PATH, SWR_KEY } from '@/constants'
import { useNews, useNewsCategories } from '@/hooks'
import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { Tabs } from '../tabs'

import { RightIcon } from '@/assets'
import { isArrayHasValue } from '@/helper'
import router from 'next/router'
import { Autoplay, Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { NewsItem, NewsItemLoading } from '../news'
import { NotFound } from '../notFound'
import Fade from 'react-reveal/Fade'

interface NewsSectionProps {
  className?: string
}

export const NewsSection = ({ className }: NewsSectionProps) => {
  const [currentTab, setCurrentTab] = useState<string>('')

  const { data: newsCategoryList, isValidating: isLoadingNewsCategory } = useNewsCategories({
    key: `${SWR_KEY.news_category_list}`,
    params: {
      limit: 3,
    },
  })

  const {
    data: newsList,
    isValidating: isLoadingNews,
    filter: filterNews,
  } = useNews({
    key: `${SWR_KEY.news}`,
    params: {
      limit: DEFAULT_LIMIT,
    },
  })

  const TABS = newsCategoryList?.map((item) => {
    return {
      label: item?.category_name,
      value: item?.category_id?.toString(),
    }
  })

  useEffect(() => {
    if (isArrayHasValue(newsCategoryList)) {
      setCurrentTab(TABS?.[0]?.value || '')
      filterNews({
        category_id: Number(newsCategoryList?.[0]?.category_id),
      })
    }
  }, [newsCategoryList, isLoadingNewsCategory])

  const hanldeTabChange = (value: string) => {
    filterNews({
      category_id: Number(value),
    })

    if (currentTab === value) {
    } else {
      setCurrentTab(value)
    }
  }

  return (
    <div className={classNames('', className)}>
      <div className="w-full mb-16">
        <p className="text-xl mb-8 text-center md:text-start">Cùng tìm hiểu thêm</p>
        <p className="text-3xl md:text-4xl font-bold text-center md:text-start">Tin tức Satavan</p>
      </div>

      <div className="flex flex-wrap items-center justify-between mb-32">
        <div className="w-full md:w-fit"> 
          {TABS && (
            <Tabs
              list={TABS}
              tabActive={currentTab}
              onChange={(val: string) => hanldeTabChange(val)}
              className="flex"
              labelClassName="flex-1 whitespace-normal hover:text-primary-gradient md:whitespace-nowrap text-center text-base md:text-lg h-[100px] md:h-[50px] px-16 flex-center capitalize break-words"
              tabActiveClassName="!text-primary-gradient border-b border-primary"
              showFirstNewTag
            />
          )}
        </div>

        <div className="hidden md:block">
          <p
            onClick={() => {
              router.push(STATIC_PATH.news)
            }}
            className="flex items-center gap-2 text-base cursor-pointer group hover:text-primary-gradient"
          >
            {`Xem thêm`}
            <RightIcon className="text-xs group-hover:text-primary" />
          </p>
        </div>
      </div>

      <div className="news-section">
        <Swiper
          slidesPerView={3}
          grabCursor={true}
          spaceBetween={16}
          slidesPerGroup={1}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            900: {
              slidesPerView: 3,
            },
          }}
        >
          <div>
            {isLoadingNews ? (
              Array.from({ length: DEFAULT_LIMIT })?.map((_, index) => (
                <SwiperSlide key={index}>
                  <NewsItemLoading />
                </SwiperSlide>
              ))
            ) : isArrayHasValue(newsList) ? (
              newsList?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Fade right>
                    <NewsItem data={item} className="" />
                  </Fade>
                </SwiperSlide>
              ))
            ) : (
              <div>
                <NotFound notify="Không tìm thấy bài viết phù hợp" />
              </div>
            )}
          </div>
        </Swiper>
      </div>

      <div className="block md:hidden flex-center mt-12">
        <p
          onClick={() => {
            router.push(STATIC_PATH.news)
          }}
          className="flex items-center gap-2 text-base cursor-pointer group hover:text-primary-gradient"
        >
          {`Xem thêm`}
          <RightIcon className="text-xs group-hover:text-primary" />
        </p>
      </div>
    </div>
  )
}
