import { HTMLAttributes, InputHTMLAttributes, SetupContext } from "vue";

export interface InputProps extends /* @vue-ignore */ InputHTMLAttributes {
    error?: boolean,
    msg?: string,
    showCount?: boolean
}

