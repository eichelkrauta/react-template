import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders title", () => {
    render(<App />)
    const linkElement = screen.getByText(/Welcome to your unit-testing development!/i)
    expect(linkElement).toBeInTheDocument()
})
