import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id } from "../helpers/auth_acc_thiago.js";
import { id_contato } from "../helpers/lista_contatos.js";
import supertest from "supertest";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Deletar Contatos', () => {
    let token_project;
    let token_user;
    let id_ctt;
    let id_user;

    before(async () => {
        token_project = await tk_project();
        token_user = await tk_user();
        id_ctt = await id_contato();
        id_user = await user_id();
        console.log(id_ctt);
        console.log(id_user);
        console.log(token_project)
        console.log(token_user)
    });

    it('GET favorites/user/user_id/id/id_contato/delete', async () => {
        const res = await request
            .delete(`favorites/user/${id_user}/id/${id_ctt}/delete`)
            .set('tk-project', token_project)
            .set('tk-user', token_user);
            
        console.log(res.body);
    });
});
