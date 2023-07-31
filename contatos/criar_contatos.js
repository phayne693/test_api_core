import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id, tax_id} from '../helpers/auth_acc_thiago.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Criar Contatos', () => {

    let token_project
    let token_user
    let id_user
    let data
    let id_tax
    let email = `teste${Math.floor(Math.random()* 999)}@gmail.com.br`
    let conta = `19075${Math.floor(Math.random()* 9999)}`
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
       
        data = {
            userId:  id_user = await user_id(),
            apelido: "Thiago Lucena",
            taxId: id_tax = await tax_id(),
            banco: "451",
            agencia: "0001",
            conta: conta,
            digitoConta: "3",
            pix: email
        }
        // console.log(id_tax)
        // console.log(id_user)
        // console.log(email)
        // console.log(conta)
    })


    it('GET favorites/create', () =>{
        request.post(`favorites/create`).set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})