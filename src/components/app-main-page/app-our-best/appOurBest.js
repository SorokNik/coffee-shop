import AppCard from '../../app-card/appCard';

import './app-our-best.scss';

const AppOurBest = ({ourBestCards}) => {
    return (
        <section className="our-best">
            <h2 className="subtitle">Our best</h2>
            <div className="cards">
                <AppCard cardsData={ourBestCards}/>
            </div>
        </section>
    )
}

export default AppOurBest;