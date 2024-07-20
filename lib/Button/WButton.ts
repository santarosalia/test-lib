import styled from 'vue3-styled-components';
import { WButtonProps } from './interface';
import { DefineComponent, ExtractPropTypes } from 'vue';
import { wButtonSize, wButtonStyle } from './config';

const getStyle = (props: ExtractPropTypes<WButtonProps>) => wButtonStyle[props.variant!];
const getSize = (props: ExtractPropTypes<WButtonProps>) => wButtonSize[props.size!];

export const WButton = styled<WButtonProps>('button')`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    width: auto;
    min-width: ${props => getSize(props).minWidth};
    height: ${props => getSize(props).height};
    border-radius: ${props => getSize(props).borderRadius};
    color: ${props => getStyle(props).color};
    background-color: ${props => getStyle(props).backgroundColor};
    border: ${props => getStyle(props).border ?? 'none'};
    padding: ${props => getSize(props).padding};
    cursor: pointer;
    &:hover {
        color: ${props => getStyle(props).hover.color};
        background-color: ${props => getStyle(props).hover.backgroundColor};
        border: ${props => getStyle(props).hover.border ?? 'none'};
    }
    &:disabled {
        color: ${props => getStyle(props).disabled.color};
        background-color: ${props => getStyle(props).disabled.backgroundColor};
        border: ${props => getStyle(props).disabled.border ?? 'none'};
        cursor: not-allowed;
    }
` as DefineComponent<WButtonProps>;