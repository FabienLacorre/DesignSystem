import { Box } from "./Atoms/Box/Box";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Input } from "./Molecules/Input/Input";
import { Button } from "./Molecules/Button/Button";


function App() {
  return (
    <>
      <Header title="Dashboard" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid flow="row" gap="large">
          <Box display="flex-row">
            <Input placeholder="Primary" disabled />
            <Input placeholder="Primary" />
            <Input placeholder="Success" color="success" />
            <Input placeholder="Warning" color="warning" />
            <Input placeholder="Error" color="error" />
          </Box>
        </Grid>
        <Grid>
          <Box>
            <Button content="BUTTON" />
          </Box>
          <Box>
            <Button content="BUTTON" color="success" />
          </Box>
          <Box>
            <Button content="BUTTON" color="warning" />
          </Box>
          <Box>
            <Button content="BUTTON" color="error" />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default App;
