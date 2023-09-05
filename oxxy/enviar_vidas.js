import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';
import {tk_user} from '../helpers/auth_simples.js'

dotenv.config()

const request = supertest('https://api.oxxyseguradora.com.br/')

describe('Enviar ativos', ()=>{

    let data = {
        "Cpf": "22862563811",
        "Nome": "Marcos Henrique Andrade Assis",
        "nascimento": "2000-01-20",
        "Sexo": "M"
        }

    it('POST api/cliente',()=>{
        request.post('api/cliente').set('authorization', `Bearer ${process.env.TOKEN_DEV}`).send(data).then((res) =>{
            console.log(res.body)
        })
    })

})