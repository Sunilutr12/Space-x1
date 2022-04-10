import React from 'react'
import './styles.css'
export class Launch extends React.Component{

    render(){
        return(
            <div className='launch'>
            <img src="https://farm9.staticflickr.com/8637/16079045013_1f0fab9b54_o.jpg"/>
            <div className='content'>
            <div className='info'>
               <h1>Title:FalconSat</h1>
               <h1>Date:2006-03-25T10:30:00+12:00</h1>
            </div>
            <p>Descriptyion:"Engine failure at 33 seconds and loss of vehicle""Engine failure at 33 seconds and loss of vehicle""Engine failure at 33 seconds and loss of vehicle""Engine failure at 33 seconds and loss of vehicle""Engine failure at 33 seconds and loss of vehicle""Engine failure at 33 seconds and loss of vehicle",</p>
            </div>
            </div>
        )
    }
}