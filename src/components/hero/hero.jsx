import heroimage from '../../assets/heroimage.jpg';
import "./hero.css";
function Hero(){
    return(
        <section className="Hero-section">
    <div className="hero-textbox">
        <h2 className="hero-title">
            Murang'a Univeristy Tech Club
        </h2>
        <p className="hero_tagline">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet et quis nulla laboriosam minus expedita distinctio iure suscipit doloremque recusandae, at rerum sed officia. Vero officia atque odio illo laboriosam?
        </p>
        <a href="#" className="hero_tagline-link">view more catalogue</a>
    </div>
    <img src={heroimage} alt="mut students in work" className='hero-img' />
        </section>
    )
}

export default Hero;