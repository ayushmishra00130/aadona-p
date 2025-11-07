import React from 'react'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About/About'
import Csr  from './pages/About/Csr'
import Active from './pages/active/Active'
import Passive from './pages/passive/Passive'
import ContactUs from './pages/ContactUs'
import ProjectLocking from './pages/Partners/ProjectLocking'
import RequestDemo from './pages/Partners/RequestDemo'
import BecomePartner from './pages/Partners/BecomePartner'
import RequestTraining from  './pages/Partners/RequestTraining'
import Wireless from './pages/active/Wireless'
import Careers from './pages/About/Careers'
import LeadershipTeam from './pages/About/LeadershipTeam'
import MediaCenter from './pages/About/MediaCenter'
import MissionVission from './pages/About/MissionVission'
import OurCustomer from './pages/About/OurCustomer'
import WhistleBlower from './pages/About/WhistleBlower'
// import Warranty from './pages/support/Warranty'
import ProductRegistration from './pages/support/Product-registration'
import ProductSupport from './pages/support/Product-support'
import SupportTools from './pages/support/Support-tools'
import CustomersPage from './Components/CustomersPage'
import Chatbot from './Components/Chatbot'

const App = () => {
  return (
    <>
    <Chatbot/>
      <Router>
        <Routes>
          <Route  path='/' element={<Home/>}/>
            {/* Active Page */}
          <Route path='active'element={<Active/>} />
          <Route path='wireless'element={<Wireless/>} />
          {/* Passive */}
          <Route path='passive'element={<Passive/>} />
          <Route  path='/blog' element={<Blog/>}/>
          {/* About */}
          <Route  path='/about' element={<About/>}/>
          <Route  path='/csr' element={<Csr/>}/>
          <Route  path='/careers' element={<Careers/>}/>
          <Route  path='/leadershipTeam' element={<LeadershipTeam/>}/>
          <Route  path='/mediaCenter' element={<MediaCenter/>}/>
          <Route  path='/missionVision' element={<MissionVission/>}/>
          <Route  path='/ourCustomers' element={<OurCustomer/>}/>
          <Route  path='/whistleBlower' element={<WhistleBlower/>}/>


          <Route path='/contactus' element={<ContactUs/>}/>
          {/* Partners */}
          <Route path='/projectLocking' element={<ProjectLocking/>}/>
          <Route path='/requestDemo' element={<RequestDemo/>}/>
          <Route path='/becomePartner' element={<BecomePartner/>}/>
          <Route path='/requestTraining' element={<RequestTraining/>}/>

          {/* Support */}
          <Route path='/productSupport' element={<ProductSupport/>}/>
          <Route path='/supportTools' element={<SupportTools/>}/>
          <Route path='/productRegistration' element={<ProductRegistration/>}/>


          {/* Customers */}
          <Route path='/customers' element={<CustomersPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App