import { SheetGridData } from "./sheet-grid-data.model";
import { SheetPropertiesModel } from "./sheet-properties.model";

export type SheetDataModel = {
  properties: SheetPropertiesModel;
  data: SheetGridData[];
}