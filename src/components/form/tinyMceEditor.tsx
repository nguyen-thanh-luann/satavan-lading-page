import { TINYMCE_EDITOR_KEY } from '@/constants'
// import { useUpload } from '@/hooks'
import { setBackdropVisible } from '@/store'
import { Editor } from '@tinymce/tinymce-react'
import classNames from 'classnames'
import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from '../button'
import { useCreateAttachment } from '@/hooks'
// import { CreateAttachmentRes } from '@/types'

interface tinyEditorProps {
  onSubmit?: (val: string) => void
  onEditorChange?: (val: string) => void
  defaultValue?: string
  btnLabel?: string
}

export const TinyMceEditor = ({
  onSubmit,
  onEditorChange,
  defaultValue,
  btnLabel,
}: tinyEditorProps) => {
  const [content, setContent] = useState<string>(defaultValue || '')
  const dispatch = useDispatch()

  const editorRef = useRef<any>(null)
  const {
    // createAttachment,

    isLoading: isUploading,
  } = useCreateAttachment()

  useEffect(() => {
    if (isUploading) {
      dispatch(setBackdropVisible(true))
    } else {
      dispatch(setBackdropVisible(false))
    }

    setTimeout(() => {
      dispatch(setBackdropVisible(false))
    }, 30000)
  }, [isUploading])

  return (
    <div className="relative">
      <div className="">
        <Editor
          ref={editorRef}
          apiKey={TINYMCE_EDITOR_KEY}
          value={content}
          onEditorChange={(newValue) => {
            setContent(newValue)
            onEditorChange?.(newValue)
          }}
          init={{
            image_title: true,
            automatic_uploads: true,
            file_picker_types: 'image',
            file_picker_callback: (cb) => {
              if (isUploading) return

              const input = document.createElement('input')
              input.setAttribute('type', 'file')
              input.setAttribute('accept', 'image/*')
              input.click()
              input.onchange = (e: any) => {
                const files = e.target?.files

                console.log({ files })

                if (!files?.length) return
                cb('')
                // createAttachment({
                //   file: files.replace(/^data:image\/\w+;base64,/, ''),
                //   onSuccess(res: CreateAttachmentRes[]) {
                //     cb(res?.[0]?.url || '', files?.[0])
                //   },
                // })
              }
            },
          }}
          plugins={[
            'advlist',
            'anchor',
            'autolink',
            'codesample',
            'fullscreen',
            'help',
            'image',
            'lists',
            'link',
            'preview',
            'searchreplace',
            'table',
            'visualblocks',
            'wordcount',
          ]}
        />
      </div>

      {onSubmit && (
        <div className="flex-center sticky bottom-0 z-40 bg-white py-12">
          <Button
            title={btnLabel || 'Tiếp tục'}
            className={classNames(
              `border border-primary px-20 py-4`,
              !content ? 'opacity-50 hover:opacity-50 cursor-default' : ''
            )}
            textClassName={`title-base font-bold text-primary`}
            onClick={() => onSubmit && onSubmit(content)}
          />
        </div>
      )}
    </div>
  )
}
