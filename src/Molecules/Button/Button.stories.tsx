import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { Icon } from "../../Atoms/Icon/Icon";
import { arrowLeftIcon } from "../../Atoms/Icon/_Icons/arrowLeftIcon";

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

export const WeightRegular: Story = {
    args: {
        content: "SUBMIT",
        textWeight: "regular"
    },
};

export const ColorSuccess: Story = {
    args: {
        content: "SUBMIT",
        color: "success",
    },
};

export const ColorAlert: Story = {
    args: {
        content: "SUBMIT",
        color: "alert",
    },
};

export const ColorError: Story = {
    args: {
        content: "SUBMIT",
        color: "error",
    },
};

export const WithIcon: Story = {
    args: {
        content: "GO BACK",
        textWeight: "regular",
        icon: <Icon size="medium" svg={arrowLeftIcon} />
    },
};

export const WithIconAndBoldText: Story = {
    args: {
        content: "GO BACK",
        textWeight: "bold",
        icon: <Icon size="medium" svg={arrowLeftIcon} />
    },
};

