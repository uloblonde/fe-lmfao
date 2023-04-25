import main from '../img/Tvseries.png'
import maintext from '../img/tvfont.png'
import '../CSS/Mainpage.css'


export default function Inimovie(){

    return(
        <div className="position-relative">
            <img  className="gambarmain mw-100" src={main}/>
            <div className='bg-gradient bg-black'>   
            </div>
            <div className='position-absolute w-50 jumbotron'>
                <img src={maintext} className="w-75 mb-4"/>
                <p className='pmain text-light mb-2'>Money Heist is a crime drama on 
                Netflix - originally called La Casa de Papel. Money Heist season 3 has 
                just been released by the streaming service. The plot reads: "Eight 
                thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal 
                mastermind manipulates the police to carry out his plan."</p>
                <div className='d-flex pb-2 align-items-center justify-content-between w-25' >
                    <p className='pmain text-light pt-2 pb-2'>2019</p>
                    <button type="button" class=" pmain btn btn-outline-light">TV Series</button>
                </div>
                <button type="button" className="shadow watchbtn btn btn-danger fw-bold">WATCH NOW !</button>
            </div>
        </div>
    );
}