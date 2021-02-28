import Recipe from '../../../components/Recipe/Recipe'

export default function Brigadeiro() {
    return (
        <div>

            <Recipe
                name='Brigadeiro'
                picture='https://img.itdg.com.br/tdg/images/recipes/000/000/114/311540/311540_original.jpg?mode=crop&width=350&height=250'
                time='25 min'
                servings='30 porções'
            >
                <h2>Ingredientes</h2>

                <ul>
                    <li> 1 lata de leite condensado </li>
                    <li> 4 colheres (sopa) de chocolate <br /> em pó ou achocolatado </li>
                    <li> 1 colher (sopa) de margarina </li>
                    <li> chocolate granulado ou granulado colorido </li>
                </ul>


                <h2>Modo de Preparo</h2>


                <ol>
                    <li>
                        Em um recipiente próprio para microondas, de preferência redondo e de borda alta, misture todos os ingredientes.
                          </li>
                    <li>
                        Leve ao microondas por 6 minutos em potência alta ou na tecla brigadeiro do próprio microondas. Mexendo a mistura na metade do tempo.
                          </li>
                    <li>
                        Depois de pronto, retire do forno e mexa até ficar uma massa lisa e brilhante.
                          </li>
                    <li>
                        Leve à geladeira para esfriar, depois enrole os docinhos, passe no granulado e coloque nas forminhas.
                          </li>

                </ol>

            </Recipe>

        </div>
    )
}