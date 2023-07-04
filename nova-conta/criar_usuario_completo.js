import supertest from 'supertest'
import {tk_project} from '../helpers/token_project.js'
import dotenv from 'dotenv'
dotenv.config()


const request  = supertest('https://api.norwaydigital.com.br/prod/v1/')


describe('Criar Usuario Completo',() => {

    let token_project
    before(async()=>{
        token_project = await tk_project()
    })

    let data = {
        "filterCompany":"cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "access":"40","companyId":"cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "lastName":"Silva",
        "firstName":"Fulano",
        "name":"Fulano Silva",
        "maritalStatus":"1",
        "socialName":"",
        "occupation":"Programador",
        "schooling":"4",
        "personalEmail":"wer@teraidc.com.br",
        "pep":false,
        "nationality":"BR",
        "birthState":"SP",
        "birthCity":"São Paulo",
        "birthDate":"1989-11-23",
        "skin":"3",
        "gender":"0",
        "pcd":"1",
        "motherName":"Fabia Silva",
        "salary":"100000",
        "fatherName":"",
        "patrimony":"000",
        "passportNumber":"",
        "voterNumber":"",
        "taxId":"07224006205",
        "documentId":"5959",
        "issuingAgency":"ssp",
        "issuingState":"SP",
        "issuingDate":"2002-02-20",
        "terms":true,
        "type":"personal",
        "password":"240317",
        "addresses":[{
            "complement":"",
            "country":"BR",
            "number":"266",
            "zipCode":"05205520",
            "city":"São Paulo",
            "street":"Via de Pedestre Francisco Soriano",
            "state":"SP",
            "neighborhood":"Jardim Russo",
            "type":1,
            "isMain":true
        }],
            "emails":[{
                "email":"editorkawannakao@teraidc.com.br",
                "type":1,
                "isMain":true
            }],
                "phones":[{
                    "codeArea":"11",
                    "country":"+55",
                    "fullNumber":"+551108912812",
                    "isMain":true,
                    "number":"11080412812",
                    "type":1
                }],
                "documents":[{
                    "documentFormat":"2",
                    "documentType":"10",
                    "description":"Imagem selfie",
                    "documentName":"selfie",
                    "documentFile":"",
                    "documentFileName":"praia.jpg",
                    "url":"https://infinity-uploads-documents-account-prod.s3.sa-east-1.amazonaws.com/documents/jpeg/2baf4953-f11d-4091-a5b8-a81427f2585f-19-05-2022-04-41-07.jpeg"},
                    {"documentFormat":"2",
                    "documentType":"2",
                    "description":"Imagem comprovante de residência",
                    "documentName":"ProofAddress",
                    "documentFile":"",
                    "documentFileName":"praia.jpg",
                    "url":"https://infinity-uploads-documents-account-prod.s3.sa-east-1.amazonaws.com/documents/jpeg/099a24b6-e1ed-459c-9250-fda2e680f160-19-05-2022-04-41-07.jpeg"
                }]
            }


    it('POST onboarding/account/create', () => {
        request.post('onboarding/account/create').set('tk-project', token_project).send(data).then((res) => {
            console.log(res.body)
        })
    })


})
