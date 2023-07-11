import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Transferencias outros Bancos', ()=>{

    let token_project
    let token_user
    let data
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "userId": "01FPDE2NKM2KANZP877E31AR2G",
            "origin": { 
                  "taxId": "36114337808", 
                  "name": "Thiago Lucena"
              },
            "destinity": { 
                  "taxId": process.env.CPF_JE, 
                  "name": "Jeferson Queiroz Lemes",
                  "bank": "336",
                  "account": "5252012",
                  "agency": "0001",
                  "accountDigit": "9",
                  "accountType": 0
              },
            "value": 1.23,
            "date": "2023/07/11"
          }
    
    })

    
    it('POST ted/create', ()=>{
        request.post('ted/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) =>{
            console.log(res.body)
        })
    })
})
