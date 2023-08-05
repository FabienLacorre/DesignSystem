import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../../Atoms/Icon/Icon";
import { arrowLeftIcon } from "../../Atoms/Icon/_Icons/arrowLeftIcon";
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
                    <Button content="GO BACK" icon={<Icon size="small" svg={arrowLeftIcon} />} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="success" icon={<Icon size="small" svg={arrowLeftIcon} />} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="warning" icon={<Icon size="small" svg={arrowLeftIcon} />} />
                </Box>
                <Box>
                    <Button content="GO BACK" color="error" icon={<Icon size="small" svg={arrowLeftIcon} />} />
                </Box>
            </Grid>
        </>
    ),
}

