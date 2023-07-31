import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import {user_id, tax_id} from '../../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Cadastrar Modulos', () => {

    let token_project
    let token_user
    let data
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "access": "40",
            "active": true,
            "description": "Teste",
            "icon": "teste",
            "name": "@infinity/teste",
            "path": "https://dev.nbapp.dev.br/infinity-teste.js",
            "version": "1.0.0"
        }
    })

    it('POST cdn/create', () =>{
        request.post('cdn/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})