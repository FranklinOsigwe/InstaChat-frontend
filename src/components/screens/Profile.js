import React from 'react'

function Profile() {
  return (
    <div style={{maxWidth:'750px', margin:'0px auto'}}>
        <div style={{display:'flex', justifyContent:'space-around', margin:'18px 0px', borderBottom:'1px solid grey'}}>
        <div>
           <img src='https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVyc29ufGVufDB8MXwwfHx8MA%3D%3D' style={{width:'160px', height:'160px', borderRadius:'80px'}}/> 
        </div>
        <div>
            <h4>Amanda Winks</h4>
            <div style={{display:'flex',justifyContent:'space-between', width:'100%'}}>
                <h6 style={{paddingRight:'20px' }}>40 posts</h6>
                <h6 style={{paddingRight:'20px' }}>40 followers</h6>
                <h6 style={{paddingRight:'20px' }}>40 following</h6>
            </div>
        </div>
        </div>
        <div className='gallery'>
          <img className='item' src='https://media.istockphoto.com/id/1207944003/photo/photo-of-young-curly-girl.jpg?s=612x612&w=0&k=20&c=LNQp-yJXKqpMNrGdU639QT3QEXtkhEzZ4Q0iGe3NTIs='/>  
          <img className='item' src='https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D'/>  
          <img className='item' src='https://images.unsplash.com/photo-1512310604669-443f26c35f52?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVsJTIwZ2lybHxlbnwwfDF8MHx8fDA%3D'/>  
          <img className='item' src='https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D'/>  
          <img className='item' src='https://images.unsplash.com/photo-1660118235438-5cfe4d6a0e28?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bW9kZWwlMjBnaXJsfGVufDB8MXwwfHx8MA%3D%3D'/>  
          <img className='item' src='https://plus.unsplash.com/premium_photo-1664267832256-176e55ccafd0?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>  
          <img className='item' src='https://images.unsplash.com/photo-1542206395-9feb3edaa68d?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBlcnNvbnxlbnwwfDF8MHx8fDA%3D'/>  
        </div>
    </div>
  )
}

export default Profile