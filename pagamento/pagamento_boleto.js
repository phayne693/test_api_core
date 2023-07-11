import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id} from '../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Pagamento Boleto', () => {

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
    })

    let data = {}

    it('POST billets/payment', ()=>{
        request.post('billelts/payment').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res)=>{
            console.log(res.body)
        })
    })

})