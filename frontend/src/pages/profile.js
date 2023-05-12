import React from 'react'
import '../styles/profile.css';

const Profile = () => {
  return (
    <div className='main_profile'>
       <section>
       <h1>My Profile</h1>
       <img src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgRRWWJoxWiRu5d3_NP3vVJNGIuRIlEjsPg&usqp=CAU" alt="hero"/>
       
       </section>

       <section className='sing_up'>
       
        <h2>Sing Up</h2>

        <form>
          <label for="username">Username</label><br></br>
          <input type="text" id="username" name="username"></input><br></br>

          <label for="mail_id">Mail id</label><br></br>
          <input type="text" id="mail_id" name="mail_id"></input><br></br>

          <label for="ph_no">PH.No</label><br></br>
          <input type="text" id="ph_no" name="ph_no"></input><br></br>

          <label for="pwb">Passward</label><br></br>
          <input type="Passward" id="pwb" name="pwb"></input><br></br>

          <button>Contonue</button>
        </form>
        
       </section>

       <section className='login'>
        <h2>Login</h2>
        <form>
          <label for="username">Username</label><br></br>
          <input type="text" id="username" name="username"></input><br></br>

          <label for="pwb">Passward</label><br></br>
          <input type="Passward" id="pwb" name="pwb"></input><br></br>
          <button>Login</button>
        </form>
        
       </section>
    </div>
  )
}

export default Profile