import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id } from "../helpers/auth_simples.js";
import { geracao_qr_dinamico } from "../helpers/qr_dinamico_code.js";
import supertest from "supertest";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')


export const hash_qr = async() => {
    let token_project = await tk_project()
    let token_user = await tk_user()
    let id_user = await user_id()
    let qr_document = await geracao_qr_dinamico()
    let data = {
            userId: id_user,
            documento: qr_document 
        }



    const res = await request.post('pix/qraleatorio').set('tk-project', token_project).set('tk-user', token_user).send(data)
    const dados_validados = res.body.response.GetPixQRCodeByIdInfo
    const obter_hash = dados_validados.HashCode
    return obter_hash
}
    
