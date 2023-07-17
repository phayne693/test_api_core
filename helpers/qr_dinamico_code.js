import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');
  
export const geracao_qr_dinamico = async() => {

    let token_project = await tk_project()
    let token_user = await tk_user()
    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "taxId": "36114337808",
        "key": "68e65edc-8e1c-4062-be7e-9194254fcbec",
        "zip": "02515000",
        "city": "Sao Paulo",
        "value": 1.23
    }

    const res = await request.post('pix/qrdinamico').set('tk-project', token_project).set('tk-user', token_user).send(data)
    return res.body.document

}