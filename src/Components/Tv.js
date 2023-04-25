import main from '../img/Jumbotronm.png'
import maintext from '../img/joker.png'
import '../CSS/Mainpage.css'


export default function Tv(){

    return(
        <div className="position-relative">
            <img  className="gambarmain mw-100" src={main}/>
            <div className='bg-gradient bg-black'>   
            </div>
            <div className='position-absolute w-50 jumbotron'>
                <img src={maintext} className="w-25 mb-4"/>
                <p className='pmain text-light mb-2'>In Gotham City, mentally troubled comedian Arthur Fleck 
                is disregarded and mistreated by society. He then embarks on a downward spiral 
                of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker.</p>
                <div className='d-flex pb-2 align-items-center justify-content-between w-25' >
                    <p className='pmain text-light pt-2 pb-2'>2019</p>
                    <button type="button" class=" pmain btn btn-outline-light">Movies</button>
                </div>
                <button type="button" className="shadow watchbtn btn btn-danger fw-bold">WATCH NOW !</button>
            </div>
        </div>
    );
}