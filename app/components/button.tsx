import cx from 'classnames'
import { AnchorHTMLAttributes, HTMLAttributes } from 'react'

const Button = ({
  variant = 'contained',
  ...props
}: {
  variant?: 'contained' | 'underlined'
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
    // TODO: Add tracking props
    <a
      data-track="Link Clicked"
      data-track-properties='{"label": "Get Started"}'
      href="https://login.tailscale.com/start"
      {...props}
    >
      <ButtonVariant>{props.children}</ButtonVariant>
    </a>
  )
}

export default Button

const ButtonContained = ({
  includeIcon = true,
  ...props
}: {
  includeIcon?: boolean
} & HTMLAttributes<HTMLDivElement>): JSX.Element => {
  return (
    <div
      className={cx(
        'button-contained',
        'inline-flex',
        'shrink-0',
        'border',
        'transition-colors',
        'duration-200',
        'w-full',
        'xs:w-auto',
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
        'hover:border-black-4'
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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
                fill-rule="evenodd"
                clip-rule="evenodd"
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

const ButtonUnderlined = ({ ...props }): JSX.Element => {
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
        'text-black'
      )}
      {...props}
    >
      <span className={cx('transition-colors')}>{props.children}</span>
      <span
        className={cx(
          'block',
          'will-change-transform',
          'group-hover:animate-bounceX'
        )}
      >
        {/* TODO: Add SVG */}
      </span>
      <div
        className={cx(
          'absolute',
          'bottom-[-2px]',
          'left-0',
          'right-0',
          'h-1.5px',
          'w-full',
          'overflow-hidden',
          'rounded'
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
