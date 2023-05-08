import { useState } from "react";
import PaginaJuego from "./components/PaginaJuego";
import PaginaFinal from "./components/PaginaFinal";
import VerRespuestas from "./components/VerRespuestas";
import './components/juego.css'
import PaginaInicio from "./components/PaginaInicio";
import PaginaCapturar from "./components/PaginaCapturar";

function App() {

  const [pagina, setPagina] = useState('Home')
  const [puntuacion, setPuntuacion] = useState(0);

  const [listQuestions, setListQuestions] = useState(
    JSON.parse(localStorage.getItem("listQuestions")) || []
  )

  return (

    <div className="container mt-2">

      {
        pagina === 'Home' && (
          <div>
            <PaginaInicio
              setPagina={setPagina}
            />
          </div>
        )
      }

      {
        pagina === 'Capture' && (
          <div>
            <PaginaCapturar
              setPagina={setPagina}
              listQuestions={listQuestions}
              setListQuestions={setListQuestions}
            />
          </div>
        )
      }

      {

        pagina === 'Game' && (
          <div>
            <PaginaJuego
              pagina={pagina}
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Finish' && (
          <div>
            <PaginaFinal
              setPagina={setPagina}
              listQuestions={listQuestions}
              puntuacion={puntuacion}
              setPuntuacion={setPuntuacion}
            />
          </div>
        )
      }

      {
        pagina === 'Answers' && (
          <div>
            <VerRespuestas
              setPagina={setPagina}
              listQuestions={listQuestions}
            />
          </div>
        )
      }

    </div>
  )
}

export default App