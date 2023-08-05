import { Box } from "./Atoms/Box/Box";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Input } from "./Molecules/Input/Input";


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
            <Input placeholder="Alert" color="alert" />
            <Input placeholder="Error" color="error" />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default App;
