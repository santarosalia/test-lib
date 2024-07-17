import { blue, gray } from "@lib/Color"
import { WButtonTheme } from "./interface"

export const WButtonThemeList: WButtonTheme[] = [
    {
        variant: 'fullfilled',
        color: {
            enable: {
                text: gray['white'],
                background: blue[700]
            },
            hover: {
                text: gray['white'],
                background: blue[800]
            },
            disable: {
                text: gray['white'],
                background: blue[500]
            }
        }
    },
    {
        variant: 'outlined',
        color: {
            enable: {
                text: blue[700],
                background: gray['white']
            },
            hover: {
                text: gray['white'],
                background: blue[700]
            },
            disable: {
                text: gray['white'],
                background: blue[500]
            }
        }
    }
]

export const WButtonSizeList = [
    {
        size: 'lg',
        width: '250px',
        height: '50px'
    }
]