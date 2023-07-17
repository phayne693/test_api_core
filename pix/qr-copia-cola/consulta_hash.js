import {tk_project} from '../../helpers/token_project.js'
import {tk_user, user_id, tax_id} from '../../helpers/auth_simples.js'
import { hash_qr } from '../../helpers/hash_qr.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Consulta Hash', () => {

    let token_project
    let token_user
    let id_user
    let taxId
    let data
    let hash
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        // console.log(token_project)
        // console.log(token_user)
        data = {
            "userId": id_user = await user_id(),
            "taxId": taxId = await tax_id(),
            "hash": "00020101021226770014br.gov.bcb.pix2555qrcode.fitbank.com.br/QR/cob/2C9F746A46243EEDFB7442F6DB5204000053039865802BR5925Thiago de Lucena Sobrinho6009Sao Paulo61080251500062070503***6304E191"
        }
        // console.log(hash)
        console.log(taxId)
        console.log(id_user)
    })


    it('POST pix/consulta/copiaecola', () => {
        request.post('pix/consulta/copiaecola').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })


})