import { BlogIcon } from "~components/core/icons/BlogIcon";
import { BooksIcon } from "~components/core/icons/BooksIcon";
import { CaseStudyIcon } from "~components/core/icons/CaseStudyIcon";
import { ChatsIcon } from "~components/core/icons/ChatsIcon";
import { CommunityIcon } from "~components/core/icons/CommunityIcon";
import { IntegrationsIcon } from "~components/core/icons/IntegrationsIcon";
import { NativeAppsIcon } from "~components/core/icons/NativeAppsIcon";
import { SystemStatusIcon } from "~components/core/icons/SystemStatusIcon";
import DropdownBase, { dropdownItemRecipe } from "~components/core/Navbar/DropdownBase";
import { sva } from "~styled-system/css";

const resourcesDropdown = sva({
    slots: [
        "wrapper",
        "resourcesWrapper",
        "resourcesContainer",
        "resourceImage",
        "resourceTitle",
        "additionalWrapper",
        "additionalContainer",
        "additionalImage",
        "additionalTitle",
        "additionalDescription",
    ],
    base: {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            gap: "5",
            paddingY: "5",
            lg: {
                flexDirection: "row",
            },
        },
        resourcesWrapper: {
            width: "100%",

            lg: {
                width: "50%",
            },
        },
        resourcesContainer: {
            display: "grid",
            gridTemplateColumns: "1",
            gridRowGap: "2",
            lg: {
                gridTemplateColumns: "2",
                gridColumnGap: "5",
            },
        },
        resourceImage: {
            color: "cloud",
        },
        resourceTitle: {
            color: "white",
            fontSize: "sm",
            fontWeight: "semibold",

            md: {
                fontSize: "md",
            },
        },
        additionalWrapper: {
            borderTopWidth: "1",
            borderColor: "deep-metal",
            borderStyle: "solid",
            width: "100%",
            paddingTop: "5",
            lg: {
                borderTopWidth: "0",
                borderLeftWidth: "1",
                paddingLeft: "8",
                width: "50%",
            },
        },
        additionalContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "4",
        },
        additionalImage: {
            color: "white",
            backgroundColor: "electric-400",
            rounded: "full",
        },
        additionalTitle: {
            color: "white",
            fontSize: "md",
            fontWeight: "semibold",
        },
        additionalDescription: {
            color: "cloud",
            fontSize: "sm",
        },
    },
});

export default function ResourcesDropdown() {
    const resources = [
        {
            icon: CaseStudyIcon,
            title: "Case Studies",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: SystemStatusIcon,
            title: "System Status",
            href: "https://treblle.com/solution/developer-productivity",
        },
        {
            icon: IntegrationsIcon,
            title: "Integrations",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: NativeAppsIcon,
            title: "Native Apps",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: CommunityIcon,
            title: "Community",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: BooksIcon,
            title: "EBooks",
            href: "https://treblle.com/solution/digital-transformation",
        },
    ];

    const additional = [
        {
            icon: BlogIcon,
            title: "Blog",
            description: "Learn about APIs, development and startups from our team.",
            href: "https://treblle.com",
        },
        {
            icon: ChatsIcon,
            title: "Support",
            description: "Get live chat support directly from our team members.",
            href: "https://treblle.com",
        },
    ];

    const classes = resourcesDropdown();

    return (
        <DropdownBase label="Resources">
            <div className={classes.wrapper}>
                <div className={classes.resourcesWrapper}>
                    <div className={classes.resourcesContainer}>
                        {resources.map((product) => (
                            <a
                                key={product.title}
                                href={product.href}
                                className={dropdownItemRecipe}
                            >
                                <span className={classes.resourceImage}>
                                    <product.icon />
                                </span>
                                <div>
                                    <h2 className={classes.resourceTitle}>{product.title}</h2>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={classes.additionalWrapper}>
                    <div className={classes.additionalContainer}>
                        {additional.map((item) => (
                            <a key={item.title} href={item.href} className={dropdownItemRecipe}>
                                <span className={classes.additionalImage}>
                                    <item.icon />
                                </span>
                                <div>
                                    <h2 className={classes.additionalTitle}>{item.title}</h2>
                                    <span className={classes.additionalDescription}>
                                        {item.description}
                                    </span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </DropdownBase>
    );
}
