import { GetPromotionListReq, PromotionItemRes } from '@/types'

import { promotionAPI } from '@/services'
import { useQueryListV2 } from '../common/useQueryV2'

interface usePromotionListProps {
  key: string
  params: GetPromotionListReq
}

interface usePromotionListRes {
  data: PromotionItemRes[] | undefined
  isValidating: boolean
  hasMore: boolean
  isLoadingMore: boolean
  getMore: () => void
}

export const usePromotionList = ({ key, params }: usePromotionListProps): usePromotionListRes => {
  const { data, isValidating, getMore, hasMore, isLoadingMore } = useQueryListV2<
    PromotionItemRes,
    GetPromotionListReq
  >({
    key,
    fetcher: promotionAPI.getListPromotion,
    initialParams: params,
    config: {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    },
  })

  return {
    data,
    isValidating,
    hasMore,
    isLoadingMore,
    getMore,
  }
}
