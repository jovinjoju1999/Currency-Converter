import { Grid, Container, Typography } from '@mui/material'
import InputAmount from './Components/InputAmount'
import SelectCountry from './Components/SelectCountry'
import SwitchCurrency from './Components/SwitchCurrency'
import { useContext } from 'react';
import { CurrencyContext } from './context/CurrencyContext';

function App() {
  const { fromCurrency, 
    setFromCurrency, 
    toCurrency, 
    setToCurrency
  }= useContext(CurrencyContext);


  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10rem",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container maxWidth="md" sx={boxStyles}>
      <Typography variant="h5" sx={{marginBottom: "2rem"}}>Accurate currency conversions</Typography>
      <Grid container spacing={2}>
        <InputAmount/>
        <SelectCountry value={fromCurrency} setValue={setFromCurrency} label="From" />
        <SwitchCurrency/>
        <SelectCountry  value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>
    </Container>
  )
}

export default App
