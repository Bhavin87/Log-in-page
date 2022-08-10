import React,{useState} from  'react'

const Basicform = () => {
  const[email,setEmail] = useState("");
  const[password,setpassword] = useState("");
  const[AllEntry,setAllEntry] = useState([]);
  const submitform = (e) => {
      e.preventDefault();
      const newEntry = {email: email,password : password};
      setAllEntry([...AllEntry,newEntry]);
       console.log(AllEntry);
      
    }
  return(
 <>
       <div className='card'>
            <form action='' onSubmit={submitform}>
                <div>

               <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email"  autoComplete='off'
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                     />
                </div>
                <div>

                  <label htmlFor='password'>Password</label>
                  <input type="text" name="password" id="password"  autoComplete='off'
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                     />
               
                </div>
                
                <button type='submit'>LogIn</button>
            </form>
           
        </div>
    <div>
     {
        AllEntry.map((curElem) => {
            return (
                <div className='show'>
                      <p>{curElem.email}</p>
                     <p>{curElem.password}</p> 
                </div>
            )
        } 
        )
     }
    </div>
    
 </>
  )
}

export default Basicform