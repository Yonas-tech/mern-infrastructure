import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

// &nbsp - stands for non-breaking space, meaning that strings separated with this entity will not be separated and put into separate lines

export default function NavBar({user, setUser}) {

  function handleLogOut() {
    userService.logOut()
    // Update state will also cause a re-render
    setUser(null)
  }

  return (
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;   
        <Link to="/orders/new">New Order</Link>
        &nbsp;
        <span>Welecome, {user.name}</span>
        &nbsp; | &nbsp; 
        <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  )
}

