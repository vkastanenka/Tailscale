'use client'

// components
import Button from './button'
import Link from 'next/link'

// utils
import cx from 'classnames'
import { navLinks } from './navbar'
import { useState } from 'react'

// types
import { NavItemData } from './navbar'

const MobileNav = ({ mobileNavIsVisible }: { mobileNavIsVisible: boolean }) => {
  return (
    <div
      className={cx(
        'fixed',
        'inset-0',
        'z-[90]',
        'overflow-auto',
        'bg-white',
        'px-5',
        'pb-20',
        'pt-24',
        'transition-opacity',
        'duration-200',
        'will-change-[opacity]',
        'lg:hidden',
        ...(mobileNavIsVisible
          ? ['opacity-1']
          : ['pointer-events-none', 'opacity-0'])
      )}
    >
      <div className={cx('space-y-[22px]')}>
        {navLinks.map((link, i) => {
          return <MobileNavItem key={i} navItemData={link} />
        })}
      </div>
      <Button
        includeIcon={false}
        href="https://login.tailscale.com/start"
        className={cx('mt-[42px]', 'block')}
        buttonStyle={cx('!flex')}
      >
        Get started
      </Button>
      <Button
        includeIcon={false}
        href="https://login.tailscale.com/login?next_url=%2Fwelcome"
        className={cx('mt-[15px]', 'block')}
        buttonStyle={cx(
          '!flex',
          '!bg-grey-3',
          '!text-heading-black',
          '!border-grey-3'
        )}
      >
        Login
      </Button>
      <div
        className={cx(
          't-14',
          'mx-auto',
          'mt-[55px]',
          'max-w-[264px]',
          'text-center',
          'text-[#24242499]'
        )}
      >
        WireGuard is a registered trademark of Jason A. Donenfield
      </div>
      <div
        className={cx(
          'mt-[35px]',
          'flex',
          'flex-wrap',
          'justify-center',
          'gap-[14px]'
        )}
      >
        <Link
          className={cx(
            't-16',
            '!leading-[1.05]',
            'underline',
            'underline-offset-4'
          )}
          href="https://tailscale.com/terms"
        >
          Terms of Service
        </Link>
        <Link
          className={cx(
            't-16',
            '!leading-[1.05]',
            'underline',
            'underline-offset-4'
          )}
          href="https://tailscale.com/privacy-policy"
        >
          Privacy Policy
        </Link>
      </div>
      <div
        className={cx(
          'mt-[60px]',
          'flex',
          'items-center',
          'justify-center',
          'gap-[8px]'
        )}
      >
        <span className="cursor-pointer scale-[1.1] text-heading-black transition-colors duration-300 hover:text-red-1">
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.988281"
              width="28"
              height="28"
              rx="14"
              fill="currentColor"
            ></rect>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M8.03169 9L13.0509 15.0672L8 20H9.13675L13.5587 15.6812L17.1317 20H21L15.6985 13.5916L20.3997 9H19.263L15.1906 12.9775L11.9001 9H8.03169ZM9.70337 9.75698H11.4805L19.3281 19.2429H17.551L9.70337 9.75698Z"
              fill="white"
            ></path>
          </svg>
        </span>
        <span className="cursor-pointer scale-[1.1] text-heading-black transition-colors duration-300 hover:text-red-1">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.21875"
              width="27.2195"
              height="27.2195"
              rx="13.6098"
              fill="currentColor"
            ></rect>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M12.434 19.6598L12.4179 14.8081H10.3008V12.7289H12.4179V11.3427C12.4179 9.47188 13.5974 8.57031 15.2966 8.57031C16.1106 8.57031 16.8101 8.62983 17.014 8.65643V10.6115L15.8355 10.612C14.9114 10.612 14.7324 11.0433 14.7324 11.6762V12.7289H17.3577L16.652 14.8081H14.7324V19.6598H12.434Z"
              fill="#fff"
            ></path>
          </svg>
        </span>
        <span className="cursor-pointer scale-[1.1] text-heading-black transition-colors duration-300 hover:text-red-1">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.439453"
              width="27.2195"
              height="27.2195"
              rx="13.6098"
              fill="currentColor"
            ></rect>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M8.68685 18.6518H10.8825V11.5871H8.68685V18.6518Z"
              fill="white"
            ></path>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M8.50195 9.34036C8.50195 10.0352 9.07976 10.6143 9.77312 10.6143C10.4896 10.6143 11.0443 10.0584 11.0443 9.34036C11.0443 8.64547 10.4665 8.06641 9.77312 8.06641C9.07976 8.06641 8.50195 8.64547 8.50195 9.34036Z"
              fill="white"
            ></path>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M16.8917 18.6518H19.0873V14.7836C19.0873 12.8843 18.6713 11.425 16.4525 11.425C15.3894 11.425 14.6729 12.0041 14.3724 12.56H14.3493V11.5871H12.2461V18.6518H14.4418V15.1542C14.4418 14.2509 14.6267 13.3475 15.7592 13.3475C16.8686 13.3475 16.8917 14.413 16.8917 15.2237V18.6518Z"
              fill="white"
            ></path>
          </svg>
        </span>
        <span className="cursor-pointer scale-[1.1] text-heading-black transition-colors duration-300 hover:text-red-1">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.658203"
              width="27.2195"
              height="27.2195"
              rx="13.6098"
              fill="currentColor"
            ></rect>
            <path
              className=" transition-colors duration-300 group-hover:fill-heading-black"
              d="M19.6754 11.46C19.5368 10.5863 19.121 9.98138 18.1506 9.84696C16.6258 9.57813 14.2693 9.57812 14.2693 9.57812C14.2693 9.57812 11.9128 9.57813 10.388 9.84696C9.4177 9.98138 8.93254 10.5863 8.86323 11.46C8.72461 12.3337 8.72461 13.6106 8.72461 13.6106C8.72461 13.6106 8.72461 14.8876 8.86323 15.7613C9.00185 16.635 9.4177 17.2399 10.388 17.3743C11.9128 17.6432 14.2693 17.6432 14.2693 17.6432C14.2693 17.6432 16.6258 17.6432 18.1506 17.3743C19.121 17.1727 19.5368 16.635 19.6754 15.7613C19.814 14.8876 19.814 13.6106 19.814 13.6106C19.814 13.6106 19.814 12.3337 19.6754 11.46ZM12.8831 15.6269V11.5944L16.3486 13.6106L12.8831 15.6269Z"
              fill="white"
            ></path>
          </svg>
        </span>
      </div>
      <div
        className={cx(
          't-14',
          'mx-auto',
          'mt-10',
          'max-w-[264px]',
          'text-center',
          'text-[#24242499]'
        )}
      >
        © 2024 Tailscale Inc. All rights reserved. Tailscale is a registered
        trademark of Tailscale Inc.
      </div>
    </div>
  )
}

export default MobileNav

const MobileNavItem = ({ navItemData }: { navItemData: NavItemData }) => {
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false)

  const navLinkStyle = cx(
    't-20',
    'flex',
    'w-full',
    'items-center',
    'justify-between',
    'font-medium',
    'cursor-pointer'
  )

  const MobileNavItemContainer = ({ ...props }) => {
    return (
      <div
        className={cx(
          'relative',
          'overflow-hidden',
          'border-b',
          'border-stroke-[rgb(229, 229, 229)]',
          'pb-6'
        )}
        {...props}
      />
    )
  }

  if (navItemData._type === 'dropdown') {
    return (
      <MobileNavItemContainer
        onClick={() => setDropdownVisible((prevState) => !prevState)}
      >
        <div className={navLinkStyle}>
          <span>{navItemData.text}</span>
          <span
            className={cx(
              'flex',
              'h-[22px]',
              'w-[22px]',
              'items-center',
              'justify-center',
              'rounded-full',
              'transition',
              'duration-300',
              'bg-black-4',
              'text-white',
              dropdownVisible ? '-rotate-90' : 'rotate-90'
            )}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.83344 7.82482L8.83656 4.99835L5.83344 2.17188L5.24469 2.72658L7.24156 4.60599H1.16406V5.3907H7.24156L5.24469 7.27011L5.83344 7.82482Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </div>
        {dropdownVisible ? (
          <div
            className={cx(
              'flex',
              'flex-col',
              'transition',
              'duration-300',
              'will-change-[height]',
              'opacity-1',
              'h-auto'
            )}
          >
            <div
              className={cx(
                'left-110px',
                'top-[57px]',
                'z-[100]',
                'flex',
                'flex-col',
                'justify-between',
                'gap-8',
                'rounded-2xl',
                'bg-white',
                'py-[30px]',
                'will-change-transform',
                'lg:absolute',
                'lg:flex-row',
                'lg:gap-[50px]',
                'lg:border',
                'lg:px-[30px]',
                'xl:left-[-40px]'
              )}
            >
              {navItemData.columns?.map((column, i) => (
                <div key={i} className={cx('flex-1', 'lg:min-w-[266px]')}>
                  <div
                    className={cx(
                      't-14',
                      'relative',
                      'z-[10]',
                      'mb-2',
                      'text-[#706E6D]',
                      'lg:mb-[15px]',
                      'lg:ml-3'
                    )}
                  >
                    {column.heading}
                  </div>
                  <ul>
                    {column.links.map((link, i) => (
                      <li
                        key={i}
                        className={cx('group', 'relative', 'whitespace-nowrap')}
                      >
                        <Link
                          href={link.href}
                          className={cx(
                            'relative',
                            'z-[10]',
                            'inline-block',
                            'w-full',
                            'rounded-lg',
                            'px-1',
                            'py-2',
                            'hover:bg-[#F9F7F6]',
                            'lg:p-[12px]'
                          )}
                        >
                          <div className={cx('flex', 'items-center', 'gap-2')}>
                            <div
                              className={cx(
                                't-16',
                                'relative',
                                'z-[10]',
                                'text-heading-black'
                              )}
                            >
                              {link.text}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ) : undefined}
      </MobileNavItemContainer>
    )
  }

  if (navItemData._type === 'link' && navItemData.href) {
    return (
      <MobileNavItemContainer>
        <Link href={navItemData.href} className={navLinkStyle}>
          <span>{navItemData.text}</span>
          <span
            className={cx(
              'flex',
              'h-[22px]',
              'w-[22px]',
              'items-center',
              'justify-center',
              'rounded-full',
              'text-black',
              'transition-transform',
              'duration-300',
              '-rotate-0',
              'bg-grey-2'
            )}
          >
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.83344 7.82482L8.83656 4.99835L5.83344 2.17188L5.24469 2.72658L7.24156 4.60599H1.16406V5.3907H7.24156L5.24469 7.27011L5.83344 7.82482Z"
                fill="currentColor"
              ></path>
            </svg>
          </span>
        </Link>
      </MobileNavItemContainer>
    )
  }

  return (
    <MobileNavItemContainer>
      <div className={navLinkStyle}>
        <span>{navItemData.text}</span>
        <span
          className={cx(
            'flex',
            'h-[22px]',
            'w-[22px]',
            'items-center',
            'justify-center',
            'rounded-full',
            'text-black',
            'transition-transform',
            'duration-300',
            '-rotate-0',
            'bg-grey-2'
          )}
        >
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.83344 7.82482L8.83656 4.99835L5.83344 2.17188L5.24469 2.72658L7.24156 4.60599H1.16406V5.3907H7.24156L5.24469 7.27011L5.83344 7.82482Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      </div>
    </MobileNavItemContainer>
  )
}
