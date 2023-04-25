import main from '../img/Jumbotron.png'
import maintext from '../img/thewitcher.png'
import '../CSS/Mainpage.css'
import { Link } from 'react-router-dom';


export default function Mainpage(){

    return(
        <div className="position-relative">
            <img  className="gambarmain mw-100" src={main}/>
            <div className='bg-gradient bg-black'>   
            </div>
            <div className='position-absolute w-50 jumbotron'>
                <img src={maintext} className="w-100"/>
                <p className='pmain text-light ts'>Geralt of Rivia, a solitary monster hunter, struggles to find his place in
                a world where people often prove more wicked than beast</p>
                <div className='d-flex pb-2 align-items-center justify-content-between w-25' >
                    <p className='pmain text-light pt-3'>2019</p>
                    <button type="button" class=" pmain btn btn-outline-light">TV Series</button>
                </div>
                
                <button type="button" className="shadow watchbtn btn btn-danger fw-bold">WATCH NOW !</button>
            </div>
        </div>
    );
}