import { createIcon } from "../../../utils/createIcon";

export const MenuCloseIcon = createIcon(
    <>
        <path d="M1.5 1.5L13.5 13.5M1.5 13.5L13.5 1.5" stroke="currentColor" />
    </>,
    {
        name: "StartupIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
            width: "15px",
            height: "15px",
            viewBox: "0 0 15 15",
        },
    }
);
