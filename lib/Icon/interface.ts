import { Color } from "@lib/Color/interface";
import { icon } from "./config";
export interface WIconProps {
    icon: Icon,
    color: Color
}
type Icon = keyof typeof icon;

