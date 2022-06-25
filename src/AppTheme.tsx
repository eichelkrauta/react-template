import { ThemeProps } from "styled-components"

export interface AppColors {
    primary: string
    secondary: string
}

export interface AppTheme {
    colors: AppColors
}

export const theme: AppTheme = {
    colors: {
        primary: "#282c34",
        secondary: "white"
    }
}

export const colors = (props: ThemeProps<any>): AppColors => {
    const colors = (props.theme as AppTheme | undefined)?.colors
    if (colors) {
        return colors
    } else {
        return theme.colors
    }
}
