import { BxCheck } from '../../icons/bx-check'
import { Text } from '../../text'
import { styled } from '@/styles'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import * as LabelPrimitive from '@radix-ui/react-label'
import type { ReactNode } from 'react'
import { forwardRef } from 'react'

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  userSelect: 'none',

  variants: {
    fontSize: {
      sm: {
        fontSize: '$EM-SMALL',
      },
      md: {
        fontSize: '$EM-MEDIUM',
      },
      lg: {
        fontSize: '$EM-LARGE',
      },
    },
  },
})

const Element = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const CheckboxContainer = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  backgroundColor: 'white',
  width: 20,
  height: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 500ms',
  border: '2px solid',

  variants: {
    borderColor: {
      primary: {
        borderColor: '$PRIMARY',
      },
    },
    borderSize: {
      sm: {
        border: '1px solid',
      },
      md: {
        border: '2px solid',
      },
      lg: {
        border: '3px solid',
      },
    },
    borderRadius: {
      1: {
        br: 1,
      },
      2: {
        br: 2,
      },
      3: {
        br: 3,
      },
      round: {
        br: 'round',
      },
    },
    error: {
      true: {
        borderColor: '$ERROR',
      },
    },
  },
})

const CheckboxIndicator = styled(CheckboxPrimitive.Indicator, {
  color: '$PRIMARY',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Label = styled(LabelPrimitive.Root, {
  marginLeft: 12,
  color: '$BLACK',
  cursor: 'pointer',
})

export interface CheckboxProps {
  defaultChecked?: boolean
  onChange?: (checked: CheckboxPrimitive.CheckedState) => void
  setFieldValue?: (id: string, value: CheckboxPrimitive.CheckedState) => void
  id?: string
  label?: string | ReactNode
  bgColor?: 'primary'
  bgColorChecked?: 'green' | 'white' | 'blue'
  disableAutoCheck?: boolean
  error?: boolean
  textError?: string
  borderColor?: 'primary'
  borderSize?: 'sm' | 'md' | 'lg'
  borderRadius?: 1 | 2 | 3 | 'round'
  fontSize?: 'sm' | 'md' | 'lg'
}

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      defaultChecked,
      onChange,
      id,
      label,
      setFieldValue,
      disableAutoCheck,
      error,
      textError,
      borderColor,
      borderSize,
      borderRadius,
      fontSize,
    },
    ref
  ) => {
    const handleChange = (checked: CheckboxPrimitive.CheckedState): void => {
      if (disableAutoCheck) {
        return
      }

      if (setFieldValue && id) {
        setFieldValue(id, checked)
      }

      if (onChange) {
        onChange(checked)
      }
    }

    return (
      <Container fontSize={fontSize}>
        <Element>
          <CheckboxContainer
            ref={ref}
            id={id}
            defaultChecked={defaultChecked}
            onCheckedChange={handleChange}
            borderRadius={borderRadius}
            borderColor={borderColor}
            borderSize={borderSize}
            error={error}
          >
            <CheckboxIndicator>
              <BxCheck size={20} />
            </CheckboxIndicator>
          </CheckboxContainer>

          {label ? <Label htmlFor={id}>{label}</Label> : null}
        </Element>

        {textError ? (
          <Text style={{ marginTop: 5 }} component="span" variant="error">
            {textError}
          </Text>
        ) : null}
      </Container>
    )
  }
)
Checkbox.displayName = 'Checkbox'

Checkbox.defaultProps = {
  bgColor: 'primary',
  bgColorChecked: 'green',
}
