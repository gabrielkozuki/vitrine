import './Home.scss'
import { useState, useEffect } from 'react'

const Home = () => {

  useEffect(() => {
  }, [])

  return (
    <div className='container'>
      <div className="home">
        <h3>Início</h3>
        <p>Seja bem-vindo ao site! Essa aplicação consome o clone de uma API do site de moda sueco <em><strong>Hennes & Mauritz</strong></em>, especificamente da sessão <em>Women / Shop by Product</em> do site</p>
        <p>Use a navbar acima para navegar entre as categorias de produtos.</p>
        <br />
        <br />
        <br />
        <h3>Sobre</h3>
        <p>Este site é de cunho educacional e foi feito para um trabalho avaliativo do curso Tecnologia em Análise e Desenvolvimento de Sistemas do Instituto Federal do Paraná.</p>
        <p>A API que está sendo consumida tem um número de requisições limitados por mês. Caso as informações não apareçam ou gere algum erro, possivelmente a cota mensal gratuita foi atingida. Você pode acessar a documentação clicando <a href="https://rapidapi.com/apidojo/api/hm-hennes-mauritz/" target='_blank'>aqui</a></p>
      </div>
    </div>
  )
}

export default Home