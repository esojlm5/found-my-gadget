import { View, Text } from 'dripsy'
import { createParam } from 'solito'
import { TextLink } from 'solito/link'

import {
  useGlobalContext,
  userContextInterface,
} from 'app/provider/globalContext'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
  const [id] = useParam('id')
  const { value } = useGlobalContext() as userContextInterface

  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text
        sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
      >{`User ID: ${id} ${value}`}</Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
