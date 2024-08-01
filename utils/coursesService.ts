import courseData from "../misc/courseData.json";

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

const getCourse = (courseSlug: string): Course => {
    const course = courseData.courses.find((course) => course.slug === courseSlug);

    if (!course) {
        throw new Error("Incorrect course");
    }

    return course;
};

const getLesson = (course: Course, lessonSlug: string): Lesson => {
    const lesson = course.lessons.find((lesson) => lesson.slug === lessonSlug);

    if (!lesson) {
        throw new Error("Lesson doesn't exist");
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
