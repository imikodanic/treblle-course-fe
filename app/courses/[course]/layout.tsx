import "../../globals.css";

import Link from "next/link";

// import { usePathname } from "next/navigation";
import { cx, sva } from "~styled-system/css";

import { fetchCourse } from "../../../services/courseService";
import type { CourseProperties } from "./page";

type LayoutProperties = Readonly<{
    children: React.ReactNode;
    params?: CourseProperties;
}>;

const courseLayout = sva({
    slots: [
        "root",
        "header",
        "main",
        "lessonsList",
        "lessonListCard",
        "activeLessonCard",
        "lessonListCardTitle",
        "lessonListCardDescription",
        "lessonListCardDuration",
        "lesson",
    ],
    base: {
        root: {
            paddingTop: 16,
            backgroundColor: "midnight",
            color: "white",
            minHeight: "100vh",
        },
        header: {
            paddingY: 8,
            paddingX: 2,
            textAlign: "center",
            fontSize: "2xl",
            fontWeight: "semibold",
            md: {
                paddingX: 8,
                textAlign: "left",
            },
        },
        main: {
            display: "grid",
            gridTemplateColumns: 12,
            paddingX: 8,
            paddingBottom: 8,
            position: "relative",
        },
        lessonsList: {
            gridColumn: "3",
            display: "none",
            flexDirection: "column",
            gap: "2",
            position: "sticky",
            overflowY: "auto",
            top: "70px",
            height: "calc(100vh - 163px)",
            overscrollBehavior: "contain",
            md: {
                display: "flex",
            },
        },
        lessonListCard: {
            padding: 5,
            display: "block",
            borderRadius: "xl",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "electric-metal",

            _hover: {
                backgroundColor: "electric-metal",
            },
        },
        activeLessonCard: {
            backgroundColor: "electric-metal",
        },
        lessonListCardTitle: {
            fontWeight: "semibold",
        },
        lessonListCardDescription: {
            marginTop: 2,
            fontSize: "sm",
            visibility: "hidden",
            maxHeight: 0,
            lg: {
                visibility: "visible",
                maxHeight: "400px",
            },
        },
        lessonListCardDuration: {
            fontSize: "xs",
            color: "cloud",
            lg: {
                marginTop: 2,
            },
        },
        lesson: {
            gridColumn: "12",
            md: {
                paddingX: 10,
                gridColumn: "9",
            },
        },
    },
});

export default async function Layout({ children, params }: LayoutProperties) {
    // const pathname = usePathname();

    if (!params?.course) {
        return;
    }

    const course = await fetchCourse(params.course);

    if (!course) {
        return;
    }

    const classes = courseLayout();

    return (
        <>
            <div className={classes.root}>
                <header className={classes.header}>
                    <h1>{course.attributes.name}</h1>
                </header>
                <main className={classes.main}>
                    <div className={classes.lessonsList}>
                        {course.attributes.lessons.data.map((lesson, index) => (
                            <Link
                                href={`/courses/${params.course}/${lesson.attributes.slug}`}
                                key={lesson.attributes.slug}
                                className={cx(
                                    classes.lessonListCard
                                    // pathname === `/courses/${params.course}/${lesson.slug}` &&
                                    //     classes.activeLessonCard
                                )}
                            >
                                <h3 className={classes.lessonListCardTitle}>
                                    {index + 1}. {lesson.attributes.name}
                                </h3>
                                <p className={classes.lessonListCardDescription}>
                                    {lesson.attributes.about}
                                </p>
                                <p className={classes.lessonListCardDuration}>
                                    {lesson.attributes.duration}
                                </p>
                            </Link>
                        ))}
                    </div>

                    <div className={classes.lesson}>{children}</div>
                </main>
            </div>
        </>
    );
}
