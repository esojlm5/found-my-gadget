import { DripsyProvider, makeTheme } from 'dripsy'
import { Platform } from 'react-native'
import { useFonts } from 'expo-font'

import { GlobalProvider } from './globalContext'

const rootFontName = 'ralewayRegular'
const headingFontName = 'sonoRegular'

export function Fonts({ children }) {
  const [loaded] = useFonts({
    [rootFontName]: require('../assets/fonts/Raleway-Regular.ttf'),
    [headingFontName]: require('../assets/fonts/Sono-Regular.ttf'),
  })

  return <>{loaded && children}</>
}

const webFont = (font: string) =>
  Platform.select({
    web: `${font}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, Inter-serif`,
    default: font,
  })

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  customFonts: {
    [rootFontName]: {
      400: webFont(rootFontName),
      default: webFont(rootFontName),
      normal: webFont(rootFontName),
      // 500: 'dripsyBold',
      // 600: 'dripsyBold',
      // bold: 'dripsyBold',
      // 700: 'dripsyBold',
      // 800: 'dripsyBold',
      // 900: 'dripsyBold',
    },
    [headingFontName]: {
      400: webFont(headingFontName),
      default: webFont(headingFontName),
      normal: webFont(headingFontName),
    },
  },
  fonts: {
    root: rootFontName,
    heading: rootFontName,
  },
  text: {
    // h1: {
    //   fontFamily: headingFontName,
    // },
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <Fonts>
      <GlobalProvider>
        <DripsyProvider
          theme={theme}
          // this disables SSR, since react-native-web doesn't have support for it (yet)
          ssr
        >
          {children}
        </DripsyProvider>
      </GlobalProvider>
    </Fonts>
  )
}
