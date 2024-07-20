import { DefineProps, HTMLAttributes, SetupContext } from "vue";
import styled from "vue3-styled-components";

export const WBadge = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    border-radius: 50px;
    color: white;
    padding: 1px 6px;
    font-size: 12px;
    font-weight: 500;
`
export const WBadgeContainer = styled.div`
    width: 18px;
`