import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta = {
  title: "Organisms/Card",
  component: Card,
  parameters: {
    docs: {
      description: {
        component: "Card component",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <>
      <Card title="Title of the card">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
        alias. Nam voluptates nobis consectetur veniam molestiae, rem aperiam
        dolore porro repudiandae, animi modi iusto tenetur repellendus incidunt!
        Aliquid, repudiandae nemo? Lorem ipsum dolor sit, amet consectetur
        adipisicing elit. Adipisci vero ipsa nam dolorem est laborum incidunt
        consequuntur consequatur doloremque possimus, natus dolor quisquam,
        harum reprehenderit soluta! Dolores soluta optio quis.
      </Card>
    </>
  ),
};
