import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user } from "../helpers/auth_simples.js";
import { user_id } from "../helpers/auth_simples.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Extrato Pix', () => {

    let token_project
    let token_user 
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
    })

    it('GET extracts/user/', () => {

        request.get(`extracts/user/${id_user}?pix=true`).set('tk-user', token_user).set('tk-project', token_project).then((res) => {
            console.log(res.body)
        })

    })


})