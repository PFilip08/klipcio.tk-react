import Reklamies from "../components/strapi-api/reklamies";

const Home = () => {
  return (
      <div>
        <p className={'center'}>Strona Tytułowa</p>
        <p className={'center'}>Witamy na klipcio.tk/eu</p>
        <p className={'center'}>Oferujemy darmowe reklamy i w ogóle</p>
        <p className={'center'}>Napisz do nas na <a href={'mailto:kontakt@klipcio.tk'}>kontakt@klipcio.tk</a></p>
        {/*<Reklamies/>*/}
      </div>
  );
}

export default Home;