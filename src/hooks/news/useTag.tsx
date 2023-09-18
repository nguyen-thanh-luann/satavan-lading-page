import { newsAPI } from '@/services'
import { CreateTagParams, DeleteTagParams, GetTagListParams, Tag, UpdateTagParams } from '@/types'
import { useAsync, useQueryListV2 } from '../common'

interface useNewsProps {
  key: string
  params?: GetTagListParams
}

export const useTags = ({ key, params }: useNewsProps) => {
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
  } = useQueryListV2<Tag, GetTagListParams>({
    key,
    fetcher: newsAPI.getTagList,
    initialParams: params,
    config: {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    },
  })

  const createTag = async (
    props: CreateTagParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.createTag(props),
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

  const updateTag = async (
    props: UpdateTagParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.updateTag(props),
      onSuccess: (res: Tag) => {
        mutate([...data?.map((tag) => (tag?.tag_id === props?.tag_id ? res : tag))], false)

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

  const deleteTag = async (
    props: DeleteTagParams,
    handleSuccess?: () => void,
    handleError?: () => void
  ) => {
    asyncHandler({
      fetcher: newsAPI.deleteTag(props),
      onSuccess: () => {
        handleSuccess?.()
        mutate([...data.filter((tag) => !props.tag_ids.includes(tag?.tag_id))], false)
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
    createTag,
    deleteTag,
    updateTag,
    total,
    limit,
    offset,
    paginate,
  }
}
