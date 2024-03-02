export interface IBucketLayoutData {
  name: string;
  count: number;
  layout: ISlotLayout[];
}

export interface ISlotLayout {
  _id: string;
  bucketId: string;
  row: string;
  col: number;
  selected: boolean;
  color: string;
}
