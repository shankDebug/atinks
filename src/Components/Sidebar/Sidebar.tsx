import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import SidebarItems from '../SidebarItems/SidebarItems';
import { RadioBoxProps } from "../../index";


const SidebarParent = styled.div`
  background: #ffffff;
  width: 250px;
  height: 100vh;
  margin: 30px 20px;
  border-radius: 5px;
`;
const SidebarItem = styled.div<RadioBoxProps>`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  //Change the background color if 'active' prop is received
  background: ${props => props.isActive ? "#b15b00" : ""};
  margin: 4px 12px;
  border-radius: 4px;
​
  p {
    color: white;
    font-weight: bold;
    text-decoration: none;
  }
​
  &:hover {
    cursor:pointer;
  }
​
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;



const Sidebar =(props:any,{defaultActive}:any)=> {
  // const navigate = useNavigate();

    const [activeIndex, ] = useState(defaultActive || 1);
        return (
            <>
              <SidebarParent>
                {
                    SidebarItems.map((item, index)=> {
                        return (
                            <a href={item.route}>
                                <SidebarItem key={item.name} isActive={index === activeIndex}>
                                    <p>{item.name}</p>
                                </SidebarItem>
                            </a>
                        );
                    })
                }
            </SidebarParent>
        </>
        );
}

export default Sidebar;