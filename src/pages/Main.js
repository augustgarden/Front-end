import React from 'react';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ThemecastContent from '../components/ThemecastContent';

export default function Main (){
    return(
        <div className="Main">
            <Header/>
            <Banner/>
            <ThemecastContent />
            <Footer/>
        </div>
    );
}