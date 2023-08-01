import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../Box/Box";
import { Grid } from "./Grid";

const meta = {
    title: "Atoms/Grid",
    component: Grid,
    parameters: {
        docs: {
            description: {
                component:
                    "Layout container.",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
    args: {
        gap: "large",
        flow: "column",
    },
    render: (args) => (
        <Grid {...args}>
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
            <Box boxColor="primary" fullWidth height={50} />
        </Grid>
    ),
};