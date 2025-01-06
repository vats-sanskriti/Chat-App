import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import { orange } from '../../constants/color'
import React, { lazy, Suspense, useState } from 'react';
import {Add as AddIcon, Menu as MenuIcon , Search as SearchIcon , Group as GroupIcon,Logout as LogoutIcon, 
  Notifications as NotificationsIcon} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';


const SearchDialog = lazy(() => import('../specific/Search'));
const NewGroupDialog = lazy(() => import('../specific/NewGroup'));
const NotificationDialog = lazy(() => import('../specific/Notifications'));
const Header = () => {

  const naviate = useNavigate();

  const[isMobile, setIsMobile] = useState(false);
  const[isSearch , setIsSearch] = useState(false);
  const[isNewGroup , setIsNewGroup] = useState(false);
  const[isNotification   , setIsNotification] = useState(false);
      // readable , writable


  const handleMobile = () => {
    setIsMobile(prev => !prev);
  };

  const openSearch = () => {
    setIsSearch(prev => !prev);   
  };
  const openNewGroup = () => {
    setIsNewGroup(prev => !prev);
  };

  const openNotification = () => {
    setIsNotification(prev => !prev);
  };

  const navigateToGroup = () => naviate("/groups");

  const logoutHandler = () => {
    console.log("Logout");
  };
  

  return (
    <>  
    
    <Box sx = {{flexGrow: 1}} height ={"4rem"}>
        <AppBar position = "static" sx={{
            bgcolor: orange,
        }} 
    >
          <Toolbar>
            <Typography
              variant='h6'
              sx={{
                display: { xs: "none", sm: "block" },
              }}     
              >  
                Chattu

            </Typography>
        
  <Box sx={{
                display: { xs: "block", sm: "none" },
              }}   >  

                <IconButton color = "inherit" onClick={handleMobile}> 
                  <MenuIcon/>
                  
                  
                   </IconButton>


              </Box>

      <Box sx = {{
        flexGrow:1,
      }} />

    <Box>
      <IconBtn title = "Search" icon = {<SearchIcon/>} onClick={openSearch} />
      <IconBtn title = "New Group" icon = {<AddIcon/>} onClick={openNewGroup} />
      <IconBtn title = "Manage Groups" icon = {<GroupIcon/>} onClick={navigateToGroup} /> 
      <IconBtn title = "Notification" icon = {<NotificationsIcon/>} onClick={openNotification} />
      <IconBtn title = "logout" icon = {<LogoutIcon />} onClick={logoutHandler} />

    </Box>

           </Toolbar>

        </AppBar>
        
        
   </Box>

      {isSearch && <Suspense fallback={<Backdrop open={true} />}>
      <SearchDialog />
      </Suspense>}

      {isNotification  && <Suspense fallback={<Backdrop open={true} />}>
      <NotificationDialog />
      </Suspense>}

      {isNewGroup && <Suspense fallback={<Backdrop open={true} />}>
      <NewGroupDialog />
      </Suspense>}





    </>
  );
};

const IconBtn= ({ title ,icon, onClick}) => {
  return (
    <Tooltip title = {title}>
    <IconButton color = "inherit" size = "large" onClick={onClick}> 
      {icon}            
    </IconButton>
    </Tooltip>
  )

}

export default Header