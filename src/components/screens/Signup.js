import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom';
import M from 'materialize-css';


function Signup() {
  const history = useHistory()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const PostData = () => {
    if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
      M.toast({html:'Invalid email', classes: '#c62828 red darken-3'})
      return
    }
      fetch('/signup', {
       method:'post', headers : {'Content-Type': 'application/json'}, body : JSON.stringify({
        name,
        email,
        password
       })
      }).then((res) => res.json()).then((data) => {
        if(data.error) {
          M.toast({html: data.error, classes: '#c62828 red darken-3'})
        }else{
          M.toast({html:data.message, classes:"#43a047 green darken-1"})
          history.push('/signin')
        }
      }).catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="mycard">
        <div className='card auth-card'>
       <h5>Dutchie</h5>
       <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'/>
       <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email'/>
       <input type='password' value={password}  onChange={(e) => setPassword(e.target.value)}placeholder='Password'/>
       <button className="btn waves-effect waves-light" onClick={() => PostData()}>Signup
  </button>
      </div>
      <h6><Link to='/signin'>Already have an account ?</Link></h6>
    </div>
  )
}

export default Signup