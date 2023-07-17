import {tk_project} from '../../helpers/token_project.js'
import {tk_user, user_id, tax_id} from '../../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Criar Chave Pix', () => {

    let token_project
    let token_user
    let id_tax
    let data
    let id_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "userId": id_user = await user_id(),
            "taxId": id_tax = await tax_id(), 
            "type": "random"
        }
        console.log(token_project)
        console.log(token_user)
        console.log(id_tax)
        console.log(id_user)
    })

    it('POSt pix/chave', () => {
        request.post('pix/chave').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})