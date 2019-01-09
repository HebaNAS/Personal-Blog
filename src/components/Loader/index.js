import React, { Component } from 'react'
import '../../scss/loader.scss';

// Butterfly Logo
class Loader extends Component {
    componentDidMount() {
        let page = document.querySelector('.page')
        let loader = document.querySelector('.loader-ring')

        setTimeout(function() {
            page.style.visibility = 'hidden';
            loader.style.visibility = 'visible';
        }, 3000)
    }
    
    render() {
        return(
            <div className='loader-ring'>
                <div className='loader-ring-light'></div>
                <div className='loader-ring-track'></div>
            </div>
        )
    }
}

export default Loader