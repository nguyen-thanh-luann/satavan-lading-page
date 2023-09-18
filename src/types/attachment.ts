export interface CreateAttachmentReq {
  attachments: CreateAttachmentParams[]
}

export interface CreateAttachmentParams {
  type: CreateAttachmentType
  file: string
}

export type CreateAttachmentType = 'image/png' | 'image/jpeg' | 'video/mp4' | 'application/pdf'

export interface CreateAttachmentRes {
  id: number
  url: string
  name: string
  data_type: CreateAttachmentType
}