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

export const Number: Story = {
  render: (args) => (
    <Grid {...args}>
      <Input placeholder="Default" type="number" />
      <Input placeholder="Primary" color="primary" type="number" />
      <Input placeholder="Success" color="success" type="number" />
      <Input placeholder="Warning" color="warning" type="number" />
      <Input placeholder="Error" color="error" type="number" />
    </Grid>
  ),
};

export const Date: Story = {
  render: (args) => (
    <Grid {...args}>
      <Input placeholder="Default" type="date" />
      <Input placeholder="Primary" color="primary" type="date" />
      <Input placeholder="Success" color="success" type="date" />
      <Input placeholder="Warning" color="warning" type="date" />
      <Input placeholder="Error" color="error" type="date" />
    </Grid>
  ),
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled",
  },
};
