import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { user_id } from "../helpers/auth_simples.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Login', () => {

    let token
    before(async()=>{
        token = await tk_project()
        // console.log(token)
    })


    it('POST oauth/users', ()=>{

        let data = {
            email: 'jefersonqueiroz2009@hotmail.com',
            password: '159159'
        }

        request.post('oauth/users').set('tk-project', token).send(data).then((res) => {
            console.log(res.body.data.token)
        })
    })
})