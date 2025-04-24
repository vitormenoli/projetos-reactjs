function Indicators({ activeIndex, length }) {
  return (
    <div className="indicators">
        {Array.from({ length }, (_, index) => (
            <div
                key={index}
                className={`indicator ${activeIndex === index ? 'active' : ''}`}
            ></div>
        ))}
    </div>
  )
}

export default Indicators