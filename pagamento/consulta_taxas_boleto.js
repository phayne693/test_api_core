import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Consulta de Taxas - Boleto', () => {

    let token_project 
    let token_user
    let data
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            Barcode: "45091943800000010000107800000010000027324636",
            taxId: process.env.CPF_TH
        }
        console.log(token_project)
        console.log(token_user)
    })

    it('POST billets/tax', ()=>{
        request.post('billets/tax').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})