// components
import Link from 'next/link'

// utilities
import cx from 'classnames'

// types
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'
import { Url } from 'next/dist/shared/lib/router/router'

const Button = ({
  includeIcon = true,
  variant = 'contained',
  buttonStyle,
  ...props
}: {
  includeIcon?: boolean
  variant?: 'contained' | 'underlined'
  buttonStyle?: string
} & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  let ButtonVariant = ButtonContained

  switch (variant) {
    case 'underlined':
      ButtonVariant = ButtonUnderlined
      break
    default:
      ButtonVariant = ButtonContained
  }

  return (
    <Link href={props.href as Url} {...props}>
      <ButtonVariant buttonStyle={buttonStyle} includeIcon={includeIcon}>
        {props.children}
      </ButtonVariant>
    </Link>
  )
}

export default Button

const ButtonContained = ({
  buttonStyle,
  includeIcon = true,
  ...props
}: {
  buttonStyle?: string
  includeIcon?: boolean
} & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cx(
        'button-contained',
        'flex',
        'xs:inline-flex',
        'shrink-0',
        'border',
        'transition-colors',
        'duration-200',
        'items-center',
        'justify-center',
        'text-center',
        'relative',
        'focus:outline-none',
        'group',
        'transition-all',
        'overflow-hidden',
        'font-body',
        'font-medium',
        'rounded-lg',
        'group',
        'gap-[11px]',
        'py-2',
        'px-[17px]',
        'leading-[1.46]',
        'tracking-[-0.16px]',
        'bg-heading-black',
        'border-heading-black',
        'text-white',
        'hover:bg-black-4',
        'hover:border-black-4',
        buttonStyle
      )}
      {...props}
    >
      <div>{props.children}</div>
      {includeIcon ? (
        <div className={cx('relative')}>
          <span
            className={cx(
              'button-contained_icon-start',
              'block',
              'will-change-transform',
              'will-change-transform',
              'transition-all'
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
          <span
            className={cx(
              'button-contained_icon-end',
              'absolute',
              'inset-0',
              'block',
              'will-change-transform',
              'transition-all'
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
      ) : undefined}
    </div>
  )
}

const ButtonUnderlined = ({
  buttonStyle,
  includeIcon = true,
  ...props
}: {
  buttonStyle?: string
  includeIcon?: boolean
} & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cx(
        'underlinex',
        'underline-offset-8x',
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
        'text-black',
        buttonStyle
      )}
      {...props}
    >
      <span className={cx('transition-colors')}>{props.children}</span>
      {includeIcon ? (
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
      ) : undefined}
      <div
        className={cx(
          'absolute',
          'bottom-[-2px]',
          'left-0',
          'right-0',
          'overflow-hidden',
          'h-[1.5px]',
          'w-full'
        )}
      >
        <div
          className={cx(
            'absolute',
            'inset-0',
            'h-full',
            'w-full',
            'overflow-hidden',
            'rounded',
            'transition-transform',
            'duration-300',
            'will-change-transform',
            'group-hover:-translate-x-7',
            'bg-heading-black'
          )}
        />
      </div>
    </div>
  )
}
