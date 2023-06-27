import supertest from "supertest";

const request = supertest('https://api.norwaydigital.com.br/prod/v1');


describe('Users', () => {

    it('POST /TK-PROJECT', () => {

        let data = {
            "secretKey":"973AE9E57F212FC28E4FA63F4E3F1",
            "boundId":"br.com.infinity"
        }

        request.post(`/oauth/projects`).send(data).end((err,res) => {
            // console.log(err)
            console.log(res.body.data.token)
        })
    })

})