import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "../../Atoms/Typography/Typography";

const meta = {
  title: "Example/Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is a typography component",
  },
};

export const WeightBold: Story = {
  args: {
    children: "This is a typography component",
    weight: "bold",
  },
};

export const ColorPrimary: Story = {
  args: {
    color: "primary",
    children: "This is a typography component",
  },
};

export const ColorSuccess: Story = {
  args: {
    color: "success",
    children: "This is a typography component",
  },
};

export const ColorAlert: Story = {
  args: {
    color: "alert",
    children: "This is a typography component",
  },
};

export const ColorError: Story = {
  args: {
    color: "error",
    children: "This is a typography component",
  },
};

export const SizeSmall: Story = {
  args: {
    children: "This is a typography component",
    size: "small",
  },
};

export const SizeMedium: Story = {
  args: {
    children: "This is a typography component",
    size: "medium",
  },
};

export const SizeLarge: Story = {
  args: {
    children: "This is a typography component",
    size: "large",
  },
};

export const SizeXLarge: Story = {
  args: {
    children: "This is a typography component",
    size: "xlarge",
  },
};

export const SizeXXLarge: Story = {
  args: {
    children: "This is a typography component",
    size: "xxlarge",
  },
};

export const SizeXXXLarge: Story = {
  args: {
    children: "This is a typography component",
    size: "xxxlarge",
  },
};
