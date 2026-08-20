import { name } from 'next/dist/server/ci-info';
import { constants } from '../constants'

const year = new Date().getFullYear();

export const siteContent = {
    navbar: {
        logo: constants.siteName,
        button: "Add new",
        navigation: [
            {
                linkName: "Recipes",
                linkUrl: "/"
            },
            {
                linkName: "Your pantry",
                linkUrl: "/pantry/"
            },
            {
                linkName: "Planner",
                linkUrl: "/planner/"
            },
            {
                linkName: "Shopping List",
                linkUrl: "/shopping-list/"
            },
            {
                linkName: "Ingredient List",
                linkUrl: "/ingredients/"
            },
        ]
    },
    sidePanel: {
        topbar: "Hi there!",
        topbarExtra: "What are we cooking today?",
        logo: constants.siteName,
        footer: "Keep your recipes & pantry organised.",
        sectionNames: [
            {
                name: "Browse",
                slug: "browse"
            },
            {
                name: "Filter",
                slug: "filter"
            },
            {
                name: "Search by ingredient",
                slug: "search-by-ingredient"
            }
        ],
        links: [
            {
                linkName: "Your recipes",
                linkUrl: "/"
            },
            {
                linkName: "Planner",
                linkUrl: "/"
            },
            {
                linkName: "Your pantry",
                linkUrl: "/"
            },
            {
                linkName: "Your shopping list",
                linkUrl: "/"
            }
        ],
        filterOptions: [
            {
                name: "Filter by type",
                slug: constants.filterByTypeSlug
            },
            {
                name: "Filter by time",
                slug: constants.filterByTimeSlug
            }
        ]
    },
    recipes: {
        button: "See recipe",
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
                            linkUrl: "/"
                        },
                        {
                            linkName: "Recipe planner",
                            linkUrl: "/planner/"
                        },
                        {
                            linkName: "Ingredient list",
                            linkUrl: "/ingredients/"
                        },
                        {
                            linkName: "Your pantry",
                            linkUrl: "/pantry/"
                        },
                        {
                            linkName: "Your shopping lists",
                            linkUrl: "/shopping-list/"
                        },
                        {
                            linkName: "About",
                            linkUrl: "/about-us/"
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