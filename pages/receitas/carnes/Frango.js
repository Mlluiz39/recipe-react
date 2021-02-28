import Recipe from '../../../components/Recipe/Recipe'

export default function Frango() {
    return (
        <div>
            <Recipe
                name = 'Fricasse de frango'
                picture = 'https://img.itdg.com.br/tdg/images/recipes/000/010/254/327754/327754_original.jpg?mode=crop&width=350&height=250'
                time = '30 min'
                servings = '5 porções'
            >
                <h2>Ingredientes</h2>
                    <ul>
                        <li>1 lata de creme de leite</li>
                        <li>1 lata de milho verde</li>
                        <li>1 copo de requeijão cremoso</li>
                        <li>100 g de azeitona sem caroço</li>
                        <li>2 peitos de frango desfiados</li>
                        <li>200 g de mussarela fatiada</li>
                        <li>100 g de batata palha</li>
                        <li>1 xícara de água</li>
                        <li>1 pitada de sal</li>
                    </ul>

                    <h2>Modo de Preparo</h2>
                        <ol>
                            <li>Bata no liquidificador o milho, o requeijão, o creme de leite e a água.</li>
                            <li>Refogue o creme do liquidificador com o frango desfiado, as azeitonas e o sal até ficar com uma textura espessa.</li>
                            <li>Coloque o refogado numa assadeira, cubra com mussarela e espalhe a batata palha por cima.</li>
                            <li>Leve ao forno até borbulhar.</li>
                            <li>Sirva com arroz branco.</li>
                        </ol>
            </Recipe>
        </div>
    )
}