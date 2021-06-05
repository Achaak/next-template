import { styled } from '@/styles/css'
import React from 'react'

const ContainerDOM = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Container: React.FC = ({ children }) => {
  return <ContainerDOM>{children}</ContainerDOM>
}

export default Container
