// import React, { Component } from 'react'
// import { ProSidebar, Menu, MenuItem, SubMenu ,SidebarHeader,SidebarFooter,SidebarContent } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css';
// import WcIcon from '@material-ui/icons/Wc';
// import '../styles/Header.css'
// import { FcBusinessman,FcBusinesswoman, } from "react-icons/fc";


// export function renderComponent() {
//         return (
//             <div>
//                 <ProSidebar className="background" >
//                     <Menu iconShape="square" >
//                         <SubMenu title="GENDER" icon={<WcIcon />}>
//                             <MenuItem icon={<FcBusinessman  />}>MEN</MenuItem>
//                             <MenuItem icon={<FcBusinesswoman  />}>WOMEN</MenuItem>
//                             <MenuItem >CHILD</MenuItem>
//                             <MenuItem >BOY</MenuItem>
//                             <MenuItem >GIRL</MenuItem>
//                         </SubMenu>
//                         <SubMenu title="CATAGORIES" >
//                         <MenuItem >SHIRTS</MenuItem>
//                             <MenuItem icon={<FcBusinesswoman  />}>JEANS</MenuItem>
//                             <MenuItem >T-SHIRT</MenuItem>
//                             <MenuItem >SHORT</MenuItem>
//                             <MenuItem >GIRL</MenuItem>
//                         </SubMenu>
//                     </Menu>
//                 </ProSidebar>;
//             </div>
//         )
//     }


// export default renderComponent

import React from "react";
import Sidebar from "react-sidebar";
 
class renderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: true
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
 
  render() {
    return (
      <Sidebar
        sidebar={<b>Sidebar content</b>}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
        styles={{ sidebar: { background: "white" } }}
      >
        <button onClick={() => this.onSetSidebarOpen(true)}>
          Open sidebar
        </button>
      </Sidebar>
    );
  }
}
 
export default renderComponent;