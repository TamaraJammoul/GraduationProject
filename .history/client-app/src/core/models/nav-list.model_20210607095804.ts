import { NavListItem } from '@libs/core/models/nav-list-item.model';
export class NavList {
    title: string;
    navListItems: NavListItem[];
    backLink?: string | any[];
    tag?: string;
}
