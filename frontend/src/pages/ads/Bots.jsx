import Reklamies from "../../components/strapi-api/reklamies";

const Bots = () => {
  return (
    <>
      <h1 className={"page_title"}>Reklamy botów.</h1>
      <Reklamies collection={'reklamies'}/>
    </>
  );
};

export default Bots;
