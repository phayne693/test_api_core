import {tk_project} from '../helpers/token_project.js'
import {tk_user, user_id} from '../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Consulta Codigo de Barras', () => {

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
    })

    let data = {
        Barcode: "23793381286008612154278000063301491270000002000"
    }

    it('POST billets/barcode', () => {
        request.post('billets/barcode').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})