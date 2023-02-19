import AppMenu from '../app-menu/appMenu';
import AppDelimeter from '../app-delimiter/appDelimiter';

import './app-header.scss' ;

const AppHeader = () => {
    return (
        <header>
         <div className="container">
            <AppMenu color={'white'}/>
            <h1 className='title'>Everything You Love About Coffee</h1>
            <AppDelimeter color={'#fff'}/>
            <h2 className='subtitle'>We makes every day full of energy and taste <br/> Want to try our beans?</h2>
			<button>More</button>
         </div>
        </header>      
    )
}

export default AppHeader;