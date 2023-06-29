import supertest from "supertest";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1');


export const tk_project = async () => {

    let data = {
        "secretKey":process.env.SECRET_KEY,
        "boundId": process.env.BOUND_ID
    }

    const res = await request.post('/oauth/projects').send(data)
    return res.body.data.token

}
