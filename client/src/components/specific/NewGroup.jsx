import React from 'react'
import { useState } from 'react';
import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, TextField, Typography } from '@mui/material';
import UserItem from '../shared/UserItem';
import { sampleUsers } from '../../constants/sampleData';
import { useInputValidation } from '6pp';

const NewGroup = () => {

  const groupName = useInputValidation('');
  const [members,setMembers]=useState(sampleUsers);
  const [selectedMembers,setSelectedMembers]=useState([]);
  
  const selectMemberHandler = (id) => {
   
    setSelectedMembers((prev)=>
      prev.includes(id)?prev.filter((currElement)=>currElement!=id):[...prev,id]);
  };
  const submitHandler =()=>{};
  const closeHandler =()=>{};
  return (
    <Dialog open onClose={closeHandler}>
    <Stack p ={{xs:"1rem",sm:"2rem"}} width={"25rem"} spacing={"1rem"}>
      <DialogTitle textAlign={"center"} variant='h5'>New Group</DialogTitle>

      <TextField label= "Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
      <Typography variant='body1' >Members</Typography>

      <Stack>
      {
              members.map((i) => (
      
                    <UserItem 
                     user={i}
                     key={i._id} 
                     handler={selectMemberHandler}
                      isAdded={selectedMembers.includes(i._id)}
                     
                     />
      
      
                  ))}
      </Stack>

      <Stack direction ={"row"} justifyContent={"space-evenly"}>
        <Button variant='text' color='error' size="large  ">
          Cancel</Button>
        <Button variant='contained' size='large' onClick={submitHandler}>
          Create </Button>

      </Stack>

      
   

    </Stack>
  </Dialog>
  )
}

export default NewGroup