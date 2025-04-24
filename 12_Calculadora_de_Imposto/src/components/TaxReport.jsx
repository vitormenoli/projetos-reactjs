import { Button, Container, Typography } from "@mui/material"
import { useState } from "react"

function TaxReport({ taxData }) {

  const [taxBackgroundColor, setTaxBackgroundColor] = useState('#ffffff')
  const [incomeBackgroundColor, setIncomeBackgroundColor] = useState('#ffffff')
  const [ageBackgroundColor, setAgeBackgroundColor] = useState('#ffffff')
  const [nameBackgroundColor, setNameBackgroundColor] = useState('#ffffff')

  return (
    <Container className="report-container"
        style={{
            border: "1px solid #000",
            borderRadius: "15px",
            margin: "2rem auto",
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "10px"
        }}
    >
        <Typography
            variant="h5"
            color="#fff"
            align="center"
            backgroundColor='#ed6c02'
            borderRadius='8px'
        >Relatório de impostos</Typography>
        <Typography
            variant="body1"
            backgroundColor={nameBackgroundColor}
            borderRadius='8px'
            style={{ margin: '0 auto', width: '40%', marginTop: '2rem', padding: "4px", wordBreak: "break-word", overflowWrap: "break-word" }}
        ><span style={{ fontWeight: "700" }}>Nome: </span>{taxData.name}</Typography>
        <Typography
            variant="body1"
            backgroundColor={ageBackgroundColor}
            borderRadius='8px'
            style={{ margin: '0 auto', width: '40%', padding: "4px", wordBreak: "break-word", overflowWrap: "break-word"  }}
        ><span style={{ fontWeight: "700" }}>Idade: </span>{taxData.age} anos</Typography>
        <Typography
            variant="body1"
            backgroundColor={incomeBackgroundColor}
            borderRadius='8px'
            style={{ margin: '0 auto', width: '40%', padding: "4px", wordBreak: "break-word", overflowWrap: "break-word"  }}
        >
            <span style={{ fontWeight: "700" }}>Renda:{' '}</span>
            {parseFloat(taxData.income).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}
        </Typography>
        <Typography
            variant="body1"
            backgroundColor={taxBackgroundColor}
            borderRadius='8px'
            style={{ margin: '0 auto', width: '40%', padding: "4px", wordBreak: "break-word", overflowWrap: "break-word"  }}
        >
            <span style={{ fontWeight: "700" }}>Imposto a pagar:{' '}</span>
            {parseFloat(taxData.tax).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })}
        </Typography>
        <Button
            variant="contained"
            color="info"
            style={{ margin: '0 auto', width: '40%', marginTop: '2rem' }}
            onClick={() => setNameBackgroundColor(nameBackgroundColor === '#ffffff' ? '#ffff00' : '#ffffff')}
        >Destacar Nome</Button>
        <Button
            variant="contained"
            color="info"
            style={{ margin: '0 auto', width: '40%' }}
            onClick={() => setAgeBackgroundColor(ageBackgroundColor === '#ffffff' ? '#ffff00' : '#ffffff')}
        >Destacar Idade</Button>
        <Button
            variant="contained"
            color="info"
            style={{ margin: '0 auto', width: '40%' }}
            onClick={() => setIncomeBackgroundColor(incomeBackgroundColor === '#ffffff' ? '#ffff00' : '#ffffff')}
        >Destacar Renda</Button>
        <Button
            variant="contained"
            color="info"
            style={{ margin: '0 auto', width: '40%' }}
            onClick={() => setTaxBackgroundColor(taxBackgroundColor === '#ffffff' ? '#ffff00' : '#ffffff')}
        >Destacar Imposto</Button>
    </Container>
  )
}

export default TaxReport