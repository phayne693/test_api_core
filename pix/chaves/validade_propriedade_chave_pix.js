import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import {user_id, tax_id} from '../../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Validar Propriedade da Chave Pix', () =>{

    let token_project
    let token_user
    let id_tax
    let id_user
    let data
    before(async() =>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            userId: id_user = await user_id(),
            taxId: id_tax = await tax_id(),
            key:"thiago@teraidc.com.br",
            type: "email",
            code: "182945"
        }
        console.log(token_project)
        console.log(token_user)
    })


    it('POST pix/validar', ()=>{
        request.post('pix/validar').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})