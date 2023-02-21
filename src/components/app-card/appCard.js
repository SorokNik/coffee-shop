import './app-card.scss';

const AppCard = ({cardsData}) => {

    return cardsData.map(({imgSrc, descr, price, id}) => {
        return (
            <div className="app-card-wrapper" key={id}>
                <div className="app-card-img"><img src={imgSrc} alt="coffee card" /></div>
                <div className="descr app-card-descr">{descr}</div>
                <div className="app-card-price">{price}</div>
            </div>
        ) 
    })
    
}

export default AppCard;