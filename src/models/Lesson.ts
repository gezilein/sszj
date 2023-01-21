import { Section } from "./Section";
import { WorkbookNode } from "./WorkbookNode";

export interface Lesson extends WorkbookNode {
  sections: Section[];
}
