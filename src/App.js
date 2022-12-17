import './styles.css';
import React from 'react';
import Navbar from './Components/Navbar';
import SideBar from './Components/SideBar';
import Home from './Components/Home';
import Attendance from './Components/Attendance';
import Registration from './Components/Registration';
import ViewUser from './Components/ViewUser';
import EditUser from './Components/EditUser';
import AddUser from './Components/AddUser';
import Violations from './Components/Violations';
import GroupManagement from './Components/GroupManagement';
import SystemControl from './Components/SystemControl';
import RoleManagement from './Components/RoleManagement';
import PolicyEditor from './Components/PolicyEditor';
import ViolationDetails from './Components/ViolationDetails';
import AddPolicy from './Components/AddPolicy';
import EditPolicy from './Components/EditPolicy';
import ActivityControl from './Components/ActivityControl';
import PolicyControl from './Components/PolicyControl';
import LiveStream from './Components/LiveStream';
import PerformanceMonitoring from './Components/PerfomanceMonitoring';
import {
      BrowserRouter as Router,
      Routes,
      Route,
} from 'react-router-dom';

function App() {
      return (
            <Router>
                  <div className="App container-fluid-lg">
                        <div className='row m-0'>
                              <Navbar />
                        </div>
                        <div className='row m-0'>
                              <div className='col-2 p-2' >
                                    <SideBar />
                              </div>
                              <div className='col-10 p-2'>
                                    <Routes>
                                          <Route path="/" element={<Home />} />
                                          <Route path="/home" element={<Home />} />
                                          <Route path="/registration" element={<Registration />} />
                                          <Route path="/viewuser" element={<ViewUser />} />
                                          <Route path="/edituser" element={<EditUser />} />
                                          <Route path="/adduser" element={<AddUser />} />
                                          <Route path="/attendance" element={<Attendance />} />
                                          <Route path="/violations" element={<Violations />} />
                                          <Route path="/rolemanagement" element={<RoleManagement />} />
                                          <Route path="/groupmanagement" element={<GroupManagement />} />
                                          <Route path="/violationdetails" element={<ViolationDetails />} />
                                          <Route path="/addpolicy" element={<AddPolicy />} />
                                          <Route path="/editpolicy" element={<EditPolicy />} />
                                          <Route path="/policyeditor" element={<PolicyEditor />} />
                                          <Route path="/systemcontrol" element={<SystemControl />}>
                                                <Route index element={<ActivityControl />} />
                                                <Route path="activitycontrol" element={<ActivityControl />} />
                                                <Route path="policycontrol" element={<PolicyControl />} />
                                          </Route>
                                          <Route path="/livestream" element={<LiveStream />} />
                                          <Route path="/performancemonitoring" element={<PerformanceMonitoring />} />
                                    </Routes>
                              </div>
                        </div>
                  </div>
            </Router>

      );
}

export default App;
