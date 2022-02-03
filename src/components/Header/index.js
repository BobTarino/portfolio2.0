import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
import Zoom from '../../components/animations';

function Header(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;
    
    useEffect(() => { 
        !contactSelected ? (
            document.title = capitalizeFirstLetter(currentCategory.name)
        ) : (
            document.title = 'Contact'
        )
    });

    return (
        <header className="flex-row px-1">
            <nav>
            <Zoom></Zoom>
                <ul className="flex-row">
                <li className={`mx-2 ${contactSelected && 'navActive'}`}></li>
                
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${currentCategory.name === category.name && !contactSelected && `navActive`
                                }`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category);
                                setContactSelected(false);
                            }}
                            >
                                {capitalizeFirstLetter(category.name)}    
                            </span>
                        </li>
                        
                        
                    ))}
                    <li><span onClick={() => setContactSelected(true)}>Contact</span></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;