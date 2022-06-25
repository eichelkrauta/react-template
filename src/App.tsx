import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "./AppTheme"
import { Example } from "./components/Example/Example"

function App(): JSX.Element {
    return (
        <ThemeProvider theme={theme}>
            <Example title={process.env.REACT_APP_EXAMPLE_ENV_VAR ?? ""} />
        </ThemeProvider>
    )
}

export default App
