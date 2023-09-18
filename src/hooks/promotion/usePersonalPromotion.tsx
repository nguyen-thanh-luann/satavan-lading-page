import { GetPromotionListReq, PromotionItemRes, SavePromotionParams } from '@/types'

import { promotionAPI } from '@/services'
import { useQueryListV2 } from '../common/useQueryV2'
import { useAsync } from '../common'

interface usePersonalPromotionListProps {
  key: string
  params: GetPromotionListReq
}

interface usePersonalPromotionListRes {
  data: PromotionItemRes[] | undefined
  isValidating: boolean
  isSavingPromotion: boolean
  savePromotion: (params: SavePromotionParams, onSuccess?: () => void, onError?: () => void) => void
  hasMore: boolean
  isLoadingMore: boolean
  getMore: () => void
}

export const usePersonalPromotionList = ({
  key,
  params,
}: usePersonalPromotionListProps): usePersonalPromotionListRes => {
  const { asyncHandler, isLoading: isSavingPromotion } = useAsync()

  const { data, isValidating, getMore, hasMore, isLoadingMore } = useQueryListV2<
    PromotionItemRes,
    GetPromotionListReq
  >({
    key,
    fetcher: promotionAPI.getMyListPromotion,
    initialParams: params,
    config: {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    },
  })

  const savePromotion = async (
    params: SavePromotionParams,
    onSuccess?: () => void,
    onError?: () => void
  ) => {
    asyncHandler({
      fetcher: promotionAPI.savePromotion(params),
      onSuccess: () => {
        onSuccess?.()
      },
      onError: () => {
        onError?.()
      },
      config: {
        setLoadingState: true,
        showBackdrop: false,
        showSuccessMsg: false,
      },
    })
  }

  return {
    data,
    isValidating,
    hasMore,
    isLoadingMore,
    getMore,
    savePromotion,
    isSavingPromotion,
  }
}
