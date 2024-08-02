import Image from "next/image";

import { footerLinks } from "~components/core/Footer/footerData";
import { FacebookIcon } from "~components/core/icons/FacebookIcon";
import { GithubIcon } from "~components/core/icons/GithubIcon";
import { InstagramIcon } from "~components/core/icons/InstagramIcon";
import { LinkedInIcon } from "~components/core/icons/LinkedInIcon";
import { TiktokIcon } from "~components/core/icons/TiktokIcon";
import { TwitterIcon } from "~components/core/icons/TwitterIcon";
import { YoutubeIcon } from "~components/core/icons/YoutubeIcon";
import { Button } from "~components/core/ui/Button";
import { sva } from "~styled-system/css";

const footer = sva({
    slots: [
        "root",
        "infoSection",
        "actionsSection",
        "logo",
        "headlineText",
        "socialMedia",
        "socialMediaLink",
        "buttonsWrapper",
        "button",
        "divider",
        "badgesWrapper",
        "badge",
        "linkSections",
        "linkSectionTitle",
        "linkSection",
        "link",
        "partnerSection",
        "partnerSectionTitle",
        "partnersWrapper",
        "rights",
    ],
    base: {
        root: {
            paddingTop: "12",
            backgroundColor: "midnight",
            paddingX: 5,
            fontFamily: "inter",
            color: "white",
            borderTopColor: "deep-metal",
            borderTopWidth: 1,
            md: {
                paddingX: 10,
            },
        },
        infoSection: {
            maxWidth: "1200px",
            marginX: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 16,
            marginBottom: 8,
            xl: {
                gap: 32,
                flexDirection: "row",
            },
        },
        actionsSection: {
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 5,
            alignItems: "center",
            xl: {
                alignItems: "start",
                width: "310px",
            },
        },
        headlineText: {
            color: "metal",
        },
        socialMedia: {
            display: "flex",
            gap: "5",
        },
        socialMediaLink: {
            color: "metal",
            transition: "color 0.3s",
            _hover: {
                color: "cloud",
            },
        },
        buttonsWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: 5,
            sm: {
                flexDirection: "row",
            },
        },
        button: {
            width: "150px",
            textAlign: "center",
        },
        divider: {
            color: "deep-metal",
        },
        badgesWrapper: {
            display: "grid",
            gridColumnGap: "6",
            gridRowGap: "6",
            gridTemplateColumns: "repeat(3, 1fr)",
            sm: {
                gridTemplateColumns: "repeat(5, 1fr)",
            },
            xl: {
                gridTemplateColumns: "repeat(3, 1fr)",
            },
        },
        linkSections: {
            display: "flex",
            gap: "20",
            flexDirection: "column",
            width: "100%",
            sm: {
                alignItems: "center",
            },
            md: {
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "start",
            },
        },
        linkSectionTitle: {
            fontWeight: "bold",
            marginBottom: "2",
        },
        linkSection: {
            display: "flex",
            flexDirection: "column",
            gap: 4,
        },
        link: {
            fontWeight: "medium",
            fontSize: "sm",
            _hover: {
                textDecoration: "underline",
            },
        },
        partnerSection: {
            paddingY: "6",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            borderYColor: "deep-metal",
            borderYWidth: 1,
        },
        partnerSectionTitle: {
            color: "metal",
        },
        partnersWrapper: {
            display: "flex",
            flexDirection: "column",
            gap: 7,
            lg: {
                flexDirection: "row",
                gap: 12,
            },
        },
        rights: {
            color: "metal",
            textAlign: "center",
            paddingY: 8,
        },
    },
});

export const Footer = () => {
    const classes = footer();

    return (
        <footer className={classes.root}>
            <div className={classes.infoSection}>
                <div className={classes.actionsSection}>
                    <Image
                        src="/brand/logo-negative.svg"
                        alt="Treblle Logo"
                        width={120}
                        height={33}
                    />
                    <p className={classes.headlineText}>End to End APIOps platform</p>
                    <div className={classes.socialMedia}>
                        <a
                            href="https://twitter.com/treblleapi"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Twitter"
                            className={classes.socialMediaLink}
                        >
                            <TwitterIcon />
                        </a>
                        <a
                            href="https://www.linkedin.com/company/treblle/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                            className={classes.socialMediaLink}
                        >
                            <LinkedInIcon />
                        </a>
                        <a
                            href="https://www.youtube.com/@treblle"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Youtube"
                            className={classes.socialMediaLink}
                        >
                            <YoutubeIcon />
                        </a>
                        <a
                            href="https://www.facebook.com/treblle"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Facebook"
                            className={classes.socialMediaLink}
                        >
                            <FacebookIcon />
                        </a>
                        <a
                            href="https://www.instagram.com/treblleapis/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Instagram"
                            className={classes.socialMediaLink}
                        >
                            <InstagramIcon />
                        </a>
                        <a
                            href="https://github.com/Treblle"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Github"
                            className={classes.socialMediaLink}
                        >
                            <GithubIcon />
                        </a>
                        <a
                            href="https://www.tiktok.com/@treblleapis"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Tiktok"
                            className={classes.socialMediaLink}
                        >
                            <TiktokIcon />
                        </a>
                    </div>
                    <div className={classes.buttonsWrapper}>
                        <Button asChild variant="outlineLight">
                            <a href="https://app.treblle.com/login" className={classes.button}>
                                Sign In
                            </a>
                        </Button>
                        <Button asChild variant="outlineLight">
                            <a href="https://app.treblle.com/register" className={classes.button}>
                                Get Started
                            </a>
                        </Button>
                    </div>
                    <hr className={classes.divider} />
                    <div className={classes.badgesWrapper}>
                        <a href="https://treblle.com/security" target="_blank" rel="noreferrer">
                            <Image src="/badges/soc2.svg" alt="Badge" width={80} height={80} />
                        </a>
                        <a href="https://treblle.com/security" target="_blank" rel="noreferrer">
                            <Image
                                src="/badges/iso_standard.svg"
                                alt="Badge"
                                width={80}
                                height={80}
                            />
                        </a>
                        <a href="https://treblle.com/security" target="_blank" rel="noreferrer">
                            <Image src="/badges/gdpr.svg" alt="Badge" width={80} height={80} />
                        </a>
                        <a href="https://gartner.treblle.com/" target="_blank" rel="noreferrer">
                            <Image src="/badges/gartner.svg" alt="Badge" width={80} height={80} />
                        </a>
                        <a
                            href="https://www.idc.com/getdoc.jsp?containerId=US52323324&pageType=PRINTFRIENDLY"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image
                                src="/badges/idc_innovator.webp"
                                alt="Badge"
                                width={80}
                                height={80}
                            />
                        </a>
                    </div>
                </div>
                <div className={classes.linkSections}>
                    {footerLinks.map((section) => (
                        <div key={section.sectionName} className={classes.linkSection}>
                            <p className={classes.linkSectionTitle}>{section.sectionName}</p>
                            {section.links.map((link) => (
                                <a key={link.name} href={link.href} className={classes.link}>
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div className={classes.partnerSection}>
                <p className={classes.partnerSectionTitle}>Our Partners</p>
                <div className={classes.partnersWrapper}>
                    <a href="https://traefik.io/" target="_blank" rel="noreferrer">
                        <Image src="/partners/traefik.svg" alt="Traefik" width={120} height={24} />
                    </a>
                    <a href="https://www.lunar.dev/" target="_blank" rel="noreferrer">
                        <Image
                            src="/partners/lunar_dev.svg"
                            alt="lunar.dev"
                            width={120}
                            height={24}
                        />
                    </a>
                    <a href="https://strapi.io/" target="_blank" rel="noreferrer">
                        <Image src="/partners/strapi.svg" alt="Strapi" width={120} height={24} />
                    </a>
                </div>
            </div>
            <p className={classes.rights}>© Treblle. All Rights Reserved.</p>
        </footer>
    );
};
