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
		ourBeansCards: [
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "AROMISTICO Coffee 1 kg", country:"Brazil", price: "6.99$", id:4},
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "Presto Coffee 1 kg", country:"Kenya", price: "6.99$", id:5},
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "Solimo Coffee 1 kg", country:"Columbia", price: "6.99$", id:6},
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "Presto Coffee 1 kg", country:"Brazil", price: "6.99$", id:7},
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "Solimo Coffee 1 kg", country:"Brazil", price: "6.99$", id:8},
			{imgSrc: 'img/cards/our-coffee/mask.jpg', descr: "Presto Coffee 1 kg", country:"Brazil", price: "6.99$", id:9}
		],
		page: '',
		term: '',
		filter: ''
  	}
  }
  
  openPage = page => {
	const {ourBestCards, ourBeansCards, term, filter} = this.state;
	const VisibleData = this.filterPost(this.searchEmp(ourBeansCards, term), filter)
	switch (page) {
		case 'ourCoffeePage':
			return <>
						<AppOurCoffeeHeader onChangePage={this.onChangePage}/>
						<AppOurCoffeeBeans ourBeansCards={VisibleData}
											onUpdateSearch={this.onUpdateSearch}
											onFilterSelect={this.onFilterSelect}
											filter={filter}/>
					</>;
		case 'mainPage':
			return  <>
						
						<AppMainHeader onChangePage={this.onChangePage}/>
						<AppAboutUs/>
						<AppOurBest ourBestCards={ourBestCards}/>
					</>;
		default:
			return 	<>
						<AppMainHeader onChangePage={this.onChangePage}/>
						<AppAboutUs/>
						<AppOurBest ourBestCards={ourBestCards}/>
					</>
	}
  }

	onChangePage = (page) => {
	this.setState({page});
	}

	searchEmp = (items, term) => {
	if (term.length === 0) {
		return items;
	}

	return items.filter(item => {
		return item.descr.indexOf(term) > -1
	})
	}

	onUpdateSearch = (term) => {
		this.setState({term});
	}

	filterPost = (items, filter) =>{
        switch (filter) {
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
			case 'Columbia':
				return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
   }

   onFilterSelect = (filter) => {
        this.setState({filter});
   }

  render() {
	const {page} = this.state;
	const newPage = this.openPage(page);
    return (
      <div>
		<div className="container"></div>
		{newPage}
        {/* <AppMainHeader/> */}
        {/* <AppAboutUs/> */}
        {/* <AppOurBest ourBestCards={ourBestCards}/> */}
		<AppFooter onChangePage={this.onChangePage}/>
      </div>
    );
  }
}

export default App;
