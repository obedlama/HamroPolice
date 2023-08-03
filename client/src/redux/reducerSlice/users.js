import { createSlice } from "@reduxjs/toolkit";
<<<<<<< HEAD
export const initialState = {
   token:'',
   userDetails: {},
   isLoggedIn: false
=======

export const initialState = {
  token:'',
  userDetails: {},
  isLoggedIn: false
>>>>>>> d9460774f9f69c34ae1b41b8cfeec5ef3a82b3e5
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
<<<<<<< HEAD
             setUserDetails(state,actions) {
        
                const {token, userDetails} = actions.payload
                return{
                    ...state,
                    token,
                    userDetails,
                    isLoggedIn:true
                }
            

            },
    },
    })
=======
      setUserDetails(state, actions) {
      debugger;
      const {token, userDetails} =  actions.payload
      return {
        ...state,
        token,
        userDetails,
        isLoggedIn: true
      }
      },
    },
  })
>>>>>>> d9460774f9f69c34ae1b41b8cfeec5ef3a82b3e5

export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;