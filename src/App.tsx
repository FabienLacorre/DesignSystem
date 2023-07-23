import { Box } from "./Atoms/Box/Box";
import { Input } from "./Molecules/Input/Input";
import { Typography } from "./Atoms/Typography/Typography";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Icon } from "./Atoms/Icon/Icon";
import { Button } from "./Molecules/Button/Button";
import { arrowLeftIcon } from "./Atoms/Icon/_Icons/arrowLeftIcon";

function App() {
  return (
    <>
      <Header title="This is a header" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Icon size="medium" svg={arrowLeftIcon} />

        <Grid flow="row" gap="large">
          <Box>
            <Typography size="large" weight="xbold" color="error">
              This is a Typography
            </Typography>
          </Box>

          <Box>
            <Button icon={<Icon size="medium" svg={arrowLeftIcon} />}>
              THIS IS A ICON BUTTON
            </Button>
          </Box>

          <Box>
            <Button>THIS IS A BUTTON</Button>
          </Box>

          <Box>
            <Input placeholder="this is a placeholder" />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default App;
