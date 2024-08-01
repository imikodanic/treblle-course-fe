import { createIcon } from "../../../utils/createIcon";

export const ClockIcon = createIcon(
    <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
    </>,
    {
        name: "ClockIcon",
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
