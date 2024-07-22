import { ButtonHTMLAttributes } from "vue";
import {CSSInterpolation} from '@emotion/serialize'
export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    variant: Variant,
    size: Size
}
enum Variants {
    filled,
    outlined,
    gray
}
enum Sizes {
    lg,
    md,
    sm
}

type Variant = keyof typeof Variants;
type Size = keyof typeof Sizes;

export type WButtonStyle = {
    [variant in Variant]: CSSInterpolation
}
export type WButtonSize = {
    [size in Size]: CSSInterpolation
}