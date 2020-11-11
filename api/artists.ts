import { NowRequest, NowResponse } from '@vercel/node'
import { pray } from '../utils/pray'

export default async function (req: NowRequest, res: NowResponse) {
  const { id, format = 'plain' } = req.query

  const axiosRes = await pray.get(`artists/${id}`, {
    params: {
      text_format: format
    }
  })

  res.send(axiosRes.data)
}
