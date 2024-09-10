// components
import Button from './button'

// utilities
import cx from 'classnames'

// types
import { SanityButton } from '../types/sanity'

interface HowItWorks {
  sanityData: {
    howItWorksHeading: string
    howItWorksSubheading: string
    howItWorksButton: SanityButton
  }
}

const HowItWorks = ({ sanityData, ...props }: HowItWorks): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-115', 'p-bottom-175')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-10', 'container')}>
        <HowItWorksAnimationElement />
        <div className={cx('text-center')}>
          <h2
            className={cx(
              't-h2',
              'text-black',
              'mb-3',
              'md:mb-6',
              'mx-auto',
              'max-w-[782px]'
            )}
          >
            {sanityData.howItWorksHeading}
          </h2>
          <div
            className={cx(
              't-b20',
              'text-body-black',
              'mb-5',
              'lg:mb-[65px]',
              'mx-auto',
              'max-w-[530px]'
            )}
          >
            <div className={cx('content-prose')}>
              <p>{sanityData.howItWorksSubheading}</p>
            </div>
          </div>
          <div className={cx('w-full', 'xs:w-auto', 'flex', 'justify-center')}>
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
              <Button
                href={sanityData.howItWorksButton.href}
                variant="underlined"
              >
                {sanityData.howItWorksButton.text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

const HowItWorksAnimationElement = () => {
  return (
    <div className="h-full w-full">
      <div className="mx-auto aspect-[654/508] max-w-[654px] xl:min-h-[508px]">
        <div className="flex w-full justify-center">
          <div className="relative aspect-[654/508] w-full max-w-[654px] xl:min-h-[508px]">
            <div className="absolute left-[50%] top-[50%] aspect-[1] w-full max-w-[78%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="outline-cicle-light relative h-full w-full rounded-full border-[1.5px]  border-grey-2"
                style={{ transform: 'none' }}
              ></div>
            </div>
            <div className="absolute left-[50%] top-[50%] aspect-[1] w-full max-w-[70.86%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="outline-cicle-dark relative h-full w-full rounded-full border-[1.5px] border-grey-4"
                style={{ transform: 'none' }}
              ></div>
            </div>
            <div className="absolute left-[50%] top-[50%] aspect-[1] w-full max-w-[52.15%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="inner-circle relative h-full w-full rounded-full bg-grey-2"
                style={{ transform: 'none' }}
              ></div>
            </div>
            <div className="absolute left-[50%] top-[50%] aspect-[1] w-full max-w-[18.4%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="logo relative h-full w-full bg-white"
                style={{ clipPath: 'inset(0% round 30px)' }}
              >
                <div
                  className="absolute inset-[8%] bg-black-4"
                  style={{ clipPath: 'inset(0% round 20px)' }}
                ></div>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ opacity: 1 }}
                >
                  <ul className="grid h-7 w-7 grid-cols-3 gap-[4px] md:h-[46px] md:w-[46px] md:gap-[5px] ">
                    <li
                      className="logo-circle rounded-full bg-[#fff3]"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle rounded-full bg-[#fff3]"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle rounded-full bg-[#fff3]"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle circle-white rounded-full bg-white"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle circle-white rounded-full bg-white"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle circle-white rounded-full bg-white"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle rounded-full bg-[#fff3]"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle circle-white rounded-full bg-white"
                      style={{ opacity: 1 }}
                    ></li>
                    <li
                      className="logo-circle rounded-full bg-[#fff3]"
                      style={{ opacity: 1 }}
                    ></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="absolute left-[50%] top-[50%] aspect-[1] w-full max-w-[80%] -translate-x-1/2 -translate-y-1/2">
              <div
                className="relative h-full w-full"
              >
                <div
                  className="ip-container absolute left-[30%] top-[10%] w-full max-w-[38.2%]"
                >
                  <div className="t-18-mono relative w-full items-center justify-center rounded-full p-1 font-sfMono text-heading-black sm:p-[10px]">
                    <div className="absolute inset-0 h-full w-full rounded-full bg-white"></div>
                    <div className="relative block rounded-full  bg-grey-3 px-2 py-1 text-center xs:py-[11px] md:px-6">
                      <span>100.78.14.63</span>
                    </div>
                  </div>
                </div>
                <div
                  className="ip-container absolute left-[-10%] top-[45%] w-full max-w-[38.2%]"
                >
                  <div className="t-18-mono relative w-full items-center justify-center rounded-full p-1 font-sfMono text-heading-black sm:p-[10px]">
                    <div className="absolute inset-0 h-full w-full rounded-full bg-white"></div>
                    <div className="relative block rounded-full  bg-grey-3 px-2 py-1 text-center xs:py-[11px] md:px-6">
                      <span>100.108.47.7</span>
                    </div>
                  </div>
                </div>
                <div
                  className="ip-container absolute right-[-15%] top-[45%] w-full max-w-[42.4%]"
                >
                  <div className="t-18-mono relative w-full items-center justify-center rounded-full p-1 font-sfMono text-heading-black sm:p-[10px]">
                    <div className="absolute inset-0 h-full w-full rounded-full bg-white"></div>
                    <div className="relative block rounded-full  bg-grey-3 px-2 py-1 text-center xs:py-[11px] md:px-6">
                      <span>100.81.144.123</span>
                    </div>
                  </div>
                </div>
                <div
                  className="ip-container absolute bottom-[11%] left-[30%] w-full max-w-[40.2%]"
                >
                  <div className="t-18-mono relative w-full items-center justify-center rounded-full p-1 font-sfMono text-heading-black sm:p-[10px]">
                    <div className="absolute inset-0 h-full w-full rounded-full bg-white"></div>
                    <div className="relative block rounded-full  bg-grey-3 px-2 py-1 text-center xs:py-[11px] md:px-6">
                      <span>100.101.33.15</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
