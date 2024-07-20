import styled from "vue3-styled-components";
import { icon } from './config'
import { WIconProps } from './interface';

export const WIcon = styled<WIconProps>('svg')`
    width: ${props => props.width ?? '24px'};
    height: ${props => props.height ?? '24px'};
    &path {
        fill: ${props => props.color ?? ''};
    }
`