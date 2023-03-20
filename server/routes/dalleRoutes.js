import express, { response } from 'express';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
// import { Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

function streamToString(stream, encoding = 'base64') {
	const chunks = [];
	return new Promise((resolve, reject) => {
		stream.on('data', chunk => chunks.push(Buffer.from(chunk)));
		stream.on('error', err => reject(err));
		stream.on('end', () => resolve(Buffer.concat(chunks).toString(encoding)));
	});
}
// const configuration = new
//
router.route('/').get((req, res) => {
	res.send('hello from dalle');
});

const _getRandomInt = maxx => Math.floor(Math.random() * maxx);

router.route('/').post(async (req, res) => {
	try {
		const { prompt } = req.body;
		// console.log({ prompt });
		// const { id, output_url } = await deepai.callStandardApi('text2img', {
		// 	text: prompt
		// });

		const response = await fetch(`https://picsum.photos/${_getRandomInt(1000)}/${_getRandomInt(1000)}`, { method: 'GET' });

		// console.log({ response });
		if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
		const data = await streamToString(response.body);
		const contentType = response.headers['content-type'];
		res.status(200).json({ photo: `data:${contentType ? contentType : 'image/png'};base64,${data}` });
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
});

export default router;
