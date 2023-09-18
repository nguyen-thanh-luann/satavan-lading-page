import { URLRes } from './common'
import { QueryList } from './http'

export type NEWS_CATEGORY_SORT_TYPE =
  | 'create_date_increase'
  | 'create_date_decrease'
  | 'name_increase'
  | 'name_decrease'
  | 'hierarchical_structure'
  | 'sequence'

export type TAG_SORT_TYPE =
  | 'create_date_increase'
  | 'create_date_decrease'
  | 'name_increase'
  | 'name_decrease'

export interface GetNewsListParams extends QueryList {
  config_news?: boolean
  archived_record?: boolean
  unarchived_record?: boolean
  title?: string
  category_id?: number
  tag_ids?: number[]
  sort_by?: 'release_date_increase' | 'release_date_decrease'
}

export interface GetNewsDetailParams {
  news_id: number
}

export interface CreateNewsParams {
  category_id: number
  title: string
  content: string
  company_id?: number
  hcategory_ids?: number[]
  tag_ids?: number[]
  icon_cloud_storage_id?: number
  banner_cloud_storage_id?: number
  short_content?: string
}

export interface UpdateNewsParams extends CreateNewsParams {
  news_id: number
}

export interface ArchiveNewsParams {
  news_ids: number[]
}

export interface ActiveNewsParams {
  news_ids: number[]
}

export interface DeleteNewsParams {
  news_ids: number[]
}

export interface GetTagListParams extends QueryList {
  tag_name?: string
  sort_by?: TAG_SORT_TYPE
}

export interface GetTagDetailParams {
  tag_id: number
}

export interface CreateTagParams {
  tag_name: string
}

export interface UpdateTagParams extends CreateTagParams {
  tag_id: number
}

export interface DeleteTagParams {
  tag_ids: number[]
}

export interface GetNewsCategoryParams extends QueryList {
  category_id?: number
  category_name?: string
  sort_by?: NEWS_CATEGORY_SORT_TYPE
}

export interface GetNewsCategoryDetailParams {
  category_id: number
}

export interface CreateNewsCategoryParams {
  category_name: string
  icon_cloud_storage_id?: number
  parent_id?: number
}

export interface UpdateNewsCategoryParams extends CreateNewsCategoryParams {
  category_id: number
}

export interface DeleteNewsCategoryParams {
  category_ids: number[]
}

export interface NewsCategory {
  category_id: number
  category_name: string
  complete_name?: string
}

export interface NewsCategoryDetail extends NewsCategory {
  parent_id: NewsCategory
}

export interface News {
  new_id: number
  title: string
  company_id: {
    company_id: number
    company_name: string
  }
  hcategory_ids: []
  category_id: NewsCategory
  tag_ids: []
  author_id: {
    company_type: string
    partner_type: string
    company_id: number
    partner_id: number
    partner_name: string
    phone: string
    gender: string
    avatar_url: URLRes
    account_type: string
    business_operation_name: string
    business_operation_owner: string
  }
  active: true
  icon_cloud_storage_id: URLRes
  banner_cloud_storage_id: URLRes
  short_content: string
  release_date: Date
}

export interface NewsDetail extends News {
  content: string
  category_ids: NewsCategory[]
}

export interface Tag {
  tag_id: number
  tag_name: string
}

export interface TagDetail extends Tag {}
