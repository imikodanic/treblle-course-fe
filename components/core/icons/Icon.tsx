import { forwardRef, type SVGProps } from "react";

type IconProperties = SVGProps<SVGSVGElement>;
const Icon = forwardRef<SVGSVGElement, IconProperties>(
    ({ xmlns = "http://www.w3.org/2000/svg", children, ...rest }, reference) => {
        return (
            <svg ref={reference} xmlns={xmlns} {...rest}>
                {children}
            </svg>
        );
    }
);
Icon.displayName = "Icon";

export { Icon };
