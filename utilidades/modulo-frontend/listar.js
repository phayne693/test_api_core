import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Listar Modulos', () => {


    it('GET cdn/paths', () =>{
        request.get('cdn/paths').then((res) => {
            console.log(res.body)
        })
    })

})