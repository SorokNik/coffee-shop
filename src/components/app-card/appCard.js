import './app-card.scss';

const AppCard = ({cardsData}) => {
    let classNames = "app-card-wrapper";
    
    return cardsData.map(({imgSrc, descr, country, price, id}) => {
        if (country) {
            classNames += " add-margin";
            
            return (
                <div className={classNames} key={id}>
                    <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                    <div className="descr app-card-descr">{descr}</div>
                    <div className="descr app-card-country">{country}</div>
                    <div className="app-card-price">{price}</div>
                </div>
            )   
        }
        return (
            <div className={classNames} key={id}>
                <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                <div className="descr app-card-descr">{descr}</div>
                <div className="app-card-price">{price}</div>
            </div>
        ) 
    })
    
}

export default AppCard;