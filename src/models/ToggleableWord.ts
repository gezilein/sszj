import { Word } from "./Word";

export class ToggleableWord implements Word {
  constructor(title: string, content: string[]) {
    this.title = title;
    this.content = content;
  }
  title: string = "";
  content: string[] = [];
  showGallery = true;
  showWord = true;
}
