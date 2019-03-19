import React from 'react';
import Aux from '../../hoc/Aux'
import './Layout.css';
import Toolbar from '../Nav/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div> ToolBar, SideDrawer, BackDrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>

);
   
export default layout