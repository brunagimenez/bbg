import '../App.css';
import '../style/effectScroll.css';
import '../style/effectZoom.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Meeting from '../pages/Meeting';
import NotAccess from '../pages/NotAccess';
import Config from '../pages/Config';

export default function Routes() {
  return (
    <Switch>
      <Route path="/config" component={ Config } />
      <Route path="/not_premium" component={ NotAccess } />
      <Route path="/meeting" component={ Meeting } />
      <Route path="/login" component={ Login } />
      <Route exact path='/' component={ Home }/>
    </Switch>
  );
};
