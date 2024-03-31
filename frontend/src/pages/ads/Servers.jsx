import Reklamies from "../../components/apiFecz/reklamies.jsx";

const Servers = () => {
    return (
        <>
            <h1 className={"page_title"}>Reklamy serwerów.</h1>
            <Reklamies collection={'servers'}/>
        </>
    );
}

export default Servers;