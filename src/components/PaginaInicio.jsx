
const PaginaInicio = ({ setPagina }) => {

    return (
        <div>
            <h1
                style={{
                    textAlign: "center"
                }}
            >QUIZ GAME</h1>

            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="button" className="btn btn-secondary"
                onClick={() => setPagina('Capture')}>
                <i class="bi bi-card-checklist"> Capturar</i>
                </button>

            <button type="button" className="btn btn-primary"
                onClick={() => setPagina('Game')}>
                <i class="bi bi-controller"> Juego </i>
                </button>
            </div>
        </div>
    )
}

export default PaginaInicio