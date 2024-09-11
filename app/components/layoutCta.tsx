// components
import Button from '@components/button'
import Image from 'next/image'

// utils
import cx from 'classnames'
import { urlFor } from '@sanityData/client'

// types
import { SanityButton, SanityImg } from '@typescriptDefs/sanity'

interface LayoutCta {
  ctaButton1: SanityButton
  ctaButton2: SanityButton
  ctaCompanyLogos: SanityImg[]
  ctaHeadingBottom: string
  ctaHeadingTop1: string
  ctaHeadingTop2: string
  ctaImage: SanityImg
}

const LayoutCta = ({ sanityData, ...props }: { sanityData: LayoutCta }) => {
  return (
    <section className={cx('pb-[50px]', 'pt-10', 'lg:pt-[175px]')} {...props}>
      <div
        className={cx(
          'is-wide',
          'container',
          'flex',
          'flex-col',
          'gap-6',
          'md-large:flex-row'
        )}
      >
        <div
          className={cx(
            'flex',
            'flex-1',
            'flex-col',
            'justify-between',
            'rounded-[14px]',
            'bg-[#19224A]',
            'overflow-hidden'
          )}
        >
          <div
            className={cx(
              'relative',
              'z-10',
              'flex-1',
              'overflow-hidden',
              'px-[48px]',
              'py-[80px]'
            )}
          >
            <div
              className={cx(
                'absolute',
                'bottom-[0%]',
                '-right-[1.5px]',
                'h-full',
                'w-auto',
                'opacity-25',
                'xs:opacity-100',
                'md:opacity-100',
                'md-large:opacity-25',
                'xl:opacity-100'
              )}
            >
              <div className={cx('flex', 'h-full', 'w-auto', 'justify-end')}>
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 264 394"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.666016 262.667C0.666019 190.118 59.4508 131.333 131.999 131.333L131.999 262.667L0.666016 262.667Z"
                    fill="#6294F1"
                  ></path>
                  <path
                    d="M132 394C59.4515 394 0.666676 335.215 0.666682 262.667L132 262.667L132 394Z"
                    fill="#253570"
                  ></path>
                  <path
                    d="M263.332 394C190.783 394 131.999 335.215 131.999 262.667L263.332 262.667L263.332 394Z"
                    fill="#6294F1"
                  ></path>
                  <path
                    d="M132 131.333C59.4515 131.333 0.666673 72.5485 0.666676 -8.08502e-05L132 -7.62939e-05L132 131.333Z"
                    fill="#253570"
                  ></path>
                  <rect
                    x="263.332"
                    y="131.333"
                    width="131.333"
                    height="131.333"
                    rx="65.6667"
                    transform="rotate(90 263.332 131.333)"
                    fill="#253570"
                  ></rect>
                  <rect
                    x="263.332"
                    width="131.333"
                    height="131.333"
                    rx="65.6667"
                    transform="rotate(90 263.332 0)"
                    fill="#6294F1"
                  ></rect>
                </svg>
              </div>
            </div>
            <div className={cx('text-left', 'mx-0', 'relative', 'z-10')}>
              <h2
                className={cx('t-h3', 'text-white', 'mb-4', 'md:mb-8')}
                style={{ color: 'rgb(98,148,241)', maxWidth: '292px' }}
              >
                {sanityData.ctaHeadingTop1}
                <span className={cx('text-white')}>
                  {sanityData.ctaHeadingTop2}
                </span>
              </h2>
              <div
                className={cx('w-full', 'xs:w-auto', 'flex', 'justify-start')}
              >
                <div
                  className={cx(
                    'flex',
                    'w-full',
                    '!w-auto',
                    'flex-col',
                    'gap-y-4',
                    'xs:w-auto',
                    'xs:flex-row',
                    'xs:items-center',
                    'xs:space-x-5',
                    'md:space-x-[30px]'
                  )}
                >
                  <Button
                    buttonStyle={cx('!bg-white', '!text-black')}
                    href={sanityData.ctaButton1.href}
                  >
                    {sanityData.ctaButton1.text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx(
              'relative',
              'w-full',
              'rounded-b-[14px]',
              'px-[48px]',
              'py-[60px]',
              'bg-[#6294F1]'
            )}
            style={{ color: 'rgb(31, 30, 30)' }}
          >
            <div className={cx('t-h5', '!font-normal', 'mb-3')}>
              {sanityData.ctaHeadingBottom}
            </div>
            <Button href={sanityData.ctaButton2.href} includeIcon={false}>
              {sanityData.ctaButton2.text}
            </Button>
          </div>
        </div>
        <div
          className={cx(
            'flex',
            'flex-1',
            'items-end',
            'justify-center',
            'overflow-hidden',
            'rounded-[14px]',
            'bg-[#19224A]',
            'pt-[50px]'
          )}
        >
          <div className={cx('px-5')} style={{ transform: 'translateY(2px)' }}>
            <Image
              className={cx('md:block', 'max-auto')}
              alt={sanityData.ctaImage.altText}
              src={urlFor(sanityData.ctaImage.url).url()}
              width={sanityData.ctaImage.dimensions.width}
              height={sanityData.ctaImage.dimensions.height}
            />
          </div>
        </div>
      </div>
      <div className={cx('container', 'mt-[60px]')}>
        <div>
          <div
            className={cx(
              'flex',
              'flex-wrap',
              'items-center',
              'justify-center',
              'gap-4',
              'lg:justify-between'
            )}
          >
            {sanityData.ctaCompanyLogos.map((companyLogo, i) => (
              <div
                key={i}
                className={cx(
                  'flex',
                  'w-[calc(33%-16px)]',
                  'flex-col',
                  'items-center',
                  'gap-2',
                  'md:w-auto'
                )}
              >
                <Image
                  className={cx('md:block', 'max-auto')}
                  alt={companyLogo.altText}
                  src={urlFor(companyLogo.url).url()}
                  width={companyLogo.dimensions.width}
                  height={companyLogo.dimensions.height}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LayoutCta
