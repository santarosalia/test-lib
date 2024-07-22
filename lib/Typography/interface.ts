import { CSSInterpolation } from "@emotion/css/dist/declarations/src/create-instance";

export type Level = 'display1' | 'display2'
export type Typography = {
    [level in Level]: CSSInterpolation
}