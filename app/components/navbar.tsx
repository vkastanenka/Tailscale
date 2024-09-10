'use client'

// components
import Button from './button'
import Link from 'next/link'

// utils
import cx from 'classnames'
import { useState, useEffect } from 'react'

// types
import { Dispatch, SetStateAction } from 'react'

const useScrolled = () => {
  const [windowScrolled, setWindowScrolled] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handler = () => setWindowScrolled(window.scrollY)
      window.addEventListener('scroll', handler)
      return () => window.removeEventListener('scroll', handler)
    }
  })

  return windowScrolled
}

export const navLinks = [
  {
    _type: 'dropdown',
    text: 'Product',
    href: '/',
    columns: [
      {
        heading: 'Meet Tailscale',
        links: [
          {
            text: 'How it works',
            href: 'https://tailscale.com/blog/how-tailscale-works',
          },
          {
            text: 'Why Tailscale',
            href: 'https://tailscale.com/why-tailscale',
          },
          {
            text: 'WireGuard® for Enterprises',
            href: 'https://tailscale.com/wireguard-vpn',
          },
          {
            text: 'Bring Tailscale to Work',
            href: 'https://tailscale.com/bring-tailscale-to-work',
          },
        ],
      },
      {
        heading: 'Explore',
        links: [
          {
            text: 'Integrations',
            href: 'https://tailscale.com/integrations',
          },
          {
            text: 'Features',
            href: 'https://tailscale.com/features',
          },
          {
            text: 'Compare Tailscale',
            href: 'https://tailscale.com/compare',
          },
        ],
      },
    ],
  },
  {
    _type: 'dropdown',
    text: 'Solutions',
    href: '/',
    columns: [
      {
        heading: 'By use-case',
        links: [
          {
            text: 'Remote Access',
            href: 'https://tailscale.com/use-cases/remote-access',
          },
          {
            text: 'Multi-Cloud Networking',
            href: 'https://tailscale.com/use-cases/multi-cloud-networking',
          },
          {
            text: 'Kubernetes Networking',
            href: 'https://tailscale.com/use-cases/kubernetes',
          },
          {
            text: 'Edge and IoT Deployments',
            href: 'https://tailscale.com/use-cases/iot',
          },
          {
            text: 'Zero Trust Networking',
            href: 'https://tailscale.com/use-cases/zero-trust-networking',
          },
          {
            text: 'AI Workloads',
            href: 'https://tailscale.com/use-cases/ai',
          },
          {
            text: 'Secure Saas',
            href: 'https://tailscale.com/use-cases/secure-saas',
          },
          {
            text: 'Business VPN',
            href: 'https://tailscale.com/use-cases/business-vpn',
          },
          {
            text: 'Homelab',
            href: 'https://tailscale.com/use-cases/homelab',
          },
        ],
      },
      {
        heading: 'By role',
        links: [
          {
            text: 'DevOps',
            href: 'https://tailscale.com/solutions/devops',
          },
          {
            text: 'IT',
            href: 'https://tailscale.com/solutions/it',
          },
          {
            text: 'Security',
            href: 'https://tailscale.com/solutions/security',
          },
        ],
      },
    ],
  },
  {
    _type: 'link',
    text: 'Enterprise',
    href: 'https://tailscale.com/enterprise',
  },
  { _type: 'link', text: 'Customers', href: 'https://tailscale.com/customers' },
  {
    _type: 'link',
    text: 'Docs',
    href: 'https://tailscale.com/kb/1017/install',
  },
  { _type: 'link', text: 'Blog', href: 'https://tailscale.com/blog' },
  { _type: 'link', text: 'Pricing', href: 'https://tailscale.com/pricing' },
]

const Navbar = ({
  mobileNavIsVisible,
  setMobileNavVisible,
}: {
  mobileNavIsVisible: boolean
  setMobileNavVisible: Dispatch<SetStateAction<boolean>>
}) => {
  const scrollY = useScrolled()
  const [activeNavItemIdx, setActiveNavItemIdx] = useState<number>()

  return (
    <header
      className={cx(
        'left-0',
        'right-0',
        'top-0',
        'z-[100]',
        'h-[60px]',
        'transition-colors',
        'duration-300',
        'lg:h-[66px]',
        'sticky',
        'flex',
        scrollY > 0 ? 'bg-white' : 'bg-transparent'
      )}
    >
      <div
        className={cx(
          'container',
          'is-wide',
          'flex',
          'items-center',
          'justify-between',
          'py-4',
          'lg:py-3',
          'w-full'
        )}
      >
        <div className={cx('flex', 'gap-[35px]')}>
          <Link
            href="/"
            className={cx(
              'w-[110px]',
              'transition-colors',
              'duration-200',
              'text-heading-black'
            )}
            title="Homepage"
          >
            <svg
              className="transition-colors duration-200"
              width="100%"
              height="100%"
              viewBox="0 0 110 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="2.44719"
                cy="10.1796"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                cx="9.79094"
                cy="10.1796"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="2.44719"
                cy="17.5077"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="17.1269"
                cy="17.5077"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                cx="9.79094"
                cy="17.5077"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                cx="17.1269"
                cy="10.1796"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="2.44719"
                cy="2.85924"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="9.79094"
                cy="2.85924"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <ellipse
                opacity="0.2"
                cx="17.1269"
                cy="2.85924"
                rx="2.44719"
                ry="2.44128"
                fill="#242424"
              ></ellipse>
              <path
                d="M34.3979 18.458C35.0907 18.458 35.6536 18.3933 36.3248 18.2637V15.7584C35.9134 15.9096 35.4588 15.9528 35.0258 15.9528C33.965 15.9528 33.5753 15.4344 33.5753 14.441V9.34402H36.3248V6.83875H33.5753V3.12403H30.5443V6.83875H28.5742V9.34402H30.5443V14.7217C30.5443 17.0974 31.8 18.458 34.3979 18.458Z"
                fill="#242424"
              ></path>
              <path
                d="M41.2747 18.458C42.8984 18.458 43.9809 17.9181 44.5222 17.0758C44.5655 17.443 44.6954 17.9397 44.8686 18.2421H47.5964C47.4449 17.7237 47.3366 16.903 47.3366 16.3631V10.4455C47.3366 8.005 45.583 6.62277 42.617 6.62277C40.3654 6.62277 38.6118 7.46507 37.6376 8.69611L39.3696 10.4023C40.149 9.5384 41.1448 9.08486 42.3572 9.08486C43.8294 9.08486 44.4789 9.58159 44.4789 10.3159C44.4789 10.9422 44.0459 11.3742 41.7077 11.3742C39.4562 11.3742 37.183 12.3028 37.183 14.8945C37.183 17.2918 38.9149 18.458 41.2747 18.458ZM41.8809 16.1687C40.7118 16.1687 40.1706 15.672 40.1706 14.7865C40.1706 14.009 40.8201 13.4907 41.9026 13.4907C43.6345 13.4907 44.1108 13.3827 44.4789 13.0155V13.9442C44.4789 15.1753 43.4397 16.1687 41.8809 16.1687Z"
                fill="#242424"
              ></path>
              <path
                d="M49.3069 5.39173H52.4677V2.5625H49.3069V5.39173ZM49.3718 18.2421H52.4028V6.83875H49.3718V18.2421Z"
                fill="#242424"
              ></path>
              <path
                d="M54.6109 18.2421H57.6418V2.90805H54.6109V18.2421Z"
                fill="#242424"
              ></path>
              <path
                d="M63.9416 18.458C67.2757 18.458 68.986 16.7087 68.986 14.8729C68.986 13.2099 68.1417 11.9789 65.3705 11.4821C63.4221 11.1366 62.2097 10.7046 62.2097 10.0351C62.2097 9.45201 62.9025 9.04166 64.0715 9.04166C65.1107 9.04166 65.9767 9.38722 66.6262 10.1431L68.553 8.52333C67.5788 7.31389 65.9767 6.62277 64.0715 6.62277C61.1489 6.62277 59.3303 8.17777 59.3303 10.0783C59.3303 12.1517 61.2354 13.0803 63.2922 13.4475C65.0025 13.7499 65.9551 14.0738 65.9551 14.8081C65.9551 15.4344 65.2839 15.9528 64.0066 15.9528C62.7509 15.9528 61.7767 15.3696 61.322 14.5058L58.7674 15.7152C59.3952 17.2702 61.5385 18.458 63.9416 18.458Z"
                fill="#242424"
              ></path>
              <path
                d="M75.7621 18.458C77.9271 18.458 79.4859 17.5942 80.6549 15.6504L78.2302 14.4194C77.7755 15.3265 77.0395 15.9528 75.7621 15.9528C73.8353 15.9528 72.7961 14.3978 72.7961 12.5188C72.7961 10.6399 73.9003 9.12805 75.7621 9.12805C76.9312 9.12805 77.7106 9.75437 78.1652 10.7046L80.6116 9.40882C79.7889 7.61625 78.1652 6.62277 75.7621 6.62277C71.8003 6.62277 69.7652 9.5168 69.7652 12.5188C69.7652 15.78 72.2333 18.458 75.7621 18.458Z"
                fill="#242424"
              ></path>
              <path
                d="M85.4829 18.458C87.1067 18.458 88.1891 17.9181 88.7304 17.0758C88.7737 17.443 88.9036 17.9397 89.0768 18.2421H91.8046C91.6531 17.7237 91.5448 16.903 91.5448 16.3631V10.4455C91.5448 8.005 89.7912 6.62277 86.8252 6.62277C84.5737 6.62277 82.8201 7.46507 81.8458 8.69611L83.5778 10.4023C84.3572 9.5384 85.353 9.08486 86.5654 9.08486C88.0376 9.08486 88.6871 9.58159 88.6871 10.3159C88.6871 10.9422 88.2541 11.3742 85.9159 11.3742C83.6644 11.3742 81.3912 12.3028 81.3912 14.8945C81.3912 17.2918 83.1231 18.458 85.4829 18.458ZM86.0891 16.1687C84.9201 16.1687 84.3788 15.672 84.3788 14.7865C84.3788 14.009 85.0283 13.4907 86.1108 13.4907C87.8427 13.4907 88.319 13.3827 88.6871 13.0155V13.9442C88.6871 15.1753 87.6479 16.1687 86.0891 16.1687Z"
                fill="#242424"
              ></path>
              <path
                d="M93.3263 18.2421H96.3573V2.90805H93.3263V18.2421Z"
                fill="#242424"
              ></path>
              <path
                d="M103.631 18.458C105.861 18.458 107.658 17.5726 108.654 15.996L106.359 14.5274C105.753 15.4776 104.952 15.996 103.631 15.996C102.138 15.996 101.055 15.1753 100.774 13.5771H109.39V12.5188C109.39 9.5168 107.55 6.62277 103.61 6.62277C99.8643 6.62277 97.8293 9.5384 97.8293 12.5404C97.8293 16.8167 101.055 18.458 103.631 18.458ZM100.882 11.2014C101.358 9.75437 102.354 9.08486 103.675 9.08486C105.168 9.08486 106.078 9.97034 106.381 11.2014H100.882Z"
                fill="#242424"
              ></path>
            </svg>
          </Link>
          <nav className={cx('relative', 'hidden', 'lg:flex', 'lg:gap-6')}>
            {navLinks.map((link, i) => {
              return (
                <NavItem
                  key={i}
                  navItemIdx={i}
                  navItemData={link}
                  activeNavItemIdx={activeNavItemIdx}
                  setActiveNavItemIdx={setActiveNavItemIdx}
                />
              )
            })}
          </nav>
        </div>
        <div
          className={cx(
            'hidden',
            'lg:flex',
            'lg:items-center',
            'lg:gap-[25px]'
          )}
        >
          <Link
            href="https://tailscale.com/download"
            className={cx(
              't-14',
              'font-medium',
              'opacity-80',
              'transition-colors',
              'duration-300',
              'text-heading-[#302c2ccc]',
              'hover:text-[#000]'
            )}
          >
            Download
          </Link>
          <Link
            href="https://login.tailscale.com/welcome"
            className={cx(
              't-14',
              'font-medium',
              'opacity-80',
              'transition-colors',
              'duration-300',
              'text-heading-[#302c2ccc]',
              'hover:text-[#000]'
            )}
          >
            Log in
          </Link>
          <Button includeIcon={false} href="https://login.tailscale.com/start">
            Get started
          </Button>
        </div>
        <button
          type="button"
          aria-label="Open Menu"
          className={cx('flex', 'lg:hidden')}
          onClick={() => setMobileNavVisible((prevState) => !prevState)}
        >
          <svg
            width="55"
            height="30"
            viewBox="0 0 55 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              className="fill-black-4"
              x="0.5"
              y="0.5"
              width="54"
              height="29"
              rx="5.5"
            ></rect>
            <line
              className={cx(
                'origin-center',
                'transition',
                'duration-300',
                ...(mobileNavIsVisible
                  ? ['translate-y-[2.2px]', 'rotate-45']
                  : ['rotate-0'])
              )}
              x1="17"
              y1="11.5"
              x2="38"
              y2="11.5"
              stroke="white"
            ></line>
            <line
              className={cx(
                'origin-center',
                'transition',
                'duration-300',
                ...(mobileNavIsVisible
                  ? ['translate-y-[-2.2px]', '-rotate-45']
                  : ['rotate-0'])
              )}
              x1="17"
              y1="17.5"
              x2="38"
              y2="17.5"
              stroke="white"
            ></line>
            <rect
              x="0.5"
              y="0.5"
              width="54"
              height="29"
              rx="5.5"
              stroke="#242424"
            ></rect>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Navbar

export interface NavItemData {
  _type: string
  text: string
  href?: string
  columns?: { heading: string; links: { text: string; href: string }[] }[]
}

const NavItem = ({
  navItemIdx,
  activeNavItemIdx,
  setActiveNavItemIdx,
  navItemData,
  ...props
}: {
  navItemIdx: number
  activeNavItemIdx?: number
  setActiveNavItemIdx: Dispatch<SetStateAction<number | undefined>>
  navItemData: NavItemData
}) => {
  const [dropdownIsActive, setDropdownIsActive] = useState<boolean>(false)

  const navItemStyle = cx(
    'group',
    'relative',
    'text-[14px]',
    'font-medium',
    'leading-normal',
    'tracking-[-0.28px]',
    'transition-colors',
    'duration-300',
    'text-[#302c2ccc]',
    'hover:text-[#302c2c]'
  )

  useEffect(() => {
    if (activeNavItemIdx !== navItemIdx) {
      setDropdownIsActive(false)
    }
  }, [activeNavItemIdx, navItemIdx])

  if (navItemData._type === 'dropdown') {
    return (
      <div
        role="button"
        aria-haspopup="true"
        tabIndex={0}
        className={navItemStyle}
        onClick={() => {
          setActiveNavItemIdx(navItemIdx)
          setDropdownIsActive((prevState) => !prevState)
        }}
        {...props}
      >
        <span>{navItemData.text}</span>
        <NavItemUnderline />
        {dropdownIsActive && activeNavItemIdx === navItemIdx ? (
          <div
            className={cx(
              'left-[-110px]',
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
        ) : undefined}
      </div>
    )
  }

  if (navItemData._type === 'link' && navItemData.href) {
    return (
      <Link href={navItemData.href} className={navItemStyle} {...props}>
        <span>{navItemData.text}</span>
        <NavItemUnderline />
      </Link>
    )
  }

  return (
    <div className={navItemStyle} {...props}>
      <span>{navItemData.text}</span>
      <NavItemUnderline />
    </div>
  )
}

const NavItemUnderline = () => {
  return (
    <div
      className={cx(
        'absolute',
        'bottom-[-6px]',
        'left-[25%]',
        'right-0',
        'z-[10]',
        'flex',
        'h-[3px]',
        'w-[50%]',
        'items-center',
        'justify-center',
        'rounded-[5px]',
        'opacity-0',
        'group-hover:opacity-100',
        'bg-[#302c2ccc]'
      )}
    />
  )
}
