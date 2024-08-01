interface FetchResponse {
    data: Course[];
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

export const fetchCourse = async (course: string): Promise<Course | undefined> => {
    const response = await fetch(
        `http://localhost:1337/api/courses?filters[slug][$eq]=${course}&populate=*`,
        {
            method: "GET",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer 3a77957b6999712a17686bb365a923bdee53a6ee81736342886837a0e36b6b143cd2e78485512689b0c16b9ecdc1593db47fe0b6512998e9648a31155d3b051961fdd0505cac3ac77a7debef833b6f0d4800cce8734badfbcf9b68f03078a288e53ca4a50c86a4627208b3efe328e39a3d6c0382fba38608e53aee4923bbd253`,
            },
        }
    );

    const jsonResponse = (await response.json()) as FetchResponse;

    if (jsonResponse.data.length === 0) {
        throw new Error("Course not found");
    }

    return jsonResponse.data[0];
};
