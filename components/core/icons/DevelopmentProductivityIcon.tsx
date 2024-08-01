import { createIcon } from "../../../utils/createIcon";

export const DevelopmentProductivityIcon = createIcon(
    <>
        <rect x="15" y="4" width="7" height="7" rx="1" />
        <path
            d="M11 22V9a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H4"
            strokeLinecap="round"
        />
    </>,

    {
        name: "DevProductivityIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
        },
    }
);
