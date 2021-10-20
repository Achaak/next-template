import { config } from '@/store'
import { createOvermind } from 'overmind'
import { Provider } from 'overmind-react'
import React from 'react'

const overmind = createOvermind(config)

export const ProviderOvermind: React.FC = ({ children }) => {
  return <Provider value={overmind}>{children}</Provider>
}
