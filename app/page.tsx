// Components
import Button from './components/button'

// Utilities
import cx from 'classnames'

export default function Home() {
  return (
    <main className={cx('mt-[-60px]', 'lg:mt-[-66px]')}>
      {/* Hero */}
      <Hero />
      <HowItWorks />
      {/* Features */}
      {/* Integrations */}
      {/* CTA */}
      {/* Testimonials */}
      {/* Benefits */}
      {/* Security */}
      {/* Docs */}
      {/* CTA */}
    </main>
  )
}

const Hero = ({ ...props }): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'bg-grey-2', 'p-bottom-75')}
      {...props}
    >
      <div
        className={cx(
          'space-y-8',
          'md:!space-y-[65px]',
          'container',
          'is-wide'
        )}
      >
        {/* Content */}
        <div
          className={cx(
            'space-y-10',
            'pt-24',
            'lg:space-y-[115px]',
            'lg:pt-[185px]',
            'laptop:pt-[150px]'
          )}
        >
          <div className={cx('container')}>
            <div
              className={cx(
                'flex',
                'flex-col',
                'justify-between',
                'gap-5',
                'lg:flex-row',
                'lg-items:end'
              )}
            >
              <h1
                className={cx(
                  'w-full',
                  'text-center',
                  'lg:max-w-[750px]',
                  'lg:text-left'
                )}
              >
                <span
                  className={cx(
                    'relative',
                    'inline-flex',
                    'max-w-[90%]',
                    'flex-wrap',
                    'items-center',
                    'justify-center',
                    'gap-3',
                    'gap-y-2',
                    'overflow-hidden',
                    'text-heading-black',
                    'xxs:max-w-[300px]',
                    'xs:max-w-none',
                    'lg:inline'
                  )}
                >
                  <span className={cx('t-72', 'font-medium')}>
                    {`Secure, remote`}
                    <span className={cx('ml-1.5', 'md:hidden')}>
                      {`access to`}
                    </span>
                  </span>
                  {/* TODO: Add transitions */}
                  <div
                    className={cx(
                      'relative',
                      'inline-flex',
                      'w-auto',
                      'items-center',
                      'gap-4'
                    )}
                    style={{
                      transform: 'none',
                      transformOrigin: '50% 50% 0px',
                    }}
                  >
                    <span
                      className={cx(
                        't-72',
                        'hidden',
                        'flex-1',
                        'font-medium',
                        'md:inline-block'
                      )}
                      style={{
                        transform: 'none',
                        transformOrigin: '50% 50% 0px',
                      }}
                    >
                      {`access to`}
                    </span>
                    <div
                      className={cx(
                        't-52',
                        'flex',
                        'overflow-hidden',
                        'rounded-[10px]',
                        'px-3',
                        'py-2',
                        'font-medium',
                        'text-white',
                        'will-change-transform',
                        'md:px-5',
                        'md:py-2.5',
                        'bg-red-1'
                      )}
                      style={{
                        transform: 'none',
                        transformOrigin: '50% 50% 0px',
                      }}
                    >
                      <div
                        className={cx(
                          'flex',
                          'items-center',
                          'gap-[17px]',
                          'will-change-transform'
                        )}
                        style={{
                          opacity: 1,
                          transform: 'none',
                          transformOrigin: '50% 50% 0px',
                        }}
                      >
                        kubernetes
                      </div>
                    </div>
                  </div>
                </span>
              </h1>
              <div
                className={cx(
                  'text-left',
                  'mx-0',
                  'mx-auto',
                  'md:max-w-[441px]',
                  'lg:mx-0'
                )}
              >
                <div
                  className={cx('t-b20', 'text-body-black', 'mb-5', 'lg:mb-9')}
                >
                  <div className={cx('content-prose')}>
                    <p>{`Tailscale makes creating software-defined networks easy: securely connecting users, services, and devices.`}</p>
                  </div>
                </div>
                <div
                  className={cx('w-full', 'xs:w-auto', 'flex', 'justify-start')}
                >
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
                    <Button>{`Get Started`}</Button>
                    <Button variant="underlined">{`Contact Sales`}</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={cx(
              'relative',
              'mx-auto',
              'md:aspect-[1360/725]',
              'w-full',
              'max-w-[1360px]',
              'overflow-hidden',
              'rounded-2xl',
              'bg-black-4',
              'will-change-transform'
            )}
          >
            <div
              className={cx(
                'bg-heading-black',
                'w-[1360px]',
                'h-[725px]',
                'rounded-2xl'
              )}
            ></div>
          </div>
          {/* Users */}
          <div>
            <h2
              className={cx(
                'body-new',
                '!tracking-wider',
                'font-mdio',
                'font-medium',
                'uppercase',
                'mb-4',
                'text-center',
                'text-subheading-black',
                'md:mb-8'
              )}
            >{`Trusted by 5,000+ companies`}</h2>
            {/* TODO: Marquee */}
            <div className={cx('relative', 'w-full')}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

const HowItWorks = ({ ...props }): JSX.Element => {
  return <section {...props}></section>
}
