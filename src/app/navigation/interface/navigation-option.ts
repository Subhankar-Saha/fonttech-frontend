export interface INavigationOption {
	title: string;
	icon: string;
	route?: string;
	selected: boolean;
	canView: boolean;
	isSubMenu: boolean;
	isSubMenuOpened: boolean;
	subMenu: INavigationOption[];
}

// export interface ISubNavigationOption {
// 	title: string;
// 	icon: string;
// 	route: string;
// 	selected: boolean;
// }
