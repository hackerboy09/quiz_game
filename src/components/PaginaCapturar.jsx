import BotonAgregar from "./BotonAgregar";
import BotonInicio from "./BotonInicio";
import BotonLimpiar from "./BotonLimpiar";
import ListaDePreguntas from "./ListaDePreguntas";


const PaginaCapturar = ({
    setPagina,
    listQuestions,
    setListQuestions,
}) => {

    return (
        <div className="container">

            <div className="row">
                <div className="col text-start">
                    <h1>Capturar preguntas</h1>
                </div>
                <div className="col text-end mt-1">
                    <BotonLimpiar
                        setListQuestions={setListQuestions}
                    />
                    <BotonAgregar
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                    <BotonInicio
                        setPagina={setPagina}
                    />
                </div>
            </div>

            <hr />
            {
                listQuestions.length === 0 && (
                    <div className="text-center">
                        <h3>La lista de preguntas esta en 0.</h3>
                        Añade una nueva pregunta.
                    </div>
                )
            }
            {
                listQuestions.map((pregunta) => (
                    <ListaDePreguntas
                        pregunta={pregunta}
                        listQuestions={listQuestions}
                        setListQuestions={setListQuestions}
                    />
                ))
            }


            <hr />

            <div className="col text-end">
                <BotonLimpiar
                    setListQuestions={setListQuestions}
                />
                <BotonAgregar
                    listQuestions={listQuestions}
                    setListQuestions={setListQuestions}
                />
                <BotonInicio
                    setPagina={setPagina}
                />
            </div>

        </div>
    )
}

export default PaginaCapturar