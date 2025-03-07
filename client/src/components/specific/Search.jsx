import { Dialog, DialogTitle, Stack, TextField, InputAdornment, List, ListItemText } from '@mui/material'
import React, { useState } from 'react'
import { useInputValidation } from '6pp'
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../../constants/sampleData'






const Search = () => {
    const search = useInputValidation("");

    let isLoadingSendFriendRequest = false;

    const [users,setUsers] = useState(sampleUsers);

    const addFriendHandler = () => {
      console.log(id);
    }


  return (
    <Dialog open>
      <Stack padding={"2rem"} direction={"column"} width={"25rem"}>

        <DialogTitle textAlign={"center"}>Find People</DialogTitle>
        <TextField
          label=""
          value={Search.value}
          onChange={Search.changeHandler}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}


        />


        <List>
          {
            users.map((i) => (

              <UserItem 
               user={i}
               key={i._id} 
               handler={addFriendHandler}
               handlerIsLoading={isLoadingSendFriendRequest}
               
               />


            ))}
            </List>


      </Stack>
    </Dialog>
  )
}

export default Search;