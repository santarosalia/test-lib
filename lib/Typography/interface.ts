import { CSSInterpolation } from "@emotion/css/dist/declarations/src/create-instance";
import { HTMLAttributes } from "vue";
export interface WTypographyProps extends /* @vue-ignore */ HTMLAttributes {
    level: Level
}
enum Levels {
    display1,
    display2,
    // display3,
    // display4,
    // header1,
    // header2,
    // header3,
    // header4,
    // header5,
    // header6,
    // header7,

}
export type Level = keyof typeof Levels;

export type Typography = {
    [level in Level]: CSSInterpolation
}