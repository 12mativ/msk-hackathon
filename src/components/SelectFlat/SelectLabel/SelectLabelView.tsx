import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {SelectLabelProps} from "./types";
import {useStyles} from "./styles";
import SelectFlat from "../SelectFlat";

function SelectLabelView({checked, onChange}: SelectLabelProps) {
  const classes = useStyles()
  return (
    <Box>
      <Box className={classes.selectLabel}>
        <Typography component={'span'} sx={{fontWeight: '500'}}>
          Квартиры
        </Typography>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange}/>}
          label={'Выбрать все'}
        />
      </Box>
      <SelectFlat />
    </Box>

  )
}
export default SelectLabelView