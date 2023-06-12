import type React from 'react'
import type { ReactElement } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, type GridColDef } from '@mui/x-data-grid'
import { type ICompanyUser } from '../redux/appConfig'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const UserColumns: GridColDef[] = [
  {
    field: 'id',
    flex: 0.1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ID
      </Typography>
    ),
    renderCell: ({ row }) => (
      <Link to={`/users/${row.id}`}>
        <Typography variant="body1" color="#000">
          {row.id}
        </Typography>
      </Link>
    )
  },
  {
    field: 'fio',
    flex: 0.4,
    headerAlign: 'center',
    align: 'center',
    editable: true,
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ФИО
      </Typography>
    ),
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.fio}
      </Typography>
    )
  },
  {
    field: 'date',
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Дата рождения{' '}
      </Typography>
    ),
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.date}
      </Typography>
    )
  },
  {
    field: 'tasks',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Количество задач
      </Typography>
    ),
    type: 'number',
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.tasks.length}
      </Typography>
    )
  }
]

const TaskColumns: GridColDef[] = [
  {
    field: 'id',
    flex: 0.1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ID
      </Typography>
    ),
    renderCell: ({ row }) => (
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      <Link to={`/tasks/${row.id}`}>
        <Typography variant="body1" color="#000">
          {row.id}
        </Typography>
      </Link>
    )
  },
  {
    field: 'userID',
    flex: 0.1,
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        ID сотрудника
      </Typography>
    ),
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.userID}
      </Typography>
    )
  },
  {
    field: 'title',
    flex: 0.4,
    headerAlign: 'center',
    align: 'center',
    editable: true,
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Название
      </Typography>
    ),
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.title}
      </Typography>
    )
  },
  {
    field: 'time',
    headerAlign: 'center',
    align: 'center',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Оцененное время
      </Typography>
    ),
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.time}
      </Typography>
    )
  },
  {
    field: 'status',
    renderHeader: () => (
      <Typography variant="body1" color="#000">
        Статус
      </Typography>
    ),
    headerAlign: 'center',
    align: 'center',
    flex: 0.25,
    renderCell: ({ row }) => (
      <Typography variant="body1" color="#000">
        {row.status}
      </Typography>
    )
  }
]

interface DataTableProps {
  columns?: any[]
  rows: ICompanyUser[] | null
  type: 'user' | 'task'
}

export default function DataGridDemo(
  props: DataTableProps
): ReactElement<React.FC> {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        hideFooter
        rows={props.rows}
        columns={props.type === 'user' ? UserColumns : TaskColumns}
        disableRowSelectionOnClick
      />
    </Box>
  )
}
