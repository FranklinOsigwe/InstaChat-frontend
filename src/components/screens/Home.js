import React from 'react'

function Home() {
  return (
    <div className='home'>
            <div className='card home-card'>
                <h5>Franklin</h5>
                <div className='card-image'>
                    <img src='https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&q=80&w=1502&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>
                     <h6>Title</h6>
                     <p>This is a magnificient post</p>
                     <input type='text'  placeholder='add a comment'/>
                </div>
            </div>
            <div className='card home-card'>
                <h5>Emili Henry</h5>
                <div className='card-image'>
                    <img src='https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&q=80&w=1502&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>
                     <h6>Title</h6>
                     <p>This is a magnificient post</p>
                     <input type='text'  placeholder='add a comment'/>
                </div>
            </div>
            <div className='card home-card'>
                <h5>Mercy Adele</h5>
                <div className='card-image'>
                    <img src='https://images.unsplash.com/photo-1542396601-dca920ea2807?auto=format&fit=crop&q=80&w=1502&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
                </div>
                <div className='card-content'>
                <i className="material-icons" style={{color:'red'}}>favorite</i>
                     <h6>Title</h6>
                     <p>This is a magnificient post</p>
                     <input type='text'  placeholder='add a comment'/>
                </div>
            </div>
    </div>
  )
}

export default Home