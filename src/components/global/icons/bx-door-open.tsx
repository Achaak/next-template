import { Path, SVG, ContainerIcon } from './styles'
import type { SVGComponentIcon } from './types'

export const BxDoorOpen: React.FC<SVGComponentIcon> = ({
  styles,
  color,
  colorName,
  size,
  className,
  onClick,
}) => {
  return (
    <ContainerIcon
      className={className}
      onClick={onClick}
      css={{
        // TODO
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(styles?.container as any),
      }}
    >
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        css={{
          // TODO
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ...(styles?.svg as any),
        }}
        colorFill={colorName}
        fill={color}
      >
        <Path d="M10.385 21.788a.997.997 0 00.857.182l8-2A.999.999 0 0020 19V5a1 1 0 00-.758-.97l-8-2A1.003 1.003 0 0010 3v1H6a1 1 0 00-1 1v14a1 1 0 001 1h4v1c0 .308.142.599.385.788zM12 4.281l6 1.5v12.438l-6 1.5V4.281zM7 18V6h3v12H7z" />
        <Path d="M14.242 13.159c.446-.112.758-.512.758-.971v-.377a1 1 0 10-2 .001v.377a1 1 0 001.242.97z" />
      </SVG>
    </ContainerIcon>
  )
}

/* SVG
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M10.385 21.788a.997.997 0 0 0 .857.182l8-2A.999.999 0 0 0 20 19V5a1 1 0 0 0-.758-.97l-8-2A1.003 1.003 0 0 0 10 3v1H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4v1c0 .308.142.599.385.788zM12 4.281l6 1.5v12.438l-6 1.5V4.281zM7 18V6h3v12H7z"></path><path d="M14.242 13.159c.446-.112.758-.512.758-.971v-.377a1 1 0 1 0-2 .001v.377a1 1 0 0 0 1.242.97z"></path></svg>
*/
