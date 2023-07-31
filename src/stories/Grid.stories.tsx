import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Atoms/Icon/Icon";
import { arrowLeftIcon } from "../Atoms/Icon/_Icons/arrowLeftIcon";
import { Box } from "../Atoms/Box/Box";
import { Grid } from "../Atoms/Grid/Grid";

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
    },
};




