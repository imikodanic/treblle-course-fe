import { courses } from "../data/coursesData";

interface Course {
    slug: string;
    name: string;
    description: string;
    lessons: Lesson[];
}

interface Lesson {
    slug: string;
    name: string;
    about: string;
    duration: string;
    video: string;
    script: string;
    publishedAt: string;
}

const getCourse = (courseSlug: string): Course | undefined => {
    const course = courses.find((course) => course.slug === courseSlug);

    if (!course) {
        return undefined;
    }

    return course;
};

const getLesson = (course: Course, lessonSlug: string): Lesson | undefined => {
    const lesson = course.lessons.find((lesson) => lesson.slug === lessonSlug);

    if (!lesson) {
        return undefined;
    }

    return lesson;
};

const getNextLesson = (course: Course, lesson: Lesson): undefined | Lesson => {
    const lessonIndex = course.lessons.findIndex((l) => l.slug === lesson.slug);

    if (lessonIndex === course.lessons.length - 1) {
        return undefined;
    }

    return course.lessons[lessonIndex + 1];
};

const getPreviousLesson = (course: Course, lesson: Lesson): undefined | Lesson => {
    const lessonIndex = course.lessons.findIndex((l) => l.slug === lesson.slug);

    if (lessonIndex === 0) {
        return undefined;
    }

    return course.lessons[lessonIndex - 1];
};

export { getCourse, getLesson, getNextLesson, getPreviousLesson };
