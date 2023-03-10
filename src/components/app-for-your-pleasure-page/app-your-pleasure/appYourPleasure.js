import { Component } from "react";

import AppCard from "../../app-card/appCard";
import AppDelimeter from "../../app-delimiter/appDelimiter";

class AppYourPleasure extends Component {
    constructor(props){
        super(props);
        this.state={
            item: ''
        }
    }

    onModItem = id => {
        this.setState(({item})=> {
            return {item: this.props.ourBeansCards.filter(item => item.id === id)}
        })
    }

    render(){
        const {ourBeansCards} = this.props;
        const {item} = this.state;        
            if (item === '') {
                return (
                    <section className="about-our-beans">
                        <div className="about-our-beans-box">
                            <img src="img/pages/your-pleasure.jpg" alt="a cup off coffee" className="about-our-beans-img" />
                            <div className="about-our-beans-wrapper">
                                <div className="about-our-beans-title subtitle">About our goods</div>
                                <div className="about-our-beans-delimeter"><AppDelimeter color={"black"}/></div>
                                <div className="about-our-beans-descr descr">
                                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                    <br/><br/>
                                    Afraid at highly months do things on at. Situation recommend objection do intention
                                    so questions. 
                                    As greatly removed calling pleased improve an. Last ask him cold feel
                                    met spot shy want. Children me laughing we prospect answered followed. At it went
                                    is song that held help face.
                                </div>
                            </div>
                        </div>
                        <div className="about-our-beans-line"></div>
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

export default AppYourPleasure;