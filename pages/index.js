import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import RecipeCard from '../components/recipeCard/recipeCard'

export default function index() {
  return (
    <>
        <Header title="MlluizCook" />
        <main>
        
        <RecipeCard 
          name="Brigadeiro"
          category="Doce"
          picture="/img/brigadeiro.jpg"
          link="/receitas/doces/brigadeiro"
        />
       <RecipeCard 
          name="Bolo de cenoura"
          category="Bolo"
          picture="/img/bolo-de-cenoura.jpg"
          link="/receitas/bolos/boloDeCenoura"
        />
        <RecipeCard 
          name="Bolinho de chuva"
          category="Doce"
          picture="/img/bolinho-de-chuva.jpg"
          link="/receitas/doces/bolinhoDeChuva"
        />
        <RecipeCard 
          name="Espaguete"
          category="Massa"
          picture="/img/spaghetti.jpg"
          link="/receitas/massas/espaguete"
        />
        <RecipeCard 
          name="Fricasse de frango"
          category="Carne"
          picture="https://img.itdg.com.br/tdg/images/recipes/000/173/263/174433/174433_original.jpg?mode=crop&width=300&height=300"
          link="/receitas/carnes/Frango"
        />
        <RecipeCard 
          name="Yakisoba"
          category="Massa"
          picture="/img/macarrao.jpg"
          link="/receitas/massas/yakisoba"
        />
        <RecipeCard 
          name="Carne assada"
          category="Carne"
          picture="/img/carne-assada.jpg"
          link="/receitas/carnes/carneAssada"
        />
        <RecipeCard 
          name="Bolo de chocolate"
          category="Bolo"
          picture="/img/bolo-chocolate.jpg"
          link="/receitas/bolos/boloDeChocolate"
        />
          </main>
      <Footer id="footer" />
    </>
  )
}
