import { constants } from '../constants'

const year = new Date().getFullYear();

export const siteContent = {
    navbar: {
        logo: constants.siteName,
        button: "Add new",
        navigation: [
            {
                linkName: "Recipes",
                linkUrl: ""
            },
            {
                linkName: "Ingredient List",
                linkUrl: ""
            },
            {
                linkName: "Your pantry",
                linkUrl: ""
            },
            {
                linkName: "Account",
                linkUrl: ""
            },
            {
                linkName: "About",
                linkUrl: ""
            },
        ]
    },
    footer: {
        logo: constants.siteName,
        copyright: `Designed and developed by Martyna Smolarek © ${year}`,
        links: {
            title: "Quick links",
            blocks: [
                {
                    title: "Page links",
                    links: [
                        {
                            linkName: "Your recipes",
                            linkUrl: ""
                        },
                        {
                            linkName: "Ingredient list",
                            linkUrl: ""
                        },
                        {
                            linkName: "Your pantry",
                            linkUrl: ""
                        },
                        {
                            linkName: "About",
                            linkUrl: ""
                        },
                    ]
                },
                {
                    title: "Account",
                    links: [
                        {
                            linkName: "Your account",
                            linkUrl: ""
                        }
                    ]
                }
            ]
        }

    }
}