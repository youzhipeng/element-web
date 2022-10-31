import axios from 'axios'

interface Props {
  url: string
  method: string
  header: string
  data: any
}
const request: any = axios.create()

export default request
