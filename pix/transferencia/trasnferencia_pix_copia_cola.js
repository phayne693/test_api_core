import {tk_project} from '../../helpers/token_project.js'
import {tk_user} from '../../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Transferencia Pix Copia e Cola', ()=>{

    let token_user
    let token_project
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
    })
    //pega o dia atual no formato correto "aaaa/mm/dd"
    let today = new Date();
    let year = today.getFullYear();
    let month = String(today.getMonth() + 1).padStart(2, '0');
    let day = String(today.getDate()).padStart(2, '0');
    let date = `${year}/${month}/${day}`;
    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "taxId": "36114337808",
        "hash": "00020101021226770014br.gov.bcb.pix2555qrcode.fitbank.com.br/QR/cob/2C9F746A46243EEDFB7442F6DB5204000053039865802BR5925Thiago de Lucena Sobrinho6009Sao Paulo61080251500062070503***6304E191",
        "value": 0.01,
        "date": date
      }

    it('POST pix/transferir', ()=>{
        request.post('pix/transferir').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) =>{
            console.log(res.body)
        })
    })  



})