import { createIcon } from "../../../utils/createIcon";

export const GovernanceProgramIcon = createIcon(
    <>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" />
        <circle cx="12" cy="12" r="8" />
        <path d="M22 22l-4.3-4.3" strokeLinecap="round" />
    </>,
    {
        name: "GovernanceProgramIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
        },
    }
);
