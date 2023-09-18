import { companyIconSm } from '@/assets'
import { API_URL } from '@/constants'
import { isRemoteImageUrl } from '@/helper'
import { Image } from 'antd'
import classNames from 'classnames'

export type AntImageCustomProps = {
  src: string
  alt?: string
  className?: string
  imageClassName?: string
}

export const AntImageCustom = ({ className, imageClassName, src, ...props }: AntImageCustomProps) => {
  return (
    <div className={classNames('relative', className)}>
      <Image
        src={
          src && src !== ''
            ? isRemoteImageUrl(src.toString())
              ? src
              : `${API_URL}${src}`
            : companyIconSm
        }
        className={classNames(imageClassName)}
        loading="lazy"
        {...props}
      />
    </div>
  )
}
