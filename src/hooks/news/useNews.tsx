import { newsAPI } from '@/services'
import {
  CreateNewsParams,
  DeleteNewsParams,
  GetNewsListParams,
  News,
  UpdateNewsParams,
} from '@/types'
import { useAsync, useQueryListV2 } from '../common'

interface useNewsProps {
  key: string
  params?: GetNewsListParams
}

export const useNews = ({ key, params }: useNewsProps) => {
  const { asyncHandler } = useAsync()

  const {
    data,
    isValidating,
    getMore,
    hasMore,
    isLoadingMore,
    mutate,
    filter,
    total,
    limit,
    offset,
    paginate,
  } = useQueryListV2<News, GetNewsListParams>({
    key,
    fetcher: newsAPI.getNewsList,
    initialParams: params,
    config: {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    },
  })

  const createNews = async (
    props: CreateNewsParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.createNews(props),
      onSuccess: (res: any) => {
        handleSuccess?.()
        mutate([res, ...data], false)
      },
      onError: () => {
        handleError?.()
      },
      config: {
        showSuccessMsg: false,
        setLoadingState: true,
      },
    })
  }

  const updateNews = async (
    props: UpdateNewsParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.updateNews(props),
      onSuccess: (res: News) => {
        mutate([...data?.map((news) => (news?.new_id === props?.news_id ? res : news))], false)

        handleSuccess?.()
      },
      onError: () => {
        handleError?.()
      },
      config: {
        showSuccessMsg: false,
        setLoadingState: true,
      },
    })
  }

  const deleteNews = async (
    props: DeleteNewsParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.deleteNews(props),
      onSuccess: () => {
        handleSuccess?.()
        mutate([...data.filter((news) => !props.news_ids.includes(news?.new_id))], false)
      },
      onError: () => {
        handleError?.()
      },
      config: {
        showSuccessMsg: false,
        setLoadingState: true,
      },
    })
  }


  const achivedNews = async (
    props: DeleteNewsParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.deleteNews(props),
      onSuccess: () => {
        handleSuccess?.()
        mutate([...data.filter((news) => !props.news_ids.includes(news?.new_id))], false)
      },
      onError: () => {
        handleError?.()
      },
      config: {
        showSuccessMsg: false,
        setLoadingState: true,
      },
    })
  }

    const activeNews = async (
      props: DeleteNewsParams,
      handleSuccess?: () => void,
      handleError?: () => void
    ) => {
      asyncHandler({
        fetcher: newsAPI.deleteNews(props),
        onSuccess: () => {
          handleSuccess?.()
          mutate([...data.filter((news) => !props.news_ids.includes(news?.new_id))], false)
        },
        onError: () => {
          handleError?.()
        },
        config: {
          showSuccessMsg: false,
          setLoadingState: true,
        },
      })
    }
  

  return {
    data,
    isValidating,
    isLoadingMore,
    getMore,
    hasMore,
    mutate,
    filter,
    createNews,
    deleteNews,
    updateNews,
    total,
    limit,
    offset,
    paginate,
    achivedNews,
    activeNews
  }
}
