import { type ReactElement } from 'react'
import type React from 'react'

import styles from './Header.module.scss'
import classNames from 'classnames/bind'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { routes } from '../Routing'
import { Typography } from '@mui/material'
import ButtonWrapper from '../ButtonWrapper'
import { useAppDispatch } from '../../redux/hooks'
import { logOut } from '../../redux/features/authSlice'

const cx = classNames.bind(styles)

function Header(): ReactElement<React.FC> {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  return (
    <div className={cx('header__container')}>
      <div
        className={cx('header__link', {
          selected: location.pathname.includes('some_mad')
        })}
      >
        <Link to={'/users/some_mad'}>
          <Typography variant="body1">Моя страница</Typography>
        </Link>
      </div>
      <div
        className={cx('header__link', {
          selected:
            location.pathname.includes(routes.users) &&
            !location.pathname.includes('some_mad')
        })}
      >
        <Link to={routes.users}>
          <Typography variant="body1">Сотрудники</Typography>
        </Link>
      </div>
      <div
        className={cx('header__link', {
          selected: location.pathname.includes(routes.tasks)
        })}
      >
        <Link to={routes.tasks}>
          <Typography variant="body1">Задачи</Typography>
        </Link>
      </div>
      <ButtonWrapper
        sizing="s"
        color="secondary"
        text="Выйти"
        onClick={() => {
          dispatch(logOut())
          navigate(routes.login)
        }}
      />
    </div>
  )
}

export default Header
