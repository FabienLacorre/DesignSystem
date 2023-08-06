
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";

const meta = {
    title: "Molecules/Accordion",
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: "Accordion component"
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: "THIS IS A TITLE"
    },
    render: (args) => (
        <>
            <Accordion {...args}>
                This is a text in this accordion
                <br />
                This is a text in this accordion
                <br />
                This is a text in this accordion
                <br />
                This is a text in this accordion
                <br />
            </Accordion>
        </>
    ),
}

