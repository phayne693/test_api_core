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
        console.log(id_user)
    })
    

    let data = {
        socialName: "Jeferson Queiroz",
        phone: "+5511971008973",
        email: "jefersonqueiroz2009@hotmail.com",
        salary: 100000,
        father: "Jair Lemes ",
        mother: "Maria Luciane Queiroz de Oliveira",
        birthCity: "São Paulo",
        birthState: "São Paulo",
        maritalStatus: 1,
        spouse: "",
        occupation: "Q.A Tester",
        nationality: "Brasileiro",
        gender: 0
    }

    it('PUT /users/${id_user}/update', () => {
        request.put(`/users/${id_user}/update`).set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})