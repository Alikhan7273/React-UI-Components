import React from 'react';
import './Header.css';
import Image from './ImageThumbnail'
import HeaderTitle from './HeaderTitle'
import HeaderContent from './HeaderContent'

function HeaderContainer(){
    return (
        <header>
            <div className="imageContainer">
                <Image />
            </div>
            <div className="titleContainer">
                <HeaderTitle />
                <HeaderContent />
            </div>
        </header>
    );
}

export default HeaderContainer;