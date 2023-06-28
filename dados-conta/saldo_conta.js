import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user } from "../helpers/auth_simples.js";
import { user_id } from "../helpers/auth_simples.js";


const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Saldo Conta', ()=>{

    let token_project
    let token_user
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await  user_id()
    })

    it('GET balances/user/{userId}', () =>{
        request.get(`balances/user/${id_user}`).then((res) =>{
            console.log(res.body)
        })
    })

})