import {Switch, Route} from 'react-router-dom';


import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
 
export default function Routes(){
    return(
        <Switch>
            
<Route exact path="/" component={SingIn}/>
<Route exact path="/register" component={SingUp}/>
        </Switch>
    )
}