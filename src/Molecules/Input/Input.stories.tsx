
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta = {
    title: "Molecules/Input",
    component: Input,
    parameters: {
        docs: {
            description: {
                component: "Input component"
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: "Primary"
    }
}

export const Success: Story = {
    args: {
        color: "success",
        placeholder: "Success"
    }
}

export const Alert: Story = {
    args: {
        color: "alert",
        placeholder: "Alert"
    }
}

export const Error: Story = {
    args: {
        color: "error",
        placeholder: "Error"
    }
}

export const Disabled: Story = {
    args: {
        disabled: true,
        placeholder: "Disabled"
    }
}

