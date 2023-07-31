import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Atoms/Icon/Icon";
import { arrowLeftIcon } from "../Atoms/Icon/_Icons/arrowLeftIcon";
import { Box } from "../Atoms/Box/Box";

const meta = {
    title: "Atoms/Box",
    component: Box,
    parameters: {
        docs: {
            description: {
                component:
                    "Basic container.",
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        height: 100,
        width: 200,
        boxColor: "primary",
    },
};




