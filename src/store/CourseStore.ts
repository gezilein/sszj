import { defineStore } from "pinia";
import { Course } from "../models/Course";

export const useCourseStore = defineStore("courses", {
  state: () => ({
    courses: new Array<Course>(),
  }),

  actions: {
    setCourses(courses: Course[]): void {
      this.$patch({ courses: courses });
    },
  },

  getters: {
    getCourses(): Course[] {
      return this.courses;
    },
  },
});
