export interface IGateInTypeOption {
	value: string;
	id: number;
}
export interface MapColumnWithDataKey {
	columnName: string,
	keyName: string,
	fieldType: string,
	editable: boolean,
	clickable: boolean,
	sortable: boolean,
	customColor?: string,
}

export interface ISearchContainerObj {
	containerId?: string;
	containerTypeId?: number;
	containerSizeId?: number;
	toDate?: number;
	fromDate?: number
}

export interface IGPS_DATA {
	machineId: string,
	gps: number[],
	angle: string
}