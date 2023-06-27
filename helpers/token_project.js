import supertest from "supertest";

const request = supertest('https://api.norwaydigital.com.br/prod/v1');


export const tk_project = async () => {

    let data = {
        "secretKey":"973AE9E57F212FC28E4FA63F4E3F1",
        "boundId":"br.com.infinity"
    }

    const res = await request.post('/oauth/projects').send(data)
    return res.body.data.token

}
