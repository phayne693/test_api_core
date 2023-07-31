import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id, tax_id} from '../helpers/auth_acc_thiago.js'
import {id_contato} from '../helpers/lista_contatos.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Listar Indicacoes', () => {

    let token_project
    let token_user
    let id_tax
    let data
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "taxId": id_tax = await tax_id()
        }
        console.log(token_project)
        console.log(token_user)
    })

    it('POST indicacao/listar', () =>{
        request.post('indicacao/listar').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})