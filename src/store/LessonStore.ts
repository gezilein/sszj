import { defineStore } from 'pinia'
import { Lesson } from '../models/Lesson'

export const useLessonStore = defineStore('lessons', {
    state: () => ({
        lessons: new Array<Lesson>(),
    }),

    actions: {
        addLesson(lesson: Lesson): void {
            this.lessons.push(lesson);
        },

        setLessons(lessons: Lesson[]): void {
            this.$patch({ lessons: lessons });
        },

        loadData(): void {

        }
    },

    getters: {
        hydrated(): boolean {
            return this.lessons.length > 0
        },

        getLessons(): Lesson[] {
            if (this.lessons.length === 0) {
                
            }

            return [];
        },

        
    }
})