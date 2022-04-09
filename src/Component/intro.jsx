import "./intro.css"
import Me from "../../src/img/me.jpg"
const Intro = () => {
    return (
        <div className="intro">
<div className="intro-left">
    <div className="intro-left-wrapper">
        <h2 className="i-intro">hello my name is</h2>
        <h1 className="intro-name">Oussema Mahdhi</h1>
        <div className="intro-tittle">
        </div>
        <div className="intro-desc">
            welcome to my portofolio my name is Oussema mahdhi im 24 years
            old from tunisia. im corrently studying to get my web development
            certificat.
        </div>
    </div>
</div>
<div className="intro-right">
    <div className="intro-bg"></div>
    <img src={Me} alt="personalphoto" className="intro-image" />
</div>
        </div>
    )
}
export default Intro