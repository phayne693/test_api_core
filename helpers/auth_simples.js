import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

export const tk_user = async () =>{

    let token = await tk_project()

    let data = {
        email : process.env.LOGIN_JE,
        password: process.env.SENHA_JE
    }

    const res  = await request.post('oauth/users').set('tk-project', token).send(data);
    return res.body.data.token


}

export const user_id = async () => {


    let token = await tk_project()

    let data = {
        email : process.env.LOGIN_JE,
        password: process.env.SENHA_JE
    }

    const res  = await request.post('oauth/users').set('tk-project', token).send(data);
    return res.body.data.userId
}

export const tax_id = async () => {


    let token = await tk_project()

    let data = {
        email : process.env.LOGIN_JE,
        password: process.env.SENHA_JE
    }

    const res  = await request.post('oauth/users').set('tk-project', token).send(data);
    return res.body.data.dataAccount[0].taxId
}