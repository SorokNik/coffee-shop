import './app-card.scss';

const AppCard = ({cardsData, onModItem}) => {
    let classNames = "app-card-wrapper";
    
    return cardsData.map(({imgSrc, descr, country, price, id}) => {
        if (country) {
            if (classNames === "app-card-wrapper"){
                classNames += " add-margin app-card-shadow";
            }
            
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
            <div className={classNames} key={id} style={{cursor: "default"}}>
                <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                <div className="descr app-card-descr">{descr}</div>
                <div className="app-card-price">{price}</div>
            </div>
        ) 
    })
    
}

export default AppCard;