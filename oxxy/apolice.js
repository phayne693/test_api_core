import supertest from 'supertest'
import dotenv from 'dotenv'
import { tk_project } from '../helpers/token_project.js';
import {tk_user} from '../helpers/auth_simples.js'

dotenv.config()

const request = supertest('https://api.oxxyseguradora.com.br/')

describe('Enviar ativos', ()=>{

    
    let cpf = "22862563811"
    let Nome = "Marcos Henrique Andrade Assis"
    let nascimento = "2000-01-20"
    

    it('POST api/cliente',()=>{
        request.get(`api/cliente/${cpf}&${Nome}&${nascimento}`).set('authorization', `Bearer ${process.env.TOKEN_DEV}`).redirects(2).end((err,res) =>{
            if(err){
                console.log(err)
            }else{
                console.log(res.status)
                console.log(res.text)
            }
        })
    })

})