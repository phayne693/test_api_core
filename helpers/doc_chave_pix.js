import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id} from '../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


export const doc_chave_pix = async () => {

    let token_project = await tk_project()
    let token_user = await tk_user()
    let id_user = await user_id()

    await new Promise((r) =>setTimeout(r, 1500))
    const res = await request.get(`pix/listachave/${id_user}`).set('tk-project', token_project).set('tk-user', token_user)
    const teste = res.body[0].DocumentNumber
    return teste
}
    