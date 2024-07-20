import { ButtonHTMLAttributes } from "vue";
import {CSSInterpolation} from '@emotion/serialize'
export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    variant: Variant,
    size: Size
}

type Variant = 'filled' | 'outlined' | 'gray';
type Size = 'lg' | 'md' | 'sm'

export type WButtonStyle = {
    [variant in Variant]: CSSInterpolation
}
export type WButtonSize = {
    [size in Size]: CSSInterpolation
}