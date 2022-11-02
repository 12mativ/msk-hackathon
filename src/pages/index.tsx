import {Box, Grid} from "@mui/material";
import {StandardLayout} from "../components/StandardLayout/";
import Navbar from "../components/Navbar/Navbar";
import {SearchInput} from "../components/SearchSide/SearchInput";
import SelectLabel from "../components/SelectFlat/SelectLabel/SelectLabel";

function IndexPage() {
  return (
    <StandardLayout>
      <Grid item xl={12} lg={12} md={12} xs={12}>
        <Navbar />
      </Grid>

      <Grid item xl={4} lg={4} md={4} xs={12} >
        <SearchInput />
        <SelectLabel />
      </Grid>
      <Grid item xl={8} lg={8} md={8} xs={0} >
        {/*<Map/>*/}
        <Box sx={{bgcolor: 'grey', m: '15px'}}>Map</Box>
      </Grid>
    </StandardLayout>
  );
}

export default IndexPage;
