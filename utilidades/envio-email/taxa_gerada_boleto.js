import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import {user_id, tax_id} from '../../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Taxa Gerada Por Boleto', () => {

    let token_project
    let token_user
    let id_tax
    let id_user
    let data
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "userId": id_user = await user_id(),
            "barcode": "45090.10783 00000.010009 00000.024372 9 91100000001000"
        }
    })

    it('POST sendmail/taxa/boleto', () =>{
        request.post('sendmail/taxa/boleto').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})