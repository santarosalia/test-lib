import { Color } from "@lib/Color/interface";
import { ButtonHTMLAttributes } from "vue";
export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    variant: Variant,
    size: Size
}

type Variant = 'filled' | 'outlined' | 'gray';
type Size = 'lg' | 'md' | 'sm'
export interface WButtonTheme {
    variant: Variant
    color: Color,
    backgroundColor: Color,
    border?: Color | string
    hover: {
        color: Color,
        backgroundColor: Color,
        border?: Color | string
    },
    disable: {
        color: Color,
        backgroundColor: Color,
        border?: Color | string
    }
}
export interface WButtonSize {
    size: Size,
    height: string,
    padding: string,
    borderRadius: string,
    minWidth: string
}