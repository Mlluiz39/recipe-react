import Recipe from '../../../components/Recipe/Recipe'

export default function CarneAssada() {
    return(
        <div>
            <Recipe
                name = 'Carne assada'
                picture = 'https://img.itdg.com.br/tdg/images/recipes/000/154/534/213073/213073_original.jpg?mode=crop&width=350&height=250'
                time = '50 min'
                servings = '8 porções'
            >
                <h2>Ingredientes</h2>
                    <ul>
                    <li>1 colher de sopa de alho triturado</li>
                    <li>Sal e tempero misto em pó a gosto</li>
                    <li>1 colher de sopa de louro em pó</li>
                    <li>2 cebolas pequenas em rodelas grossas</li>
                    <li>1 pimentão em rodelas grossas</li>
                    <li>1 cerveja preta long neck</li>
                    <li>1 xícara de molho de tomate</li>
                    <li>300 ml de água</li>
                    <li>2 tablete de caldo de costela</li>
                    </ul>

                    <h2>Modo de preparo</h2>
                        <ol>
                        <li>Em um recipiente fundo, tempere a carne com alho, sal, tempero misto e louro.</li>
                        <li>Coloque as rodelas de cebola e pimentão por cima da carne e deixe descansar por 20 minutos para pegar gosto.</li>
                        <li>Em uma panela de pressão coloque a cerveja, polpa de tomate, a água e o caldo de costela.</li>
                        <li>Deixe ferver, sempre mexendo, até dissolver os caldos de costela.</li>
                        <li>Adicione a carne com todo o tempero e leve ao fogo por 40 minutos.</li>
                        <li>Após o cozimento fatie e coloque em um tabuleiro enfileirada e regue com todo molho que ficou na panela.</li>
                        <li>Adicione batatas couradas e leve ao forno por 10 minutos para dourar as fatias da carne.</li>
                        <li>Sirva com arroz e salada.</li>
                        </ol>
            </Recipe>
        </div>
    )
}