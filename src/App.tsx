import { Box } from "./Atoms/Box/Box";
import { Input } from "./Molecules/Input/Input";
import { Typography } from "./Atoms/Typography/Typography";
import { Header } from "./Organisms/Header/Header";
import { Grid } from "./Atoms/Grid/Grid";
import { Icon } from "./Atoms/Icon/Icon";
import { Button } from "./Molecules/Button/Button";
import { arrowLeftIcon } from "./Atoms/Icon/_Icons/arrowLeftIcon";

const Buttons = () => {
  return (
    <>
      <Typography size="xxlarge" weight="bold">
        Buttons
      </Typography>
      <Box display="flex-row">
        <Button
          style={{ marginRight: 8 }}
          content="GO BACK"
          icon={<Icon size="medium" svg={arrowLeftIcon} />}
        />
        <Button content="SUBMIT" />
      </Box>

      <Box display="flex-row">
        <Button
          color="success"
          style={{ marginRight: 8 }}
          content="GO BACK"
          icon={<Icon size="medium" svg={arrowLeftIcon} />}
        />
        <Button content="SUBMIT" color="success" />
      </Box>

      <Box display="flex-row">
        <Button
          style={{ marginRight: 8 }}
          content="GO BACK"
          color="alert"
          icon={<Icon size="medium" svg={arrowLeftIcon} />}
        />
        <Button content="SUBMIT" color="alert" />
      </Box>

      <Box display="flex-row">
        <Button
          style={{ marginRight: 8 }}
          content="GO BACK"
          color="error"
          icon={<Icon size="medium" svg={arrowLeftIcon} />}
        />
        <Button content="SUBMIT" color="error" />
      </Box>
    </>
  );
};

const Typographies = () => {
  return (
    <>
      <Typography size="xxlarge" weight="bold">
        Typographies
      </Typography>
      <Typography size="xlarge" weight="bold">
        Size
      </Typography>
      <Box display="flex-column">
        <Typography size="xxxlarge">xxxlarge: Lorem ipsum</Typography>
        <Typography size="xxlarge">xxlarge: Lorem ipsum</Typography>
        <Typography size="xlarge">xlarge: Lorem ipsum</Typography>
        <Typography size="large">large: Lorem ipsum</Typography>
        <Typography size="medium">medium: Lorem ipsum</Typography>
        <Typography size="small">small: Lorem ipsum</Typography>
      </Box>
      <Typography size="xlarge" weight="bold">
        Colors
      </Typography>
      <Box display="flex-column">
        <Typography size="large" color="default">
          Default: Lorem ipsum
        </Typography>
        <Typography size="large" color="primary">
          Primary: Lorem ipsum
        </Typography>
        <Typography size="large" color="success">
          Success: Lorem ipsum
        </Typography>
        <Typography size="large" color="alert">
          Alert: Lorem ipsum
        </Typography>
        <Typography size="large" color="error">
          Error: Lorem ipsum
        </Typography>
      </Box>
    </>
  );
};

const Inputs = () => {
  return (
    <>
      <Typography size="xxlarge" weight="bold">
        Inputs
      </Typography>
      <Typography size="xlarge" weight="bold">
        W.I.P
      </Typography>
      <Box>
        <Input placeholder="this is a placeholder" />
      </Box>
    </>
  );
};
function App() {
  return (
    <>
      <Header title="This is a header" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid flow="row" gap="large">
          <Buttons />
          <Typographies />
          <Inputs />
        </Grid>
      </Box>
    </>
  );
}

export default App;
