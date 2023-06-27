import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

export const tk_user = async () =>{

    let token = await tk_project()

    let data = {
        email : 'jefersonqueiroz2009@hotmail.com',
        password: '159159'
    }

    const res  = await request.post('oauth/users').set('tk-project', token).send(data);
    return res.body.data.token


}

export const user_id = async () => {


    let token = await tk_project()

    let data = {
        email : 'jefersonqueiroz2009@hotmail.com',
        password: '159159'
    }

    const res  = await request.post('oauth/users').set('tk-project', token).send(data);
    return res.body.data.userId
}
