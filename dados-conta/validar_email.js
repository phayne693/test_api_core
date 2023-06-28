import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Validar Email', () => {

    let token_project
    before(async()=>{
        token_project = await tk_project()
    })

    let email = 'jefersonqueiroz2009@hotmail.com'

    it('GET users/email/{email}', () => {
        request.get(`users/email/${email}`).set('tk-project', token_project).then((res) => {
            console.log(res.body)
        })
    })

})