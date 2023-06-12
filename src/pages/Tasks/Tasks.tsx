import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from '../UsersList/UsersList.module.scss'
import classNames from 'classnames/bind'
import { Typography } from '@mui/material'
import { useAppSelector } from '../../redux/hooks'
import { selectTasks } from '../../redux/features/authSlice'
import { type ITask } from '../../redux/appConfig'
import DataGridDemo from '../../components/DataTable'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function Tasks(): ReactElement<React.FC> {
  const tasks = useAppSelector(selectTasks)
  const [rows, setRows] = useState<ITask[]>([])

  useEffect(() => {
    const newRows = tasks.map((task) => {
      return {
        ...task
      }
    })
    setRows(newRows)
  }, [tasks])

  return (
    <div className={cx('userslist__container')}>
      <div className={cx('userslist__title')}>
        <Typography variant="h2">Задачи</Typography>
      </div>
      <Link to="/tasks/create">
        <Typography variant="h6" color="#000">
          Создать
        </Typography>
      </Link>
      <div className={cx('userslist__table')}>
        <DataGridDemo type="task" rows={rows} />
      </div>
    </div>
  )
}

export default Tasks
