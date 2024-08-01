interface FetchResponse<t> {
    data: t[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}

interface Course {
    id: number;
    attributes: {
        slug: string;
        name: string;
        description: string;
        publishedAt: string;
        lessons: { data: Lesson[] };
    };
}

interface Lesson {
    id: number;
    attributes: {
        slug: string;
        name: string;
        about: string;
        duration: string;
        video_url: string;
        video_script: string;
        publishedAt: string;
    };
}

export const fetchCourse = async (courseSlug: string): Promise<Course | undefined> => {
    const response = await fetch(
        `http://localhost:1337/api/courses?filters[slug][$eq]=${courseSlug}&populate=*`,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env["STRAPI_API_KEY"]}`,
            },
        }
    );

    console.log(response);

    const jsonResponse = (await response.json()) as FetchResponse<Course>;

    if (jsonResponse.data.length === 0) {
        throw new Error("Course not found");
    }

    return jsonResponse.data[0];
};

export const fetchLesson = async (lessonSlug: string): Promise<Lesson | undefined> => {
    console.log("WTF", process.env["STRAPI_API_KEY"]);
    const response = await fetch(
        `http://localhost:1337/api/lessons?filters[slug][$eq]=${lessonSlug}&populate=*`,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env["STRAPI_API_KEY"]}`,
            },
        }
    );

    const jsonResponse = (await response.json()) as FetchResponse<Lesson>;

    if (jsonResponse.data.length === 0) {
        throw new Error("Lesson not found");
    }

    return jsonResponse.data[0];
};
