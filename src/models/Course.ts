import { Lesson } from "./Lesson";
import { WorkbookNode } from "./WorkbookNode";

export interface Course extends WorkbookNode {
  lessons: Lesson[];
}
