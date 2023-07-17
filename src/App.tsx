import { Box } from "./Atoms/Box/Box";
import { Input } from "./Molecules/Input/Input";
import { Typography } from "./Atoms/Typography/Typography";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Icon } from "./Atoms/Icon/Icon";
import { Button } from "./Molecules/Button/Button";

function App() {
  return (
    <>
      <Header title="This is a header" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid flow="row" gap="large">
          <Box>
            <Button
              icon={
                <Icon path="Icons/arrow-left.svg" height="30px" width="30px" />
              }
            >
              THIS IS A TEST
            </Button>
            <Typography size="large" weight="xbold" color="error">
              This is a Typography
            </Typography>
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
