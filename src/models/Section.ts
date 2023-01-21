import { Word } from "./Word";
import { WorkbookNode } from "./WorkbookNode";

export interface Section extends WorkbookNode {
  words: Word[];
}
