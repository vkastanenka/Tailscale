// components
import Image from 'next/image'
import Link from 'next/link'

// utils
import cx from 'classnames'
import { urlFor } from '@/sanity/lib/image'

// types
import { SanityImg } from '@/app/types/sanity'

interface Benefits {
  sanityData: {
    benefitsHeading: string
    benefitsList: {
      href: string
      image: SanityImg
      heading: string
      subheading: string
    }[]
    accoladesList: {
      heading: string
      subheading: string
    }[]
  }
}

const Benefits = ({ sanityData, ...props }: Benefits): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-175', 'p-bottom-175')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div className={cx('text-left', 'mx-0')}>
          <h2 className={cx('t-h3', 'text-black', 'mb-3', 'md:mb-6')}>
            {sanityData.benefitsHeading}
          </h2>
        </div>
        <div
          className={cx(
            'grid',
            'gap-8',
            'sm:grid-cols-2',
            'lg:gap-10',
            'md:grid-cols-3'
          )}
        >
          {sanityData.benefitsList.map((benefit, i) => (
            <Link
              key={i}
              className={cx(
                'flex',
                'flex-col',
                'gap-2',
                'overflow-hidden',
                'rounded-xl',
                'text-center',
                'bg-grey-2',
                'transition-transform',
                'duration-300',
                'ease-in-out',
                'will-change-transform',
                'hover:-translate-y-2'
              )}
              href={benefit.href}
              {...props}
            >
              <div
                className={cx(
                  'px-5',
                  'pb-8',
                  'pt-6',
                  'md:px-[37px]',
                  'md:pb-[44px]',
                  'md:pt-[76px]'
                )}
              >
                <div
                  className={cx(
                    'flex',
                    'flex-col',
                    'gap-5',
                    'items-center',
                    'justify-center'
                  )}
                >
                  <Image
                    alt={benefit.image.altText}
                    src={urlFor(benefit.image.url).url()}
                    width={benefit.image.dimensions.width}
                    height={benefit.image.dimensions.height}
                  />
                  <h4 className={cx('t-24', 'text-heading-black')}>
                    {benefit.heading}
                  </h4>
                </div>
                <div
                  className={cx(
                    'mx-auto',
                    'mt-[10px]',
                    'md:max-w-[380px]',
                    't-16',
                    'text-subheading-black',
                    'md:mt-[10px]'
                  )}
                >
                  {benefit.subheading}
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={cx('grid', 'gap-8', 'sm:grid-cols-3', 'lg:gap-10')}>
          {sanityData.accoladesList.map((accolade, i) => (
            <div key={i} className={cx('text-center')}>
              <h4 className={cx('t-h1')}>{accolade.heading}</h4>
              <div className={cx('t-b18', 'mt-4', 'text-subheading-black')}>
                {accolade.subheading}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
