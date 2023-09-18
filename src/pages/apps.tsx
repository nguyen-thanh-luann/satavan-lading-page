import { NotFound, ProductsByAttributeMinor, SearchForm } from '@/components'
import {
  DEFAULT_LIMIT,
  DOMAIN_URL,
  SWR_KEY,
  WEB_DESCRIPTION,
  WEB_TITTLE,
  thumbnailImageUrl,
} from '@/constants'
import { isArrayHasValue } from '@/helper'
import { useAttributeMinor } from '@/hooks'
import { MainShop } from '@/templates'
import { Spin } from 'antd'
import Fade from 'react-reveal/Fade'

const AppsPage = () => {
  const { attributeMinors, isValidating: attributeMinorLoading } = useAttributeMinor({
    key: SWR_KEY.attribute_minor_list,
    params: {
      view_state: 'home',
      limit: DEFAULT_LIMIT,
    },
  })

  return (
    <MainShop title={WEB_TITTLE} description={WEB_DESCRIPTION}>
      <div className="container min-h-[60vh] py-32 px-12">
        {attributeMinorLoading ? (
          <div className="flex-center">
            <Spin />
          </div>
        ) : isArrayHasValue(attributeMinors) ? (
            <div>
              <Fade top>
                <p className='text-3xl md:text-4xl text-center text-primary-gradient mb-24'>Satavan Service</p>
              </Fade>

              <div className='mb-24'>

                <SearchForm
                  placeholder='Tìm kiếm sản phẩm'
                  buttonClassName='hidden'
                />
              </div>

            {attributeMinors?.map((att) => (
              <ProductsByAttributeMinor key={att.attribute_id} attribute={att} className="mb-32" />
            ))}
          </div>
        ) : (
          <div>
            <NotFound notify="Không tìm thấy thông tin" />
          </div>
        )}
      </div>
    </MainShop>
  )
}

export default AppsPage

export const getStaticProps = async () => {
  return {
    props: {
      openGraphData: [
        {
          property: 'og:image',
          content: thumbnailImageUrl,
          key: 'ogimage',
        },
        {
          property: 'og:image:alt',
          content: thumbnailImageUrl,
          key: 'ogimagealt',
        },
        {
          property: 'og:image:width',
          content: '400',
          key: 'ogimagewidth',
        },
        {
          property: 'og:image:height',
          content: '300',
          key: 'ogimageheight',
        },
        {
          property: 'og:url',
          content: DOMAIN_URL,
          key: 'ogurl',
        },
        {
          property: 'og:image:secure_url',
          content: thumbnailImageUrl,
          key: 'ogimagesecureurl',
        },
        {
          property: 'og:title',
          content: WEB_TITTLE,
          key: 'ogtitle',
        },
        {
          property: 'og:description',
          content: WEB_DESCRIPTION,
          key: 'ogdesc',
        },
        {
          property: 'og:type',
          content: 'website',
          key: 'website',
        },
      ],
    },
  }
}
