import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: [],
    reducers: {
        updateUser: (state, action) => {
            const { name, login, followers, public_repos, avatar_url } = action.payload;
            return {
                ...state.user,
                name,
                username: login,
                followers,
                public_repos,
                image: avatar_url
            }
        }
    }
})

export const { updateUser } = userSlice.actions
export default userSlice.reducer