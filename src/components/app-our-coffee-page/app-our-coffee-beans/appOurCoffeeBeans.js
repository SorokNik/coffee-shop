import { Component } from 'react';
import AppCard from '../../app-card/appCard';
import AppDelimeter from '../../app-delimiter/appDelimiter';

import './app-our-coffee-beans.scss';

class AppOurCoffeeBeans extends Component {
    constructor(props){
        super(props);
        this.state={
            term: '',
            item: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    onModItem = id => {
        this.setState(({item})=> {
            return {item: this.props.ourBeansCards.filter(item => item.id === id)}
        })
    }

    render() {
        const {ourBeansCards, onFilterSelect} = this.props;
        const {item} = this.state

        const filterButtonsData = [
            {name: '', label: 'All'},
            {name: 'Brazil', label: 'Brazil'},
            {name: 'Kenya', label: 'Kenya'},
            {name: 'Columbia', label: 'Columbia'}
        ]

        const buttons = filterButtonsData.map(({name, label}) => {
            const active = this.props.filter === name;
            const clazz = active ? '-active' : '';
            return (
                <li>
                    <button 
                        className={`button${clazz}`}
                        type='button'
                        key={name}
                        onClick={() => onFilterSelect(name)}>
                            {label}
                    </button>
                </li>  
            )
        })
        if (item === '') {
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
                    <div className="app-filter-and-search">
                            <div className="app-search-panel">
                                <div className="app-search-panel-descr">Looking for</div>
                                <input type="text" 
                                        placeholder='start typing here...' 
                                        value={this.state.term}
                                        onChange={this.onUpdateSearch}/>
                            </div>
                            <div className="app-filter">
                                <div className="app-filter-descr">Or filter</div>
                                <ul className="app-filter-countries">
                                    {buttons}
                                </ul>
                            </div>
                        </div>
                    <div className="about-our-beans-cards">
                        <AppCard cardsData={ourBeansCards}
                                onUpdateSearch={this.onUpdateSearch}
                                onModItem={this.onModItem}/>
                    </div>
                </section>
            )
        }
        return (
            <section className="about-our-beans-info">
                <img src={item[0].imgSrcMore} alt="Coffee bag" className="about-our-beans-more-img" />
                <div className="about-our-beans-more-info">
                    <div className="about-our-beans-more-info-title subtitle">About it</div>
                    <div className="about-our-beans-more-info-delimeter"><AppDelimeter color={"black"}/></div>
                    <div className="about-our-beans-more-info-country about-our-beans-more-info-text"><span className="about-our-beans-more-info-paragraph">Country:</span> {item[0].country ? item[0].country : 'Country information can be found on the page "Our coffee"'}</div>
                    <div className="about-our-beans-more-info-descr about-our-beans-more-info-text"><span className="about-our-beans-more-info-paragraph">Description:</span> {item[0].text}</div>
                    <div className="about-our-beans-more-info-price about-our-beans-more-info-text-bold"><span className="about-our-beans-more-info-paragraph">Price:</span> {item[0].price}</div>
                </div>
            </section>
        )
    }
}

export default AppOurCoffeeBeans;