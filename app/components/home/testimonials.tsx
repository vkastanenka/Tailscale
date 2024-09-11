// components
import Image from 'next/image'

// utils
import cx from 'classnames'
import { urlFor } from '@sanityData/client'

// types
import { SanityImg } from '@typescriptDefs/sanity'

interface Testimonial {
  userImage: SanityImg
  userHandle: string
  userName: string
  userTestimonial: string
}

interface Testimonials {
  sanityData: {
    testimonialsHeading: string
    testimonialsList1: Testimonial[]
    testimonialsList2: Testimonial[]
    testimonialsList3: Testimonial[]
  }
}

const Testimonials = ({ sanityData, ...props }: Testimonials): JSX.Element => {
  return (
    <section
      className={cx(
        'overflow-hidden',
        'bg-black-bg',
        'p-top-185',
        'p-bottom-185'
      )}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20')}>
        <div className={cx('relative')}>
          <div
            className={cx(
              'absolute',
              'inset-0',
              'z-10',
              'm-auto',
              'aspect-[1051/375]',
              'w-full',
              'max-w-[1051px]',
              'rounded-[300px]',
              'blur-[97px]',
              'bg-black-bg'
            )}
          />
          <div
            className={cx(
              'absolute',
              'inset-0',
              'z-20',
              'm-auto',
              'aspect-[639/229]',
              'w-full',
              'max-w-[639px]',
              'rounded-[300px]',
              'blur-[52px]',
              'bg-black-bg'
            )}
          />
          <div
            className={cx(
              'absolute',
              'inset-0',
              'flex',
              'items-center',
              'justify-center'
            )}
          >
            <h4
              className={cx(
                't-h3',
                'z-30',
                'rounded-[10px]',
                'bg-heading-black',
                'px-[30px]',
                'py-[25px]',
                'text-center',
                'text-white'
              )}
            >
              {sanityData.testimonialsHeading}
            </h4>
          </div>

          <div className={cx('space-y-[45px]')}>
            <div
              className={cx('marquee-container', 'twitter-marquee')}
              style={
                {
                  '--pause-on-hover': 'running',
                  '--pause-on-click': 'running',
                  '--width': '100%',
                  '--transform': 'none',
                } as React.CSSProperties
              }
            >
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--direction': 'reverse',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList1,
                  ...sanityData.testimonialsList1,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>{' '}
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--direction': 'reverse',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList1,
                  ...sanityData.testimonialsList1,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>
            </div>
            <div
              className={cx('marquee-container', 'twitter-marquee')}
              style={
                {
                  '--pause-on-hover': 'running',
                  '--pause-on-click': 'running',
                  '--width': '100%',
                  '--transform': 'none',
                } as React.CSSProperties
              }
            >
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList2,
                  ...sanityData.testimonialsList2,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>{' '}
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList2,
                  ...sanityData.testimonialsList2,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>
            </div>
            <div
              className={cx('marquee-container', 'twitter-marquee')}
              style={
                {
                  '--pause-on-hover': 'running',
                  '--pause-on-click': 'running',
                  '--width': '100%',
                  '--transform': 'none',
                } as React.CSSProperties
              }
            >
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--direction': 'reverse',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList3,
                  ...sanityData.testimonialsList3,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>
              <div
                className={cx('marquee')}
                style={
                  {
                    '--play': 'running',
                    '--direction': 'reverse',
                    '--duration': '242s',
                    '--delay': '0s',
                    '--iteration-count': 'infinite',
                    '--min-width': '100%',
                  } as React.CSSProperties
                }
              >
                {[
                  ...sanityData.testimonialsList3,
                  ...sanityData.testimonialsList3,
                ].map((testimonial, i) => (
                  <TestimonialCard key={i} testimonial={testimonial} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

const TestimonialCard = ({
  testimonial,
  ...props
}: {
  testimonial: Testimonial
}) => {
  return (
    <div
      className={cx(
        'mx-5',
        'flex',
        'w-[400px]',
        'flex-col',
        'justify-between',
        'rounded-xl',
        'border',
        'p-5',
        'border-[#ffffff14]'
      )}
      {...props}
    >
      <div>
        <div
          className={cx(
            'flex',
            'items-center',
            'gap-[9px]',
            'whitespace-normal'
          )}
        >
          <div
            className={cx(
              'relative',
              'h-8',
              'w-8',
              'shrink-0',
              'overflow-hidden',
              'rounded'
            )}
          >
            {testimonial?.userImage?.url ? (
              <Image
                alt={testimonial.userImage.altText}
                src={urlFor(testimonial.userImage.url).url()}
                className={cx('mx-auto')}
                width={testimonial.userImage.dimensions.width}
                height={testimonial.userImage.dimensions.height}
              />
            ) : undefined}
          </div>
          <div>
            <div
              className={cx(
                'flex',
                'items-center',
                'gap-2',
                'whitespace-normal'
              )}
            >
              <div className={cx('t-15', 'text-white')}>
                {testimonial.userHandle}
              </div>
              <span>
                <svg
                  width="3"
                  height="4"
                  viewBox="0 0 3 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="1.43213"
                    cy="1.79932"
                    r="1.43213"
                    fill="white"
                    fillOpacity="0.14"
                  ></circle>
                </svg>
              </span>
            </div>
            <div className={cx('t-13', 'text-[#fff6]')}>
              {testimonial.userName}
            </div>
          </div>
        </div>
        <div
          className={cx(
            'mt-[13px]',
            'whitespace-normal',
            'leading-[1.39]',
            'tracking-[-0.48px]',
            'text-white'
          )}
          dangerouslySetInnerHTML={{
            __html: testimonial.userTestimonial,
          }}
        />
      </div>
      <div
        className={cx(
          't-13',
          'mt-[21px]',
          'flex',
          'items-center',
          'gap-4',
          'text-[#ffffff8a]'
        )}
      >
        <div
          className={cx(
            't-13',
            'mt-[21px]',
            'flex',
            'items-center',
            'gap-4',
            'text-[#ffffff8a]'
          )}
        >
          <div className={cx('flex', 'items-center', 'gap-15')}>
            <div className={cx('w-4', 'shrink-0')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="99%"
                height="99%"
                viewBox="0 0 256 256"
                xmlSpace="preserve"
              >
                <defs></defs>
                <g
                  style={{
                    stroke: 'none',
                    strokeWidth: 0,
                    strokeDasharray: 'none',
                    strokeLinecap: 'butt',
                    strokeLinejoin: 'miter',
                    strokeMiterlimit: 10,
                    fill: 'none',
                    fillRule: 'nonzero',
                    opacity: 1,
                  }}
                  transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)"
                >
                  <path
                    d="M 14.972 86.134 c -0.193 0 -0.388 -0.038 -0.574 -0.116 c -0.551 -0.231 -0.909 -0.77 -0.909 -1.368 V 67.853 H 5.177 C 2.322 67.853 0 65.531 0 62.676 V 9.043 c 0 -2.854 2.322 -5.177 5.177 -5.177 h 79.646 C 87.678 3.866 90 6.189 90 9.043 v 53.633 c 0 2.855 -2.322 5.177 -5.177 5.177 H 34.206 L 16.011 85.709 C 15.728 85.987 15.353 86.134 14.972 86.134 z M 5.177 6.833 c -1.218 0 -2.21 0.991 -2.21 2.21 v 53.633 c 0 1.219 0.991 2.21 2.21 2.21 h 9.795 c 0.82 0 1.484 0.664 1.484 1.484 v 14.746 L 32.56 65.311 c 0.278 -0.272 0.65 -0.425 1.039 -0.425 h 51.224 c 1.219 0 2.21 -0.991 2.21 -2.21 V 9.043 c 0 -1.218 -0.991 -2.21 -2.21 -2.21 H 5.177 z"
                    style={{
                      stroke: 'none',
                      strokeWidth: 1,
                      strokeDasharray: 'none',
                      strokeLinecap: 'butt',
                      strokeLinejoin: 'miter',
                      strokeMiterlimit: 10,
                      fill: '#ffffff8a',
                      fillRule: 'nonzero',
                      opacity: 1,
                    }}
                    transform=" matrix(1 0 0 1 0 0) "
                    strokeLinecap="round"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div>Reply</div>
          <div>Share</div>
          <div className={cx('mb-2')}>...</div>
        </div>
      </div>
    </div>
  )
}
