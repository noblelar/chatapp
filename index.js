const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios")

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));


app.post("/authenticate", async (req, res) => {
    const { username } = req.body;

    try {
        const r = await axios.put('https://api.chatengine.io/users/', {
            username: username,
            secret: username,
            first_name: username
        }, {
            headers: { "private-key": "e4b6288c-ced0-4696-8f70-ee5f952828db " }
        });
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }

});


app.listen(4000);