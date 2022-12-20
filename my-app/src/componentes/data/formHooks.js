import firestoreDB from '../data/fireBase';
import { collection, addDoc } from 'firebase/firestore';

export default async function sendCustomEmail(subject, body) {
	const collectionRef = collection(firestoreDB, 'emailNotificaciones');
	const emailContent = {
		to: "dgel92@gmail.com",
		message: {
			subject: subject,
			text: body,
			html: `<p>${body}</p>`,
		},
	};
	console.log('listo para ser enviado');
	return await addDoc(collectionRef, emailContent);
}