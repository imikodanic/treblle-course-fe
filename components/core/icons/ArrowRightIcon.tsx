import { createIcon } from "../../../utils/createIcon";

export const ArrowRightIcon = createIcon(
    <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </>,
    {
        name: "ArrowRightIcon",
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
