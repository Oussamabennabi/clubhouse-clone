import './App.css';
import WelcomePage from './Pages/WelcomePage';
import MainLayout from './Pages/Layouts/MainLayout'
import Invite from './Pages/Invite';
import ReciveCode from './Pages/ReciveCode';
import AllowNotifications from './Pages/AllowNotifications';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import Upcomming from './Pages/Upcomming';
import Activity from './Pages/Activity';
function App() {
  return (
    <>
      <MainLayout>
        <Routes>
          <Route  path="/" element={<WelcomePage />} />
          <Route  path='/invite' element={<Invite />} />
          <Route  path='/recive_code' element={<ReciveCode />} />
          <Route  path='/allow_notifications' element={<AllowNotifications />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path="/explore" element={<Explore />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/upcomming" element={<Upcomming />} />
          <Route exact path="/activity" element={<Activity />} />
        </Routes >
      </MainLayout>
    </>
  );
}

export default App;
