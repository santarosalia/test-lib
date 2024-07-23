import { InputHTMLAttributes } from "vue";

export interface TextareaProps extends /* @vue-ignore */ InputHTMLAttributes {
    error?: boolean,
    msg?: string,
    showCount?: boolean
}

