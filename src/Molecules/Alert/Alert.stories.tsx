import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";
import { Box } from "../../Atoms/Box/Box";
import { FiAlertCircle } from 'react-icons/fi';

const meta = {
    title: "Molecules/Alert",
    component: Alert,
    parameters: {
        // layout: "centered",
        docs: {
            description: {
                component:
                    "Alert component",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
    args: {
        content: "This is an alert"
    },
    render: (args) => (
        <>
            <Box margin="small">
                <Alert {...args} />
            </Box>
            <Box margin="small">
                <Alert {...args} color="success" />
            </Box>
            <Box margin="small">
                <Alert {...args} color="warning" />
            </Box>
            <Box margin="small">
                <Alert {...args} color="error" />
            </Box>

        </>

    ),
}

export const OutlinedColor: Story = {
    args: {
        content: "This is an alert",
        outlined: true,
    },
    render: (args) => (
        <>
            <Box margin="small">
                <Alert {...args} />
            </Box>
            <Box margin="small">
                <Alert {...args} color="success" />
            </Box>
            <Box margin="small">
                <Alert {...args} color="warning" />
            </Box>
            <Box margin="small">
                <Alert {...args} color="error" />
            </Box>

        </>

    ),
}

export const ColorWithIcon: Story = {
    args: {
        content: "This is an alert",
        outlined: false,
    },
    render: (args) => (
        <>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="success" />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="warning" />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="error" />
            </Box>
        </>
    ),
}

export const ColorOutlinedWithIcon: Story = {
    args: {
        content: "This is an alert",
        outlined: true,
    },
    render: (args) => (
        <>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="success" />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="warning" />
            </Box>
            <Box margin="small">
                <Alert {...args} Icon={FiAlertCircle} color="error" />
            </Box>
        </>
    ),
}
