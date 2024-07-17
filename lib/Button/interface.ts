import { ButtonHTMLAttributes } from "vue";

export interface WButtonProps extends /* @vue-ignore */ ButtonHTMLAttributes {
    msg?: string,
    variant: Variant,
}

type Variant = 'fullfilled' | 'outlined';

