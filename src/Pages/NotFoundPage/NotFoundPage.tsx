import { IoMdArrowDropleft } from "react-icons/io";
import { Box } from "../../Atoms/Box/Box";
import { Typography } from "../../Atoms/Typography/Typography";
import { Button } from "../../Molecules/Button/Button";
import { Navbar } from "../../Organisms/Navbar/Navbar";
import { Card } from "../../Organisms/Card/Card";
import { Layout, LayoutContent } from "../../Molecules/Layout/Layout";

export const NotFoundPage = () => {
  return (
    <>
      <Layout>
        <Navbar />
        <LayoutContent>
          <Box alignItems="center">
            <Card>
              <Box alignItems="center" display="flex-column">
                <Box margin="medium">
                  <Typography weight="bold" size="xxlarge">
                    404 Not found
                  </Typography>
                </Box>
                <Box margin="medium">
                  <Typography size="medium">
                    The page that you required does't exist
                  </Typography>
                </Box>
                <Box margin="medium">
                  <Button
                    content="Go back"
                    textSize="medium"
                    Icon={IoMdArrowDropleft}
                  />
                </Box>
              </Box>
            </Card>
          </Box>
        </LayoutContent>
      </Layout>
    </>
  );
};
