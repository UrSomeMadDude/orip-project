import { type ReactElement } from 'react'
import type React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import UsersListPage from '../pages/UsersList/UsersListPage'
import UserPage from '../pages/UserPage/UserPage'
import ProtectedRoutes from './ProtectedRoutes'
import Tasks from '../pages/Tasks/Tasks'
import Task from '../pages/Task/Task'

export const routes = {
  base: '/',
  login: '/login/',
  register: '/register/',
  users: '/users/',
  user: '/users/:id',
  mainUser: '/users/some_mad',
  tasks: '/tasks',
  task: '/tasks/:id',
  createTask: '/tasks/create',
  any: '*'
}

function Routing(): ReactElement<React.FC> {
  return (
    <Routes>
      <Route path={routes.base} element={<ProtectedRoutes />}>
        <Route
          path={routes.base}
          element={<Navigate to={'/users/some_mad'} />}
        />
        <Route path={routes.users} element={<UsersListPage />} />
        <Route path={routes.mainUser} element={<UserPage />} />
        <Route path={routes.user} element={<UserPage />} />
        <Route path={routes.tasks} element={<Tasks />} />
        <Route path={routes.task} element={<Task />} />
        <Route path={routes.createTask} element={<Task type="create" />} />
      </Route>
      <Route path={routes.login} element={<LoginPage />} />
      <Route path={routes.any} element={<Navigate to={routes.login} />} />
      <Route path={routes.register} element={<RegisterPage />} />
    </Routes>
  )
}

export default Routing
