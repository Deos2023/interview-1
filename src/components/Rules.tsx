import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Page from './Page'
import Home from './Home'
import Contact from './Contact'
import Picture from './Picture'

const Rules = () => {
  return (
    <>
      <BrowserRouter>
      <Page />
        <Routes>
          <Route path="/home" element={<Home />} />
           <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<Picture />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Rules
