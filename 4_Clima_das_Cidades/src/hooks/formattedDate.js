export default function formattedDate(dataString) {
    const data = new Date(dataString)
    
    const dia = data.getDate()
    const hora = data.getHours().toString().padStart(2, '0')
    const minutos = data.getMinutes().toString().padStart(2, '0')
    
    return `Dia ${dia} (${hora}:${minutos})`
}