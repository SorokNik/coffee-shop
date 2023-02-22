import AppDelimeter from '../../app-delimiter/appDelimiter';
import AppMenu from '../../app-menu/appMenu';

import './app-main-header.scss' ;

const AppMainHeader = ({onChangePage}) => {  
    return (
        <header className='main-header'>
         <div className="container">
            <AppMenu color={'white'} onChangePage={onChangePage}/>
            <h1 className='title header-title'>Everything You Love About Coffee</h1>
            <AppDelimeter color={'#fff'}/>
            <h2 className='subtitle header-subtitle'>We makes every day full of energy and taste <br/> Want to try our beans?</h2>
			<a href="#about-us"><button>More</button></a>
         </div>
        </header>      
    )
}

export default AppMainHeader;