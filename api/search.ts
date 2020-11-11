import { NowRequest, NowResponse } from '@vercel/node'
import { pray } from '../utils/pray'

export default async function (req: NowRequest, res: NowResponse) {
  const { q } = req.query

  const axiosRes = await pray.get('search', {
    params: {
      q
    }
  })

  res.send(axiosRes.data)
}
