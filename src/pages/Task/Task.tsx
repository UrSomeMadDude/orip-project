import { useEffect, type ReactElement, useState } from 'react'
import type React from 'react'
import styles from './Task.module.scss'
import classNames from 'classnames/bind'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import {
  addTaks,
  deleteTask,
  selectTasks,
  updateTask
} from '../../redux/features/authSlice'
import { type ITask } from '../../redux/appConfig'
import { useNavigate, useParams } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { TextField, Typography } from '@mui/material'
import Select from '../../components/Select'
import ButtonWrapper from '../../components/ButtonWrapper'

const cx = classNames.bind(styles)

function Task(type?: 'edit' | 'create'): ReactElement<React.FC> {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { id } = useParams()
  const tasks = useAppSelector(selectTasks)
  const [task, setTask] = useState<ITask | null>(null)

  useEffect(() => {
    if (tasks.length > 0) {
      const newTask = tasks.filter((task) => task.id === Number(id))
      setTask(newTask[0])
    }
  }, [tasks])

  const initialValues: ITask =
    type.type === 'create'
      ? {
          title: '',
          time: '',
          userID: '',
          status: ''
        }
      : {
          ...task
        }

  return (
    <div className={cx('task__container')}>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        onSubmit={(values: ITask) => {
          if (type.type === 'create') {
            dispatch(addTaks(values))
            navigate(-1)
          } else {
            dispatch(updateTask(values))
            navigate(-1, { replace: true })
          }
        }}
      >
        {({ values, submitForm }) => (
          <Form className={cx('task__form')}>
            <Field
              name="title"
              value={values.title}
              as={TextField}
              placeholder="Название"
            />
            <Field
              name="time"
              as={TextField}
              value={values.time}
              placeholder="Оцененное время"
            />
            <Field
              name="userID"
              as={TextField}
              value={values.userID}
              placeholder="ID пользователя"
            />
            <Field
              name="status"
              value={values.status}
              as={Select}
              label={
                <Typography variant="body1" color="#000">
                  {values.status}
                </Typography>
              }
              options={[
                {
                  label: 'in proggress',
                  value: 'in proggress'
                },
                {
                  label: 'to do',
                  value: 'to do'
                },
                {
                  label: 'completed',
                  value: 'completed'
                },
                {
                  label: 'paused',
                  value: 'paused'
                }
              ]}
            />
            <ButtonWrapper
              sizing="extended"
              text="Сохранить"
              onClick={() => {
                void submitForm()
              }}
            />
            <ButtonWrapper
              sizing="extended"
              text="Удалить"
              color="error"
              onClick={() => {
                dispatch(deleteTask(task?.id))
                navigate(-1, { replace: true })
              }}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Task
