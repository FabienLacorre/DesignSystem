import { Box } from "./Atoms/Box/Box";
import { Input } from "./Molecules/Input/Input";
import { Typography } from "./Atoms/Typography/Typography";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";

function App() {
  return (
    <>
      <Header title="This is a header" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid gridFlow="row" gridGap="large">
          <Box>
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
