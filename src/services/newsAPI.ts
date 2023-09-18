import type {
  ActiveNewsParams,
  ArchiveNewsParams,
  CreateNewsCategoryParams,
  CreateNewsParams,
  CreateTagParams,
  DeleteNewsCategoryParams,
  DeleteNewsParams,
  DeleteTagParams,
  GetNewsCategoryDetailParams,
  GetNewsCategoryParams,
  GetNewsDetailParams,
  GetNewsListParams,
  GetTagDetailParams,
  GetTagListParams,
  HTTPResponseV2,
  News,
  NewsCategory,
  Tag,
  UpdateNewsCategoryParams,
  UpdateNewsParams,
  UpdateTagParams,
} from '@/types'
import axiosClient from '.'

const newsAPI = {
  // category
  getCategoryList: (params: GetNewsCategoryParams): Promise<HTTPResponseV2<NewsCategory[]>> => {
    return axiosClient.get('/news_category_controller/list_category', { params })
  },

  getCategoryDetail: (params: GetNewsCategoryDetailParams) => {
    return axiosClient.get('/news_category_controller/detail_category', { params })
  },

  createCategory: (params: CreateNewsCategoryParams) => {
    return axiosClient.post('/news_category_controller/create_category', { params })
  },

  updateCategory: (params: UpdateNewsCategoryParams) => {
    return axiosClient.post('/news_category_controller/update_category', { params })
  },

  deleteCategory: (params: DeleteNewsCategoryParams) => {
    return axiosClient.delete('/news_category_controller/delete_category', {
      params: {
        category_ids: `[${params?.category_ids?.join(', ')}]`,
      },
    })
  },

  // news
  getNewsList: (params: GetNewsListParams): Promise<HTTPResponseV2<News[]>> => {
    return axiosClient.get('/news_news_controller/list_news', { params })
  },

  getNewsDetail: (params: GetNewsDetailParams) => {
    return axiosClient.get('/news_news_controller/detail_news', { params })
  },

  createNews: (params: CreateNewsParams) => {
    return axiosClient.post('/news_news_controller/create_news', { params })
  },

  updateNews: (params: UpdateNewsParams) => {
    return axiosClient.post('/news_news_controller/update_news', { params })
  },

  archiveNews: (params: ArchiveNewsParams) => {
    return axiosClient.get('/news_news_controller/archive_news', { params })
  },

  activeNews: (params: ActiveNewsParams) => {
    return axiosClient.get('/news_news_controller/active_news', { params })
  },

  deleteNews: (params: DeleteNewsParams) => {
    return axiosClient.get('/news_news_controller/delete_news', { params })
  },

  // tags
  getTagList: (params: GetTagListParams): Promise<HTTPResponseV2<Tag[]>> => {
    return axiosClient.get('/news_tag_controller/list_tag', { params })
  },

  getTagDetail: (params: GetTagDetailParams) => {
    return axiosClient.get('/news_tag_controller/detail_tag', { params })
  },

  createTag: (params: CreateTagParams) => {
    return axiosClient.post('/news_tag_controller/create_tag', { params })
  },
  updateTag: (params: UpdateTagParams) => {
    return axiosClient.post('/news_tag_controller/update_tag', { params })
  },

  deleteTag: (params: DeleteTagParams) => {
    return axiosClient.delete('/news_tag_controller/delete_tag', {
      params: {
        ...params,
        tag_ids: params?.tag_ids ? `[${params?.tag_ids?.join(', ')}]` : undefined
    } })
  },
}

export { newsAPI }
