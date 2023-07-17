import {tk_project} from '../../helpers/token_project.js'
import {tk_user, user_id} from '../../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Gerar Tarifa', () => {

    let token_project
    let token_user
    let id_user
    let data
    before(async() => {
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        data = {
            "userId": id_user,
            "value": 8.90
        }
    })



    it('POST pix/tarifa', () => {
        request.post('pix/tarifa').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})