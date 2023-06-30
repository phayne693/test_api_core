import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user } from "../helpers/auth_simples.js";
import { user_id } from "../helpers/auth_simples.js";
import { company_id } from "../helpers/obter_companyId.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Enviar Conta FIT', ()=> {

    let token_project
    let token_user
    let id_user
    let id_company
    let data
    before(async()=>{
        // id_company = await company_id() 
        // id_user = await user_id()
        token_project = await tk_project()
        token_user = await tk_user()
        // console.log(token_project)
        // console.log(token_user)
        // console.log(id_user)
        // console.log(id_company)
        data = {
            "filterCompany" : id_company = await company_id(),
            "userId": id_user = await user_id()
        }
    })
    // console.log(id_company)


    console.log(data)

    it('POST onboarding/createFitbankAccount', () => {
        request.post('onboarding/createFitbankAccount').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})