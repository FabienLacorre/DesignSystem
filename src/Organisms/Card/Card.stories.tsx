import type { Meta, StoryObj } from "@storybook/react";
import { Card, FooterCard, HeaderCard } from "./Card";
import { Box } from "../../Atoms/Box/Box";
import { Button } from "../../Molecules/Button/Button";
import { Typography } from "../../Atoms/Typography/Typography";
import { Grid } from "../../Atoms/Grid/Grid";

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
      <Card>
        <HeaderCard>
          <Typography weight="bold" size="large" color="primary">
            This is a title card
          </Typography>
        </HeaderCard>
        <Box>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
          alias. Nam voluptates nobis consectetur veniam molestiae, rem aperiam
          dolore porro repudiandae, animi modi iusto tenetur repellendus
          incidunt! Aliquid, repudiandae nemo? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Adipisci vero ipsa nam dolorem est
          laborum incidunt consequuntur consequatur doloremque possimus, natus
          dolor quisquam, harum reprehenderit soluta! Dolores soluta optio quis.
        </Box>

        <FooterCard>
          <Box marginRight="small">
            <Button content="Read more" outlined />
          </Box>
          <Box>
            <Button content="Delete" color="error" />
          </Box>
        </FooterCard>
      </Card>
    </>
  ),
};

export const MultipleCardGrid: Story = {
  args: {},
  render: (args) => (
    <>
      <Grid>
        <Card>
          <HeaderCard>
            <Typography weight="bold" size="large" color="primary">
              This is a title card
            </Typography>
          </HeaderCard>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            alias. Nam voluptates nobis consectetur veniam molestiae, rem
            aperiam dolore porro repudiandae, animi modi iusto tenetur
            repellendus incidunt! Aliquid, repudiandae nemo? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Adipisci vero ipsa nam
            dolorem est laborum incidunt consequuntur consequatur doloremque
            possimus, natus dolor quisquam, harum reprehenderit soluta! Dolores
            soluta optio quis.
          </Box>

          <FooterCard>
            <Box marginRight="small">
              <Button content="Read more" outlined />
            </Box>
            <Box>
              <Button content="Delete" color="error" />
            </Box>
          </FooterCard>
        </Card>
        <Card>
          <HeaderCard>
            <Typography weight="bold" size="large" color="primary">
              This is a title card
            </Typography>
          </HeaderCard>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            alias. Nam voluptates nobis consectetur veniam molestiae, rem
            aperiam dolore porro repudiandae, animi modi iusto tenetur
            repellendus incidunt! Aliquid, repudiandae nemo? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Adipisci vero ipsa nam
            dolorem est laborum incidunt consequuntur consequatur doloremque
            possimus, natus dolor quisquam, harum reprehenderit soluta! Dolores
            soluta optio quis.
          </Box>

          <FooterCard>
            <Box marginRight="small">
              <Button content="Read more" outlined />
            </Box>
            <Box>
              <Button content="Delete" color="error" />
            </Box>
          </FooterCard>
        </Card>
        <Card>
          <HeaderCard>
            <Typography weight="bold" size="large" color="primary">
              This is a title card
            </Typography>
          </HeaderCard>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam,
            alias. Nam voluptates nobis consectetur veniam molestiae, rem
            aperiam dolore porro repudiandae, animi modi iusto tenetur
            repellendus incidunt! Aliquid, repudiandae nemo? Lorem ipsum dolor
            sit, amet consectetur adipisicing elit. Adipisci vero ipsa nam
            dolorem est laborum incidunt consequuntur consequatur doloremque
            possimus, natus dolor quisquam, harum reprehenderit soluta! Dolores
            soluta optio quis.
          </Box>

          <FooterCard>
            <Box marginRight="small">
              <Button content="Read more" outlined />
            </Box>
            <Box>
              <Button content="Delete" color="error" />
            </Box>
          </FooterCard>
        </Card>
      </Grid>
    </>
  ),
};
