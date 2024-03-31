import Reklamies from "../../components/apiFecz/reklamies.jsx";

const Sites = () => {
    return (
        <>
            <h1 className={"page_title"}>Reklamy stron.</h1>
            <Reklamies collection={'sites'}/>
        </>
    );
}

export default Sites;