import { SheetRowDataModel } from "./sheet-row-data.model";

export type SheetGridData = {
    columnMetadata: object[];
    rowData: SheetRowDataModel[];
    rowMetadata: object[];
}