import { Color } from "@lib/Color/interface";
import { iconData } from "./config";
export interface IconProps {
    icon: Icon,
    color: Color,
    width?: string,
    height?: string
}
export type Icon = keyof typeof iconData;

