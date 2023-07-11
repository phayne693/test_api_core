import {tk_project} from '../helpers/token_project.js'
import {tk_user, user_id} from '../helpers/auth_simples.js'
import supertest from 'supertest'

const request = supertest('https://api.norwaydigital.com.br/prod/v1/')

describe('Gerar Boleto Tarifa', () =>{

    let token_project
    let token_user
    before(async() => {
        token_project = await tk_project()
        token_user = await tk_user()
        console.log(token_project)
        console.log(token_user)
    })

    let data = {
        "userId": "01FPDE2NKM2KANZP877E31AR2G",
        "GroupTemplate":2,
        "CustomerName":"Thiago de Lucena Sobrinho",
        "CustomerTaxNumber":"36114337808",
        "CustomerMail":"thiago@teraidc.com.br",
        "CustomerPhone":"11912345678",
        "Neighborhood":"Perus",
        "City":"São Paulo",
        "ZipCode":"05205520",
        "State":"SP",
        "AddressLine1":"Via de Pedestre Francisco Soriano, 128",
        "MailToSend":"contato@norwaydigital.com.br",
        "RateValue":0,
        "Ratesent":1,
        "SupplierTaxNumber":"37041515000140",
        "SupplierFullName":"NORWAY DIGITAL PAGAMENTOS E SECURITIZADORA LTDA",
        "SupplierTradingName":"NORWAY DIGITAL PAGAMENTOS E SECURITIZADORA LTDA",
        "SupplierLegalName":"NORWAY DIGITAL PAGAMENTOS E SECURITIZADORA LTDA",
        "SupplierMail":"contato@norwaydigital.com.br",
        "SupplierPhone":"551120502222",
        "Products":[
            {
                "SellerPersonType":1,
                "SellerName":"NORWAY DIGITAL PAGAMENTOS E SECURITIZADORA LTDA",
                "SellerTaxNumber":"37041515000140",
                "ReceiverPersonType":1,
                "ReceiverName":"NORWAY DIGITAL PAGAMENTOS E SECURITIZADORA LTDA",
                "ReceiverTaxNumber":"37041515000140",
                "Reference": "1",
                "ProductCode": "1",
                "ProductName":"Tarifa",
                "ProductQty":1,
                "ProductValue":10
            }
        ],
        "DueDate":"2023/09/12",
        "TotalValue":10,
        "PhoneToSend":"551120502222",
        "UserId":"01FPDE2NKM2KANZP877E31AR2G",
        "CompanyId":"cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "Comments": "Tarifa"
    }

    it('POST billets/create', ()=>{
        request.post('billets/create').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })

})