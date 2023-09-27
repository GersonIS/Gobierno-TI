import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [descripcion, setDescripcion] = useState("");
  const [respuesta, setRespuesta] = useState(false);
  const consultarCobit = (e) => {
    e.preventDefault();
    if (descripcion === "") {
      alert("Escriba la necesidad o problema de su empresa");
    } else {
      setRespuesta(true);
    }
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div>
        <h1 className='text-3xl text-center mb-5'>GOBIERNO  DE TI  -  COBIT 5</h1>
        <p className='mb-5'>Este software le dara objetivos de Cobit 5 segun la necesidad o problema surgido en su empresa para buenas practicas</p>
        <h2 className='text-xl text-center'>Consulte</h2>
        <form onSubmit={consultarCobit}>
          <label>Descripcion</label>
          <textarea className="w-full border-2 border-gray-300 p-2 rounded text-black" onChange={(e) => setDescripcion(e.target.value)}></textarea>
          <button type='submit' className='bg-black text-white hover:bg-gray-400 font-bold py-2 px-4 rounded mr-4 mt-4'>Consultar</button>
        </form>
        {respuesta ? (
          <div className='border-2 border-gray-300 mt-5 text-center'>
            <h3>Recomendaciones segun los objetivos COBIT</h3>
            <ul>
              <li>Objetivo A - Solucion A</li>
              <li>Objetivo B - Solucion B</li>
              <li>Objetivo C - Solucion C</li>
              <li>Objetivo D - Solucion D</li>
            </ul>
          </div>
        ) : ""}
      </div>
    </main>
  )
}
