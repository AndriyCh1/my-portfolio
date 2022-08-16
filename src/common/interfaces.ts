import {RefObject} from "react";

export interface INavigationItem<T> {
    icon: any;
    display: string;
    to?: RefObject<T>
}