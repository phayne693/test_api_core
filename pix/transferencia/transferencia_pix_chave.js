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

    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
          "taxId": "36114337808",
          "key": "43996081880",
        "value": 0.01,
        "date": "2023/07/14"
      }

      it('POST pix/transferir', ()=>{
        request.post('pix/transferir').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
      })

})

