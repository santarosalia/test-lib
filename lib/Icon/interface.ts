import { Color } from "@lib/Color/interface";
import { icon } from "./config";
export interface IconProps {
    icon: Icon,
    color: Color,
    width?: string,
    height?: string
}
type Icon = keyof typeof icon;

