import { Component } from 'react';
import AppCard from '../../app-card/appCard';
import AppDelimeter from '../../app-delimiter/appDelimiter';

import './app-our-coffee-beans.scss';

class AppOurCoffeeBeans extends Component {
    constructor(props){
        super(props);
        this.state={
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render() {
        const {ourBeansCards, onFilterSelect} = this.props;

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
                    onUpdateSearch={this.onUpdateSearch}/>
        </div>
    </section>
)
    }
}

export default AppOurCoffeeBeans;