import { useState, useEffect } from 'react'
import "./styles/index.css"

interface NutritionItem {
  id: number
  titulo: string
  subtitulo: string
  categoria: string
  capa?: string
}

function App() {  
  const [Nutrition, setNutrition] = useState<NutritionItem[]>([]);


  useEffect(() => {
    async function loadApi(){
      const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      try{
        const response = await fetch(url)
        const data = await response.json()
        setNutrition(data)
      }catch(error){
        console.log("Erro ao buscar API", error)
      }
    }

    loadApi()
  }, [])

  return (
    <main className='container'> 
      <header className='header'>
        <h1>Array of Nutrition</h1>
      </header>

      <section>
        
        {Nutrition.map((item) => {
          return(
            <article key={item.id} className='post'>
              <strong className='tittle'>{item.titulo}</strong>
              <strong>{item.categoria}</strong>
              <img src={item.capa} alt={item.titulo} className='image'/>

            <p className='subtittle'>{item.subtitulo}</p>
            <a className='btn'>Acessar</a>
            <hr />
            </article>
          )
        })}

      </section>
    </main>
  )
}

export default App
