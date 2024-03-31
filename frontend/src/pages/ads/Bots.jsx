import Reklamies from "../../components/apiFecz/reklamies";

const Bots = () => {
  return (
    <>
      <h1 className={"page_title"}>Reklamy botów.</h1>
      <Reklamies collection={'bots'}/>
    </>
  );
};

export default Bots;
