import './app-menu-white.scss'
import './app-menu-dark.scss'

const AppMenu = (props) => {
    const {color} = props;
    let classNames = "app-menu";
    switch(color) {
        case 'black':
            classNames += "-dark";
            break
        default:
            classNames += "-white";
    }
    
    return (
        <nav>
            <ul className={classNames}>
                <li onClick={() => props.onChangePage('mainPage')}>Coffee house</li>
                <li onClick={() => props.onChangePage('ourCoffeePage')}>Our coffee</li>
                <li onClick={() => props.onChangePage('forYourPleasure')}>For your pleasure</li>
            </ul>
        </nav>
    )
};

export default AppMenu;