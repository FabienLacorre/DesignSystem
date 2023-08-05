import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./Typography";
import { Grid } from "../Grid/Grid";

const meta = {
  title: "Atoms/Typography",
  component: Typography,
  parameters: {
    // layout: "centered",
    docs: {
      description: {
        component:
          "Simple typography component with color, size and weight configuration",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => (<Grid>
    <Typography>This is a typography</Typography>
    <Typography color="primary">This is a typography</Typography>
    <Typography color="success">This is a typography</Typography>
    <Typography color="success">This is a typography</Typography>
    <Typography color="error">This is a typography</Typography>
  </Grid>)
};

export const WeightBold: Story = {
  args: {
    children: "This is a typography component",
    weight: "bold",
  },
};

export const FontSize: Story = {
  render: (args) => (<Grid flow="row">
    <Typography size="small">This is a small typography</Typography>
    <Typography size="medium">This is a medium typography</Typography>
    <Typography size="large">This is a large typography</Typography>
    <Typography size="xlarge">This is a xlarge typography</Typography>
    <Typography size="xxlarge">This is a xxlarge typography</Typography>
    <Typography size="xxxlarge">This is a xxxlarge typography</Typography>
  </Grid>)
}
