import { NextApiRequest, NextApiResponse } from 'next';
import { getPostById } from '../../../lib/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const id = typeof req.query.id === 'string' ? parseInt(req.query.id, 10) : undefined
        const post = id ? await getPostById(id) : undefined
        if (post) return res.status(200).json(post)
        res.status(404).json(null)

    }
}