import { createIcon } from "../../../utils/createIcon";

export const CalendarIcon = createIcon(
    <>
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
    </>,
    {
        name: "CalendarIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
            strokeWidth: 2,
            strokeLinecap: "round",
            strokeLinejoin: "round",
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
        },
    }
);
