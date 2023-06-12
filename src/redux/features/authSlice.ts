import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { type RootState } from '../store'
import { type ICompanyUser, type ITask, tasks, users } from '../appConfig'

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
  tasks: ITask[]
  companyUsers: ICompanyUser[]
  currentTaskID: number
  currentUserID: number
}

const initialState: AuthState = {
  users: [],
  error: null,
  success: false,
  loggedIn: false,
  tasks,
  companyUsers: users,
  currentTaskID: tasks.length,
  currentUserID: users.length
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
    },
    logOut: () => {
      localStorage.clear()
      return initialState
    },

    addTaks: (state: AuthState, action: PayloadAction<ITask>) => {
      state.tasks.push({ ...action.payload, id: state.currentTaskID + 1 })
      state.currentTaskID += 1
    },
    addUser: (state: AuthState, action: PayloadAction<ICompanyUser>) => {
      state.companyUsers.push({
        ...action.payload,
        id: state.currentUserID + 1
      })
      state.currentUserID += 1
    },
    deleteTask: (
      state: AuthState,
      action: PayloadAction<number | undefined>
    ) => {
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload)
      }
    },
    deleteUser: (
      state: AuthState,
      action: PayloadAction<number | undefined>
    ) => {
      return {
        ...state,
        companyUsers: state.companyUsers.filter(
          (user) => user.id !== action.payload
        )
      }
    },
    updateTask: (state: AuthState, action: PayloadAction<ITask>) => {
      const currentTask = state.tasks.filter(
        (task) => task.id === action.payload.id
      )
      currentTask[0] = action.payload
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === currentTask[0].id) {
            task = currentTask[0]
          }
          return task
        })
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
  setLoggedIn,
  logOut,
  addTaks,
  addUser,
  deleteTask,
  deleteUser,
  updateTask
} = authSlice.actions

export const selectError = (state: RootState): string | null => state.auth.error
export const selectIsSuccess = (state: RootState): boolean => state.auth.success
export const selectUsers = (state: RootState): IUser[] => state.auth.users
export const selectIsLogged = (state: RootState): boolean => state.auth.loggedIn

export const selectCompanyUsers = (state: RootState): ICompanyUser[] =>
  state.auth.companyUsers

export const selectTasks = (state: RootState): ITask[] => state.auth.tasks

export default authSlice.reducer
