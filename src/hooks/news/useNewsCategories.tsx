import { newsAPI } from '@/services'
import {
  CreateNewsCategoryParams,
  DeleteNewsCategoryParams,
  GetNewsCategoryParams,
  NewsCategory,
  UpdateNewsCategoryParams,
} from '@/types'
import { useAsync, useQueryListV2 } from '../common'

interface useNewsCategoriesProps {
  key: string
  params?: GetNewsCategoryParams
}

export const useNewsCategories = ({ key, params }: useNewsCategoriesProps) => {
  const { asyncHandler } = useAsync()

  const { data, isValidating, getMore, hasMore, isLoadingMore, mutate, filter, paginate, total, limit, offset } = useQueryListV2<
    NewsCategory,
    GetNewsCategoryParams
  >({
    key,
    fetcher: newsAPI.getCategoryList,
    initialParams: params,
    config: {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    },
  })

  const createNewsCategory = async (
    props: CreateNewsCategoryParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.createCategory(props),
      onSuccess: (res: NewsCategory) => {
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

  const updateNewsCategory = async (
    props: UpdateNewsCategoryParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.updateCategory(props),
      onSuccess: (res: NewsCategory) => {
        mutate([...data?.map((newsCate) => (newsCate?.category_id === props?.category_id ? res : newsCate))], false)

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

  const deleteNewsCategory = async (
    props: DeleteNewsCategoryParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.deleteCategory(props),
      onSuccess: () => {
        handleSuccess?.()
        mutate([...data.filter((cate) => cate.category_id !== props.category_ids?.[0])], false)
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
    paginate,
    total,
    offset,
    limit,
    createNewsCategory,
    deleteNewsCategory,
    updateNewsCategory,
  }
}
