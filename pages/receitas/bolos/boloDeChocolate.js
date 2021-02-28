import Recipe from '../../../components/Recipe/Recipe'

export default function BoloDeChocolate() {
    return (
        <div>
            <Recipe
                name='Bolo de chocolate'
                picture='https://img.itdg.com.br/tdg/images/recipes/000/009/614/339964/339964_original.jpg?mode=crop&width=350&height=250'
                time='40 min'
                servings='16 porções'
            >
                <h2>Ingredientes</h2>
                <h3>Massa</h3>
                <ul>
                    <li>1 xícara (chá) de leite morno</li>
                    <li>3 ovos</li>
                    <li>4 colheres (sopa) de margarina derretida</li>
                    <li>2 xícaras (chá) de açúcar</li>
                    <li>1 xícara (chá) de chocolate em pó</li>
                    <li>2 xícaras (chá) de farinha de trigo</li>
                    <li>1 colher (sopa) de fermento químico em pó</li>
                    <h3>Cobertura:</h3>
                    <li>1 xícara (chá) de açúcar</li>
                    <li>3 colheres (sopa) de amido de milho</li>
                    <li>5 colheres (sopa) de chocolate em pó</li>
                    <li>1 xícara (chá) de água</li>
                    <li>3 colheres (sopa) de margarina ou manteiga</li>
                    <li>1 colher (chá) de essência de baunilha</li>
                </ul>
                <h2>Modo de preparo</h2>
                <h3>Massa</h3>
                <ol>
                    <li>Bata bem todos os ingredientes da massa (menos o fermento) no liquidificador, aproximadamente 2 a 3 minutos.</li>
                    <li>Acrescente o fermento e bata por mais uns 15 segundos.</li>
                    <li>Coloque em uma forma redonda, untada com manteiga e polvilhada com farinha de trigo.</li>
                    <li>Asse por cerca de 40 minutos em forno médio (180º C), preaquecido.</li>
                </ol>
                <h3>Cobertura</h3>
                <ol>
                    <li>Leve todos os ingredientes ao fogo até engrossar, em ponto de brigadeiro.</li>
                    <li>Cubra o bolo em seguida.</li>
                </ol>
            </Recipe>
        </div>
    )
}