// components
import Button from './button'
import Image from 'next/image'

// utils
import cx from 'classnames'
import { urlFor } from '@/sanity/client'

// types
import { SanityButton, SanityImg } from '../types/sanity'

interface Integrations {
  sanityData: {
    integrationsHeading1: string
    integrationsHeading2: string
    integrationsIcons1: SanityImg[]
    integrationsIcons2: SanityImg[]
    integrationsButton1: SanityButton
    integrationsButton2: SanityButton
  }
}

const Integrations = ({ sanityData, ...props }: Integrations): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-175', 'p-bottom-175')}
      {...props}
    >
      <div
        className={cx(
          'space-y-14',
          'md:!space-y-20',
          'lg:!space-y-[100px]',
          'container'
        )}
      >
        <div className={cx('text-left', 'mx-0')}>
          <h2
            className={cx(
              't-h3',
              'text-black',
              'mb-3',
              'md:mb-6',
              'max-w-[670px]'
            )}
          >
            {`${sanityData.integrationsHeading1} `}
            <span className={cx('text-subheading-black')}>
              {sanityData.integrationsHeading2}
            </span>
          </h2>
        </div>
        <div className={cx('grid', 'gap-[5px]', 'grid-cols-3')}>
          <div className={cx('grid', 'grid-cols-3', 'gap-[5px]')}>
            {sanityData.integrationsIcons1.map((icon, i) => (
              <div key={i} className={cx('cell')}>
                <Image
                  alt={icon.altText}
                  src={urlFor(icon.url).url()}
                  width={icon.dimensions.width}
                  height={icon.dimensions.height}
                />
              </div>
            ))}
          </div>
          <div
            className={cx(
              'flex',
              'items-center',
              'justify-center',
              'rounded-xl',
              'bg-[#252222]'
            )}
          >
            <svg
              className="w-12 md:w-[84px]"
              viewBox="0 0 83 84"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="10.3498"
                cy="41.7046"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                cx="41.3996"
                cy="41.7046"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="10.3498"
                cy="72.6773"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="72.4474"
                cy="72.6773"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                cx="41.3996"
                cy="72.6773"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                cx="72.4474"
                cy="41.7046"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="10.3498"
                cy="10.729"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="41.3996"
                cy="10.729"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="72.4474"
                cy="10.729"
                rx="10.3498"
                ry="10.3247"
                fill="white"
              ></ellipse>
            </svg>
          </div>
          <div className={cx('grid', 'grid-cols-3', 'gap-[5px]')}>
            {sanityData.integrationsIcons2.map((icon, i) => (
              <div key={i} className={cx('cell')}>
                <Image
                  alt={icon.altText}
                  src={urlFor(icon.url).url()}
                  width={icon.dimensions.width}
                  height={icon.dimensions.height}
                />
              </div>
            ))}
          </div>
        </div>
        <div className={cx('text-left', 'mx-0')}>
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
                'xs:space-x-5'
              )}
            >
              <Button href={sanityData.integrationsButton1.href}>
                {sanityData.integrationsButton1.text}
              </Button>
              <Button
                href={sanityData.integrationsButton2.href}
                variant="underlined"
              >
                {sanityData.integrationsButton2.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Integrations
