import mysql from 'serverless-mysql'
import { NextApiRequest, NextApiResponse } from 'next';

const db = mysql({
    config:{
        host:process.env.MYSQL_HOST,
        database:process.env.MYSQL_DATABASE,
        user: process.env.MYSQL_USER,
        password:process.env.MYSQL_PASSWORD
    }
})

export default async function  handler(req: NextApiRequest, res: NextApiResponse) {
    const posts = await db.query('SELECT * FROM posts');
    await db.end()
    res.status(200).json(posts)
}
