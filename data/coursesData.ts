import { script } from "../scripts/laravel-api-course/intro-and-setup";

export const courses = [
    {
        slug: "laravel-api-course",
        name: "Laravel API Course",
        description: "Learn how to build advanced APIs using Laravel",
        lessons: [
            {
                slug: "intro-and-setup",
                name: "Intro & Setup",
                about: "Welcome to the Laravel API course! Get ready to dive into the exciting world of building APIs with Laravel, the powerful and flexible PHP framework.",
                duration: "5:20",
                video: "https://player.vimeo.com/video/1005797481?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479",
                script: script,
                publishedAt: "January 28, 2024",
            },
        ],
    },
];
