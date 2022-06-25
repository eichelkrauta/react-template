import React from "react"
import styled from "styled-components"
import { colors } from "../../AppTheme"

export interface ExampleProps {
    title: string
}

const Header = styled.header`
    background-color: ${props => colors(props).primary};
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: ${props => colors(props).secondary};
`

const TitleContainer = styled.p`
    max-width: 500px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

export function Example({
    title
}: ExampleProps): JSX.Element {
    return (
        <Header>
            <TitleContainer>
                {title}
            </TitleContainer>
        </Header>
    )
}
