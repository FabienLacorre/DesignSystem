import type { Meta, StoryObj } from "@storybook/react";
import { LoginPage } from "./LoginPage";

const meta = {
  title: "Pages/LoginPage",
  component: LoginPage,
  parameters: {
    docs: {
      description: {
        component: "Not found page exemple",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Colors: Story = {
  render: (args) => <LoginPage />,
};
