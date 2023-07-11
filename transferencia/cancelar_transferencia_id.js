import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {tef_id} from '../helpers/tef_id.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Cancelar Transferencia ID', ()=>{

    let token_project 
    let token_user
    let id
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id = await tef_id()
        console.log(token_project)
        console.log(token_user)
        console.log(id)
    })

    it('GET tefs/cancel/${tefId}', ()=>{
        request.get(`tefs/cancel/${id}`).set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })

})