import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';
import {tk_user} from '../helpers/auth_simples.js'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Gerar Saque', () => {

    let token_project
    let token_user
    before(async() => {
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })
    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "taxId": "36114337808",
          "value": 50
      }

    it('POST saque/create', () =>{
        request.post('saque/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })
})