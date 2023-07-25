import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import {user_id, tax_id} from '../../helpers/auth_acc_thiago.js'
import {doc_chave_pix} from '../../helpers/doc_chave_pix.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Status Chave Pix', () =>{

    let token_project
    let token_user
    let id_tax
    let id_user
    let doc_chave
    let data
    before(async() =>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            userId: id_user = await user_id(),
            taxId: id_tax = await tax_id(),
            type: "random",
            document: doc_chave = await doc_chave_pix()
        }
        // console.log(token_project)
        // console.log(token_user)
        // console.log(doc_chave)
    })


    it('POST pix/status', ()=>{
        request.post('pix/status').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})
