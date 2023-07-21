import supertest from "supertest";
import { tk_project } from "../helpers/token_project.js";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Criar Usuario Simplificado PJ', ()=> {

    let token_project
    before(async()=>{
        token_project = await tk_project()
    })

    let data = {
        "filterCompany": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "access": "40",
        "companyId": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "name": "Teste empresa",
        "email": "empresa12222@teraidc.com.br",
        "birthDate": "01-01-1999",
        "salary": "10000",
        "MonthlyIncome": "15000",
        "taxId": "48844618123461",
        "terms": true,
        "documents": [
            {
                "url": "https://infinity-uploads-documents-account-prod.s3.sa-east-1.amazonaws.com/documents/jpeg/ada6c40c-81aa-4491-b8e3-a2124c12ac21-03-08-2022-07-28-16.jpeg",
                            "documentName": "selfie"
            }
        ],
        "type": "legal",
        "password": "123456",
        "emails": [
            {
                "email": "empresa12222@teraidc.com.br",
                "type": 1,
                "isMain": true
            }
        ],
        "phones": [
            {
                "codeArea": "11",
                "country": "+55",
                "fullNumber": "+5511940406363",
                "isMain": true,
                "number": "11940406363",
                "type": 1
            }
        ]
    }

    it('POST onboarding/account/create', () => {
        request.post('onboarding/account/create').set('tk-project', token_project).send(data).then((res) => {
            console.log(res.body)
        })
    })

})