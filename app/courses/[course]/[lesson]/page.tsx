import Link from "next/link";

import { ArrowLeftIcon } from "~components/core/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "~components/core/icons/ArrowRightIcon";
import { CalendarIcon } from "~components/core/icons/CalendarIcon";
import { ClockIcon } from "~components/core/icons/ClockIcon";
import { cx, sva } from "~styled-system/css";

import {
    getCourse,
    getLesson,
    getNextLesson,
    getPreviousLesson,
} from "../../../../utils/coursesService";

interface LessonProperties {
    params: {
        course: string;
        lesson: string;
    };
}
const lessonStyle = sva({
    slots: [
        "root",
        "videoWrapper",
        "video",
        "title",
        "treblleCta",
        "treblleCtaLink",
        "aboutCard",
        "aboutCardTitle",
        "aboutCardText",
        "aboutCardInfo",
        "aboutCardInfoItem",
        "aboutCardInfoIcon",
        "lessonNav",
        "lessonNavCard",
        "lessonEmptyCardDiv",
        "lessonNavCardNext",
        "lessonNavCardLabel",
        "lessonNavCardLabelIcon",
        "lessonNavCardName",
    ],
    base: {
        root: {
            display: "flex",
            flexDirection: "column",
            gap: 10,
        },
        videoWrapper: {
            paddingTop: "56.25%",
            position: "relative",
            borderWidth: 5,
            borderStyle: "solid",
            borderColor: "deep-metal",
            borderRadius: "lg",

            md: {
                borderWidth: 10,
            },
        },
        video: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
        },
        treblleCta: {
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "electric-metal",
            backgroundColor: "midnight",
            padding: 3,
            borderBottomRadius: "xl",
            width: "fit-content",
            marginLeft: "auto",
            marginRight: 5,
            color: "cloud",
            fontSize: "sm",
        },
        treblleCtaLink: {
            color: "white",
            _hover: {
                color: "electric-300",
            },
        },
        title: {
            fontSize: "3xl",
            fontWeight: "bold",
            lg: {
                fontSize: "4xl",
            },
        },
        aboutCard: {
            marginY: 5,
            padding: 5,
            borderRadius: "xl",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "electric-metal",
            backgroundColor: "midnight",
            color: "white",
        },
        aboutCardTitle: {
            fontWeight: "semibold",
        },
        aboutCardText: {
            color: "cloud",
        },
        aboutCardInfo: {
            display: "flex",
            gap: 5,
            color: "cloud",
            fontSize: "sm",
            marginTop: 3,
        },
        aboutCardInfoItem: {
            display: "flex",
            alignItems: "center",
            gap: 2,
        },
        aboutCardInfoIcon: {
            width: 4,
            height: 4,
        },
        lessonNav: {
            marginTop: 5,
            display: "grid",
            gridTemplateColumns: "6",
            gap: 5,
        },
        lessonNavCard: {
            padding: 5,
            borderRadius: "xl",
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "deep-metal",
            backgroundColor: "midnight",
            color: "white",
            gridColumn: "6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            _hover: {
                backgroundColor: "electric-metal",
            },
            lg: {
                alignItems: "start",
                gridColumn: "3",
            },
        },
        lessonNavCardNext: {
            lg: {
                alignItems: "end",
            },
        },
        lessonNavCardLabel: {
            display: "flex",
            alignItems: "center",
            gap: 2,
            color: "cloud",
            fontSize: "sm",
        },
        lessonNavCardLabelIcon: {
            width: 4,
            height: 4,
        },
        lessonNavCardName: {
            fontWeight: "semibold",
            fontSize: "lg",
        },
        lessonEmptyCardDiv: {
            gridColumn: "3",
        },
    },
});

export default function Lesson({ params }: LessonProperties) {
    const classes = lessonStyle();

    const course = getCourse(params.course);
    const lesson = getLesson(course, params.lesson);

    const nextLesson = getNextLesson(course, lesson);
    const previousLesson = getPreviousLesson(course, lesson);

    return (
        <div className={classes.root}>
            <div>
                <div className={classes.videoWrapper}>
                    <iframe
                        title={lesson.name}
                        src={lesson.video}
                        className={classes.video}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className={classes.treblleCta}>
                    Want an easy-to-use API Observability Tool?{" "}
                    <a
                        className={classes.treblleCtaLink}
                        href="http://app.treblle.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Try Treblle now
                    </a>
                </div>
            </div>

            <div>
                <h1 className={classes.title}>{lesson.name}</h1>
                <div className={classes.aboutCard}>
                    <p className={classes.aboutCardTitle}>About this lesson</p>
                    <p className={classes.aboutCardText}>{lesson.about}</p>
                    <div className={classes.aboutCardInfo}>
                        <span className={classes.aboutCardInfoItem}>
                            <ClockIcon className={classes.aboutCardInfoIcon} /> {lesson.duration}
                        </span>
                        <span className={classes.aboutCardInfoItem}>
                            <CalendarIcon className={classes.aboutCardInfoIcon} />{" "}
                            {lesson.publishedAt}
                        </span>
                    </div>
                </div>
                <div>{lesson.script}</div>
            </div>

            <div className={classes.lessonNav}>
                {previousLesson ? (
                    <Link
                        className={classes.lessonNavCard}
                        href={`/courses/${params.course}/${previousLesson.slug}`}
                    >
                        <span className={classes.lessonNavCardLabel}>
                            <ArrowLeftIcon className={classes.lessonNavCardLabelIcon} />
                            Previous lesson
                        </span>
                        <span className={classes.lessonNavCardName}>{previousLesson.name}</span>
                    </Link>
                ) : (
                    <div className={classes.lessonEmptyCardDiv}></div>
                )}
                {nextLesson && (
                    <Link
                        className={cx(classes.lessonNavCard, classes.lessonNavCardNext)}
                        href={`/courses/${params.course}/${nextLesson.slug}`}
                    >
                        <span className={classes.lessonNavCardLabel}>
                            Next lesson{" "}
                            <ArrowRightIcon className={classes.lessonNavCardLabelIcon} />
                        </span>
                        <span className={classes.lessonNavCardName}>{nextLesson.name}</span>
                    </Link>
                )}
            </div>
        </div>
    );
}
