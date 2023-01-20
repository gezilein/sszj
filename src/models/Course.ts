import { Lesson } from "./Lesson";

export interface Course {
  lessons: Lesson[];
  slug: string;
  title: string;
}
