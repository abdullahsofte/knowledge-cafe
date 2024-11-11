import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
   const [bookmarks, setBookmarks] = useState([]);

   const hendleAddToBookmark = blog => {
    console.log('book marks adding soon');
    
   }
  return (
    <>
   <div className="main w-10/12 m-auto">
   <Header></Header>
    <div className='md:flex'>

     <Blogs hendleAddToBookmark={hendleAddToBookmark}></Blogs>
     <Bookmarks></Bookmarks>
    </div>
   </div>
  
    
    </>
  )
}

export default App
