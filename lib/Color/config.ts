import { Blue, BlueColor, Color, Gray, GrayColor, Green, GreenColor, Red, RedColor, Yellow, YellowColor } from "./interface"

export const gray: GrayColor = {
    [Gray.white]: '#FFFFFF',
    [Gray.gray100]: '#FCFCFC',
    [Gray.gray200]: '#F5F5F5',
    [Gray.gray300]: '#F0F0F0',
    [Gray.gray400]: '#DCDCDC',
    [Gray.gray500]: '#C8C8C8',
    [Gray.gray600]: '#B4B4B4',
    [Gray.gray700]: '#8C8C8C',
    [Gray.gray800]: '#787878',
    [Gray.gray900]: '#646464',
    [Gray.gray1000]: '#505050',
    [Gray.gray1100]: '#3C3C3C',
    [Gray.gray1200]: '#282828',
    [Gray.gray1300]: '#141414',
    [Gray.black]: '#000000'
}
/**
* ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png) d
*/
export const blue: BlueColor = {
    [Blue.blue100]: '#F5F7F9',
    [Blue.blue200]: '#F5FAFF',
    [Blue.blue300]: '#EBF4FF',
    [Blue.blue400]: '#DBEDFF',
    [Blue.blue500]: '#8FBFFF',
    [Blue.blue600]: '#388EFF',
    [Blue.blue700]: '#0A64FA',
    [Blue.blue800]: '#0452CF',
    [Blue.blue900]: '#0341A3',
    [Blue.blue1000]: '#306597'
}

export const green: GreenColor = {
    [Green.green100]: '#F5FFF8',
    [Green.green200]: '#E5FFED',
    [Green.green300]: '#CCFFDB',
    [Green.green400]: '#B2FFC9',
    [Green.green500]: '#99FFB8',
    [Green.green600]: '#80FFA6',
    [Green.green700]: '#5BE384',
    [Green.green800]: '#31B95A'
}

export const red: RedColor = {
    [Red.red100]: '#FFF5F5',
    [Red.red200]: '#FFE5E5',
    [Red.red300]: '#FFCCCC',
    [Red.red400]: '#FFB2B2',
    [Red.red500]: '#FF9999',
    [Red.red600]: '#FF6B6B',
    [Red.red700]: '#DD4040',
    [Red.red800]: '#BF2B2B'
}

export const yellow: YellowColor = {
    [Yellow.yellow100]: '#FFFBEB',
    [Yellow.yellow200]: '#FFF6D1',
    [Yellow.yellow300]: '#FFF1B8',
    [Yellow.yellow400]: '#FFEC9E',
    [Yellow.yellow500]: '#FFE88A',
    [Yellow.yellow600]: '#F8D95D',
    [Yellow.yellow700]: '#BA9608',
    [Yellow.yellow800]: '#987B06'
}

export const color = {
    ...gray,
    ...blue,
    ...green,
    ...red,
    ...yellow
}