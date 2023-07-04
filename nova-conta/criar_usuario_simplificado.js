import { tk_project } from "../helpers/token_project.js";
import supertest from "supertest";

import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')


describe('Criar Usuario Simplificado', () => {

    let token_project
    before(async()=>{
        token_project = await tk_project()
    })

    let data = {
        "access": 40,
        "companyId": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "taxId": "213156516111",
        "name": "JOAO SILVA",
        "socialName": "JOAO SILVA",
        "email": "souteste@teraidc.com.br",
        "personalEmail": "souteste@teraidc.com.br",
        "birthState": "SP",
        "birthCity": "São Paulo",
        "birthDate": "1990-11-05",
        "motherName": "MARIA SILVA",
        "password": "123456",
        "gender": 0,
        "maritalStatus": "6",
        "occupation": "undefined",
        "schooling": "1",
        "pep": false,
        "nationality": "BR",
        "skin": "1",
        "pcd": "0",
        "salary": "1000000",
        "fatherName": "",
        "patrimony": "1000000",
        "passportNumber": "",
        "voterNumber": "",
        "documentId": "",
        "issuingAgency": "",
        "issuingState": "",
        "issuingDate": "",
        "terms": true,
        "type": "personal",
        "addresses": [
          {
            "complement": "undefined",
            "country": "BR",
            "number": "100",
            "zipCode": "05840020",
            "city": "São Paulo",
            "street": "Rua Aristódemo Gazzotti",
            "state": "SP",
            "neighborhood": "Vila das Belezas",
            "type": 1,
            "isMain": true
          }
        ],
        "emails": [{ "email": "souteste@teraidc.com.br", "type": 1, "isMain": true }],
        "phones": [
          {
            "codeArea": "11",
            "country": "+55",
            "fullNumber": "+5511907090500",
            "isMain": true,
            "number": "11907090500",
            "type": "1"
          }
        ],
        "documents": [
          {
            "url": "https://infinity-uploads-documents-account-prod.s3.sa-east-1.amazonaws.com/documents/jpeg/f81b26af-7c13-4433-baa2-825b3427c59e-27-05-2022-10-58-02.jpeg",
            "documentName": "selfie"
          },
          {
            "url": "https://infinity-uploads-documents-account-prod.s3.sa-east-1.amazonaws.com/documents/jpeg/a021940f-a34d-460e-8c93-5a712af08c29-27-05-2022-10-58-03.jpeg",
            "documentName": "CNH"
          }
        ]
    }

    it('POST onboarding/account/create', () => {
        request.post('onboarding/account/create').set('tk-project', token_project).send(data).then((res) => {
            console.log(res.body)
        })
    })

})