export interface ITableSlot {
  id: string;
  bucketId: string;
  col: number;
  color: string;
  selected: boolean;
  disabled: boolean;
  selectAllSlotRow?: boolean;
  selectAllSlotCol?: boolean;
}
