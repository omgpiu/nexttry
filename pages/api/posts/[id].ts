import { NextApiRequest, NextApiResponse } from 'next';
import db from '../../../lib/db';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const id = await req.query.id
        const posts = await db.query<{ title: string, content: string, id: number }[]>('SELECT * FROM posts WHERE id=?', [id])
        await db.end()
        if (posts.length) return res.status(200).json(posts[0])
        res.status(404).json(null)

    }
}