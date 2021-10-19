import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Appointment/Appointment';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Service from './Components/Service/Service';
import Singup from './Components/Singup/Singup';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/singup">
              <Singup></Singup>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute exact path = "/service/:serviceId">
                <Service></Service>
            </PrivateRoute>
            <PrivateRoute exact path="/blogs">
              <Blog></Blog>
            </PrivateRoute>
            <PrivateRoute exact path='/appoinment'>
              <Appointment></Appointment>
            </PrivateRoute>
            <Route exact path="*">
              <PageNotFound></PageNotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;