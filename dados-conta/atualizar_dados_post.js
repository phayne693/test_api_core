import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id, tax_id } from "../helpers/auth_simples.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Atualizar Dados', () => {

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
        taxId : "43996081880",
        name:"Jeferson Queiroz Lemes",
        phone: "11940677064",
        renda: "5000.00"
    }

    it('POST fitbank-account/update', () => {
        request.post('fitbank-account/update').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})