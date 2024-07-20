import { Color } from "@lib/Color/interface";
import { ButtonHTMLAttributes } from "vue";
import {CSSInterpolation} from '@emotion/serialize'
export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    variant: Variant,
    size: Size
}

type Variant = 'filled' | 'outlined' | 'gray';
type Size = 'lg' | 'md' | 'sm'
interface ButtonStyle {
    color: Color,
    backgroundColor: Color,
    border?: Color | string
    hover: {
        color: Color,
        backgroundColor: Color,
        border?: Color | string
    },
    disabled: {
        color: Color,
        backgroundColor: Color,
        border?: Color | string
    }
}
export type WButtonStyle = {
    [variant in Variant]: CSSInterpolation
}
interface ButtonSize {
    height: string,
    padding: string,
    borderRadius: string,
    minWidth: string
}

export type WButtonSize = {
    [size in Size]: CSSInterpolation
}