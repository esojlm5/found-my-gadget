import useSWRNative from '@nandorojo/swr-react-native'
import { P } from 'dripsy'

const ReposVercel = () => {
  const { data, mutate, error } = useSWRNative(
    'https://api.github.com/repos/vercel/swr'
    // 'https://pokeapi.co/api/v2/pokemon/ditto'
    // fetcher
  )

  return <P>{data.description}</P>
}

export default ReposVercel
