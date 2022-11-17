import { DripsyProvider, makeTheme } from 'dripsy'
import { GlobalProvider } from './globalContext'
const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  text: {
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({ children }: { children: React.ReactNode }) {
  return (
    <GlobalProvider>
      <DripsyProvider
        theme={theme}
        // this disables SSR, since react-native-web doesn't have support for it (yet)
        ssr
      >
        {children}
      </DripsyProvider>
    </GlobalProvider>
  )
}