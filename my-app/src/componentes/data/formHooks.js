import firestoreDB from '../data/fireBase';
import { collection, addDoc } from 'firebase/firestore';

export default async function sendCustomEmail(email, asunto, texto) {
	const collectionRef = collection(firestoreDB, 'emailNotificaciones');
	const emailContent = {
		to: email,
		message: {
			subject: asunto,
			text: texto,
			html: `<p>${texto}</p>`,
		},
	};
	console.log('listo para ser enviado');
	return await addDoc(collectionRef, emailContent);
}