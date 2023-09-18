import React from 'react'
import RImage, { ImageProps as RImageProps } from 'next/image'
import { imageBlur } from '@/assets'
import classNames from 'classnames'

export type ImageProps = Omit<RImageProps, 'alt'> & {
  alt?: string
  className?: string
  imageClassName?: string
}

export const Image = ({ className, imageClassName, ...props }: ImageProps) => {
  return (
    <div className={classNames('relative', className)}>
      <RImage
        width={1000}
        height={1000}
        className={classNames(imageClassName)}
        alt=""
        loading="lazy"
        blurDataURL={imageBlur}
      unoptimized
        {...props}
      />
    </div>
  )
}
