import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import { tk_user, user_id, tax_id } from "../helpers/auth_acc_thiago.js";

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');


describe('Reenvio Documentos', () => {

    let token_project
    let token_user
    let id_user
    // let tax_Id
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        id_user = await user_id()
        // tax_Id = await tax_id()
    })
    

    let data = {
        taxId:"36114337808",
        Documents:[
            {
                url:"https://infinity-uploads-documents-account-dev.s3.sa-east-1.amazonaws.com/documents/jpeg/8c004609-2286-413c-99a5-ec1aa1a09035-15-09-2022-01-05-40.jpeg",
                DocumentName:"IdentityDocumentFront"
            },
            {
                url:"https://infinity-uploads-documents-account-dev.s3.sa-east-1.amazonaws.com/documents/jpeg/34971156-ca60-482f-a454-2fc9c1d14ae5-15-09-2022-01-05-43.jpeg",
                DocumentName:"IdentityDocumentVerse"
            },
            {
                url:"https://infinity-uploads-documents-account-dev.s3.sa-east-1.amazonaws.com/documents/jpeg/d3ea2b23-966b-49d9-a80b-a737f003e42d-15-09-2022-01-05-49.jpeg",
                DocumentName:"ProofAddress"
            }
        ],
        Endereco:{
            cep:"05205520",
            state:"SP",
            city:"São Paulo",
            neighborhood:"Jardim Russo",
            street:"Via de Pedestre Francisco Soriano",
            service:"correios",
            number:"174",
            complement:"casa"
        }
    }

    it('POST fitbank/resendDocuments', () => {
        request.post('fitbank/resendDocuments').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})