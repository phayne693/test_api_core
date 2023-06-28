import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id, tax_id } from "../helpers/auth_simples.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Consultar CPF/CNPJ Fit', ()=>{

    let token_project
    let token_user
    let id_user
    let id_tax
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        id_tax = await tax_id()
        // console.log(token_project)
        // console.log(token_user)
    })

    let user = '37753732846'

    it('GET fitbank-account/accountDetails/${taxId}', ()=>{
        request.get(`fitbank-account/accountDetails/${user}`).set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })



})