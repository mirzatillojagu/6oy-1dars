import './App.css'

function App() {
  return (
   <div>
     <div className='container hedaer_container'>
       <div className='header-img'>
          <h2>myteam</h2>
       <div>
        <ul className='ul'>
          <li className='li'><a href="#">home</a></li>
          <li className='li'><a href="#">about</a></li>
        </ul>
       </div>
       </div>

        <button><a className='btn' href="#">contact us</a></button>
    </div>
    
    <div className='container hero_container'>
        <div className='hero'>
              <h1>Find the best <span>talent</span></h1>
       </div>

           <div>
            <p className='description'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
           </div>
     </div>

     <div className='container build_container'>
        <div>
          <h1 className='else'>Build & manage distributed teams like no one else.</h1>
        </div>


        <div className='cards'>
          <div className='Experienced'>
            <h5 className='name'>Experienced Individuals</h5>
            <p className='lorem'>Our network is made up of highly experienced professionals who are passionate about what they do.</p>
          </div>

          <div>
             <h5 className='name'>Easy to Implement</h5>
             <p className='lorem'>Our processes have been refined over years of implementation meaning our teams always deliver.</p>
          </div>

          <div>
             <h5 className='name'>Enhanced Productivity</h5>
             <p className='lorem'>Our customized platform with in-built analytics helps you manage your distributed teams.</p>
          </div>
        </div>
     </div>
  </div>
  )
}

export default App;