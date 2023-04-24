import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface IUser {
  fullName: string
  login: string
  password: string
  role: string
  company: string
  position: string
}

interface AuthState {
  error: string | null
  users: IUser[]
  success: boolean
  loggedIn: boolean
}

const initialState: AuthState = {
  users: [],
  error: null,
  success: false,
  loggedIn: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    resetSuccess: (state: AuthState) => {
      state.success = false
    },
    setLoggedIn: (state: AuthState) => {
      state.loggedIn = true
    },
    resetLoggedIn: (state: AuthState) => {
      state.loggedIn = false
    },
    resetError: (state: AuthState) => {
      state.error = null
    },
    registerUser: (state: AuthState, action: PayloadAction<IUser>) => {
      let exists = false
      state.users.forEach((user) => {
        if (user.login === action.payload.login) {
          state.error = 'Логин пользователя должен быть уникальным!'
          exists = true
        }
      })
      if (!exists) {
        state.users.push(action.payload)
        state.success = true
      }
    },
    logIn: (state: AuthState, action) => {
      let exists = false
      state.users.forEach((user) => {
        if (user.login === action.payload.login) {
          state.loggedIn = true
          exists = true
          localStorage.setItem('user', JSON.stringify(action.payload))
        }
      })
      if (!exists) {
        state.error = 'Пользователь не зарегистрирован'
      }
    }
  }
})

export const {
  registerUser,
  logIn,
  resetSuccess,
  resetError,
  resetLoggedIn,
  setLoggedIn
} = authSlice.actions

export const selectError = (state: RootState) => state.auth.error
export const selectIsSuccess = (state: RootState) => state.auth.success
export const selectUsers = (state: RootState) => state.auth.users
export const selectIsLogged = (state: RootState) => state.auth.loggedIn

export default authSlice.reducer
