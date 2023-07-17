import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Transferir pix conta', () => {

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
    })
    console.log(token_project)
    console.log(token_user)

    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "companyId": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "origin": { 
              "taxId": "36114337808", 
              "bank": "450",
              "account": "12859564",
              "agency": "0001",
              "accountDigit": "5"
          },
        "destinity": { 
              "taxId": "43996081880", 
              "name": "Jeferson Queiroz Lemes",
              "bank": "336",
              "account": "5252012",
              "agency": "0001",
              "accountDigit": "9"
          },
        "value": 0.01,
        "date": '2023/07/14'
      }

      it('POST pix/transferir', ()=>{
        request.post('pix/transferir').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
      })

})

