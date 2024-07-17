import { Color } from "lib/Color";
import { ButtonHTMLAttributes } from "vue";

export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    msg?: string,
    variant: Variant,
    size: Size
}

type Variant = 'fullfilled' | 'outlined';
type Size = 'lg' | 'md' | 'sm'
export interface WButton {
    variant: Variant
    color: {
        enable: {
            text: Color,
            background: Color,
            border?: Color
        }
        hover: {
            text: Color,
            background: Color,
            border?: Color
        },
        disable: {
            text: Color,
            background: Color,
            border?: Color
        }
    },
}