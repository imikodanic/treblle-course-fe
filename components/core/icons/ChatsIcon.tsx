import { createIcon } from "../../../utils/createIcon";

export const ChatsIcon = createIcon(
    <>
        <path
            d="M27,22 C27,23.1045695 26.1045695,24 25,24 L19,24 L15,28 L15,17 C15,15.9 15.9,15 17,15 L25,15 C26.1045695,15 27,15.8954305 27,17 L27,22 Z"
            id="Path"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
        <path
            d="M31,22 L33,22 C34.1045695,22 35,22.8954305 35,24 L35,35 L31,31 L25,31 C23.8954305,31 23,30.1045695 23,29 L23,28"
            id="Path"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        ></path>
    </>,
    {
        name: "ChatsIcon",
        defaultProperties: {
            fill: "none",
            stroke: "currentColor",
            width: 50,
            height: 50,
            viewBox: "0 0 50 50",
        },
    }
);
