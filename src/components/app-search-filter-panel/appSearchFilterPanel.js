import './app-search-filter-panel.scss';

const AppSearchFilterPanel = () => {
    return (
        <div className="app-filter-and-search">
            <div className="app-search-panel">
                <div className="app-search-panel-descr">Looking for</div>
                <input type="text" placeholder='start typing here...' />
            </div>
            <div className="app-filter">
                <div className="app-filter-descr">Or filter</div>
                <ul className="app-filter-countries">
                    <li><button>Brazil</button></li>
                    <li><button>Kenya</button></li>
                    <li><button>Columbia</button></li>
                </ul>
            </div>
        </div>
    )
}

export default AppSearchFilterPanel;