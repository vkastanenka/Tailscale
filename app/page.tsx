// Components
import Button from './components/button'
import Feature, { FeatureGradient } from './components/feature'
import SvgHomelab from './svg/homelab.svg'

// Utilities
import cx from 'classnames'

export default function Home() {
  return (
    <main className={cx('mt-[-60px]', 'lg:mt-[-66px]')}>
      <Hero />
      <HowItWorks />
      <Feature
        heading={`Deploy a zero-config, no-fuss VPN`}
        subheading={`Deploy a WireGuard-based VPN that eliminates single points of failure.`}
        buttonText={`Business VPN`}
      />
      <Feature
        heading={`Securely access resources on any infrastructure`}
        subheading={`Granularly segment your network to ensure the right users get access to the right resources.`}
        buttonText={`Remote Access`}
        headingMaxWidth={`653px`}
        subheadingMaxWidth={`673px`}
      />
      <Feature
        heading={`Unlock site-to-site networking`}
        subheading={`Connect clouds, VPCs, and on-premises networks without opening firewall ports with NAT traversal.`}
        buttonText={`Site-to-Site Networking`}
        subheadingMaxWidth={`709px`}
      />
      <Feature
        className={cx('relative')}
        heading={`Tailscale for Enterprise`}
        subheading={`Gain the tools to protect enterprises of any scale with automated user onboarding, SSH session recording, and audit log streaming.`}
        buttonText={`Enterprise`}
      >
        <FeatureGradient />
      </Feature>
      <Integrations />
      <Homelab />
      <Testimonials />
      <Benefits />
      <Security />
      <Documentation />
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
        <div
          className={cx(
            'space-y-10',
            'pt-24',
            'lg:space-y-[115px]',
            'lg:pt-[185px]'
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
  return (
    <section
      className={cx('overflow-hidden', 'p-top-115', 'p-bottom-175')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-10', 'container')}>
        {/* TODO: Create element animation */}
        <div className={cx('flex', 'justify-center', 'w-full')}>
          <div
            className={cx(
              'w-[654px]',
              'h-[508px]',
              'bg-black-bg',
              'rounded-xl'
            )}
          />
        </div>
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
          >{`Tailscale makes secure networking easy`}</h2>
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
              <p>{`Achieve point-to-point network connectivity that enforces least privelege.`}</p>
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
              <Button variant="underlined">{`How it works`}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Integrations = ({ ...props }): JSX.Element => {
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
            {`100+ integrations means you can incorporate Tailscale `}
            <span className={cx('text-subheading-black')}>
              into any workflow
            </span>
          </h2>
        </div>
        {/* TODO: Shuffling tileboards */}
        {/* <div className={cx('grid', 'gap-[5px]', 'grid-cols-3')}></div> */}
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
                // 'md:-space-x-[30px]'
              )}
            >
              <Button>{`Operating systems`}</Button>
              <Button variant="underlined">{`Identity providers`}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Homelab = ({ ...props }): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-0', 'p-bottom-0')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div className={cx('text-center')}>
          <div className={cx('justify-center', 'text-center')}>
            <h2
              className={cx('t-subheading', 'mb-5', 'text-subheading-black')}
            >{`Homelab`}</h2>
          </div>
          <h3
            className={cx('t-h3', 'text-black', 'mb-3', 'md:mb-6', 'mx-auto')}
          >{`Your home away from home`}</h3>
          <div
            className={cx(
              't-b20',
              'text-body-black',
              'mb-5',
              'lg:mb-[72px]',
              'mx-auto',
              'max-w-[583px]'
            )}
          >
            <div className={cx('content-prose')}>
              <p>{`Access your homelab, personal devices, and dev environments wherever you are - for free.`}</p>
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
              <Button>{`Download for free`}</Button>
              <Button variant="underlined">{`Learn more`}</Button>
            </div>
          </div>
        </div>
        {/* TODO: Add Asset */}
        <div className={cx('h-full', 'w-full')}>
          <div className={cx('w-full')}>
            <SvgHomelab />
          </div>
        </div>
      </div>
    </section>
  )
}

const Testimonials = ({ ...props }): JSX.Element => {
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
        <div className={cx('relative')}></div>
      </div>
    </section>
  )
}

const Benefits = ({ ...props }): JSX.Element => {
  const BenefitsButton = ({ ...props }) => {
    return (
      <a
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
            {/* TODO: Add Image */}
            <div
              className={cx('bg-heading-black', 'w-[138px]', 'h-[138px]')}
            ></div>
            <h4
              className={cx('t-24', 'text-heading-black')}
            >{`Quick deployment`}</h4>
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
            {`Establish private networks in minutes and push out Tailscale to users without having to configure every device.`}
          </div>
        </div>
      </a>
    )
  }

  return (
    <section
      className={cx('overflow-hidden', 'p-top-175', 'p-bottom-175')}
      {...props}
    >
      <div className={cx('space-y-8', 'md:!space-y-20', 'container')}>
        <div className={cx('text-left', 'mx-0')}>
          <h2
            className={cx('t-h3', 'text-black', 'mb-3', 'md:mb-6')}
          >{`Simple, powerful, and reliable`}</h2>
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
          <BenefitsButton />
          <BenefitsButton />
          <BenefitsButton />
        </div>
        <div className={cx('grid', 'gap-8', 'sm:grid-cols-3', 'lg:gap-10')}>
          <div className={cx('text-center')}>
            <h4 className={cx('t-h1')}>{`3 mins`}</h4>
            <div
              className={cx('t-b18', 'mt-4', 'text-subheading-black')}
            >{`to set up your network`}</div>
          </div>
          <div className={cx('text-center')}>
            <h4 className={cx('t-h1')}>{`2.5m`}</h4>
            <div
              className={cx('t-b18', 'mt-4', 'text-subheading-black')}
            >{`devices connected`}</div>
          </div>
          <div className={cx('text-center')}>
            <h4 className={cx('t-h1')}>{`4k+`}</h4>
            <div
              className={cx('t-b18', 'mt-4', 'text-subheading-black')}
            >{`companies running Tailscale`}</div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Security = ({ ...props }): JSX.Element => {
  const SecurityFeature = () => {
    return (
      <div className={cx('max-w-[150px]', 'lg:w-auto', 'lg:max-w-[180px]')}>
        {/* TODO: Add Images */}
        <div className={cx('bg-heading-black', 'w-[180px]', 'w-[211px]')} />
      </div>
    )
  }

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
            >{`Our commitment to security`}</h2>
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
                <p>{`We are committed to always safeguarding your data. Every connection is encrypted end-to-end using WireGuard®, a modern VPN protocol designed for usability, performance, and security. Stay up-to-date on updates via our security bulletin below.`}</p>
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
                <Button>{`Learn more`}</Button>
                <Button variant="underlined">{`Security bulletins`}</Button>
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
              className={cx('flex', 'gap-4', 'md:gap-6', 'md-large:flex-col')}
              style={{
                transform: 'translateX(0px) translateY(20px) translateZ(0px)',
              }}
            >
              <SecurityFeature />
              <SecurityFeature />
              <SecurityFeature />
            </div>{' '}
            <div
              className={cx('flex', 'gap-4', 'md:gap-6', 'md-large:flex-col')}
              style={{
                transform: 'translateX(0px) translateY(-20px) translateZ(0px)',
              }}
            >
              <SecurityFeature />
              <SecurityFeature />
              <SecurityFeature />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Documentation = ({ ...props }): JSX.Element => {
  return (
    <section
      className={cx('overflow-hidden', 'p-top-175', 'p-bottom-0')}
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
                // 'h-full',
                'flex-col',
                'justify-between',
                'rounded-xl',
                'bg-black-4',
                'pb-[42px]',
                'text-white'
              )}
            >
              <div className={cx('px-5', 'px-8', 'xl:p-[50px]')}>
                <div className={cx('max-w-[676px]')}>
                  <h3
                    className={cx('t-36')}
                  >{`Fits into your preferred workflow`}</h3>
                  <div
                    className={cx(
                      't-20',
                      'mt-[15px]',
                      'text-white-70',
                      'opacity-70'
                    )}
                  >{`With 100+ integrations, Tailscale works with all your favorite tools. Provision resources that automatically join the tailnet using Terraform or Pulumi. Integrate ACL management into your existing GitOps workflow. Our docs will help you get started on building your tailnet today.`}</div>
                  <div className={cx('mt-8')}>
                    <Button>{`See docs`}</Button>
                  </div>
                </div>
              </div>
              {/* <div className={cx('pl-5', 'xl:pl-[50px]')}>
                <div
                  className={cx(
                    'bg-white',
                    'w-[790px]',
                    'h-[215px]',
                    'rounded-xl'
                  )}
                />
              </div> */}
            </div>
          </div>
          <div className={cx('flex-[0.35]', 'md:max-w-[400px]')}>
            <a
              className={cx('group', 'w-full')}
              href="https://tailscale.com/kb/1017/install"
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
                <div className={cx('w-400', 'h-430', 'bg-yellow-1')}></div>
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
                >{`GUIDES`}</div>
                <h3
                  className={cx('t-24', 'mt-2', 'md:mt-[10px]')}
                >{`Tailscale quickstart guide`}</h3>
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
                    <span
                      className={cx('transition-colors')}
                    >{`Read guide`}</span>
                    {/* <span
                      className={cx(
                        'block',
                        'will-change-transform',
                        'group-hover:animate-bounceX'
                      )}
                    >
                      <svg>svg</svg>
                    </span> */}
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
