import AppMenu from '../../app-menu/appMenu';

import './app-your-pleasure-header.scss';

const AppYourPleasureHeader = ({onChangePage}) =>{
    return (
        <header className="your-pleasure-header">
            <div className="container"><AppMenu color={'white'} onChangePage={onChangePage}/></div>
            <div className="title">For your pleasure</div>
        </header>
    )
}

export default AppYourPleasureHeader;