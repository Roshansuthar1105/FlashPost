import React from 'react'
import News from '../components/News'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='h-container' style={{ textAlign: 'center' }}>
    <h1>Welcome to the News App</h1>
    <p>Explore the latest news from various categories.</p>
    <div className="categories" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
      <Link to="/cricket">Cricket</Link>
      <Link to="/business">Business</Link>
      {/* <Link to="/bitcoin">Bitcoin</Link> */}
      <Link to="/technology">Technology</Link>
      <Link to="/sports">Sports</Link>
      <Link to="/science">Science</Link>
      <Link to="/health">Health</Link>
      <Link to="/general">General</Link>
      <Link to="/entertainment">Entertainment</Link>
    </div>
    </div>
    <News category={'general'}/>
    </>
  )
}

export default Home
