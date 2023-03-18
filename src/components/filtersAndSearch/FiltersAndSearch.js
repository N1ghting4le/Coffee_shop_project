import './filtersAndSearch.css';
import classNames from 'classnames';
import { useState } from 'react';

const FiltersAndSearch = ({onFilterChange, onStrChange}) => {
    const [activeBtn, setActiveBtn] = useState(null);

    const onActiveBtnChange = (e) => {
        setActiveBtn(e.target.textContent);
    }

    const onActiveClassToggle = (filter) => {
        return activeBtn === filter ?
        classNames({
            "active_btn": true
        }) :
        classNames({
            "active_btn": false
        });
    }

    return (
        <div className="search_and_filter">
            <div className="search">
                <span>Looking for</span>
                <input type="text" placeholder="start typing here..." onChange={(e) => onStrChange(e.target.value)}></input>
            </div>
            <div className="filter">
                <span>Or filter</span>
                <div className="filter_buttons">
                    <button id="first_btn" 
                            onClick={(e) => {
                                onFilterChange(e.target.textContent);
                                onActiveBtnChange(e);
                            }}
                            className={onActiveClassToggle('Brazil')}>Brazil</button>
                    <button id="second_btn" 
                            onClick={(e) => {
                                onFilterChange(e.target.textContent);
                                onActiveBtnChange(e);
                            }}
                            className={onActiveClassToggle('Kenya')}>Kenya</button>
                    <button id="third_btn" 
                            onClick={(e) => {
                                onFilterChange(e.target.textContent);
                                onActiveBtnChange(e);
                            }}
                            className={onActiveClassToggle('Columbia')}>Columbia</button>
                </div>
            </div>
        </div>
    );
};

export default FiltersAndSearch;