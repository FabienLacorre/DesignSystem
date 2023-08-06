
import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { Box } from "../../Atoms/Box/Box";

const meta = {
    title: "Organisms/Accordion",
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
        title: "This is a title accordion"
    },
    render: (args) => (
        <>
            <Accordion {...args}>
                This is a text in an accordion
            </Accordion>
        </>
    ),
}

export const Colors: Story = {
    args: {
        title: ""
    },
    render: (args) => (
        <>
            <Box paddingBottom="small">
                <Accordion title="Primary">
                    This is a text in an accordion
                </Accordion>
            </Box>
            <Box paddingBottom="small">
                <Accordion title="Success" color="success">
                    This is a text in an accordion
                </Accordion>
            </Box>
            <Box paddingBottom="small">
                <Accordion title="Warning" color="warning">
                    This is a text in an accordion
                </Accordion>
            </Box>
            <Box paddingBottom="small">
                <Accordion title="Error" color="error">
                    This is a text in an accordion
                </Accordion>
            </Box>
        </>
    ),
}


