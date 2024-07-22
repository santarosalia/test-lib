import { blue, gray } from "@lib/Color/config"
import { ButtonSize, ButtonVariant } from "./interface"
export const buttonVariant: ButtonVariant = {
    filled: {
        color: gray['white'],
        backgroundColor: blue[700],
        border: 'none',
        ':hover': {
            color: gray['white'],
            backgroundColor: blue[800]
        },
        ':disabled': {
            color: gray['white'],
            backgroundColor: blue[500]
        }
    },
    outlined: {
        color: blue[700],
        backgroundColor: gray['white'],
        border: `${blue[700]} 1px solid`,
        ':hover': {
            color: gray['white'],
            backgroundColor: blue[700],
            border: `${blue[700]} 1px solid`
        },
        ':disabled': {
            color: blue[500],
            backgroundColor: gray['white'],
            border: `${blue[500]} 1px solid`
        }
    },
    gray: {
        color: gray[900],
        backgroundColor: gray['white'],
        border: `${gray[400]} 1px solid`,
        ':hover': {
            color: gray[900],
            backgroundColor: gray[400],
        },
        ':disabled': {
            color: gray[400],
            backgroundColor: gray['white'],
            border: `${gray[400]} 1px solid`
        }
    }
}

export const buttonSize: ButtonSize = {
    lg: {
        height: '50px',
        padding: '8px 12px',
        borderRadius: '4px',
        width: '250px'
    },
    md: {
        height: '36px',
        padding: '8px 12px',
        borderRadius: '4px',
    },
    sm: {
        height: '28px',
        padding: '4px 12px',
        borderRadius: '4px',
    }
}