import { HTMLAttributes } from "vue";

export interface PaperProps extends /* @vue-ignore */ HTMLAttributes {
    width?: string,
    height?: string
}