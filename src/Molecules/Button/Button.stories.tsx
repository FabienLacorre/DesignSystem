import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { IoMdArrowDropleft } from "react-icons/io";
import { Grid } from "../../Atoms/Grid/Grid";
import { Box } from "../../Atoms/Box/Box";

const meta = {
  title: "Molecules/Button",
  component: Button,
  parameters: {
    // layout: "centered",
    docs: {
      description: {
        component: "Button component with a text and an optional icon.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => (
    <Grid {...args}>
      <Box>
        <Button content="BUTTON" />
      </Box>
      <Box>
        <Button content="BUTTON" color="success" />
      </Box>
      <Box>
        <Button content="BUTTON" color="warning" />
      </Box>
      <Box>
        <Button content="BUTTON" color="error" />
      </Box>
    </Grid>
  ),
};

export const Outlined: Story = {
  render: (args) => (
    <>
      <Grid {...args}>
        <Box>
          <Button content="BUTTON" outlined />
        </Box>
        <Box>
          <Button content="BUTTON" color="success" outlined />
        </Box>
        <Box>
          <Button content="BUTTON" color="warning" outlined />
        </Box>
        <Box>
          <Button content="BUTTON" color="error" outlined />
        </Box>
      </Grid>
    </>
  ),
};

export const Borderless: Story = {
  render: (args) => (
    <>
      <Grid {...args}>
        <Box>
          <Button content="BUTTON" borderless />
        </Box>
        <Box>
          <Button content="BUTTON" color="success" borderless />
        </Box>
        <Box>
          <Button content="BUTTON" color="warning" borderless />
        </Box>
        <Box>
          <Button content="BUTTON" color="error" borderless />
        </Box>
      </Grid>
    </>
  ),
};

export const WithIcons: Story = {
  render: (args) => (
    <>
      <Grid {...args}>
        <Box>
          <Button content="GO BACK" Icon={IoMdArrowDropleft} />
        </Box>
        <Box>
          <Button content="GO BACK" color="success" Icon={IoMdArrowDropleft} />
        </Box>
        <Box>
          <Button content="GO BACK" color="warning" Icon={IoMdArrowDropleft} />
        </Box>
        <Box>
          <Button content="GO BACK" color="error" Icon={IoMdArrowDropleft} />
        </Box>
      </Grid>
    </>
  ),
};

export const OutlinedWithIcons: Story = {
  render: (args) => (
    <>
      <Grid {...args}>
        <Box>
          <Button content="GO BACK" outlined Icon={IoMdArrowDropleft} />
        </Box>
        <Box>
          <Button
            content="GO BACK"
            color="success"
            outlined
            Icon={IoMdArrowDropleft}
          />
        </Box>
        <Box>
          <Button
            content="GO BACK"
            color="warning"
            outlined
            Icon={IoMdArrowDropleft}
          />
        </Box>
        <Box>
          <Button
            content="GO BACK"
            color="error"
            outlined
            Icon={IoMdArrowDropleft}
          />
        </Box>
      </Grid>
    </>
  ),
};
