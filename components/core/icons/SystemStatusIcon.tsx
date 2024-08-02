import { icon } from "./Icon";

export const SystemStatusIcon = icon(
    <>
        <path d="M4 4v18h18" strokeLinecap="round" />
        <rect x="8" y="11" width="4" height="7" rx="1" />
        <rect x="16" y="6" width="4" height="12" rx="1" />
    </>,
    {
        name: "SystemStatusIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
        },
    }
);
