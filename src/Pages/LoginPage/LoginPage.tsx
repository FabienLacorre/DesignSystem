import { IoMdArrowDropleft } from "react-icons/io";
import { Box } from "../../Atoms/Box/Box";
import { Typography } from "../../Atoms/Typography/Typography";
import { Button } from "../../Molecules/Button/Button";
import { Layout, LayoutContent } from "../../Molecules/Layout/Layout";
import { Card } from "../../Organisms/Card/Card";
import { Navbar } from "../../Organisms/Navbar/Navbar";
import { Input } from "../../Molecules/Input/Input";

export const LoginPage = () => {
  return (
    <Layout>
      <Navbar />
      <LayoutContent>
        <Box alignItems="center" display="flex-column">
          <Card>
            <Box>
              <Box>
                <Typography weight="bold" size="large">
                  Login in
                </Typography>
              </Box>

              <Box alignItems="center" display="flex-column">
                <Box marginTop="large">
                  <Input placeholder="Email" color="primary" />
                </Box>
                <Box marginTop="small">
                  <Input placeholder="Password" color="primary" />
                </Box>
                <Box marginTop="medium">
                  <Button content="Submit" fullWidth />
                </Box>
              </Box>
            </Box>
          </Card>
        </Box>
      </LayoutContent>
    </Layout>
  );
};
