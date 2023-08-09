import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Grid } from "../../Atoms/Grid/Grid";

const meta = {
  title: "Molecules/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input component",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => (
    <Grid {...args}>
      <Input placeholder="Default" />
      <Input placeholder="Primary" color="primary" />
      <Input placeholder="Success" color="success" />
      <Input placeholder="Warning" color="warning" />
      <Input placeholder="Error" color="error" />
    </Grid>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};
