
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

export const Default: Story = {}

export const WithPlaceholder: Story = {
    args: {
        placeholder: "Placeholder"
    }
}