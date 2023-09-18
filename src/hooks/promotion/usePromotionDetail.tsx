import { promotionAPI } from '@/services'
import { GetPromotionDetailReq, PromotionDetailRes } from '@/types'
import useSWR from 'swr'

interface usePromotionDetailProps {
  key: string
  shouldFetch?: boolean
  params: GetPromotionDetailReq
}

interface usePromotionDetailRes {
  data: PromotionDetailRes
  isValidating: boolean
}

export const usePromotionDetail = ({
  shouldFetch = true,
  key,
  params,
}: usePromotionDetailProps): usePromotionDetailRes => {
  const { data, isValidating } = useSWR(
    key,
    !shouldFetch || !params
      ? null
      : () => promotionAPI.getPromotionDetail(params).then((res: any) => res?.data),
    {
      revalidateOnFocus: false,
      dedupingInterval: 60000,
    }
  )

  return {
    data,
    isValidating,
  }
}
