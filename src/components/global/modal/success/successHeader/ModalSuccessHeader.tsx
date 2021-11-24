import { BxsCheckCircle } from '@/components/global/icons/bxs-check-circle'
import { styled } from '@/styles'
import React from 'react'

const IconContainer = styled('div', {
  background: '$SUCCESS',
  width: '100%',
  padding: '40px 16px',
})

export const ModalSuccessHeader: React.FC = () => {
  return (
    <IconContainer>
      <BxsCheckCircle colorName="white" size={100} />
    </IconContainer>
  )
}
