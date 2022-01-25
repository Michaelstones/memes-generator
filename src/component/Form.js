import React, {useState, useEffect} from "react";
import data from '../memesData'
 
const Form = ()=>{
    const [allMemesImg, setAllmemesImg] = useState({
        topText:'',
        bottomText:'',
        randomImg:"http://i.imgflip.com/1bij.jpg"
    })
    const [memesData, setMemesData] = useState([])
   
   const click = ((e)=>{
       const {name, value} =e.target
       setAllmemesImg((prev) =>{
        return ({...prev, [name]:value})
       })
   })
    const handleclick = (e)=>{
        e.preventDefault()
        const randomNum = Math.floor(Math.random()*memesData.length)
        const url = memesData[randomNum].url
        // console.log(url);
        setAllmemesImg(prev => {
            return ({...prev, randomImg:url})
        // console.log(prev.url);
        })
    }
    // console.log(allMemesImg)
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes").
        then((res)=> res.json()).
        then((data)=> setMemesData(data.data.memes))
    },[])
    return (
        <>
        <div className="form-container" >
            
            <form className="form">

                <input type='text' placeholder="shut up"
                name ='topText'
                onChange={click}
                value={allMemesImg.topText}/>   

                <input type='text' placeholder="Take my money"
                name='bottomText'
                onChange={click}
                value={allMemesImg.bottomText}/>

                <button type="submit" className="btn" onClick={handleclick}> Get a New Meme Image</button>

            <div className="memesimg-container">
                <img className="meme-img" src={allMemesImg.randomImg} alt="img" />
                <h2 className="meme--text top">{allMemesImg.topText}</h2>
                <h2 className="meme--text bottom">{allMemesImg.bottomText}</h2>
            </div>
            </form>
        </div>
        </>
    )
}

export default Form;