import { tk_project } from "../../helpers/token_project.js";
import { tk_user, user_id } from "../../helpers/auth_acc_thiago.js";
import { geracao_qr_dinamico } from "../../helpers/qr_dinamico_code.js";
import supertest from "supertest";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Consulta QR', ()=>{


    let token_project
    let token_user
    let qr_document
    let id_user
    let data
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        data = {
            "userId": id_user = await user_id(),
            "documento": qr_document = await geracao_qr_dinamico()
          }
        console.log(qr_document)
        console.log(id_user)
    })
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    it('POST pix/qraleatorio', ()=>{
        request.post('pix/qraleatorio').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) =>{
            console.log(res.body)
        })
    })

})