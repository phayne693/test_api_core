import {tk_project} from '../../helpers/token_project.js'
import {tk_user, tax_id} from '../../helpers/auth_simples.js'
import {user_id} from '../../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Listar Chaves Pix', () => {

    let token_project
    let token_user
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        console.log(token_project)
        console.log(token_user)
    })


    it('GET pix/listachave/user_id', () => {
        request.get(`pix/listachave/${id_user}`).set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })

})