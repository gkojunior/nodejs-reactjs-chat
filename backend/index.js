const express = require('express')
const cors = require('cors')
const { default: axios } = require('axios')

const app = express()
app.use(express.json())
app.use(cors({ origin: true }))

app.post('/authenticate', async (req, res) => {
	const { username } = req.body
	// Get or create user on Chat Engine!
	try {
		const r = await axios.put(
			'https://api.chatengine.io/users/',
			{ username: username, secret: username, first_name: username },
			{ headers: { 'Private-Key': '08fe7717-41d8-4242-a035-86279723e939' } }
		)
		return res.status(r.status).json(r.data)
	} catch (e) {
		return res.status(e.response.status).json(e.response.data)
	}
})

app.listen(3001)
