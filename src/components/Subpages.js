import React from "react";
import {Link, Outlet} from 'react-router-dom'

function Subpages(props){
    return(
        <div>
            <ul>
                <li>
                    <Link to="/subpages/1">서브페이지1</Link>
                    <Link to="/subpages/2">서브페이지2</Link>
                    <Link to="/subpages/3">서브페이지3</Link>
                </li>
            </ul>
            <Outlet></Outlet>
        </div>
    )
}

export default Subpages;