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
      <Header title="Buttons" boxColor="primary" textColor="white" />
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
      <Header title="Typographies" boxColor="primary" textColor="white" />
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
      <Header title="Inputs (WIP)" boxColor="primary" textColor="white" />
      <Box>
        <Input placeholder="this is a placeholder" />
      </Box>
    </>
  );
};

const Headers = () => {
  return (
    <>
      <Header title="Headers" boxColor="primary" textColor="white" />
      <Header title="color: primary" boxColor="primary" textColor="white" />
      <Header title="color: success" boxColor="success" textColor="white" />
      <Header title="color: alert" boxColor="alert" textColor="white" />
      <Header title="color: error" boxColor="error" textColor="white" />

      <Header
        title="padding: small"
        padding="small"
        boxColor="primary"
        textColor="white"
      />
      <Header
        title="padding: medium"
        padding="medium"
        boxColor="primary"
        textColor="white"
      />
      <Header
        title="padding: large"
        padding="large"
        boxColor="primary"
        textColor="white"
      />
    </>
  );
};
function App() {
  return (
    <>
      <Header title="Dashboard" boxColor="primary" textColor="white" />
      <Box padding="large">
        <Grid flow="row" gap="large">
          <Headers></Headers>
          <Buttons />
          <Typographies />
          <Inputs />
        </Grid>
      </Box>
    </>
  );
}

export default App;
