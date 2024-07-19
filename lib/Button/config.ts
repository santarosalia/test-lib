import { blue, gray } from "@lib/Color/config"
import { WButtonSize, WButtonTheme } from "./interface"

export const WButtonThemeList: WButtonTheme[] = [
    {
        variant: 'fullfilled',
        color: gray['white'],
        backgroundColor: blue[700],
        hover: {
            color: gray['white'],
            backgroundColor: blue[800]
        },
        disable: {
            color: gray['white'],
            backgroundColor: blue[500]
        }
    },
    {
        variant: 'outlined',
            color: blue[700],
            backgroundColor: gray['white'],
            border: `${blue[700]} 1px solid`,
            hover: {
                color: gray['white'],
                backgroundColor: blue[700],
                border: `${blue[700]} 1px solid`
            },
            disable: {
                color: blue[500],
                backgroundColor: gray['white'],
                border: `${blue[500]} 1px solid`
            }
    },
    {
        variant: 'gray',
            color: gray[900],
            backgroundColor: gray['white'],
            border: `${gray[400]} 1px solid`,
            hover: {
                color: gray[900],
                backgroundColor: gray[400],
            },
            disable: {
                color: gray[400],
                backgroundColor: gray['white'],
                border: `${gray[400]} 1px solid`
            }
    }
]

export const WButtonSizeList: WButtonSize[] = [
    {
        size: 'lg',
        height: '50px',
        padding: '8px 12px',
        borderRadius: '6px',
        minWidth: '250px'
    },
    {
        size: 'md',
        height: '36px',
        padding: '8px 12px',
        borderRadius: '4px',
        minWidth: '100px'
    },{
        size: 'sm',
        height: '28px',
        padding: '4px 12px',
        borderRadius: '4px',
        minWidth: '50px'
    }
]