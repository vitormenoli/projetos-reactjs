import Foto from "./Foto"

function FotoList({ fotos, setFotoAmpliada }) {
  return (
    <div className="album">
        {fotos.map((foto) => (
            <Foto
                key={foto.id}
                dados={foto}
                setFotoAmpliada={setFotoAmpliada}
            />
        ))}
    </div>
  )
}

export default FotoList