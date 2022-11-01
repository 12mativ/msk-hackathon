import { Box, Grid } from "@mui/material";
import { StandardLayout } from "../components/StandardLayout/";
import LoginForm from "../components/LoginForm/LoginForm";

function LoginPage() {
  return (
    <StandardLayout>
      <Grid item xl={4} lg={5} md={6} xs={12}>
        <LoginForm height={"100vh"} />
      </Grid>
      <Grid item xl={8} lg={7} md={6} xs={0}>
        <Box sx={{ width: "100%", height: "100vh", overflow: "hidden" }}>
          <img
            src={"/assets/property.jpg"}
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
          />
        </Box>
      </Grid>
    </StandardLayout>
  );
}

export default LoginPage;
