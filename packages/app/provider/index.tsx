import { Dripsy } from './dripsy'
import useSWR, { SWRConfig } from 'swr'
export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
        suspense: true,
      }}
    >
      <Dripsy>{children}</Dripsy>
    </SWRConfig>
  )
}
