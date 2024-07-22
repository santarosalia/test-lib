export type Gray = {
    white: '#FFFFFF',
    100: '#FCFCFC',
    200: '#F5F5F5',
    300: '#F0F0F0',
    400: '#DCDCDC',
    500: '#C8C8C8',
    600: '#B4B4B4',
    700: '#8C8C8C',
    800: '#787878',
    900: '#646464',
    1000: '#505050',
    1100: '#3C3C3C',
    1200: '#282828',
    1300: '#141414',
    black: '#000000'
}
/**
* ![blue 50](https://mui.com/static/colors-preview/blue-50-24x24.png) d
*/

export type Blue = {
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

export type Green = {
    100: '#F5FFF8',
    200: '#E5FFED',
    300: '#CCFFDB',
    400: '#B2FFC9',
    500: '#99FFB8',
    600: '#80FFA6',
    700: '#5BE384',
    800: '#31B95A'
}

export type Red = {
    100: '#FFF5F5',
    200: '#FFE5E5',
    300: '#FFCCCC',
    400: '#FFB2B2',
    500: '#FF9999',
    600: '#FF6B6B',
    700: '#DD4040',
    800: '#BF2B2B'
}

export type Yellow = {
    100: '#FFFBEB',
    200: '#FFF6D1',
    300: '#FFF1B8',
    400: '#FFEC9E',
    500: '#FFE88A',
    600: '#F8D95D',
    700: '#BA9608',
    800: '#987B06'
}

export type Color = Gray[keyof Gray] | Blue[keyof Blue] | Green[keyof Green] | Red[keyof Red] | Yellow[keyof Yellow]