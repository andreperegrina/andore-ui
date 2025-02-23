import {ThemeType} from "../types";
import {motion} from "./motion";
import colors from "tailwindcss/colors";


// Typographic scale
/*
    - sm: body-small
    - base: body-medium
    - lg: body-large
    - xl: title-small
    - 2xl: title-medium
    - 3xl: title-large
    - 4xl: headline-small
    - 5xl: headline-medium
    - 6xl: headline-large
    - 7xl: display-small
    - 8xl: display-medium
    - 9xl: display-large
 */

/** @type {import('tailwindcss').Config} */
export const theme: ThemeType = {
    spacing: {
        '4.5': '1.1rem',
    },
    fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
    },
    boxShadow: {
        // material design 3 shadow
        // Light elevation 1
        sm: " 0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        // Light elevation 2
        DEFAULT:
            "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        // Light elevation 3
        md: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        // Light elevation 4
        lg: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        // Light elevation 5
        xl: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        none: "none",
        dark: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // material design 3 shadow
        // Dark elevation 1
        "dark-sm":
            " 0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // Dark elevation 2
        "dark-DEFAULT":
            "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        // Dark elevation 3
        "dark-md":
            "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        // Dark elevation 4
        "dark-lg":
            "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        // Dark elevation 5
        "dark-xl":
            "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        "dark-none": "none",
    },
    transitionTimingFunction: {
        emphasized: motion.easing.emphasized.timingFunction,
        emphasizedAccelerate: motion.easing.emphasizedAccelerate.timingFunction,
        emphasizedDecelerate: motion.easing.emphasizedDecelerate.timingFunction,
        standard: motion.easing.standard.timingFunction,
        standardAccelerate: motion.easing.standardAccelerate.timingFunction,
        standardDecelerate: motion.easing.standardDecelerate.timingFunction,
    },
    transitionDuration: {
        short1: motion.duration.short1,
        short2: motion.duration.short2,
        short3: motion.duration.short3,
        short4: motion.duration.short4,
        medium1: motion.duration.medium1,
        medium2: motion.duration.medium2,
        medium3: motion.duration.medium3,
        medium4: motion.duration.medium4,
        long1: motion.duration.long1,
        long2: motion.duration.long2,
        long3: motion.duration.long3,
        long4: motion.duration.long4,
        extraLong1: motion.duration.extraLong1,
        extraLong2: motion.duration.extraLong2,
        extraLong3: motion.duration.extraLong3,
        extraLong4: motion.duration.extraLong4,
    },
    borderRadius: {
        sm: "0.25rem",
        DEFAULT: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.75rem",
    },
    animation: {
        "accordion-open": `accordion-open ${motion.duration.medium2} ${motion.easing.emphasized.timingFunction}`,
        "accordion-closed": `accordion-closed ${motion.duration.medium2} ${motion.easing.emphasized.timingFunction}`,
        overlayShow: `overlayShow ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        contentShow: `contentShow ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        slideDownAndFade: `slideDownAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideLeftAndFade: `slideLeftAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideUpAndFade: `slideUpAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        slideRightAndFade: `slideRightAndFade ${motion.duration.medium4} ${motion.easing.emphasized.timingFunction}`,
        progressIndeterminate: `progressIndeterminate ${motion.duration.extraLong4} ${motion.easing.emphasizedAccelerate.timingFunction} infinite`,
        circularProgressIndeterminate: `spin ${motion.duration.extraLong4} linear infinite`,
        snackbarHide: `snackbarHide ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        snackbarShow: `snackbarShow ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
        snackbarSwipeOut: `snackbarSwipeOut ${motion.duration.short3} ${motion.easing.emphasized.timingFunction}`,
    },
    keyframes: {
        snackbarHide: {
            from: { opacity: '1' },
            to: { opacity: '0' },
        },
        snackbarShow: {
            from: {transform: "translateY(100%)"},
            to: {transform: "translateY(0)"},
        },
        snackbarSwipeOut: {
            from: {transform: "translateX(0)"},
            to: {transform: "translateX(100%)"},
        },
        overlayShow: {
            from: {opacity: "0"},
            to: {opacity: "1"},
        },
        contentShow: {
            from: {opacity: "0", transform: "translate(-50%, -48%) scale(0.96)"},
            to: {opacity: "1", transform: "translate(-50%, -50%) scale(1)"},
        },
        "accordion-open": {
            from: {height: "0"},
            to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-closed": {
            from: {height: "var(--radix-accordion-content-height)"},
            to: {height: "0"},
        },
        slideDownAndFade: {
            from: {opacity: '0', transform: 'translateY(-2px)'},
            to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideLeftAndFade: {
            from: {opacity: '0', transform: 'translateX(2px)'},
            to: {opacity: '1', transform: 'translateX(0)'},
        },
        slideUpAndFade: {
            from: {opacity: '0', transform: 'translateY(2px)'},
            to: {opacity: '1', transform: 'translateY(0)'},
        },
        slideRightAndFade: {
            from: {opacity: '0', transform: 'translateX(-2px)'},
            to: {opacity: '1', transform: 'translateX(0)'},
        },
        progressIndeterminate: {
            "0%": {transform: "translateX(-100%)"},
            "100%": {transform: "translateX(150%)"},
        }
    },
    colors: {
        gray: colors.gray,
        white: colors.white,
        black: colors.black,
        outline: {
            DEFAULT: "#7A757F",
            variant: "#CBC4CF",
            dark: "#948F99",
            "dark-variant": "#49454E",
        },
        surface: {
            DEFAULT: "#FEF7FF",
            text: "#1D1B20",
            variant: "#E7E0EB",
            "text-variant": "#49454E",
            dim: "#DED8E0",
            bright: "#FEF7FF",
            "container-lowest": "#FFFFFF",
            "container-low": "#F8F1FA",
            container: "#F2ECF4",
            "container-high": "#EDE6EE",
            "container-highest": "#E7E0E8",
            scrim: "#000000",
            "inverse": "#322F35",
            "inverse-text": "#F5EFF7",
            "inverse-primary": "#D3BCFD",
            "dark-DEFAULT": "#151218",
            "dark-text": "#E7E0E8",
            "dark-variant": "#49454E",
            "dark-text-variant": "#CBC4CF",
            "dark-dim": "#151218",
            "dark-bright": "#3B383E",
            "dark-container-lowest": "#0F0D13",
            "dark-container-low": "#1D1B20",
            "dark-container": "#211F24",
            "dark-container-high": "#2C292F",
            "dark-container-highest": "#36343A",
            "dark-scrim": "#000000",
            "dark-inverse": "#E7E0E8",
            "dark-inverse-text": "#322F35",
            "dark-inverse-primary": "#68548E",
        },
        primary: {
            DEFAULT: '#65558F',
            text: '#FFFFFF',
            container: '#EADDFF',
            "container-text": '#21005D',
            "dark-DEFAULT": '#D0BCFE',
            "dark-text": '#381E72',
            "dark-container": '#4F378B',
            "dark-container-text": '#EADDFF',
        },
        secondary: {
            DEFAULT: "#635B70",
            text: "#FFFFFF",
            container: "#E9DEF8",
            "container-text": "#1F182B",
            "dark-DEFAULT": "#CDC2DB",
            "dark-text": "#342D40",
            "dark-container": "#4B4358",
            "dark-container-text": "#E9DEF8",
        },
        info: {
            DEFAULT: "#4c5c92",
            text: "#ffffff",
            container: "#dce1ff",
            "container-text": "#02174b",
            "dark-DEFAULT":"#b5c4ff",
            "dark-text": "#1c2d61",
            "dark-container": "#344479",
            "dark-container-text": "#dce1ff",
        },
        success: {
            DEFAULT:"#00696b",
            text:  "#ffffff",
            container:  "#9cf1f2",
            "container-text": "#002020",
            "dark-DEFAULT": "#80d4d5",
            "dark-text": "#003737",
            "dark-container": "#004f50",
            "dark-container-text": "#9cf1f2",
        },
        warning: {
            DEFAULT: "#7c580d",
            text: "#ffffff",
            container: "#ffdeab",
            "container-text": "#271900",
            "dark-DEFAULT": "#efbf6d",
            "dark-text": "#422c00",
            "dark-container": "#5f4100",
            "dark-container-text": "#ffdeab",
        },
        error: {
            DEFAULT: "#BA1A1A",
            text: "#FFFFFF",
            container: "#FFDAD6",
            "container-text": "#410002",
            "dark-DEFAULT": "#FFB4AB",
            "dark-text": "#690005",
            "dark-container": "#93000A",
            "dark-container-text": "#FFDAD6",
        },
    },
    transitionProperty: {
        'colorsShadow': 'color, background-color, border-color, text-decoration-color, fill, stroke, box-shadow',
    }
};
