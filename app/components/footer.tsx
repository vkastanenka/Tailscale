// utils
import cx from 'classnames'
import Link from 'next/link'

const footerColumns = [
  {
    heading: 'Product',
    links: [
      {
        text: 'How it works',
        href: 'https://tailscale.com/blog/how-tailscale-works',
      },
      { text: 'Pricing', href: 'https://tailscale.com/pricing' },
      { text: 'Integrations', href: 'https://tailscale.com/integrations' },
      { text: 'Features', href: 'https://tailscale.com/features' },
      { text: 'Compare Tailscale', href: 'https://tailscale.com/compare' },
    ],
  },
  {
    heading: 'Use Cases',
    links: [
      {
        text: 'Business VPN',
        href: 'https://tailscale.com/use-cases/business-vpn',
      },
      {
        text: 'Remote Access',
        href: 'https://tailscale.com/use-cases/remote-access',
      },
      {
        text: 'Site-to-Site Networking',
        href: 'https://tailscale.com/use-cases/site-to-site-networking',
      },
      { text: 'Homelab', href: 'https://tailscale.com/use-cases/homelab' },
      { text: 'Enterprise', href: 'https://tailscale.com/enterprise' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { text: 'Blog', href: 'https://tailscale.com/blog' },
      {
        text: 'Events & Webinars',
        href: 'https://tailscale.com/events-webinars',
      },
    ],
  },
  {
    heading: 'Company',
    links: [
      { text: 'Company', href: 'https://tailscale.com/company' },
      { text: 'Careers', href: 'https://tailscale.com/careers' },
      { text: 'Press', href: 'https://tailscale.com/press' },
    ],
  },
  {
    heading: 'Help & Support',
    links: [
      { text: 'Support', href: 'https://tailscale.com/contact/support' },
      { text: 'Sales', href: 'https://tailscale.com/contact/sales' },
      { text: 'Security', href: 'https://tailscale.com/security' },
      { text: 'Legal', href: 'https://tailscale.com/legal' },
      { text: 'Open Source', href: 'https://tailscale.com/opensource' },
      { text: 'Changelog', href: 'https://tailscale.com/changelog' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      {
        text: 'SSH keys',
        href: 'https://tailscale.com/learn/generate-ssh-keys',
      },
      {
        text: 'Docker SSH',
        href: 'https://tailscale.com/learn/ssh-into-docker-container',
      },
      { text: 'DevSecOps', href: 'https://tailscale.com/learn/devsecops' },
      { text: 'Multicloud', href: 'https://tailscale.com/learn/multicloud' },
      {
        text: 'NAT Traversal',
        href: 'https://tailscale.com/blog/how-nat-traversal-works',
      },
      {
        text: 'MagicDNS',
        href: 'https://tailscale.com/blog/2021-09-private-dns-with-magicdns',
      },
      {
        text: 'PAM',
        href: 'https://tailscale.com/learn/privileged-access-management',
      },
      {
        text: 'PoLP',
        href: 'https://tailscale.com/learn/principle-of-least-privilege',
      },
      { text: 'All articles', href: 'https://tailscale.com/learn' },
    ],
  },
]

const Footer = () => {
  return (
    <footer className={cx('pb-16', 'md:pb-28', 'md:pt-20')}>
      <div
        className={cx(
          'container',
          'grid',
          'gap-x-4',
          'gap-y-8',
          'pb-8',
          'xxs:grid-cols-2',
          'sm:grid-cols-3',
          'sm:gap-5',
          'md:pb-[110px]',
          'lg:grid-cols-6'
        )}
      >
        {footerColumns.map((column, i) => {
          return (
            <div key={i}>
              <p
                className={cx('t-16', '!leading-[1.05]', 'text-heading-black')}
              >
                {column.heading}
              </p>
              <div
                className={cx(
                  'mt-4',
                  'flex',
                  'flex-col',
                  'gap-3',
                  'lg:mt-8',
                  'lg:gap-4'
                )}
              >
                {column.links.map((link, i) => {
                  return (
                    <Link
                      key={i}
                      href={link.href}
                      className={cx(
                        'text-[14px]',
                        '!leading-[1.05]',
                        '!tracking-[0.08px]',
                        'transition-colors',
                        'duration-300',
                        'md:text-[16px]',
                        'text-[#302c2c99]',
                        'hover:text-black'
                      )}
                    >
                      {link.text}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <div className={cx('container')}>
        <div
          className={cx(
            'grid',
            'grid-cols-1',
            'gap-x-5',
            'gap-y-8',
            'border-t',
            'border-stroke-[rgb(229,229,229)]',
            'pt-8',
            'xxs:grid-cols-2',
            'md:grid-cols-12',
            'md:pt-[70px]',
            'lg:gap-y-[60px]'
          )}
        >
          <div className={cx('xxs:col-span-2', 'md:col-span-4')}>
            <Link
              href="/"
              title="Homepage"
              className={cx('block', 'w-[160px]')}
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
          </div>
          <div
            className={cx('flex', 'flex-col', 'gap-[14px]', 'md:col-span-2')}
          >
            <Link
              href="https://tailscale.com/terms"
              className={cx(
                't-14',
                '!leading-[1.05]',
                'underline',
                'transition-colors',
                'duration-300',
                'text-[#302c2c99]',
                'hover:text-[#000]'
              )}
            >
              Terms of Service
            </Link>
            <Link
              href="https://tailscale.com/privacy-policy"
              className={cx(
                't-14',
                '!leading-[1.05]',
                'underline',
                'transition-colors',
                'duration-300',
                'text-[#302c2c99]',
                'hover:text-[#000]'
              )}
            >
              Privacy Policy
            </Link>
          </div>
          <div className={cx('md:col-span-3')}>
            <div
              className={cx(
                't-14',
                'max-w-[250px]',
                '!leading-[1.35]',
                'text-[#302c2c99]'
              )}
            >
              {`WireGuard is a registered trademark of Jason A. Donenfeld.`}
            </div>
          </div>
          <div
            className={cx(
              'flex',
              'gap-[6px]',
              'xxs:col-span-2',
              'md:col-span-3',
              'md:flex',
              'md:justify-end'
            )}
          >
            <Link
              href="https://x.com/tailscale"
              className={cx(
                'group',
                'transition-colors',
                'duration-300',
                'text-heading-black',
                'hover:text-grey-3'
              )}
            >
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
            </Link>
            <Link
              href="https://x.com/tailscale"
              className={cx(
                'group',
                'transition-colors',
                'duration-300',
                'text-heading-black',
                'hover:text-grey-3'
              )}
            >
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
            </Link>
            <Link
              href="https://x.com/tailscale"
              className={cx(
                'group',
                'transition-colors',
                'duration-300',
                'text-heading-black',
                'hover:text-grey-3'
              )}
            >
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
            </Link>
            <Link
              href="https://x.com/tailscale"
              className={cx(
                'group',
                'transition-colors',
                'duration-300',
                'text-heading-black',
                'hover:text-grey-3'
              )}
            >
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
                  className="transition-colors duration-300 group-hover:fill-heading-black"
                  fill="white"
                  d="M19.9516 10.8781C19.7667 9.48128 18.5693 8.38051 17.1498 8.16721C16.9104 8.13117 16.003 8 13.9011 8H13.8854C11.7829 8 11.3319 8.13117 11.0924 8.16721C9.71243 8.3746 8.45223 9.3637 8.14648 10.777C7.99942 11.4731 7.98373 12.2447 8.01105 12.9526C8.04999 13.9677 8.05755 14.981 8.14823 15.992C8.21091 16.6635 8.32027 17.3297 8.47548 17.9855C8.76612 19.1968 9.94262 20.2048 11.0953 20.616C12.3294 21.0449 13.6566 21.1161 14.9282 20.8216C15.0681 20.7886 15.2065 20.7502 15.3432 20.7064C15.6519 20.6066 16.014 20.4949 16.2803 20.2987C16.2839 20.296 16.2869 20.2924 16.289 20.2883C16.2911 20.2842 16.2923 20.2797 16.2925 20.2751V19.2955C16.2924 19.2911 16.2914 19.2869 16.2895 19.283C16.2876 19.2791 16.2849 19.2758 16.2815 19.2731C16.2782 19.2704 16.2743 19.2686 16.2702 19.2676C16.266 19.2667 16.2617 19.2667 16.2576 19.2677C15.4429 19.4655 14.608 19.5647 13.7703 19.5631C12.3288 19.5631 11.941 18.8677 11.83 18.5782C11.7408 18.3279 11.6841 18.0669 11.6614 17.8018C11.6612 17.7973 11.662 17.7929 11.6638 17.7888C11.6656 17.7847 11.6683 17.7811 11.6717 17.7783C11.6751 17.7755 11.6791 17.7735 11.6834 17.7726C11.6876 17.7716 11.6921 17.7717 11.6963 17.7728C12.4975 17.9693 13.3188 18.0685 14.1429 18.0682C14.3411 18.0682 14.5387 18.0682 14.737 18.0629C15.5659 18.0393 16.4395 17.9962 17.255 17.8343C17.2754 17.8301 17.2957 17.8266 17.3132 17.8213C18.5995 17.5701 19.8237 16.7819 19.9481 14.786C19.9527 14.7074 19.9644 13.963 19.9644 13.8814C19.965 13.6043 20.0521 11.9156 19.9516 10.8781ZM17.9718 15.8584H16.6191V12.4905C16.6191 11.7815 16.3285 11.4199 15.7373 11.4199C15.0875 11.4199 14.762 11.8477 14.762 12.6926V14.5361H13.4175V12.6926C13.4175 11.8477 13.0914 11.4199 12.4415 11.4199C11.8538 11.4199 11.5603 11.7815 11.5597 12.4905V15.8584H10.2083V12.3883C10.2083 11.6793 10.3863 11.116 10.7425 10.6985C11.1098 10.2819 11.5917 10.068 12.1898 10.068C12.8821 10.068 13.4053 10.3386 13.754 10.8793L14.0906 11.4536L14.4277 10.8793C14.7765 10.3386 15.2996 10.068 15.9908 10.068C16.5883 10.068 17.0702 10.2819 17.4387 10.6985C17.7949 11.1156 17.9729 11.6789 17.9729 12.3883L17.9718 15.8584Z"
                ></path>
              </svg>
            </Link>
            <Link
              href="https://x.com/tailscale"
              className={cx(
                'group',
                'transition-colors',
                'duration-300',
                'text-heading-black',
                'hover:text-grey-3'
              )}
            >
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
            </Link>
          </div>
          <div
            className={cx(
              't-14',
              'flex',
              'flex-wrap',
              'tracking-[0.07px]',
              'xxs:col-span-2',
              'md:col-span-12',
              'text-[#302c2c99]'
            )}
          >
            © 2024 Tailscale Inc. All rights reserved. Tailscale is a
            registered trademark of Tailscale Inc.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
