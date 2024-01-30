import React from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material'


const InputAmount = () => {
  return (
    <Grid item xs={12} md={3}>
        <TextField
        label="Amount"
        fullWidth
        InputProps={{
            type: "number",
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
        }}
        />
    </Grid>
  )
}

export default InputAmount