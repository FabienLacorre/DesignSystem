import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../Atoms/Typography/Typography";
import { Button } from "../Molecules/Button/Button";

const meta = {
    title: "Molecules/Button",
    component: Button,
    parameters: {
        layout: "centered",
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


