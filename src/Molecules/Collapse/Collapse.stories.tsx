
import type { Meta, StoryObj } from "@storybook/react";
import { Collapse } from "./Collapse";
import { useState } from "react";
import { Button } from "../Button/Button";
import { useAddonState } from '@storybook/manager-api';

const Template = () => {

}

const meta = {
    title: "Molecules/Collapse",
    component: Collapse,
    parameters: {
        docs: {
            description: {
                component: "Collapse component, use the isOpen prop to open or close the collapse"
            },
        },
    },
    tags: ["autodocs"],
} satisfies Meta<typeof Collapse>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        isOpen: false
    },
    render: (args) => (
        <>
            <Collapse isOpen={args.isOpen}>
                This is a text in a collapse component
            </Collapse>
        </>
    )
}


