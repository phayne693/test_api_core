import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';
import {tk_user} from '../helpers/auth_simples.js'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Ler Saque', () => {

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
          "document": "1365",
          "nsu": "6d2f41bc-f961-4c1f-9336-2b55362567d3",
          "hash": "Banco24Horas/SaqueDigital/v2/0013e177-499f-4f65-916e-a8dfec53e2bb/3d9bdeeb/1240002/BRL{20;50;100}"
      }

    it('POST saque/ler', () =>{
        request.post('saque/ler').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })
})