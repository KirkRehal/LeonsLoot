import { SheetDataModel } from "./sheet-data.model";

export type SheetModel = {
    spreadsheetId: string;
    properties: object;
    sheets: SheetDataModel[];
    spreadsheetUrl: string;
}