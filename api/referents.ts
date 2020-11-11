import { NowRequest, NowResponse } from '@vercel/node'
import { pray } from '../utils/pray'

export default async function (req: NowRequest, res: NowResponse) {
  const { id, format = 'plain', per_page =  10, page = 1 } = req.query

  const axiosRes = await pray.get('referents',
    {
      params: {
        song_id: id,
        text_format: format,
        per_page,
        page
      }
    }
  )

  res.send(axiosRes.data)
}
