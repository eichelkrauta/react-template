import React from "react"
import "./App.css"

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    {process.env.REACT_APP_EXAMPLE_ENV_VAR}
                </p>
            </header>
        </div>
    )
}

export default App
