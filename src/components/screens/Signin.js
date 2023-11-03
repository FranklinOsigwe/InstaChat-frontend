import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';

function Signin() {
  const history = useHistory()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const PostData = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:'Invalid email', classes: '#c62828 red darken-3'})
      return
    }
      fetch('/signin', {
       method:'post', headers : {'Content-Type': 'application/json'}, body : JSON.stringify({
        email,
        password
       })
      }).then((res) => res.json()).then((data) => {
        console.log(data)
        if(data.error) {
          M.toast({html: data.error, classes: '#c62828 red darken-3'})
        }else{
          M.toast({html:'SignedIn Successfully', classes:"#43a047 green darken-1"})
          history.push('/')
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  
  return (
    <div className="mycard">
        <div className='card auth-card'>
       <h2>Dutchie</h2>
       <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
       <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}placeholder='Password'/>
       <button class="btn waves-effect waves-light" onClick={() => PostData()}>Login
  </button>
      <h6><Link to='/signup'>Dont have an account?</Link></h6>
      </div>
    </div>
  )
}

export default Signin