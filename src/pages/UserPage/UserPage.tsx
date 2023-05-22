import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from './user.module.scss'
import classNames from 'classnames/bind'
import { Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  selectTasks,
  selectCompanyUsers,
  deleteUser
} from '../../redux/features/authSlice'
import { type ICompanyUser, type ITask } from '../../redux/appConfig'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ButtonWrapper from '../../components/ButtonWrapper'

const cx = classNames.bind(styles)

function UserPage(): ReactElement<React.FC> {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  console.log(id)

  const tasks = useAppSelector(selectTasks)
  const users = useAppSelector(selectCompanyUsers)
  console.log(tasks)

  const [userTasks, setUserTasks] = useState<ITask[]>([])
  const [user, setUser] = useState<ICompanyUser | null>(null)

  useEffect(() => {
    const userTasks = tasks.filter((task) =>
      location.pathname.includes('some_mad')
        ? task.userID === 1
        : task.userID === Number(id)
    )
    setUserTasks(userTasks)
    console.log(userTasks)
  }, [tasks])

  useEffect(() => {
    const userInfo = users.filter((user) =>
      location.pathname.includes('some_mad')
        ? user.id === 1
        : user.id === Number(id)
    )
    setUser(userInfo[0])
  }, [users])

  return (
    <div className={cx('user__container')}>
      <div className={cx('user__profile-photo')}>
        <div className={cx('user__profile-photo__image')}>
          <img alt="text" src={user?.image}></img>
        </div>
        <div className={cx('user__profile-photo__data')}>
          <div className={cx('user__profile-photo__data__option')}>
            <Typography variant="body1" color="#000">
              {user?.fio}
            </Typography>
          </div>
          <div className={cx('user__profile-photo__data__option')}>
            <Typography variant="body1" color="#000">
              {user?.date}
            </Typography>
          </div>
        </div>
        <div
          style={{
            marginTop: '25px'
          }}
        >
          <ButtonWrapper
            sizing="s"
            text="Удалить"
            color="error"
            onClick={() => {
              dispatch(deleteUser(user?.id))
              navigate(-1, { replace: true })
            }}
          />
        </div>
      </div>
      <div className={cx('user__profile-data')}>
        <div className={cx('user__profile-data__table')}>
          <Typography variant="h2">Задачи</Typography>
          {userTasks.map((task) => (
            <div key={task.id} className={cx('user__profile-data__task')}>
              <Link to={`/tasks/${task.id}`}>
                <Typography variant="body1" color="blue">
                  {task.title}
                </Typography>
              </Link>
              <Typography variant="body1" color="#000">
                {task.time}
              </Typography>
              <Typography variant="body1" color="#000">
                {task.status}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default UserPage
