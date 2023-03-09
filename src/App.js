import {Route, Routes} from 'react-router-dom'
import HomePage from '../src/routes/homepage/homepage.component'
import ContactUs from './routes/contact-us/contact-us.component';
import ListingsPage from './routes/listings-page/listings.component';
import Navbar from './routes/navbar/navbar.component';
import RealtorsPage from './routes/realtors-page/realtors.component';


function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/listings" element={<ListingsPage />} />
          <Route path="/realtors" element={<RealtorsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
    </div>
  );
}

export default App;
