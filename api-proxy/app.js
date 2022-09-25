const express = require('express');
const app = express();
const h = require('hellosign-sdk')


// configure body-parser
const bodyParser = require('body-parser');
const { application } = require('express');

// middleware configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// storages
let sign_request_id = "4e51bf6c54ebeae299ceb72569d8532be53401a0";

// register routes
app.get('/', (req, res) => {
    res.json({ alive: true, sign_request_id });
});

app.get('/send_request', async (req, res) => {
    const { apikey, email, templateID } = req.body;

    var hellosign = require('hellosign-sdk')({ key: '29d570164024a3f3f017cb98655b44a8f02220c3dece7581c72f9e165d619a80' });
    var signers = [
        {
            email_address: 'yk.verma2000@gmail.com',
            name: 'User',
            order: 1,
        }
    ]
    var options = {
        test_mode: 1,
        title: 'Sign document to sign in',
        subject: 'Please sign the document to get access to resource',
        message: 'Please sign this NDA so that we can share the requested resources with you. Reach us out on support@example.com if you have any questions.',
        signers: signers,
        cc_email_addresses: ['yash.verma@fampay.in'],
        files: ['sla.pdf'],
        metadata: {
            clientId: '0000',
            custom_text: 'NDA'
        }
    };


    // hellosign.signatureRequest.send(options)
    const result = await hellosign.signatureRequest.send(options);
    try {
        const sign_request = result.signature_request.signature_request_id
        console.log("saving request ", sign_request)
        sign_request_id = sign_request
        return res.status(200).json({ error: false, payload: result })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ error: true })
    }
})


app.get("/verify_request", async (req, res) => {
    const hellosign = require('hellosign-sdk')({ key: '29d570164024a3f3f017cb98655b44a8f02220c3dece7581c72f9e165d619a80' });
    const data = await hellosign.signatureRequest.get(sign_request_id)


    if (data.signature_request.is_complete) {
        return res.status(200).json({ error: false, signed: true, access: "granted", token: "eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoic2lnbmVyIiwiSXNzdWVyIjoieWFzaCIsIlVzZXJuYW1lIjoieWFzaGt1bWFydmVybWEifQ.ugVSvGn3qXoanHCB46TBMCTRy9t0wwzwnD5luG08M5s", message: "OK" })
    }

    return res.status(403).json({ error: false, signed: false, access: "denied", token: "4e51bf6c54ebeae299ceb72569d8532be53401a0", message: "mandated signature missing, please sign the document sent to yk.verma2000@gmail.com to get access" })
})

app.listen(8002, () => {
    console.log('Server is running on port 8002');
});
