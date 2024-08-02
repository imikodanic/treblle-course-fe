import { forwardRef, type ReactNode, type SVGProps } from "react";

type IconComponentProperties = Omit<SVGProps<SVGSVGElement>, "children">;

interface CreateIconOptions {
    name: string;
    defaultProperties?: IconComponentProperties;
}

const DEFAULT_PROPERTIES = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 26,
    height: 26,
    viewBox: "0 0 26 26",
    fill: "currentColor",
} satisfies IconComponentProperties;

export function icon(iconBody: ReactNode, options: CreateIconOptions) {
    const resolvedDefaultProperties = { ...DEFAULT_PROPERTIES, ...options.defaultProperties };

    const IconComponent = forwardRef<SVGSVGElement, IconComponentProperties>(
        (properties, reference) => {
            return (
                <svg ref={reference} {...resolvedDefaultProperties} {...properties}>
                    {iconBody}
                </svg>
            );
        }
    );

    IconComponent.displayName = options.name;

    return IconComponent;
}
