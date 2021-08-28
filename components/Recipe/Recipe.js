import Header from '../header/header';
import Footer from '../footer/footer';

export default function recipe(props) {
  return (
    <div>
      <Header title={`MlluizCook - ${props.name}`} />
      <main>
        <article className="racipe-body">
          <h1 className="recipe-body-name">{props.name}</h1>
          <img
            className="racipe-body-picture"
            alt={props.name}
            src={props.picture}
          />
          <div>
            <i className="fas fa-stopwatch fa-fw"></i> Preparo: {props.time}{' '}
            <br />
            <i className="fas fa-utensils fa-fw"></i> Rendimento:{' '}
            {props.servings}
          </div>
          {props.children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
