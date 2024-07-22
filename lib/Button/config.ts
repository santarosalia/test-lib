import { color } from "@lib/Color/config"
import { ButtonSize, ButtonVariant } from "./interface"
export const buttonVariant: ButtonVariant = {
    filled: {
        color: color.white,
        backgroundColor: color.blue700,
        border: 'none',
        ':hover': {
            color: color.white,
            backgroundColor: color.blue800
        },
        ':disabled': {
            color: color.white,
            backgroundColor: color.blue500
        }
    },
    outlined: {
        color: color.blue700,
        backgroundColor: color.white,
        border: `${color.blue700} 1px solid`,
        ':hover': {
            color: color.white,
            backgroundColor: color.blue700,
            border: `${color.blue700} 1px solid`
        },
        ':disabled': {
            color: color.blue500,
            backgroundColor: color.white,
            border: `${color.blue500} 1px solid`
        }
    },
    gray: {
        color: color.gray900,
        backgroundColor: color.white,
        border: `${color.gray400} 1px solid`,
        ':hover': {
            color: color.gray900,
            backgroundColor: color.gray400,
        },
        ':disabled': {
            color: color.gray400,
            backgroundColor: color.white,
            border: `${color.gray400} 1px solid`
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