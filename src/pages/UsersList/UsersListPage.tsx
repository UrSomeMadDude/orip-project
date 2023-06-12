import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from './UsersList.module.scss'
import classNames from 'classnames/bind'
import { TextField, Typography } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  addTaks,
  addUser,
  selectCompanyUsers
} from '../../redux/features/authSlice'
import { type ICompanyUser } from '../../redux/appConfig'
import DataGridDemo from '../../components/DataTable'
import { Field, Form, Formik } from 'formik'
import ButtonWrapper from '../../components/ButtonWrapper'

const cx = classNames.bind(styles)

function UsersListPage(): ReactElement<React.FC> {
  const users = useAppSelector(selectCompanyUsers)
  const [rows, setRows] = useState<ICompanyUser[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const newRows = users.map((user) => {
      return {
        ...user,
        task: user.tasks.length
      }
    })
    setRows(newRows)
  }, [users])

  const initialValues = {
    fio: '',
    name: '',
    date: '',
    tasks: 0
  }

  return (
    <>
      <div className={cx('userslist__container')}>
        <div className={cx('userslist__title')}>
          <Typography variant="h2">Сотрудники</Typography>
        </div>
        <div className={cx('userslist__table')}>
          <DataGridDemo type="user" rows={rows} />
        </div>
      </div>

      <Formik
        onSubmit={(values) => {
          dispatch(addUser(values))
        }}
        initialValues={initialValues}
        enableReinitialize
      >
        {({ submitForm, resetForm }) => (
          <Form className={cx('userslist__form')}>
            <Field name="fio" as={TextField} placeholder="Имя" />
            <Field name="date" as={TextField} placeholder="Дата рождения" />
            <ButtonWrapper
              text="Сохранить"
              sizing="xs"
              onClick={() => {
                submitForm()
              }}
            />
            <ButtonWrapper
              text="Сбросить"
              sizing="xs"
              onClick={() => {
                resetForm()
              }}
            />
          </Form>
        )}
      </Formik>
    </>
  )
}

export default UsersListPage
