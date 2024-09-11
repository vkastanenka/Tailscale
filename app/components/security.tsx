// Components
import Button from './button'
import Image from 'next/image'

// Types
import { SanityButton, SanityImg } from '@/app/types/sanity'

// Utilities
import cx from 'classnames'
import { urlFor } from '@/sanity/client'

interface Security {
  sanityData: {
    securityHeading: string
    securitySubheading: string
    securityButton1: SanityButton
    securityButton2: SanityButton
    securityImages: SanityImg[]
  }
}

const Security = ({ sanityData, ...props }: Security): JSX.Element => {
  const securityImages1 = sanityData.securityImages.filter((_, i) => {
    return i < sanityData.securityImages.length / 2
  })
  const securityImages2 = sanityData.securityImages.filter((_, i) => {
    return i >= sanityData.securityImages.length / 2
  })

  return (
    <section
      className={cx('overflow-hidden', 'bg-grey-2', 'p-top-75', 'p-bottom-75')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div
          className={cx(
            'relative',
            'mx-auto',
            'flex',
            'max-w-[1160px]',
            'flex-col',
            'items-center',
            'justify-between',
            'gap-6',
            'gap-y-12',
            'md-large:flex-row'
          )}
        >
          <div
            className={cx('text-left', 'mx-0', 'flex-1', 'md:max-w-[632px]')}
          >
            <h2
              className={cx(
                't-h2',
                'text-black',
                'mb-3',
                'md:mb-6',
                'max-w-[622px]'
              )}
            >
              {sanityData.securityHeading}
            </h2>
            <div
              className={cx(
                't-b20',
                'text-body-black',
                'mb-5',
                'lg:mb-10',
                'max-w-[623px]'
              )}
            >
              <div className={cx('content-prose')}>
                <p>{sanityData.securitySubheading}</p>
              </div>
            </div>
            <div className={cx('w-full', 'xs:w-auto', 'flex', 'justify-start')}>
              <div
                className={cx(
                  'flex',
                  'w-full',
                  'flex-col',
                  'gap-y-4',
                  'xs:w-auto',
                  'xs:flex-row',
                  'xs:items-center',
                  'xs:space-x-5',
                  'md:space-x-[30px]'
                )}
              >
                <Button href={sanityData.securityButton1.href}>
                  {sanityData.securityButton1.text}
                </Button>
                <Button
                  variant="underlined"
                  href={sanityData.securityButton2.href}
                >
                  {sanityData.securityButton2.text}
                </Button>
              </div>
            </div>
          </div>
          <div
            className={cx(
              'flex',
              'max-w-[384px]',
              'flex-1',
              'flex-col',
              'gap-4',
              'md:gap-6',
              'md-large:flex-row'
            )}
          >
            <div
              className={cx(
                'flex',
                'gap-4',
                'md:gap-6',
                'md-large:flex-col',
                'md-large:translate-y-[20px]'
              )}
              // style={{
              //   transform: 'translateX(0px) translateY(20px) translateZ(0px)',
              // }}
            >
              {securityImages1.map((securityImage, i) => (
                <SecurityFeature key={i} securityImage={securityImage} />
              ))}
            </div>
            <div
              className={cx(
                'flex',
                'gap-4',
                'md:gap-6',
                'md-large:flex-col',
                'md-large:translate-y-[-20px]'
              )}
              // style={{
              //   transform: 'translateX(0px) translateY(-20px) translateZ(0px)',
              // }}
            >
              {securityImages2.map((securityImage, i) => (
                <SecurityFeature key={i} securityImage={securityImage} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Security

const SecurityFeature = ({
  securityImage,
  ...props
}: {
  securityImage: SanityImg
}) => {
  return (
    <div
      className={cx('max-w-[150px]', 'lg:w-auto', 'lg:max-w-[180px]')}
      {...props}
    >
      <Image
        alt={securityImage.altText}
        src={urlFor(securityImage.url).url()}
        className={cx('mx-auto')}
        width={securityImage.dimensions.width}
        height={securityImage.dimensions.height}
      />
    </div>
  )
}
