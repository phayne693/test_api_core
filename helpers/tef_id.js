import { tk_project } from "./token_project.js";
import { tk_user } from "./auth_simples.js";
import supertest from "supertest";
import dotenv from 'dotenv'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

export const tef_id = async () => {

    let token_project = await tk_project()
    let token_user = await tk_user()
    let data = {
        "userId": "01GEEZ0X0GNNDANS1WRRZHY5YD",
        "companyId": "cf1f36af-dbfc-4062-bfd2-b6aefd22b000",
        "origin": { 
              "taxId": "37041515000140", 
              "name": "Norway",
              "partnerId": "aa042e8b-7831-4709-89b7-24687e1137f0"
          },
        "destinity": { "taxId": "36114337808", "name": "Thiago Lucena" },
        "value": 1.13,
        "transferDate": "2023/07/11"
    }

    const res = await request.post('tefs/create').set('tk-project', token_project).set('tk-user', token_user).send(data)
    const tef = res.body.data.tefId
    return tef  
    

}