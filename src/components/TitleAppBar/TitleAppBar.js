import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ScaleOutlinedIcon from "@mui/icons-material/ScaleOutlined";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";

export default function TitleAppBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <ScaleOutlinedIcon />
            <Typography variant="h6" component="div">
              Calculadora de IMC e IA
            </Typography>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
