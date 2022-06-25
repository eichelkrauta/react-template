import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Example } from "./Example"

export default {
    title: "components/Example",
    component: Example,
} as ComponentMeta<typeof Example>

const Template: ComponentStory<typeof Example> = (args) => <Example {...args} />

export const Title = Template.bind({})
Title.args = {
    title: "Hey I'm a title component!"
}

export const ReallyLongTitle = Template.bind({})
ReallyLongTitle.args = {
    title: "Hey I'm a really long title that happens to maybe go off the screen, so I hope there will be some ellipsis eventually?"
}

