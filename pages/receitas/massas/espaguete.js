import Recipe from '../../../components/Recipe/Recipe'

export default function Espaguete() {
    return (
        <div>
            <Recipe
            name = 'Espaguete'
            picture = 'https://img.itdg.com.br/tdg/images/recipes/000/020/061/267108/267108_original.jpg?mode=crop&width=350&height=250'
            time = '45 min'
            servings = '4 porções'
            >
                <h2>INGREDIENTES</h2>
                    <ul>
                        <li>500 g espaguete</li>
                        <li>1 colher (sopa) de manteiga</li>
                        <li>300 ml de creme de leite</li>
                        <li>150 g de bacon</li>
                        <li>noz-moscada a gosto</li>
                        <li>1/2 cebola ralada</li>
                        <li>3 gemas</li>
                    </ul>

                <h2>MODO DE PREPARO</h2>
                    <ol>
                        <li>Fritar o bacon e escorrer.</li>
                        <li>Em uma frigideira, colocar a manteiga e a cebola.</li>
                        <li>Depois, o creme de leite e a noz-moscada.</li>
                        <li>Acrescentar as gemas uma de cada vez com o fogo desligado, batendo rapidamente.</li>
                        <li>Acender o fogo, e deixar o molho em ponto (ele ficará cremoso).</li>
                        <li>Colocar o espaguete já cozido, juntamente com o molho em uma panela maior.</li>
                        <li>Misturar bem colocar o bacon e levar tudo ao forno, por 5 minutos, coberto com queijo parmesão.</li>
                    </ol>
                   
            </Recipe>
        </div>
    )
}