import React from "react";
import {Box, Checkbox, FormControlLabel, Typography} from "@mui/material";
import {useStyles} from "./styles";
import {FlatCardProps} from "./types";

function FlatCardView({checked, onChange}: FlatCardProps) {
  const classes = useStyles()
  return (
    <Box className={classes.flatCard}>
      <Typography variant={'h6'} className={classes.flatCardText}>
        кв. 12 дом. 43 ул. Алабина
      </Typography>
      <Typography className={classes.flatCardText}>
        Количество комнат: 3
      </Typography>
      <Typography className={classes.flatCardText}>
        Сигмент: старый жилой фонд
      </Typography>
      <Typography className={classes.flatCardText}>
        Площадь квартиры: 58 м
      </Typography>
      <Typography className={classes.flatCardText}>
        Количество комнат: 3
      </Typography>
      <Box className={classes.checkboxContainer}>
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange}/>}
          label={'Выбрать'}
        />
      </Box>
    </Box>
  )
}
export default FlatCardView