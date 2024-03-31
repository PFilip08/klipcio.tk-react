import budowa from "../styles/budowa.module.css";

const About = () => {
    return (
        <>
            <h1 className={"page_title"}>O nas</h1>
            {/* eslint-disable-next-line react/no-unknown-property */}
            <marquee style={{fontStyle: "italic"}} behavior={"alternate"}>*tutaj kiedyś coś będzie*</marquee>
            <div className={budowa.budowa}></div>
        </>
    );
}

export default About;