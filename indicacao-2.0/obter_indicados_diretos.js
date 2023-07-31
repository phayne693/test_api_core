import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';
import {tk_user} from '../helpers/auth_simples.js'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Buscar Indicados Diretos', () => {

    let token_project
    let token_user
    before(async() => {
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    it('GET users/indicationCode/lucas.belemel0', () =>{
        request.get('users/indicationCode/lucas.belemel0').set('tk-project', token_project).set('tk-user', token_user).then((res) => {
            console.log(res.body)
        })
    })
})