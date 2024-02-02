export interface SearchTaskObj {
	containerId?: string;
	machineId?: number;
	zoneId?: number;
	movementTypeId?: number;
	purposeId?: number;
	toDate?: number;
	fromDate?: number;
}

export interface fromLocation {
	name: string,
	row: string,
	col: number,
	level: number
}