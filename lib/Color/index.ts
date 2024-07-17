export const gray: Gray = {
    white: '#FFFFF',
    100: '#FCFCFC',
    200: '#F5F5F5',
    300: '#F0F0F0',
    400: '#DCDCDC',
    500: '#C8C8C8',
    600: '#B4B4B4',
    700: '#8C8C8C',
    800: '#787878'
}
type Gray = {
    white: '#FFFFF',
    100: '#FCFCFC',
    200: '#F5F5F5',
    300: '#F0F0F0',
    400: '#DCDCDC',
    500: '#C8C8C8',
    600: '#B4B4B4',
    700: '#8C8C8C',
    800: '#787878'
}
/**
* ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png) d
*/
export const blue: Blue = {
    100: '#F5F7F9',
    200: '#F5FAFF',
    300: '#EBF4FF',
    400: '#DBEDFF',
    500: '#8FBFFF',
    600: '#388EFF',
    700: '#0A64FA',
    800: '#0452CF',
    900: '#0341A3',
    1000: '#306597'
}


type Blue = {
    100: '#F5F7F9',
    200: '#F5FAFF',
    300: '#EBF4FF',
    400: '#DBEDFF',
    500: '#8FBFFF',
    600: '#388EFF',
    /**
     * Preview: ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png)
    */
    700: '#0A64FA',
    800: '#0452CF',
    900: '#0341A3',
    1000: '#306597'
}
export const green: Green = {
    100: '#F5FFF8',
    200: '#E5FFED',
    300: '#CCFFDB',
    400: '#B2FFC9',
    500: '#99FFB8',
    600: '#80FFA6',
    700: '#5BE384',
    800: '#31B95A'
}
type Green = {
    100: '#F5FFF8',
    200: '#E5FFED',
    300: '#CCFFDB',
    400: '#B2FFC9',
    500: '#99FFB8',
    600: '#80FFA6',
    700: '#5BE384',
    800: '#31B95A'
}

export const color = {
    gray,
    blue,
    green
}
export type Color = Gray[keyof Gray] | Blue[keyof Blue] | Green[keyof Green]