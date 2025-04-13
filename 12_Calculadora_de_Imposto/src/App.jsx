import { Container, Typography } from "@mui/material"
import TaxForm from "./components/TaxForm"
import TaxReport from "./components/TaxReport"
import { useState } from "react"

function App() {

  const [taxData, setTaxData] = useState(null)

  const calculateTax = (values) => {
    let tax = 0

    const income = parseFloat(values.income)

    if (income <= 10_000) {
      tax = income * 0.05
    }
    else if (income <= 20_000) {
      tax = income * 0.1
    }
    else {
      tax = income * 0.15
    }

    const taxData = {
      ...values,
      tax
    }

    setTaxData(taxData)
  }

  return (
    <Container style={{
        maxWidth: "800px",
        backgroundColor: "#fff",
        padding: "2rem",
        marginTop: "2rem",
        borderRadius: "15px"
      }}>
      <Typography
        variant="h3"
        align="center"
        style={{ marginBottom: '16px' }}
      >Calculadora Fictícia de Impostos</Typography>
      <TaxForm
        onSubmit={calculateTax}
      />
      {taxData && (
        <TaxReport
          taxData={taxData}
        />
      )}
    </Container>
  )
}

export default App
