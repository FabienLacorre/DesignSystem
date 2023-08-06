import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IoMdArrowDropleft } from 'react-icons/io';
import { Grid } from "../../Atoms/Grid/Grid";
import { Box } from "../../Atoms/Box/Box";

const meta = {
    title: "Molecules/Button",
    component: Button,
    parameters: {
        // layout: "centered",
        docs: {
            description: {
                component:
                    "Button component with a text and an optional icon.",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
    render: (args) => (
        <Grid {...args}>
            <Box>
                <Button content="BUTTON" />
            </Box>
            <Box>
                <Button content="BUTTON" color="success" />
            </Box>
            <Box>
                <Button content="BUTTON" color="warning" />
            </Box>
            <Box>
                <Button content="BUTTON" color="error" />
            </Box>
        </Grid>
    ),
}

export const WithIcons: Story = {
    render: (args) => (
        <>
            <Grid {...args}>
                <Box>
                    <Button content="GO BACK" Icon={IoMdArrowDropleft} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="success" Icon={IoMdArrowDropleft} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="warning" Icon={IoMdArrowDropleft} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="error" Icon={IoMdArrowDropleft} />
                </Box>
            </Grid>
        </>
    ),
}

