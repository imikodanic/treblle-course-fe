import { createIcon } from "../../../utils/createIcon";

export const ArrowLeftIcon = createIcon(
    <>
        <path d="m12 19-7-7 7-7" />
        <path d="M19 12H5" />
    </>,
    {
        name: "ArrowLeftIcon",
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
