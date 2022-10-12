import { initializeApp } from "firebase/app";
import { 
    getFirestore,
    doc,
    getDoc,
    query,
    setDoc,
    where,
    collection,
    getDocs,
} from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyCqBO13a5oS0xP4Ipo9xxh9-H-RR1sPsV8",
    authDomain: "vissio-lamparas.firebaseapp.com",
    projectId: "vissio-lamparas",
    storageBucket: "vissio-lamparas.appspot.com",
    messagingSenderId: "271140268180",
    appId: "1:271140268180:web:a6aeedcbe6af0bc5382c81",
    measurementId: "G-ZFM0L4FTNV"
};

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);

export default firestoreDB;

export async function getAllItems(){
    const miColec= collection(firestoreDB, "productos");
    const prodSnap = await getDocs(miColec);

    return prodSnap.docs.map((doc)=>{
        return{
            ...doc.data(),
            id: doc.id,
        };
    });
}


export async function getItemsByCategory(categoryId){
    const miColec = collection(firestoreDB, "productos");
    const queryProductos = query(miColec, where("categoria", "==", categoryId));
    const prodSnap= await getDocs(queryProductos);
    return prodSnap.docs.map((doc)=>{
        return{
            ...doc.data(),
            id: doc.id,
        };
    });
}

export function async getItem(id){
    const miColec= collection(firestoreDB, "productos");
    const prodRef = doc.(miColec, id);
    const prodSnap = await getDoc(prodRef);

    return{...prodSnap.data(), id: prodSnap.id};
}

export async function dataToFirebase(){
    const PRODUCTOS = [

    ]

    const miCatalogo = collection(firestoreDB, "productos");

    PRODUCTOS.forEach((item) =>{
        const newDoc = doc(miCatalogo);
        setDoc(newDoc, item).then(()=>{
            console.log("document written with id:", newDoc.id)})
        .catch(err=>{
            console.log("error adding document: ", err);
        });
    });
}

