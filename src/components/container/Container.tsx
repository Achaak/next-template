import { ProviderOvermind } from '..'
import { styled } from '@/styles/css'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Container: React.FC = ({ children }) => {
  return (
    <ProviderOvermind>
      <ContainerDOM>{children}</ContainerDOM>
    </ProviderOvermind>
  )
}
