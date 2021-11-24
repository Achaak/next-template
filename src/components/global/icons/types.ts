import type { GetInnerShadow } from './utils'
import type { CSS } from '@/styles'
import type { ColorType } from '@/types/color'

export type SVGComponentIcon = {
  className?: string
  size?: number | string
  styles?: {
    container?: CSS
    svg?: CSS
  }
  color?: string
  colorName?: ColorType
  innerShadow?: GetInnerShadow
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
