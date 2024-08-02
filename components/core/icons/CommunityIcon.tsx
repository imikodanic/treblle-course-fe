import { icon } from "./Icon";

export const CommunityIcon = icon(
    <>
        <path d="M15 20a6 6 0 1 0-12 0" strokeLinecap="round" />
        <circle cx="9" cy="10" r="4" />
        <path d="M23 20a6 6 0 0 0-6-6 4 4 0 1 0 0-8" strokeLinecap="round" />
    </>,
    {
        name: "CommunityIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
        },
    }
);
