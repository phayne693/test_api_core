import {tk_project} from '../helpers/token_project.js'
import {tk_user} from '../helpers/auth_simples.js'
import {user_id} from '../helpers/auth_simples.js'
import supertest from 'supertest'
import dotenv from 'dotenv'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Gerar Boleto', ()=>{

    let token_project
    let token_user
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "GroupTemplate":2,
        "CustomerName":"Maria antonia da Silva",
        "CustomerTaxNumber":"11573777854",
        "CustomerMail":"thiago@teraidc.com.br",
        "CustomerPhone":"11912345678",
        "RateValue":0,
        "Ratesent":1,
        "SupplierTaxNumber":"36114337808",
        "SupplierFullName":"Thiago de Lucena Sobrinho",
        "SupplierTradingName":"Thiago de Lucena Sobrinho",
        "SupplierLegalName":"Thiago de Lucena Sobrinho",
        "SupplierMail":"contato@norwaydigital.com.br",
        "SupplierPhone":"551120502222",
        "AddressLine1":"Via de Pedestre Francisco Soriano, 128, ",
        "Neighborhood":"Jardim Russo",
        "City":"São Paulo",
        "ZipCode":"05205520",
        "State":"SP",
      "Products":[
         {
            "SellerPersonType":0,
            "SellerName":"Thiago de Lucena Sobrinho",
            "SellerTaxNumber":"36114337808",
            "ReceiverPersonType":0,
            "ReceiverName":"Thiago de Lucena Sobrinho",
            "ReceiverTaxNumber":"36114337808",
            "Reference":1,
            "ProductCode":1,
            "ProductName":"Boleto",
            "ProductQty":1,
            "ProductValue":10
         }
      ],
      "DueDate":"2023/08/10",
      "TotalValue":10,
      "MailToSend":"contato@norwaydigital.com.br",
      "PhoneToSend":"551120502222",
      "UserId":"01FPDE2NKM2KANZP877E31AR2G",
      "CompanyId":"cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
      "type":"charge",
        "Comments": ""
   }

    it('POST billets/create', ()=>{
        request.post('billets/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})