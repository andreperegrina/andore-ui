import colors from "tailwindcss/colors";

export interface ThemeCoreColor {
  DEFAULT: string;
  container: string;
  text: string;
  "container-text": string;
  "dark-DEFAULT": string;
  "dark-container": string;
  "dark-text": string;
  "dark-container-text": string;
}

export interface ThemeSurfaceColor {
  scrim?: string;
  inverse?: string;
  "inverse-text"?: string;
  "inverse-primary"?: string;
  "dark-inverse"?: string;
  "dark-inverse-text"?: string;
  "dark-inverse-primary"?: string;
  dim?: string;
  DEFAULT?: string;
  bright?: string;
  text?: string;
  variant?: string;
  "text-variant"?: string;
  "container-lowest"?: string;
  "container-low"?: string;
  container?: string;
  "container-high"?: string;
  "container-highest"?: string;
  disabled?: string;
  "dark-scrim"?: string;
  "dark-dim"?: string;
  "dark-DEFAULT"?: string;
  "dark-bright"?: string;
  "dark-container-lowest"?: string;
  "dark-container-low"?: string;
  "dark-container"?: string;
  "dark-container-high"?: string;
  "dark-container-highest"?: string;
  "dark-text"?: string;
  "dark-variant"?: string;
  "dark-text-variant"?: string;
}

export interface ThemeOutlineColor {
  DEFAULT: string;
  variant: string;
  dark: string;
  "dark-variant": string;
}

export interface BaseColors {
  primary?: ThemeCoreColor;
  secondary?: ThemeCoreColor;
  info?: ThemeCoreColor;
  success?: ThemeCoreColor;
  warning?: ThemeCoreColor;
  error?: ThemeCoreColor;
  outline?: ThemeOutlineColor;
  surface?: ThemeSurfaceColor;
  gray?: Record<string, string>;
  white?: string;
  black?: string;
}

export interface ThemeColors extends BaseColors {
  [key: string]: unknown;
}

export interface BaseTheme {
  colors: ThemeColors;
  borderRadius?: Record<string, string>;
  boxShadow?: Record<string, string>;
  transitionTimingFunction?: Record<string, string>;
  transitionDuration?: Record<string, string>;
  keyframes?: Record<string, Record<string, unknown>>;
  animation?: Record<string, string>;
  fontSize?: Record<string, string>;
  fontFamily?: Record<string, string[]>;
  spacing?: Record<string, string>;
  transitionProperty?: Record<string, string>;
}

export interface ThemeType extends BaseTheme {}

// create type from tailwind colors
export type TailwindColor = keyof typeof colors;

export type TailwindTonal =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950";
