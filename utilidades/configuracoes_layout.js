import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Configuracoes Layout DEV - PROD', () => {

    let token_project
    before(async() =>{
        token_project = await tk_project()
    })

    it('GET product-dns/dns?dns=dev', () =>{
        request.get('product-dns/dns?dns=dev').set('tk-project', token_project).then((res) => {
            console.log(res.body)
        })
    })

    it('GET product-dns/dns?dns=prod', () =>{
        request.get('product-dns/dns?dns=dev').set('tk-project', token_project).then((res) => {
            console.log(res.body)
        })
    })

})