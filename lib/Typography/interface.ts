import { CSSInterpolation } from "@emotion/css/dist/declarations/src/create-instance";
import { HTMLAttributes } from "vue";
export interface TypographyProps extends /* @vue-ignore */ HTMLAttributes {
    level: Level
}
enum Levels {
    display1,
    display2,
    display3,
    header1,
    header2,
    header3,
    header4,
    header5,
    header6,
    header7,
    header8,
    subheader1,
    subheader2,
    subheader3,
    subheader4,
    subheader5,
    subheader6,
    body1,
    body2,
    body3,
    body4,
    body5,
    body6
}
export type Level = keyof typeof Levels;

export type Typography = {
    [level in Level]: CSSInterpolation
}