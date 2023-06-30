import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user } from "../helpers/auth_simples.js";
import { user_id } from "../helpers/auth_simples.js";


const request = supertest('https://api.norwaydigital.com.br/prod/v1/')


export const company_id = async()=>{

    let token_project = await tk_project()
    let token_user = await tk_user()
    let id_user = await  user_id()


    const res  = await request.get(`users/${id_user}`).set('tk-project', token_project).set('tk-user', token_user)
    return res.body.data.companyId
    

}
    
