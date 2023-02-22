import AppDelimeter from '../app-delimiter/appDelimiter';
import AppMenu from '../app-menu/appMenu';
import './app-footer.scss';

const AppFooter = ({onChangePage}) => {
    return (
        <footer>
            <AppMenu color={'black'} onChangePage={onChangePage}/>
            <div className="app-footer-delimeter"><AppDelimeter color={'black'}/></div>
        </footer>
    )
}

export default AppFooter;