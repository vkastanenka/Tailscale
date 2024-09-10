// components
import Button from './button'
import Image from 'next/image'
import Link from 'next/link'

// utils
import cx from 'classnames'
import { urlFor } from '@/sanity/lib/image'

// types
import { SanityButton, SanityImg } from '@/app/types/sanity'

interface Documentation {
  sanityData: {
    workflowHeading: string
    workflowSubheading: string
    workflowButton: SanityButton
    workflowImage: SanityImg
    quickstartTitle: string
    quickstartHeading: string
    quickstartSubheading: string
    quickstartButton: SanityButton
    quickstartImage: SanityImg
  }
}

const Documentation = ({
  sanityData,
  ...props
}: Documentation): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-175', 'p-bottom-175')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div
          className={cx(
            'flex',
            'flex-col',
            'justify-between',
            'gap-6',
            'md:flex-row'
          )}
        >
          <div className={cx('max-w-[840px]', 'flex-[0.75]')}>
            <div
              className={cx(
                'flex',
                'flex-col',
                'justify-between',
                'rounded-xl',
                'bg-black-4',
                'lg:pt-0',
                'pt-[42px]',
                'pb-[42px]',
                'text-white'
              )}
            >
              <div className={cx('px-5', 'px-8', 'xl:p-[50px]')}>
                <div className={cx('max-w-[676px]')}>
                  <h3 className={cx('t-36')}>{sanityData.workflowHeading}</h3>
                  <div
                    className={cx(
                      't-20',
                      'mt-[15px]',
                      'text-white-70',
                      'opacity-70'
                    )}
                  >
                    {sanityData.workflowSubheading}
                  </div>
                  <div className={cx('mt-8')}>
                    <Button href={sanityData.workflowButton.href}>
                      {sanityData.workflowButton.text}
                    </Button>
                  </div>
                </div>
              </div>
              <div className={cx('pl-5', 'xl:pl-[50px]')}>
                <Image
                  alt={sanityData.workflowImage.altText}
                  src={urlFor(sanityData.workflowImage.url).url()}
                  width={sanityData.workflowImage.dimensions.width}
                  height={sanityData.workflowImage.dimensions.height}
                />
              </div>
            </div>
          </div>
          <div className={cx('flex-[0.35]', 'md:max-w-[400px]')}>
            <Link
              className={cx('group', 'w-full')}
              href={sanityData.quickstartButton.href}
            >
              <div
                className={cx(
                  'aspect-[400/429]',
                  'w-full',
                  'overflow-hidden',
                  'rounded-xl',
                  'bg-green-1',
                  'will-change-transform'
                )}
              >
                <Image
                  alt={sanityData.quickstartImage.altText}
                  src={urlFor(sanityData.quickstartImage.url).url()}
                  width={sanityData.quickstartImage.dimensions.width}
                  height={sanityData.quickstartImage.dimensions.height}
                />
              </div>
              <div
                className={cx('mt-5', 'px-[5px]', 'md:mt-10', 'md:px-[15px]')}
              >
                <div
                  className={cx(
                    't-16',
                    'text-subheading-black',
                    'font-medium',
                    'uppercase'
                  )}
                >
                  {sanityData.quickstartTitle}
                </div>
                <h3 className={cx('t-24', 'mt-2', 'md:mt-[10px]')}>
                  {sanityData.quickstartHeading}
                </h3>
                <div className={cx('mt-3', 'md:mt-[30px]')}>
                  <div
                    className={cx(
                      'group',
                      'relative',
                      'inline-flex',
                      'shrink-0',
                      'items-center',
                      'justify-center',
                      'gap-[11px]',
                      'border-b-[1.5px]',
                      'border-transparent',
                      'pb-0.5',
                      'pb-1',
                      'font-medium',
                      'leading-[1.43]',
                      'tracking-[-0.17px]',
                      'text-black'
                    )}
                  >
                    <span className={cx('transition-colors')}>
                      {sanityData.quickstartButton.text}
                    </span>
                    <span
                      className={cx(
                        'block',
                        'will-change-transform',
                        'group-hover:animate-bounceX'
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 18"
                        className={cx('w-4')}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.471 13.9149L14.276 9.10993L9.471 4.30493L8.529 5.24793L11.724 8.44293H2V9.77693H11.724L8.529 12.9719L9.471 13.9149Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documentation
