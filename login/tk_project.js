import supertest from "supertest";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1');


describe('Users', () => {

    it('POST /TK-PROJECT', () => {

        let data = {
            "secretKey":process.env.SECRET_KEY,
            "boundId": process.env.BOUND_ID
        }

        request.post(`/oauth/projects`).send(data).end((err,res) => {
            // console.log(err)
            console.log(res.body.data.token)
        })
    })

})