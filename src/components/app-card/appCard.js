import './app-card.scss';

const AppCard = ({cardsData, onModItem}) => {
    let classNames = "app-card-wrapper";
    
    return cardsData.map(({imgSrc, descr, country, price, id}) => {
        if (country) {
            classNames += " add-margin";
            
            return (
                <button className={classNames} key={id} onClick={() => onModItem(id)}>
                    <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                    <div className="descr app-card-descr">{descr}</div>
                    <div className="descr app-card-country">{country}</div>
                    <div className="app-card-price">{price}</div>
                </button>
            )   
        }
        return (
            <button className={classNames} key={id} style={{cursor: "default"}}>
                <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                <div className="descr app-card-descr">{descr}</div>
                <div className="app-card-price">{price}</div>
            </button>
        ) 
    })
    
}

export default AppCard;