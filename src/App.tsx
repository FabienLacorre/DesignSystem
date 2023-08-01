import { Box } from "./Atoms/Box/Box";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Icon } from "./Atoms/Icon/Icon";
import { Button } from "./Molecules/Button/Button";
import { arrowLeftIcon } from "./Atoms/Icon/_Icons/arrowLeftIcon";


function App() {
  return (
    <>
      <Header title="Dashboard" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid flow="row" gap="large">
          <Box display="flex-row">
            <Button
              style={{ marginRight: 8 }}
              content="GO BACK"
              icon={<Icon size="medium" svg={arrowLeftIcon} />}
            />
          </Box>
        </Grid>
      </Box>
    </>
  );
}

export default App;
