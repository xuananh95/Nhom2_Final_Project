import React from 'react'
import './styles.css'
import { useNavigate } from 'react-router-dom';

const Allfilm = () => {
    const data = localStorage.getItem('Data')?JSON.parse(localStorage.getItem('Data')):[]
    const image_path='https://image.tmdb.org/t/p/w500'
    const navigate = useNavigate()
    const handleItemClick = (name) => {
        const itemInfo = data.filter(item => {
            return item.title === name
        })
        itemInfo.length > 0 && localStorage.setItem('itemInfo', JSON.stringify(itemInfo[0]))
        navigate('/Info')
    }

  return (
    <div className='Allfilm'>
        <div className='container'>
            <div style={{width:'100%', borderBottom:'1px solid gray'}}> 
                <h1 style={{marginLeft: '10px', marginBottom: '10px'}}>Tất cả phim</h1>
            </div>
            <div className='show-film-area'> 
            {
                data.map((item, index) => {
                    return (
                        <div key={index} className='show-film-item' onClick={()=>handleItemClick(item.title)}>
                            <div className='show-film-item-overlay'>
                                <h2>{item.title}</h2>
                                <p>{item.tagline}</p>
                                <small style={{color: 'gray'}}>{item.overview}</small>
                            </div>
                            <img className='show-film-image' src={image_path + item.poster_path} alt='image'></img>
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    </div>
  )
}

export default Allfilm