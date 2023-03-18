import './infoWithImage.css';

const InfoWithImage = ({title, img, alt}) => {
    return (
        <div className="page_wrapper">
            <img src={`images/${img}`} alt={alt}></img>
            <div className="about_our">
                <h2>About our {title}</h2>
                <img src="images/Beans logo black.png" alt="beans logo black"></img>
                <p>Extremity sweetness difficult behaviour he of. 
                   On disposal of as landlord horrible.</p>
                <p>Afraid at highly months do things on at. 
                   Situation recommend objection do intention<br/>
                   so questions.<br/> 
                   As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                   met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                   is song that held help face.</p>
            </div>
        </div>
    );
};

export default InfoWithImage;