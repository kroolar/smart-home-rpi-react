import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import Devices from './pages/devices'
import DevicesNew from './pages/devices/new'
import Rooms from './pages/rooms'
import NewRoom from './pages/rooms/new'

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/devices">
        <Devices />
      </Route>

      <Route exact path="/devices/new">
        <DevicesNew />
      </Route>

      <Route exact path="/rooms">
        <Rooms />
      </Route>

      <Route exact path="/rooms/new">
        <NewRoom />
      </Route>
    </Switch>
  </div>
)

export default Routes
