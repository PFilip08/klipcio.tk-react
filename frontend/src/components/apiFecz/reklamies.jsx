import useFetch from "../../scripts/useFetch";

const Reklamies = (props) => {
  // const { loading, error, data } = useFetch("http://127.0.0.1:1337/api/reklamies")
  // const { loading, error, data } = useFetch(`http://127.0.0.1:5000/${props.collection}`);
  const { loading, error, data } = useFetch(`${import.meta.env.VITE_API_URL}/${props.collection}`);

  if (loading) return console.log("ladowanie");
  if (error) return console.log("cos poszlo kurwa nie tak");

  const response = data.data;
  console.log(response);

  // console.log("test");

  return (
    <section id={'ad'} className={'ad_section'}>
      {/*<h1>reklamies</h1>*/}
      <div className={"ad_div"} id="ad_div">
        {response.map((li) => (
          <p key={`${li.id}`} className={(li.premium ? 'premium' : null)}><a href={`${li.url}`} target={"_blank"} rel="noreferrer">{li.name}</a> - {li.description}</p>
        ))}
      </div>
    </section>
  );
};

export default Reklamies;
