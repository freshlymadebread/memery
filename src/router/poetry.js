
import Poetry from '@/page/poetry/poetry'

export default  
{
  path: 'poetry',
  name: 'Poetry',
  component: Poetry,
  meta:{
    requiresAuth: true,
    name:' 诗歌'
  },
  children:[
  ]
}