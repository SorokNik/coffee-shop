import AppDelimeter from '../app-delimiter/appDelimiter';
import AppMenu from '../app-menu/appMenu';
import './app-footer.scss';

const AppFooter = () => {
    return (
        <footer>
            <AppMenu color={'black'}/>
            <div className="app-footer-delimeter"><AppDelimeter color={'black'}/></div>
        </footer>
    )
}

export default AppFooter;