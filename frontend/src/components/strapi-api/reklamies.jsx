import useFetch from '../../scripts/useFetch';

const Reklamies = props => {
    // const { loading, error, data } = useFetch("http://127.0.0.1:1337/api/reklamies")
    const { loading, error, data } = useFetch(`http://127.0.0.1:1337/api/${props.collection}`);

    if (loading) return console.log('ladowanie');
    if (error) return console.log('cos poszlo kurwa nie tak');

    const response = data.data;
    console.log(response);

    console.log('test');

    return (
        <section id={'ad'} className={'ad_section'}>
            {/*<h1>reklamies</h1>*/}
            <div className={'ad_div'} id="ad_div">
                {response.map(li => (
                    <>
                        <a key={li.id} href={li.attributes.link}>
                            {li.attributes.nazwa}
                        </a>
                        <br />
                    </>
                ))}
            </div>
        </section>
    );
};

export default Reklamies;
