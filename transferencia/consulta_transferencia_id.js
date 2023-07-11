import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {tef_id} from '../helpers/tef_id.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Consulta Transferencia ID', ()=>{

    let token_project 
    let token_user
    let id
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id = await tef_id()
        console.log(token_project)
        console.log(id)
    })

    it('GET tefs/tefId/${tefId}', ()=>{
        request.get(`tefs/tefId/${id}`).set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })

})