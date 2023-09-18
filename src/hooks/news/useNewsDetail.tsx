import { newsAPI } from '@/services'
import { GetNewsDetailParams, NewsDetail } from '@/types'
import useSWR from 'swr'

interface useNewsDetailProps {
  key: string
  shouldFetch?: boolean
  params: GetNewsDetailParams
}

interface useNewsDetailRes {
  data: NewsDetail
  isValidating: boolean
}

export const useNewsDetail = ({
  shouldFetch = true,
  key,
  params,
}: useNewsDetailProps): useNewsDetailRes => {
  const { data, isValidating } = useSWR(
    key,
    !shouldFetch || !params
      ? null
      : () => newsAPI.getNewsDetail(params).then((res: any) => res?.data),
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
