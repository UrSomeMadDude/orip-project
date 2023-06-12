export interface ITask {
  id: number
  userID: number
  title: string
  time: string
  status: string
}

export interface ICompanyUser {
  id: number
  fio: string
  name: string
  date: string
  image: string
  tasks: ITask[]
}

export const tasks: ITask[] = [
  {
    id: 1,
    userID: 1,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 2,
    userID: 1,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 3,
    userID: 1,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 4,
    userID: 1,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 5,
    userID: 1,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 6,
    userID: 2,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 7,
    userID: 2,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 8,
    userID: 2,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 9,
    userID: 2,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 10,
    userID: 2,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 11,
    userID: 3,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 12,
    userID: 3,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 13,
    userID: 3,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 14,
    userID: 3,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 15,
    userID: 3,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 16,
    userID: 4,
    title: 'Почистить станок',
    time: '30 minutes',
    status: 'in proggress'
  },
  {
    id: 17,
    userID: 4,
    title: 'Почистить крышу',
    time: '1 hour',
    status: 'completed'
  },
  {
    id: 18,
    userID: 4,
    title: 'Почистить зубы',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 19,
    userID: 4,
    title: 'Почистить штаны',
    time: '30 minutes',
    status: 'not done'
  },
  {
    id: 20,
    userID: 4,
    title: 'Почистить кастрюли',
    time: '30 minutes',
    status: 'not done'
  }
]

export const users: ICompanyUser[] = [
  {
    id: 1,
    fio: 'Лысенко Игорь Дмитриевич',
    name: 'Igor',
    image:
      'https://sun9-49.userapi.com/impg/8Sqr66V_U9U_WPyZ_gaJGfniAQs8FYKeQDUE3A/_1bNFaJGf_o.jpg?size=683x1024&quality=95&sign=7535fe3db26ceb504b904f610102336e&type=album',
    date: '18.05.2003',
    tasks: tasks.filter((task) => task.userID === 1)
  },
  {
    id: 2,
    fio: 'Скопин Валентин Викторович',
    name: 'Valya',
    image:
      'https://sun9-29.userapi.com/impg/1CHkic6LZYiZPi6GQPwVghjhxwiyw3MILTo2Iw/S6JFTlPDLDQ.jpg?size=1090x1024&quality=95&sign=aa7f52287e013ddbee22f97cc5755c5e&type=album',
    date: '22.06.2003',
    tasks: tasks.filter((task) => task.userID === 2)
  },
  {
    id: 3,
    fio: 'Галенин Артем Константинович',
    image:
      'https://sun9-79.userapi.com/impg/HdFqShr7Cnn2EBrguhuElweKNHZGP6ps2RvyFA/5iyB0TO88dI.jpg?size=1080x1080&quality=95&sign=8522ccb9d04c5af1ca7c7dfca362b16b&type=album',
    name: 'Artem',
    date: '27.02.2003',
    tasks: tasks.filter((task) => task.userID === 3)
  },
  {
    id: 4,
    name: 'Sasha',
    image:
      'https://sun9-24.userapi.com/impg/sHpTixbOPujcTDzMPlWgyuBvIb3fSRV9e3l-3Q/LVutLrzQ750.jpg?size=600x654&quality=96&sign=0524f3d297f76851c349e0a71023f3f6&type=album',
    fio: 'Орлов Александр Леонидович',
    date: '15.11.2003',
    tasks: tasks.filter((task) => task.userID === 4)
  }
]
