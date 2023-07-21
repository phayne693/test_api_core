import {tk_project} from '../../helpers/token_project.js'
import {tk_user, user_id, tax_id} from '../../helpers/auth_simples.js'
import { hash_qr } from '../../helpers/hash_qr.js'
import supertest from 'supertest'
import dotenv from 'dotenv'
// import crypto from 'crypto'
dotenv.config()

const request = supertest('https://api.norwaydigital.com.br/prod/v1/');

describe('Consulta Hash', () => {

    let token_project
    let token_user
    let id_user
    let taxId
    let data
    let hash
    before(async()=>{
        token_project = await tk_project()
        token_user = await tk_user()
        // console.log(token_project)
        // console.log(token_user)
        hash = await hash_qr()
        // function hashToBase64(input, algorithm) {
        //     const hash = crypto.createHash(algorithm).update(input).digest();
        //     const base64Hash = hash.toString('base64');
        //     return base64Hash;
        // }
          
        // const input = hash;
        // const algorithm = 'sha256';
        
        // const base64Hash = hashToBase64(input, algorithm);
        // console.log('Base64 hash:', base64Hash);
        const base64String = hash;

        // Decodificando a string base64
        const decodedString = Buffer.from(base64String, 'base64').toString('utf-8');

        // console.log('Decoded string:', decodedString);
        data = {
            "userId": id_user = await user_id(),
            "taxId": taxId = await tax_id(),
            "hash": decodedString
        }
        console.log(data)
        // console.log(hash)
        // console.log(taxId)
        // console.log(id_user)
    })
    


    it('POST pix/consulta/copiaecola', () => {
        request.post('pix/consulta/copiaecola').set('tk-project', token_project).set('tk-user', token_user).send(data).then((res) => {
            console.log(res.body)
        })
    })


})