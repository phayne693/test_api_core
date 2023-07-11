import {tk_project} from '../helpers/token_project.js'
import {tk_user, user_id} from '../helpers/auth_simples.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')



describe('Transferencia Entre Contas', () => {

    let token_project
    let token_user
    before(async() =>{
        token_project = await tk_project ()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    let data = {
        "userId": "01GEEZ0X0GNNDANS1WRRZHY5YD",
        "companyId": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "origin": { 
              "taxId": "37041515000140", 
              "name": "Norway",
              "partnerId": "aa042e8b-7831-4709-89b7-24687e1137f0"
          },
        "destinity": { "taxId": "36114337808", "name": "Thiago Lucena" },
        "value": 1.13,
        "transferDate": "2023/07/11"
    }

    it('POST tefs/create', ()=>{
        request.post('tefs/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})