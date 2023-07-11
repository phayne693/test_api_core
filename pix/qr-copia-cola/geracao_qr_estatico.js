import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Gercao de QR Code Estatico', () => {

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "taxId": "37041515000140",
          "key": "68e65edc-8e1c-4062-be7e-9194254fcbec",
          "account": "187958873",
          "accountDigit": "7",
          "zip": "02515000",
          "city": "Sao Paulo",
          "value": 1.23
      }

    it('POST pix/qrestatico', () => {
        request.post('pix/qrestatico').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })


})