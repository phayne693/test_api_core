import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id} from '../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Consulta Pagamento ID', ()=>{

    let token_project 
    let token_user
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        // console.log(token_project)
        // console.log(token_user)
        // console.log(id_user)
    })

    it('GET payments/${user_id}', ()=>{
        request.get(`payments/${id_user}`).set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })

})