import supertest from 'supertest'
import dotenv from 'dotenv'

dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Encurtar Link', () => {

    let data = {
        "BankAccount": null,
        "BankAccountDigit": null,
        "BankBranch": null,
        "BankCode": null,
        "BusinessUnitId": 1112,
        "createdAt": "2022-10-18T17:44:19.088Z",
        "CreditDate": "2022-10-17T14:45:42.47",
        "CreditedValue": 1,
        "date": "2022-10-18",
        "DiscountValue": null,
        "DocumentNumber": "4968293",
        "EntryId": 251054597,
        "FineInterest": null,
        "Identifier": "3c3d69d2-00c3-473f-98c0-fa3a53cc0d99",
        "InternalTransferDocumentNumber": "120642",
        "IofValue": null,
        "Mail": "thiago@teraidc.com.br",
        "Method": "InternalTransfer",
        "Name": "Thiago de Lucena Sobrinho",
        "OccurrenceDate": null,
        "OtherValues": null,
        "PaidValue": null,
        "PartnerId": null,
        "PaymentDate": null,
        "PaymentProtocol": "afcacc743729462a81f3dcb0d93c1146",
        "Phone": "11940322803",
        "RateValue": 0,
        "ReturnCode": null,
        "ReturnMessage": null,
        "Status": "Paid",
        "TaxNumber": "36114337808",
        "ToBankAccount": null,
        "ToBankAccountDigit": null,
        "ToBankBranch": null,
        "ToBankCode": null,
        "TotalValue": 1,
        "ToTaxNumber": "37041515000140",
        "TransferDate": "2022-10-17T00:00:00",
        "updatedAt": "2022-10-18T17:44:19.088Z",
        "URL": null
       }

    it('POST webhook', () =>{
        request.post('webhook').send(data).then((res) => {
            console.log(res.body)
        })
    })

})