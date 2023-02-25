import AppCard from '../../app-card/appCard';
import AppDelimeter from '../../app-delimiter/appDelimiter';
import AppSearchFilterPanel from '../../app-search-filter-panel/appSearchFilterPanel';

import './app-our-coffee-beans.scss';

const AppOurCoffeeBeans = ({ourBeansCards}) => {
return (
    <section className="about-our-beans">
        <div className="about-our-beans-box">
            <img src="img/pages/about-our-beans.jpg" alt="a girl drink coffee" className="about-our-beans-img" />
            <div className="about-our-beans-wrapper">
                <div className="about-our-beans-title subtitle">About our beans</div>
                <div className="about-our-beans-delimeter"><AppDelimeter color={"black"}/></div>
                <div className="about-our-beans-descr descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    <br/> <br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. 
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                </div>
            </div>
        </div>
        <div className="about-our-beans-line"></div>
        <AppSearchFilterPanel/>
        <div className="about-our-beans-cards">
            <AppCard cardsData={ourBeansCards}/>
        </div>
    </section>
)
}

export default AppOurCoffeeBeans;