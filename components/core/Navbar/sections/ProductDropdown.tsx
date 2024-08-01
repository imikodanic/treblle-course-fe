import Image from "next/image";

import DropdownBase, { dropdownItemRecipe } from "~components/core/Navbar/DropdownBase";
import { sva } from "~styled-system/css";

const productDropdown = sva({
    slots: ["root", "image", "title", "description"],
    base: {
        root: {
            display: "grid",
            gridTemplateColumns: "1",
            gridRowGap: "2",
            paddingY: "5",
            lg: {
                gridTemplateColumns: "3",
                gridColumnGap: "5",
            },
        },
        image: {
            width: "50px",
            height: "50px",
        },
        title: {
            fontWeight: "semibold",
        },
        description: {
            color: "cloud",
        },
    },
});

export default function ProductDropdown() {
    const products = [
        {
            image: "/observability_avatar.svg",
            title: "API Observability",
            description: "See data-enriched requests as they happen in real-time.",
            href: "https://treblle.com/product/api-observability",
        },
        {
            image: "/docs_avatar.svg",
            title: "API Documentation",
            description: "Autogenerate your API docs and spend less time on manual work.",
            href: "https://treblle.com/product/api-documentation",
        },
        {
            image: "/alfred_avatar.svg",
            title: "AI Assistant",
            description: "Meet Alfred, our AI-powered assistant.",
            href: "https://treblle.com/product/api-assistant",
        },
        {
            image: "/governance_avatar.svg",
            title: "API Governance",
            description: "Track your API performance, security and quality.",
            href: "https://treblle.com/product/api-governance",
        },
        {
            image: "/security_avatar.svg",
            title: "API Security",
            description: "Stay on top of any security threat to your API.",
            href: "https://treblle.com/product/api-security",
        },
        {
            image: "/analytics_avatar.svg",
            title: "API Analytics",
            description: "Get actionable insights about your API, product and users.",
            href: "https://treblle.com/product/api-analytics",
        },
    ];

    const classes = productDropdown();

    return (
        <DropdownBase label="Product">
            <div className={classes.root}>
                {products.map((product) => (
                    <a key={product.title} href={product.href} className={dropdownItemRecipe}>
                        <Image
                            src={product.image}
                            alt={"Observability"}
                            width={50}
                            height={50}
                            className={classes.image}
                        />
                        <div>
                            <h2 className={classes.description}>{product.title}</h2>
                            <p className={classes.description}>{product.description}</p>
                        </div>
                    </a>
                ))}
            </div>
        </DropdownBase>
    );
}
