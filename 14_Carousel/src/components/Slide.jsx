function Slide({ url, isActive }) {
  return (
    <div className={isActive ? 'slide active' : 'slide'}>
      <img src={url} alt="Imagem" />
    </div>
  )
}

export default Slide