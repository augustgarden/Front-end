import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function Header(){
    return(
        <div className='Header'>
            <nav>
                <a className="nav_logo" style={{fontWeight:"bold",fontSize:"36px"}}>
                    DeVin
                </a>
                <ul>
                    <li>프로젝트</li>
                    <li>스터디</li>
                    <li>Q&A</li>
                </ul>
                <div className="icon_wrapper">
                    <form>
                        <TextField
                        id="search-bar"
                        className="text"
                        label=""
                        variant="outlined"
                        placeholder="Search..."
                        size="small"
                        style={{width:"170px"}}
                        />
                        <IconButton type="submit" aria-label="search">
                        <SearchIcon style={{ fill: "gray" }} />
                        </IconButton>
                    </form>
                    <NotificationsNoneIcon className='nav_icon'/>
                    <AssignmentOutlinedIcon className='nav_icon'/>
                    <PersonOutlineOutlinedIcon className='nav_icon'/>
                </div>
            </nav>
        </div>
    );
}

export default Header