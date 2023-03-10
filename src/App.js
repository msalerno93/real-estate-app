import {Route, Routes} from 'react-router-dom'
import HomePage from '../src/routes/homepage/homepage.component'
import ContactUs from './routes/contact-us/contact-us.component';
import Footer from './routes/footer/footer.component';
import ListingsPage from './routes/listings-page/listings.component';
import Navbar from './routes/navbar/navbar.component';
import RealtorsPage from './routes/realtors-page/realtors.component';
import HomeShowpage from './routes/home-showpage/home-showpage.component';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/realtors" element={<RealtorsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path='/showings/:houseId' element={<HomeShowpage />}/>
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
