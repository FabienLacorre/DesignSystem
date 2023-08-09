import type { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../Atoms/Box/Box";
import { Spinner } from "./Spinner";
import { Grid } from "../../Atoms/Grid/Grid";

const meta = {
  title: "Molecules/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Spinner component",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => (
    <Grid>
      <Spinner />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="error" />
    </Grid>
  ),
};

export const Size: Story = {
  render: (args) => (
    <Grid>
      <Spinner size="small" />
      <Spinner size="medium" />
      <Spinner size="large" />
    </Grid>
  ),
};
