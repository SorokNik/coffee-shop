import './app-menu-white.scss'
import './app-menu-dark.scss'

const AppMenu = ({color}) => {

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
                <li><a href="#">Coffee house</a></li>
                <li><a href="#">Our coffee</a></li>
                <li><a href="#">For your pleasure</a></li>
            </ul>
        </nav>
    )
};

export default AppMenu;