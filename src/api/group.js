import request from '@/utils/request'

export const get_list = () => {
   return request.post('/api/group/list', {})
}