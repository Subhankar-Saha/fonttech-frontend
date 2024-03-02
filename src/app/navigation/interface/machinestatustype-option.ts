export interface IMachineStatusTypeOption {
  value: string;
  id: number;
}

export interface ISearchMachineObj {
  name?: string | number;
  machineId?: number;
  zoneId?: number;
  containerSizeId?: number;
  toDate?: number;
  fromDate?: number;
  userId?: string;
  registrationNo?: string;
  vehicleNo?: string;
}
