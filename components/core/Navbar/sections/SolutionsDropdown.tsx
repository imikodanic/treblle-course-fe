import { ApiProductIcon } from "~components/core/icons/ApiProductIcon";
import { DevelopmentProductivityIcon } from "~components/core/icons/DevelopmentProductivityIcon";
import { DigitalTransformIcon } from "~components/core/icons/DigitalTransformIcon";
import { EnterpriseIcon } from "~components/core/icons/EnterpriseIcon";
import { GovernanceProgramIcon } from "~components/core/icons/GovernanceProgramIcon";
import { ScalingMicroservicesIcon } from "~components/core/icons/ScalingMicroservicesIcon";
import { SecurityProgramIcon } from "~components/core/icons/SecurityProgramIcon";
import { SmallBusinessIcon } from "~components/core/icons/SmallBusinessIcon";
import { StartupIcon } from "~components/core/icons/StartupIcon";
import { ToolsIcon } from "~components/core/icons/ToolsIcon";
import DropdownBase, { dropdownItemRecipe } from "~components/core/Navbar/DropdownBase";
import { css, sva } from "~styled-system/css";

const subtitleStyle = css({
    fontSize: "sm",
    color: "cloud",
    marginBottom: "2",
});

const solutionsDropdown = sva({
    slots: [
        "wrapper",
        "subtitle",
        "initiativeWrapper",
        "initiativeContainer",
        "initiativeImage",
        "initiativeTitle",
        "companySizeWrapper",
        "companySizeContainer",
        "companySizeImage",
        "companySizeTitle",
    ],
    base: {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            paddingY: "5",
            gap: "5",
            lg: {
                flexDirection: "row",
            },
        },
        subtitle: {},
        initiativeWrapper: {
            width: "100%",

            lg: {
                width: "70%",
            },
        },
        initiativeContainer: {
            display: "grid",
            gridTemplateColumns: "1",
            gridRowGap: "2",
            lg: {
                gridTemplateColumns: "3",
                gridColumnGap: "5",
            },
        },
        initiativeImage: {
            color: "cloud",
        },
        initiativeTitle: {
            color: "white",
            fontSize: "sm",
            fontWeight: "semibold",

            md: {
                fontSize: "md",
            },
        },
        companySizeWrapper: {
            borderTopWidth: "1",
            borderColor: "deep-metal",
            borderStyle: "solid",
            width: "100%",
            paddingTop: "5",
            lg: {
                borderTopWidth: "0",
                borderLeftWidth: "1",
                paddingLeft: "8",
                width: "30%",
            },
        },
        companySizeContainer: {
            display: "flex",
            flexDirection: "column",
            gap: "4",
        },
        companySizeImage: {
            color: "white",
            backgroundColor: "electric-400",
            rounded: "full",
        },
        companySizeTitle: {
            color: "white",
            fontSize: "md",
            fontWeight: "semibold",
        },
    },
});

export default function SolutionsDropdown() {
    const solutions = [
        {
            icon: DigitalTransformIcon,
            title: "Digital Transformation",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: DevelopmentProductivityIcon,
            title: "Developer Productivity",
            href: "https://treblle.com/solution/developer-productivity",
        },
        {
            icon: SecurityProgramIcon,
            title: "Security Program",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: ScalingMicroservicesIcon,
            title: "Scaling Microservices",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: GovernanceProgramIcon,
            title: "Governance Program",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: ToolsIcon,
            title: "Tools Consolidation",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: ApiProductIcon,
            title: "API-as-a-Product",
            href: "https://treblle.com/solution/digital-transformation",
        },
        {
            icon: GovernanceProgramIcon,
            title: "AI Solutions",
            href: "https://treblle.com/solution/digital-transformation",
        },
    ];

    const companySizes = [
        {
            icon: StartupIcon,
            title: "Startup",
            href: "https://treblle.com",
        },
        {
            icon: SmallBusinessIcon,
            title: "Small Business",
            href: "https://treblle.com",
        },
        {
            icon: EnterpriseIcon,
            title: "Enterprise",
            href: "https://treblle.com",
        },
    ];

    const classes = solutionsDropdown();

    return (
        <DropdownBase label="Solutions">
            <div className={classes.wrapper}>
                <div className={classes.initiativeWrapper}>
                    <div className={subtitleStyle}>By Initiative (Solution)</div>
                    <div className={classes.initiativeContainer}>
                        {solutions.map((product) => (
                            <a
                                key={product.title}
                                href={product.href}
                                className={dropdownItemRecipe}
                            >
                                <span className={classes.initiativeImage}>
                                    <product.icon />
                                </span>
                                <div>
                                    <h2 className={classes.initiativeTitle}>{product.title}</h2>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
                <div className={classes.companySizeWrapper}>
                    <div className={subtitleStyle}>By Company Size</div>
                    <div className={classes.companySizeContainer}>
                        {companySizes.map((companySize) => (
                            <a
                                key={companySize.title}
                                href={companySize.href}
                                className={dropdownItemRecipe}
                            >
                                <span className={classes.companySizeImage}>
                                    <companySize.icon />
                                </span>
                                <div>
                                    <h2 className={classes.companySizeTitle}>
                                        {companySize.title}
                                    </h2>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </DropdownBase>
    );
}
