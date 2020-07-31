import React from 'react'
import dados from './data/glass_marbles.json'
import './App.css'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import PageDefault from './components/PageDefault'

function App () {
  return (
    <PageDefault style={{ background: '#141414' }}>
      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videosDescription='O que faz uma desenvolvedora front-end? #HipstersPontoTube'
      />
      <Carousel ignoreFirstVideo category={dados.categorias[0]} />
      <Carousel category={dados.categorias[1]} />
      <Carousel category={dados.categorias[2]} />
      <Carousel category={dados.categorias[3]} />
      <Carousel category={dados.categorias[4]} />
      <Carousel category={dados.categorias[5]} />
    </PageDefault>
  )
}

export default App
