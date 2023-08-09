import { type Meta, type StoryObj } from "@storybook/react";
import { Accordion } from "./Accordion";
import { useState } from "react";
import { Box } from "../../Atoms/Box/Box";

const meta = {
  title: "Organisms/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component: "Accordion component",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

const TemplateDefault = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Accordion
        title="This is a title"
        isOpen={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        This is a text in this accordion
      </Accordion>
    </>
  );
};
export const Default: Story = {
  args: {
    title: "This is a title accordion",
    isOpen: false,
  },
  render: (args) => <TemplateDefault />,
};

const TemplateWithColors = () => {
  const [isOpenPrimary, setIsOpenPrimary] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenWarning, setIsOpenWarning] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const onClickPrimary = () => {
    setIsOpenPrimary(!isOpenPrimary);
  };
  const onClickSuccess = () => {
    setIsOpenSuccess(!isOpenSuccess);
  };
  const onClickWarning = () => {
    setIsOpenWarning(!isOpenWarning);
  };
  const onClickError = () => {
    setIsOpenError(!isOpenError);
  };

  return (
    <>
      <Box marginBottom="small">
        <Accordion
          onClick={onClickPrimary}
          color="primary"
          isOpen={isOpenPrimary}
          title="Primary"
        >
          Text in accordion
        </Accordion>
      </Box>
      <Box marginBottom="small">
        <Accordion
          onClick={onClickSuccess}
          color="success"
          isOpen={isOpenSuccess}
          title="Success"
        >
          Text in accordion
        </Accordion>
      </Box>
      <Box marginBottom="small">
        <Accordion
          onClick={onClickWarning}
          color="warning"
          isOpen={isOpenWarning}
          title="Warning"
        >
          Text in accordion
        </Accordion>
      </Box>
      <Box marginBottom="small">
        <Accordion
          onClick={onClickError}
          color="error"
          isOpen={isOpenError}
          title="Error"
        >
          Text in accordion
        </Accordion>
      </Box>
    </>
  );
};

export const Colors: Story = {
  args: { title: "" },
  render: (args) => <TemplateWithColors />,
};

const TemplateWithColorsWithBorder = () => {
  const [isOpenPrimary, setIsOpenPrimary] = useState(false);
  const [isOpenSuccess, setIsOpenSuccess] = useState(false);
  const [isOpenWarning, setIsOpenWarning] = useState(false);
  const [isOpenError, setIsOpenError] = useState(false);

  const onClickPrimary = () => {
    setIsOpenPrimary(!isOpenPrimary);
  };
  const onClickSuccess = () => {
    setIsOpenSuccess(!isOpenSuccess);
  };
  const onClickWarning = () => {
    setIsOpenWarning(!isOpenWarning);
  };
  const onClickError = () => {
    setIsOpenError(!isOpenError);
  };

  return (
    <>
      <Accordion
        shadowed={false}
        isBottomBorder
        onClick={onClickPrimary}
        color="primary"
        isOpen={isOpenPrimary}
        title="Primary"
      >
        Text in accordion
      </Accordion>
      <Accordion
        shadowed={false}
        isBottomBorder
        onClick={onClickSuccess}
        color="success"
        isOpen={isOpenSuccess}
        title="Success"
      >
        Text in accordion
      </Accordion>
      <Accordion
        shadowed={false}
        isBottomBorder
        onClick={onClickWarning}
        color="warning"
        isOpen={isOpenWarning}
        title="Warning"
      >
        Text in accordion
      </Accordion>
      <Accordion
        shadowed={false}
        isBottomBorder
        onClick={onClickError}
        color="error"
        isOpen={isOpenError}
        title="Error"
      >
        Text in accordion
      </Accordion>
    </>
  );
};

export const ColorsWithBorder: Story = {
  args: { title: "" },
  render: (args) => <TemplateWithColorsWithBorder />,
};
