import React, {useState, useEffect, Component} from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import NavBar from './components/NavBar'
import Profile from './components/Profile';
import RestaurantContainer from './components/RestaurantContainer';
import RestaurantPage from './components/RestaurantPage'
import WorkerPage from './components/WorkerPage'
import About from './components/About'

function App() {
  const history = useHistory()
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([]);
  const [restaurants, setRestaurants] = useState([])

  // fetch("/me").then((r) => {
  //   if (r.ok) {
  //     r.json().then((user) => {
  //       setUser(user)
  //     });
  //   }
  // });

  useEffect(() => {

    const getUsers = async () => {
      const response = await fetch("/me")
      const data = await response.json()
      if(response.ok) {
        setUser(data)
      } else {
        console.log(data.errors)
      } 
    }
  
    getUsers()

    fetch("/restaurants")
    .then((r) => r.json())
    .then((data) => setRestaurants(data))

  }, []);

  function handleLogout() {
    fetch("/logout", {
      method: "DELETE" })
    .then((r) => {
      if (r.ok) {
        setUser(null);
        history.push("/restaurants")
      }
    });
  }

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} handleLogout={handleLogout} errors={errors} setErrors={setErrors}/>
      <Switch>
        <Route exact path='/restaurants'>
          <RestaurantContainer restaurants={restaurants}/>
        </Route>
        <Route exact path="/restaurants/:id">
          <RestaurantPage user={user} errors={errors} setErrors={setErrors}/>
        </Route>
        <Route exact path="/workers/:id">
          <WorkerPage user={user} errors={errors} setErrors={setErrors}/>
        </Route>
        <Route exact path='/profile'>
          <Profile user={user}/>
        </Route>

        <Route exact path='/about'>
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
