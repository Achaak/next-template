import { ProviderOvermind } from '..'
import { styled } from '@/styles/css'
import { trpc } from '@/utils/trpc'
import { trpcClient } from '@/utils/trpc'
import React, { useState } from 'react'
import { QueryClient } from 'react-query'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container: React.FC = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient())
  const [client] = useState(() => trpcClient)

  return (
    <trpc.Provider client={client} queryClient={queryClient}>
      <ProviderOvermind>
        <ContainerDOM>{children}</ContainerDOM>
      </ProviderOvermind>
    </trpc.Provider>
  )
}
