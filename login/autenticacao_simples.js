import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { user_id } from "../helpers/auth_simples.js";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Login', () => {

    let token
    before(async()=>{
        token = await tk_project()
        // console.log(token)
    })


    it('POST oauth/users', ()=>{

        let data = {
            email: process.env.LOGIN_JE,
            password: process.env.SENHA_JE
        }

        request.post('oauth/users').set('tk-project', token).send(data).then((res) => {
            console.log(res.body.data)
        })
    })
})