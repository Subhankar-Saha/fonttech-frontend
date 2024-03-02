export interface ITrailerStatusTypeOption {
  value: string;
  id: number;
}

export interface ISearchTrailerObj {
  containerId?: string;
  trailerNo?: string;
  purposeId?: number;
  withinYard?: boolean;
  toDate?: number;
  fromDate?: number;
}

export interface IAddTrailerObj {
  purposeId: string;
  trailerNo: string;
  zoneId: string;
}
