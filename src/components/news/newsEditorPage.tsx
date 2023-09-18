import { PlusIcon } from '@/assets'
import { LIMIT_ATTACHMENT, SWR_KEY } from '@/constants'
import { useAttachment, useCreateAttachment, useNews, useNewsCategories } from '@/hooks'
import { newsSchema } from '@/schema'
import { CreateAttachmentRes } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Radio, RadioChangeEvent } from 'antd'
import classNames from 'classnames'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Button } from '../button'
import { TinyMceEditor } from '../form'
import { InputField } from '../inputs'
import { CustomImage } from '../customImage'

interface NewsEditorPageProps {
  className?: string
}

export const NewsEditorPage = ({ className }: NewsEditorPageProps) => {
  const [content, setContent] = useState<string | undefined>()
  const [selectedCategory, setSelectedCategory] = useState<number>()
  const [thumbnail, setThumbnail] = useState<any>()

  const { control, getValues } = useForm({
    resolver: yupResolver(newsSchema),
    mode: 'all',
  })

  const { createNews } = useNews({
    key: `${SWR_KEY.news}`,
    params: {},
  })

  const { createAttachment } = useCreateAttachment()
  const { getBase64Images } = useAttachment({ limit: LIMIT_ATTACHMENT })

  const { data: newsCategoryList } = useNewsCategories({
    key: `${SWR_KEY.news_category_list}`,
    params: {},
  })

  const handleSelectNewsCategory = (e: RadioChangeEvent) => {
    setSelectedCategory(e.target.value)
  }

  const handleChangeThumbnail = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e?.target?.files) return

    getBase64Images(e.target.files, (images) => {
      if (!images?.[0]) return
      createAttachment({
        file: images?.[0].replace(/^data:image\/\w+;base64,/, ''),
        onSuccess(res: CreateAttachmentRes[]) {
          setThumbnail(res?.[0])
        },
      })
    })
  }

  const hanldeSubmitForm = () => {
    if (!selectedCategory || !content || !thumbnail) {
      toast.error('Vui lòng điển đầy đủ thông tin')
      return
    }

    if (selectedCategory && content && thumbnail) {
      createNews(
        { 
          title: getValues('title') || '',
          short_content: getValues('shortContent') || '',
          category_id: selectedCategory,
          content: content,
          banner_cloud_storage_id: thumbnail?.id,
        },
        () => {
          toast.success('Thêm bài viết thành công!')
        },
        () => {
          toast.error('Có lỗi xảy ra!')
        }
      )
    }
  }

  return (
    <div className={classNames('p-12', className)}>
      <p className="mb-12 text-2xl">Ảnh đại diện</p>

      <div className="mb-16">
        <input onChange={handleChangeThumbnail} type="file" name="" hidden id="user-avatar" />

        <div className="flex items-center gap-12">
          {thumbnail && (
            <CustomImage
              src={thumbnail?.url}
              imageClassName="w-[100px] h-[100px] object-cover"
              className="w-[100px]"
            />
          )}

          <label htmlFor="user-avatar" className="cursor-pointer">
            <div className="relative flex-center border w-[100px] h-[100px]">
              <PlusIcon className="" />
            </div>
          </label>
        </div>
      </div>

      <p className="mb-12 text-2xl">Danh mục bài viết</p>

      <Radio.Group onChange={handleSelectNewsCategory} className="flex flex-col gap-12 mb-16">
        {newsCategoryList?.map((item) => (
          <Radio key={item.category_id} value={item.category_id}>
            {item.category_name}
          </Radio>
        ))}
      </Radio.Group>

      <p className="mb-12 text-2xl">Tiêu đề bài viết</p>
      <div className="mb-12">
        <InputField
          control={control}
          name="title"
          type="text"
          placeholder={`Nhập tiêu tề`}
          label="Tiêu đề bài viết"
          inputClassName="rounded-[10px] p-[12px]"
        />
      </div>

      <p className="mb-12 text-2xl">Tóm tắt nội dung bài viết</p>
      <div className="mb-12">
        <InputField
          control={control}
          name="shortContent"
          type="text"
          placeholder={`Nhập nội dung tóm tắt`}
          label="Tóm tắt nội dung bài viết"
          inputClassName="rounded-[10px] p-[12px]"
        />
      </div>

      <p className="mb-12 text-2xl">Soạn thảo bài viết</p>
      <div className="mb-12">
        <TinyMceEditor
          defaultValue={content}
          onEditorChange={(val) => {
            setContent(val)
          }}
        />
      </div>

      <div className="flex justify-center py-12 sticky z-100 bottom-0 bg-white">
        <Button
          title="Hoàn thành"
          className="bg-primary-gradient w-fit px-24"
          textClassName="text-white text-base mx-auto"
          onClick={hanldeSubmitForm}
        />
      </div>
    </div>
  )
}
