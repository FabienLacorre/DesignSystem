import type { Meta, StoryObj } from "@storybook/react";
import { NotFoundPage } from "./NotFoundPage";

const meta = {
  title: "Pages/NotFound",
  component: NotFoundPage,
  parameters: {
    docs: {
      description: {
        component: "Not found page exemple",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => <NotFoundPage />,
};
