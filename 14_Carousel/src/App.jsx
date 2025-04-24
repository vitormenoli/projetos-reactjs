import Carousel from "./components/Carousel"

function App() {

  const imageUrls = [
    "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
  ]

  const gameImageUrls = [
    'https://wallpapers.com/images/hd/sun-shining-on-minecraft-landscape-5wxxq13a3edgknok.jpg',
    'https://i.pinimg.com/736x/eb/81/c1/eb81c1a6519771369ab572be08564fa8.jpg',
    'https://preview.redd.it/4nb261yvevq71.png?width=640&crop=smart&auto=webp&s=25e0f49229d54cceeeb9798904d16264e4895cef',
    'https://i.redd.it/appreciating-the-scenery-of-this-game-v0-4v7txzlvzpxd1.png?width=1920&format=png&auto=webp&s=c534133d8b246d6a8fc258542e0e45dca222ced2',
    'https://preview.redd.it/a085c54lz9y31.png?width=640&crop=smart&auto=webp&s=711c3832e89ee67510aaba4f8c12dfd76361ec41',
    'https://cdn-0001.qstv.on.epicgames.com/MOsOxadRtSvkEcleED/image/landscape_comp.jpeg',
    'https://preview.redd.it/looping-landscape-panoramas-v0-d2jiq6w0bend1.jpg?width=1680&format=pjpg&auto=webp&s=ddaf4009152d72dd26936bc3d00a13e7a198a022',
    'https://cdn-0001.qstv.on.epicgames.com/gEWMsPFQsRYlhcosgm/image/landscape_comp.jpeg',
  ];

  const carsImageUrls = [
    'https://img.freepik.com/fotos-gratis/carro-luxuoso-estacionado-na-estrada-com-um-farol-iluminado-ao-por-do-sol_181624-60607.jpg?semt=ais_hybrid&w=740',
    'https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/02/221223090506-01-bugatti-chiron-profilee.jpg?w=1200&h=900&crop=1',
    'https://static.vecteezy.com/ti/fotos-gratis/t1/26175370-esporte-carro-modelo-foto.jpg',
    'https://s2-autoesporte.glbimg.com/_yAqXlBXlr5GnxdcxuvH3V4JWx4=/0x0:1980x1320/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/E/U/DLCu4GRyqbbnhgaU0bNQ/ferrari-sf90-spider-autoesporte.jpeg',
    'https://blog.sodresantoro.com.br/wp-content/uploads/2021/10/Veiculo-utilitario-esportivo.jpg',
    'https://wallpapers.com/images/hd/2560-x-1440-car-jox19ekr1xtx8o5b.jpg',
    'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2020/10/22092220/Fiat_Cronos_Drive_MT_001-large.jpeg',
    'https://cfcdn.apowersoft.info/astro/picwish/_astro/scene-car-left@618w.ad15f2ef.jpeg',
  ]
  
  return (
    <div className="App">
      <h1>Carousel</h1>

      <p className="desc">Carrossel com paisagens</p>
      <Carousel
        imageUrls={imageUrls}
      />

      <p className="desc">Carrossel com jogos</p>
      <Carousel
        imageUrls={gameImageUrls}
      />

      <p className="desc">Carrossel com carros</p>
      <Carousel
        imageUrls={carsImageUrls}
      />
    </div>
  )
}

export default App
