import React from 'react'
import { Link } from 'react-router-dom';

// &nbsp - stands for non-breaking space, meaning that strings separated with this entity will not be separated and put into separate lines

export default function NavBar() {
  return (
    <nav>
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;   
        <Link to="/orders/new">New Order</Link>

    </nav>
  )
}
