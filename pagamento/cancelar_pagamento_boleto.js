import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Cancelar Pagamento Boleto', () =>{

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    let data = {
        document: 101799
    }

    it('POST billets/cancel', ()=>{
        request.post('billets/cancel').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})
