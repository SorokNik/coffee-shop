import AppMenu from '../../app-menu/appMenu';

import './app-our-coffee-header.scss';

const AppOurCoffeeHeader = ({onChangePage}) =>{
    return (
        <header className="our-coffee-header">
            <div className="container"><AppMenu color={'white'} onChangePage={onChangePage}/></div>
            <div className="title">Our Coffee</div>
        </header>
    )
}

export default AppOurCoffeeHeader;