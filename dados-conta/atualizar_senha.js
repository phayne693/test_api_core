import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id, tax_id } from "../helpers/auth_simples.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Atualizar Senha', () => {

    let token_project
    let token_user
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        // console.log(token_project)
        // console.log(token_user)
        // console.log(id_user)
    })    

    let data = {
        oldPassword: "159159",
        newPassword: "159159"
    }

    it('PUT users/${id_user}/password/update', () => {
        request.put(`users/${id_user}/password/update`).set('tk-project', token_project).set('tk-user', token_user).send(data).then((res)=>{
            console.log(res.body)
        })
    })


})