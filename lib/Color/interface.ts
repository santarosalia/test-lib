
export enum GrayKey {
    white='white',
    gray100='gray100',
    gray200='gray200',
    gray300='gray300',
    gray400='gray400',
    gray500='gray500',
    gray600='gray600',
    gray700='gray700',
    gray800='gray800',
    gray900='gray900',
    gray1000='gray1000',
    gray1100='gray1100',
    gray1200='gray1200',
    gray1300='gray1300',
    black='black'
}

export enum GrayCode {
    white = '#FFFFFF',
    gray100 = '#FCFCFC',
    gray200 = '#F5F5F5',
    gray300 = '#F0F0F0',
    gray400 = '#DCDCDC',
    gray500 = '#C8C8C8',
    gray600 = '#B4B4B4',
    gray700 = '#8C8C8C',
    gray800 = '#787878',
    gray900 = '#646464',
    gray1000 = '#505050',
    gray1100 = '#3C3C3C',
    gray1200 = '#282828',
    gray1300 = '#141414',
    black = '#000000'
}

export type Gray = {
    [color in GrayKey]: GrayCode[keyof GrayCode]
}

/**
* ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png) d
*/
export enum BlueKey {
    blue100='blue100',
    blue200='blue200',
    blue300='blue300',
    blue400='blue400',
    blue500='blue500',
    blue600='blue600',
    /**
     * Preview: ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png)
    */
    blue700='blue700',
    blue800='blue800',
    blue900='blue900',
    blue1000='blue1000'
}
export enum BlueCode {
    blue100= '#F5F7F9',
    blue200= '#F5FAFF',
    blue300= '#EBF4FF',
    blue400= '#DBEDFF',
    blue500= '#8FBFFF',
    blue600= '#388EFF',
    /**
     * Preview: ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png)
    */
    blue700= '#0A64FA',
    blue800= '#0452CF',
    blue900= '#0341A3',
    blue1000= '#306597'
}

export type Blue = {
    [color in BlueKey]: BlueCode[keyof BlueCode]
}

export enum GreenKey {
    green100 = 'green100',
    green200 = 'green200',
    green300 = 'green300',
    green400 = 'green400',
    green500 = 'green500',
    green600 = 'green600',
    green700 = 'green700',
    green800 = 'green800',
}

export enum GreenCode {
    green100 = '#F5FFF8',
    green200 = '#E5FFED',
    green300 = '#CCFFDB',
    green400 = '#B2FFC9',
    green500 = '#99FFB8',
    green600 = '#80FFA6',
    green700 = '#5BE384',
    green800 = '#31B95A'
}

export type Green = {
    [color in GreenKey]: GreenCode[keyof GreenCode]
}

export enum RedKey {
    red100='red100',
    red200='red200',
    red300='red300',
    red400='red400',
    red500='red500',
    red600='red600',
    red700='red700',
    red800='red800',
    wrong='wrong'
}
export enum RedCode {
    red100 = '#FFF5F5',
    red200 = '#FFE5E5',
    red300 = '#FFCCCC',
    red400 = '#FFB2B2',
    red500 = '#FF9999',
    red600 = '#FF6B6B',
    red700 = '#DD4040',
    red800 = '#BF2B2B',
    wrong = '#FF0000'
}

export type Red = {
    [color in RedKey]: RedCode[keyof RedCode]
}

export enum  YellowKey {
    yellow100='yellow100',
    yellow200='yellow200',
    yellow300='yellow300',
    yellow400='yellow400',
    yellow500='yellow500',
    yellow600='yellow600',
    yellow700='yellow700',
    yellow800='yellow800'
}

export enum YellowCode {
    yellow100 = '#FFFBEB',
    yellow200 = '#FFF6D1',
    yellow300 = '#FFF1B8',
    yellow400 = '#FFEC9E',
    yellow500 = '#FFE88A',
    yellow600 = '#F8D95D',
    yellow700 = '#BA9608',
    yellow800 = '#987B06'
}

export type Yellow = {
    [color in YellowKey]: YellowCode[keyof YellowCode]
}


export type Color = keyof typeof GrayKey | keyof typeof BlueKey | keyof typeof GreenKey | keyof typeof RedKey | keyof typeof YellowKey