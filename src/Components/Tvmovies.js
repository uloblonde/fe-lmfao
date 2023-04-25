import { Link } from "react-router-dom"

 const Tvmovies = (props)=> {
    const obj = Object.values(props.tv)
    const object = Object.values(props.mvs)
    console.log(obj)

    const Tvlur =()=>{
        return obj.map((movie)=>{
            return (
                <Link className="text-decoration-none" to={`/Detail/${movie.id}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${movie.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{movie.nama}</h4>
                    <p className='text-light pt-2'>{movie.tahun}</p>
                </div>
                </Link>
            )
        })
    }
    const Movieslur = ()=>{
        return object.map((tv)=>{
            return (
                <Link className="text-decoration-none" to={`/Detail/${tv.id +6}`}>
                <div className="card bg-black">
                    <img src={require(`../img/card/${tv.image}.png`)} className=''/>
                    <h4 className='text-light pt-2'>{tv.nama}</h4>
                    <p className='text-light pt-2'>{tv.tahun}</p>
                </div>
               </Link>
            )
        })
    }
    return(
        <div className='wrap bg-black'>
            <h1 className='fs-4 text-light ms-4'>TV Series</h1>  
                <div className="global d-flex justify-content-evenly rounded">
                    <Tvlur/>
                </div>
            <h1 className='fs-4 text-light ms-4'>Movies</h1>  
                <div className="global d-flex justify-content-evenly rounded">
                    <Movieslur/>
                </div>
        </div>
                    
    )
 }

 
 

    
    
    // return(
    //     <div className='wrap bg-black'>
            
    //         <h1 className='fs-4 text-light ms-4'>TV Movies</h1>
            
    //         <div className="global d-flex justify-content-evenly rounded">
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //         </div>
    //         <h1 className='fs-4 text-light ms-4'>Movies</h1>
            
    //         <div className="global d-flex justify-content-evenly rounded">
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //             <div className="card bg-black">
    //                 <img src={card} className=''/>
    //                 <h4 className='text-light pt-2'>The Withcer</h4>
    //                 <p className='text-light pt-2'>2019</p>
    //             </div>
    //         </div>
    //     </div>
        
        
  
    // )


export default Tvmovies