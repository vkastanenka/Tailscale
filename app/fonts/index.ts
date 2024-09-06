import localFont from 'next/font/local'

export const inter = localFont({
  src: [
    {
      path: './Inter_100-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './Inter_200-ExtraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './Inter_300-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Inter_400-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Inter_500-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './Inter_600-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './Inter_700-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Inter_800-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './Inter_900-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})
