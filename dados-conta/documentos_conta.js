import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id, tax_id } from "../helpers/auth_simples.js";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Documentos Conta', () => {

    let token_project
    let token_user
    let id_user
    // let tax_Id
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        // tax_Id = await tax_id()
    })
    

    let data = {
        taxId : process.env.CPF_JE,
        document: 0
    }

    it('POST fitbank-account/getdocuments', () => {
        request.post('fitbank-account/getdocuments').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})