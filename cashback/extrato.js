import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {tax_id} from '../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Extrato Cashback', () => {


    let token_project
    let token_user
    let data
    let id_tax
    before(async()=>{

        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            taxId: id_tax = await tax_id()
        }

    })

    it('POST cashback', ()=>{
        request.post('cashback').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})