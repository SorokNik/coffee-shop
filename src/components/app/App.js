import {Component} from 'react';

import AppAboutUs from '../app-main-page/app-about-us/appAboutUs';
import AppFooter from '../app-footer/appFooter';
import AppMainHeader from '../app-main-page/app-main-header/appMainHeader';
import AppOurBest from '../app-main-page/app-our-best/appOurBest';
import AppOurCoffeeHeader from '../app-our-coffee-page/app-our-coffee-header/appOurCoffeeHeader';


import './App.scss';
import AppOurCoffeeBeans from '../app-our-coffee-page/app-our-coffee-beans/appOurCoffeeBeans';

class App extends Component {
  constructor(props){
	super(props);
	this.state= {
		ourBestCards : [
			{imgSrc: 'img/cards/our-best/solimo2kg.jpg', descr: "Solimo Coffee Beans 2 kg", price: "10.73$", id:1},
			{imgSrc: 'img/cards/our-best/presto1kg.jpg', descr: "Presto Coffee Beans 1 kg", price: "15.99$", id:2},
			{imgSrc: 'img/cards/our-best/aromistico1kg.jpg', descr: "AROMISTICO Coffee 1 kg", price: "6.99$", id:3}
		],
		page: ''
  	}
  }
  
  openPage = page => {
	switch (page) {
		case 'ourCoffeePage':
			return <>
						<AppOurCoffeeHeader onChangePage={this.onChangePage}/>
						<AppOurCoffeeBeans/>
					</>;
		case 'mainPage':
			return  <>
						<AppMainHeader onChangePage={this.onChangePage}/>
						<AppAboutUs/>
					</>;
		default:
			return <AppMainHeader onChangePage={this.onChangePage}/>;
	}
  }

  onChangePage = (page) => {
	this.setState({page});
  }

  render() {
	const {ourBestCards, page} = this.state;
	const newPage = this.openPage(page);
    return (
      <div>
		<div className="container"></div>
		{newPage}
        {/* <AppMainHeader/> */}
        {/* <AppAboutUs/> */}
        <AppOurBest ourBestCards={ourBestCards}/>
		<AppFooter onChangePage={this.onChangePage}/>
      </div>
    );
  }
}

export default App;
