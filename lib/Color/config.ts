import { 
    BlueKey,
    BlueCode,
    Blue,
    GrayCode,
    GrayKey,
    Gray,
    GreenKey,
    GreenCode,
    Green,
    RedKey,
    RedCode,
    Red,
    YellowKey,
    YellowCode,
    Yellow,
} from "./interface"

const gray = Object.keys(GrayKey).reduce((acc, cur) => {
    const key = cur as GrayKey;
    acc[key] = GrayCode[key];
    return acc;
}, {} as Gray);

const blue = Object.keys(BlueKey).reduce((acc, cur) => {
    const key = cur as BlueKey;
    acc[key] = BlueCode[key];
    return acc;
}, {} as Blue);

const green = Object.keys(GreenKey).reduce((acc, cur) => {
    const key = cur as GreenKey;
    acc[key] = GreenCode[key];
    return acc;
}, {} as Green);

const red = Object.keys(RedKey).reduce((acc, cur) => {
    const key = cur as RedKey;
    acc[key] = RedCode[key];
    return acc;
}, {} as Red);

const yellow = Object.keys(YellowKey).reduce((acc, cur) => {
    const key = cur as YellowKey;
    acc[key] = YellowCode[key];
    return acc;
}, {} as Yellow);

export const color = {
    ...gray,
    ...blue,
    ...green,
    ...red,
    ...yellow
}