'use client'

// Components
import Button from './button'

// Types
import { HTMLAttributes } from 'react'

// Utilities
import cx from 'classnames'
import { useInView } from 'react-intersection-observer'

const Feature = ({
  heading,
  subheading,
  buttonText,
  headingMaxWidth = '800px',
  subheadingMaxWidth = '750px',
  children,
  className,
  ...props
}: {
  heading: string
  subheading: string
  buttonText: string
  headingMaxWidth?: string
  subheadingMaxWidth?: string
} & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  const { ref, inView } = useInView()

  return (
    <section
      className={cx('overflow-hidden', 'p-bottom-190', className)}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div
          ref={ref}
          className={cx(
            'text-left',
            'mx-0',
            'transition-transform',
            'ease-in-out',
            'duration-300',
            'delay-[25ms]'
          )}
          style={{
            transform: `translateX(${inView ? '40px' : '0px'}) translateZ(0px)`,
          }}
        >
          <h2
            className={cx('t-h3', 'text-black', 'mb-3', 'md:mb-6')}
            style={{ maxWidth: headingMaxWidth }}
          >
            {heading}
          </h2>
          <div
            className={cx(
              't-b18',
              'text-body-black',
              'mb-5',
              'lg:mb-10',
              'max-w-[750px]'
            )}
            style={{ maxWidth: subheadingMaxWidth }}
          >
            <div className={cx('content-prose')}>
              <p>{subheading}</p>
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
              <Button variant="underlined">{buttonText}</Button>
            </div>
          </div>
        </div>
        <div
          className={cx('bg-black-bg', 'rounded-xl', 'w-[1280px]', 'h-[584px]')}
        ></div>
      </div>
      {children}
    </section>
  )
}

export default Feature

export const FeatureGradient = ({ ...props }): JSX.Element => {
  return (
    <div
      className={cx(
        'absolute',
        'bottom-0',
        'left-0',
        'right-0',
        'h-[200px]',
        'w-full',
        'bg-gradient-to-b',
        'from-white',
        'to-grey-1'
      )}
      {...props}
    />
  )
}
