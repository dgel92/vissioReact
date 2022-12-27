import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, doc, getDoc, query, where, collection, getDocs, setDoc, Timestamp, addDoc,} from 'firebase/firestore'
import {getMessaging} from "firebase/messaging"

import alain from "../../multimedia/alain-1.jpg";
import alain1 from "../../multimedia/alain-2.jpg";
import alain2 from "../../multimedia/alain-3.jpg";
import alain3 from "../../multimedia/alain-4.jpg";
import alain4 from "../../multimedia/alain-5.jpg";
import alain5 from "../../multimedia/alain-6.jpg";


import anoximenes from "../../multimedia/anoximenes-1.jpg";     
import anoximenes1 from "../../multimedia/anoximenes-2.jpg";     
import anoximenes2 from "../../multimedia/anoximenes-3.jpg";     
import anoximenes3 from "../../multimedia/anoximenes-4.jpg";     
import anoximenes4 from "../../multimedia/anoximenes-5.jpg";     


import aristoteles from "../../multimedia/aristoteles-1.jpg";
import aristoteles1 from "../../multimedia/aristoteles-2.jpg";


import badiou from "../../multimedia/badiou-1.jpg";
import badiou1 from "../../multimedia/badiou-2.jpg";
import badiou2 from "../../multimedia/badiou-3.jpg";
import badiou3 from "../../multimedia/badiou-4.jpg";
import badiou4 from "../../multimedia/badiou-5.jpg";


import barcelona from "../../multimedia/barcelona-1.jpg";
import barcelona1 from "../../multimedia/barcelona-2.jpg";
import barcelona2 from "../../multimedia/barcelona-3.jpg";
import barcelona3 from "../../multimedia/barcelona-4.jpg";
import barcelona4 from "../../multimedia/barcelona-5.jpg";


import bimbaum from "../../multimedia/bimbaum-1.jpg";


import bruno from "../../multimedia/bruno-1.jpg";
import bruno1 from "../../multimedia/bruno-2.jpg";
import bruno2 from "../../multimedia/bruno-3.jpg";


import butler from "../../multimedia/butler-1.jpg";
import butler1 from "../../multimedia/butler-2.jpg";


import byung from "../../multimedia/byung-1.jpg";


import charles from "../../multimedia/charles-1.jpg";
import charles1 from "../../multimedia/charles-2.jpg";
import charles2 from "../../multimedia/charles-3.jpg";
import charles3 from "../../multimedia/charles-4.jpg";


import ciceron from "../../multimedia/ciceron-1.jpg";
import ciceron1 from "../../multimedia/ciceron-2.jpg";


import copernico from "../../multimedia/copernico-1.jpg";
import copernico1 from "../../multimedia/copernico-2.jpg";


import dogones from "../../multimedia/dogones-1.jpg";
import dogones1 from "../../multimedia/dogones-2.jpg";
import dogones2 from "../../multimedia/dogones-3.jpg";
import dogones3 from "../../multimedia/dogones-4.jpg";


import francis from "../../multimedia/francis-1.jpg";
import francis1 from "../../multimedia/francis-2.jpg";
import francis2 from "../../multimedia/francis-3.jpg";


import francisDos from "../../multimedia/francisDos-1.jpg";
import francisDos1 from "../../multimedia/francisDos-2.jpg";


import galileo from "../../multimedia/galileo-1.jpg";
import galileo1 from "../../multimedia/galileo-2.jpg";


import gayatri from "../../multimedia/gayatri-1.jpg";
import gayatri1 from "../../multimedia/gayatri-2.jpg";
import gayatri2 from "../../multimedia/gayatri-3.jpg";


import george from "../../multimedia/george-1.jpg";
import george1 from "../../multimedia/george-2.jpg";


import habernas from "../../multimedia/habernas-1.jpg";
import habernas1 from "../../multimedia/habernas-2.jpg";


import hegel from "../../multimedia/hegel-1.jpg";
import hegel1 from "../../multimedia/hegel-2.jpg";


import heraclito from "../../multimedia/heraclito-1.jpg";
import heraclito1 from "../../multimedia/heraclito-2.jpg";
import heraclito2 from "../../multimedia/heraclito-3.jpg";


import hobbes from "../../multimedia/hobbes-1.jpg";
import hobbes1 from "../../multimedia/hobbes-2.jpg";
import hobbes2 from "../../multimedia/hobbes-3.jpg";



import inmanuel from "../../multimedia/inmanuel-1.jpg";
import inmanuel1 from "../../multimedia/inmanuel-2.jpg";


import jhonLocke from "../../multimedia/jhonLocke-1.jpg";
import jhonLocke1 from "../../multimedia/jhonLocke-2.jpg";


import judith from "../../multimedia/judith-1.jpg";
import judith1 from "../../multimedia/judith-1.jpg";
import judith2 from "../../multimedia/judith-1.jpg";
import judith3 from "../../multimedia/judith-1.jpg";


import jurgen from "../../multimedia/jurgen-1.jpg";
import jurgen1 from "../../multimedia/jurgen-2.jpg";


import maquiavelo from "../../multimedia/maquiavelo-1.jpg";
import maquiavelo1 from "../../multimedia/maquiavelo-2.jpg";
import maquiavelo2 from "../../multimedia/maquiavelo-3.jpg";


import martha from "../../multimedia/martha-1.jpg";


import michel from "../../multimedia/michel-1.jpg";


import nasbaumm from "../../multimedia/nasbaumm-1.jpg";


import noam from "../../multimedia/noam-1.jpg";


import pitagora from "../../multimedia/pitagora-1.jpg";


import platon from "../../multimedia/platon-1.jpg";
import platon1 from "../../multimedia/platon-2.jpg";
import platon2 from "../../multimedia/platon-3.jpg";
import platon3 from "../../multimedia/platon-4.jpg";

import talesDeMileto from "../../multimedia/talesDeMileto.jpg";
import talesDeMileto2 from "../../multimedia/talesDeMileto2.jpg";

import socrates from "../../multimedia/socrates.jpg";
import socrates1 from "../../multimedia/socrates1.jpg";
import socrates2 from "../../multimedia/socrates2.jpg";

import tittman from "../../multimedia/tittman.jpg";
import tittman2 from "../../multimedia/tittman2.jpg";
import tittman3 from "../../multimedia/tittman3.jpg";
import tittman4 from "../../multimedia/tittman4.jpg";

import slokar from "../../multimedia/slokar.jpg";
import slokar1 from "../../multimedia/slokar2.jpg";
import slokar2 from "../../multimedia/slokar3.jpg";

import Protagora from "../../multimedia/protagora.jpg";
import Protagora1 from "../../multimedia/protagora1.jpg";

import zizek from "../../multimedia/zizek.jpg";
import zizek1 from "../../multimedia/zizek2.jpg";
import zizek2 from "../../multimedia/zizek2.jpg";

import plotino from "../../multimedia/plotino.jpg";
import plotino1 from "../../multimedia/plotino2.jpg";

import eslavoj from "../../multimedia/eslavoj.jpg";
import eslavoj1 from "../../multimedia/eslavoj-1.jpg";
import eslavoj2 from "../../multimedia/eslavoj2.jpg";

import spiva from "../../multimedia/spiva.jpg";
import spiva1 from "../../multimedia/spiva1.jpg";
import spiva2 from "../../multimedia/spiva2.jpg";

import seneca from "../../multimedia/seneca.jpg";

import taylor from "../../multimedia/taylor.jpg";
import taylor1 from "../../multimedia/taylor1.jpg";
import taylor2 from "../../multimedia/taylor2.jpg";
import taylor3 from "../../multimedia/taylor3.jpg";

import voltaire from "../../multimedia/voltaire.jpg";

import rosseau from "../../multimedia/rosseau.jpg";


const firebaseConfig = {
    apiKey: "AIzaSyB_TzxO9IElkQQC85JzlShaWhsOqHSUFTM",
    authDomain: "vissio-9f7f5.firebaseapp.com",
    projectId: "vissio-9f7f5",
    storageBucket: "vissio-9f7f5.appspot.com",
    messagingSenderId: "240102329970",
    appId: "1:240102329970:web:bc4c577fda5474240f7ceb",
    measurementId: "G-L6N1JNZ1XN"
    };

const app = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(app);
const analytics= getAnalytics(app);

export default firestoreDB;
export const messaging = getMessaging(app);

export async function getAllItems(){

    const miColeccion = collection (firestoreDB, 'lamparas');

    const lamparasSnap = await getDocs(miColeccion);

    return lamparasSnap.docs.map(doc => {
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItemsByCategory(categoryId){
    const miColeccion = collection (firestoreDB, 'lamparas');
    const queryLamparas = query(miColeccion, where("categoria", "==", categoryId));

    const lamparasSnap = await getDocs(queryLamparas);
    return lamparasSnap.docs.map(doc =>{
        return{
            ...doc.data(),
            id: doc.id
        }
    });
}

export async function getItem(id){
    const miColeccion = collection(firestoreDB, 'lamparas');
    const LamparaRef = doc(miColeccion, id);
    const lamparaSnap = await getDoc(LamparaRef);
    return {
        ...lamparaSnap.data(),
        id: lamparaSnap.id
    }        
};


export async function dataToFirebase(){
    const PRODUCTS =[
        {
            nombre: 'Alain',
            img: alain,
            img1: alain1,
            img2: alain2,
            img3: alain3,
            categoria: "escritorio",
            portada: true,
            stock: 5,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '60cm',
            diametro: '25cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Lino - Arpillera.',
            },
            {
            nombre: 'Anoximenes',
            img: anoximenes,
            img1: anoximenes1,
            img2: anoximenes2,
            img3: anoximenes3,
            categoria: "lampara de pie",
            portada: false,
            stock: 8,
            precio: 22490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.50 m',
            diametro: '44 cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Aristoteles',
            img: aristoteles,
            img1: aristoteles1,
            img2: aristoteles,
            img3: aristoteles1,
            categoria: "lampara de pie",
            portada: false,
            stock: 5,
            precio: 22900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.58m',
            diametro: '',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Venecia.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Vadiou',
            img: badiou,
            img1: badiou1,
            img2: badiou2,
            img3: badiou3,
            categoria: "escritorio",
            portada: false,
            stock: 8,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.30m',
            diametro: '0.24m',
            Tipodelampara: 'Con filamentos de carbono.',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Barcelona',
            img: barcelona,
            img1: barcelona1,
            img2: barcelona2,
            img3: barcelona3,
            img4: barcelona4,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 29900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.90m',
            diametro: '1.50m',
            Tipodelampara: 'Led de 14W.',
            madera: 'Cedro',
            pantallas: 'De chapa.',
            ColoresPantalla: 'Metal, dorado y negro.',
            },
            {
            nombre: 'Bimbaum',
            img: bimbaum,
            img1: bimbaum,
            img2: bimbaum,
            img3: bimbaum,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.30m',
            diametro: '',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Bruno',
            img: bruno,
            img1: bruno1,
            img2: bruno2,
            img3: bruno1,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 20900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.20m',
            diametro: '',
            Tipodelampara: 'Con filamento de carbono.',
            madera: 'Cedro.',
            pantallas: 'De chapa.',
            ColoresPantalla: 'Negro, blanco, dorado y cobre (Consultar por mas colores).',
            },
            {
            nombre: 'Butler',
            img: butler,
            img1: butler1,
            img2: butler,
            img3: butler1,
            categoria: "escritorio",
            portada: true,
            stock: 18,
            precio: 16040,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '65cm',
            diametro: '25cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Biung',
            img: byung,
            img1: byung,
            img2: byung,
            img3: byung,
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 8400,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '30cm',
            diametro: '18 x 16cm',
            Tipodelampara: '',
            madera: 'Cedro.',
            pantallas: 'Lino, Venecia.',
            ColoresPantalla: 'Crudo, Negro, Arpillera.',
            },
            {
            nombre: 'Charles',
            img: charles,
            img1: charles1,
            img2: charles2,
            img3: charles3,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.50m',
            diametro: '44cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Ciceron',
            img: ciceron,
            img1: ciceron1,
            img2: ciceron,
            img3: ciceron1,
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 8490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.90m a 1.50m',
            diametro: '0.20 x 0.18',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Metal, dorado y negro.',
            ColoresPantalla: '',
            },
            {
            nombre: 'Copernico',
            img: copernico,
            img1: copernico1,
            img2: copernico,
            img3: copernico1,
            
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.65m',
            diametro: '0.45 x 0.31 x 0.40cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Venecia.',
            ColoresPantalla: 'Venecia crudo - negro.',
            },
            {
            nombre: 'Dogones',
            img: dogones,   
            img1: dogones1,   
            img2: dogones2,   
            img3: dogones3,  
            
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 7000,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '25cm',
            diametro: '10 x 15cm',
            Tipodelampara: '',
            madera: 'Cedro.',
            pantallas: 'Lino, Venecia.',
            ColoresPantalla: 'Crudo, Negro, Arpillera.',
            },
            {
            nombre: 'Francis',
            img: francis,
            img1: francis1,
            img2: francis2,
            img3: francis1,
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '55cm',
            diametro: '25cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Kant',
            img: francisDos,
            img1: francisDos1,
            img2: francisDos,
            img3: francisDos1,
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 23900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '74cm',
            diametro: '22 x 20cm',
            Tipodelampara: '',
            madera: '',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Galileo',
            img: galileo,
            img1: galileo1,
            img2: galileo,
            img3: galileo1,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 21490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.50m',
            diametro: '44cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Gayatri',
            img: gayatri,
            img1: gayatri1,
            img2: gayatri2,
            img3: gayatri1,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.67m',
            diametro: 'nn',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Lino - Venecia.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'George',
            img: george,
            img1: george1,
            img2: george,
            img3: george1,
        
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 23900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.76m',
            diametro: '0.45 x 0.31 x 0.40cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Venecia.',
            ColoresPantalla: 'Venecia crudo - negro.',
            },
            {
            nombre: 'Habernas',
        
            img: habernas,
            img1: habernas1,
            img2: habernas,
            img3: habernas1,
            
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 16040,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '65cm',
            diametro: '25cm',
            Tipodelampara: 'nn.',
            madera: 'Cedro.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Hegel',
        
            img: hegel,
            img1: hegel1,
            img2: hegel,
            img3: hegel1,
        
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 23900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '60cm',
            diametro: '14 x 12cm',
            Tipodelampara: '',
            madera: 'Cedro.',
            pantallas: 'Chapa.',
            ColoresPantalla: 'Varios.',
            },
            {
            nombre: 'Heraclito',
        
            img: heraclito,
            img1: heraclito1,
            img2: heraclito,
            img3: heraclito2,
        
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 31900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.20m',
            diametro: '',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Pantallas Metal.',
            ColoresPantalla: '',
            },
            {
            nombre: 'Hobbes',
        
            img: hobbes,
            img1: hobbes1,
            img2: hobbes,
            img3: hobbes2,
            
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 9490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '55cm',
            diametro: '18 x 15cm',
            Tipodelampara: '',
            madera: 'Cedro.',
            pantallas: 'Chapa.',
            ColoresPantalla: 'Varios.',
            },
            {
            nombre: 'Immanuel',
        
            img: inmanuel,
            img1: inmanuel1,
            img2: inmanuel,
            img3: inmanuel1,
            
            categoria: "infantil",
            portada: false,
            stock: 18,
            precio: 7700,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '40cm',
            diametro: '16 x 15cm',
            Tipodelampara: '',
            madera: 'Cedro.',
            pantallas: 'Lino.',
            ColoresPantalla: 'Infantiles.',
            },
            {
            nombre: 'John Locke',
        
            img: jhonLocke,
            img1: jhonLocke1,
            img2: jhonLocke,
            img3: jhonLocke1,
        
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 26900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.67m',
            diametro: '0.39 x 0.25cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Chapa.',
            ColoresPantalla: 'Varios.',
            },
            {
            nombre: 'Judith',
        
            img: judith,
            img1: judith1,
            img2: judith2,
            img3: judith3,
        
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.39m',
            diametro: '',
            Tipodelampara: '',
            madera: 'Cedro',
            pantallas: 'chapa pintada.',
            ColoresPantalla: 'Negro, blanco, dorado, plateado y cobre (consultar por mas colores).',
            },
            {
            nombre: 'Jurgen',
            img: jurgen,
            img1: jurgen1,
            img2: jurgen,
            img3: jurgen1,
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 16040,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.34m',
            diametro: '',
            Tipodelampara: '',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Maquiavelo',
        
            img: maquiavelo,
            img1: maquiavelo1,
            img2: maquiavelo,
            img3: maquiavelo2,
            
            categoria: "lampara de pie",
            portada: true,
            stock: 18,
            precio: 29900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.90m a 1.50m',
            diametro: '0.20 x 0.18',
            Tipodelampara: 'Led.',
            madera: 'Cedro.',
            pantallas: 'Metal.',
            ColoresPantalla: 'Metal, dorado y negro.',
            },
            {
            nombre: 'Martha',
        
            img: martha,
            img2: martha,
            img3: martha,
            img4: martha,
            
            categoria: "colgante",
            portada: false,
            stock: 18,
            precio: 21000,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.10m x 0.70m',
            diametro: '',
            Tipodelampara: 'Dicroica.',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Michel',
        
            img: michel,
            img1: michel,
            img2: michel,
            img3: michel,
            
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 23900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.62m',
            diametro: '44 x 23cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro con detalles en chapa prepintada.',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Nasbaum',
            
            img: nasbaumm,
            img1: nasbaumm,
            img2: nasbaumm,
            img3: nasbaumm,
            
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 7900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.46m',
            diametro: '',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Noam',
            
            img: noam,
            img1: noam,
            img2: noam,
            img3: noam,
            
            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 14900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '52cm',
            diametro: '30 x 10cm',
            Tipodelampara: '',
            madera: 'Cedro',
            pantallas: 'Tela.',
            ColoresPantalla: 'Negro',
            },
            {
            nombre: 'Pitagora',
        
            img: pitagora,
            img1: pitagora,
            img2: pitagora,
            img3: pitagora,
            
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 22490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.55m',
            diametro: '44cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Platon',
        
            img: platon,
            img1: platon1,
            img2: platon2,
            img3: platon3,
        
            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 19900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.25 m',
            diametro: '35 cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Tales de Mileto',

            img: talesDeMileto,
            img1: talesDeMileto2,
            img2: talesDeMileto,
            img3: talesDeMileto2,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 28900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.60 m',
            diametro: '44cm',
            Tipodelampara: 'Led, dos focos',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Socrates',
        
            img: socrates,
            img1: socrates1,
            img2: socrates2,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 20490,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.50 m',
            diametro: '44 cm',
            Tipodelampara: 'Led.',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera.',
            ColoresPantalla: 'Negro, blanco y crudo (Consultar variedades).',
            },
            {
            nombre: 'Tittman',
        
            img: tittman,
            img1: tittman2,
            img2: tittman3,
            img3: tittman4,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 30000,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.90 m - con pie extensible',
            diametro: '1.50 m',
            Tipodelampara: 'AR-111',
            madera: 'Cedro',
            pantallas: 'Metal - Dorado - Negro.',
            ColoresPantalla: '',
            },
            {
            nombre: 'Slokar',
        
            img: slokar,
            img1: slokar1,
            img2: slokar2,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 34900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '0.90 m',
            diametro: '1.50 m',
            Tipodelampara: 'led 1 und de 14W',
            madera: 'Cedro',
            pantallas: 'Metal - Dorado - Negro',
            ColoresPantalla: '',
            },
            {
            nombre: 'Protagora',
        
            img: Protagora,
            img1: Protagora1,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 34900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.55 m',
            diametro: '0.44 x 0.23 cm',
            Tipodelampara: 'led 1 und',
            madera: 'Cedro',
            pantallas: 'Lino - Arpillera',
            ColoresPantalla: 'Blanco - Negro - Crudo',
            },
            {
            nombre: 'Zizek',
        
            img: zizek,
            img1: zizek1,
            img2: zizek2,
            img3: zizek,

            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 10900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '52 cm',
            diametro: '',
            Tipodelampara: 'led 1 und',
            madera: 'Cedro',
            pantallas: 'Chapa pintada',
            ColoresPantalla: 'Blanco - Negro - Crudo - Plateado',
            },
            {
            nombre: 'Plotino',
        
            img: plotino,
            img1: plotino1,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 23900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '1.58 m',
            diametro: '0.36 x 0.20 cm',
            Tipodelampara: 'led 1 und',
            madera: 'Cedro',
            pantallas: 'Lino - arpillera',
            ColoresPantalla: 'Blanco - Negro - Crudo - arpillera',
            },
            {
            nombre: 'Eslavoj',
        
            img: eslavoj,
            img1: eslavoj1,
            img2: eslavoj2,

            categoria: "colgante",
            portada: false,
            stock: 18,
            precio: 21000,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '',
            diametro: '0.25 x 0.60 cm',
            Tipodelampara: 'Tubo fluorescente LED - 2 und',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Spiva',
        
            img: spiva,
            img1: spiva1,
            img2: spiva2,

            categoria: "colgante",
            portada: false,
            stock: 18,
            precio: 20000,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '',
            diametro: '0.10m x 0.60 m',
            Tipodelampara: 'Dicroica - 3 und',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Seneca',
        
            img: seneca,
            img1: seneca,
            img2: seneca,
            img3: seneca,

            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 9900,
            caracteristica: "Trabajada en madera de cedro en chapa prepintada.",
            alto: '0.39 m',
            diametro: '0.21 m',
            Tipodelampara: 'Vela - No incluida',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Taylor',
        
            img: taylor,
            img1: taylor1,
            img2: taylor2,
            img3: taylor3,

            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 16900,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '78 cm',
            diametro: '25 cm',
            Tipodelampara: 'Led - 2 und',
            madera: 'Cedro',
            pantallas: 'Lino',
            ColoresPantalla: 'Negro - Blanco y Crudo (Consultar variedades).',
            },
            {
            nombre: 'Voltaire',
        
            img: voltaire,

            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro.",
            alto: '46 cm',
            diametro: '',
            Tipodelampara: 'Luz bola de carbono',
            madera: 'Cedro',
            pantallas: '',
            ColoresPantalla: '',
            },
            {
            nombre: 'Rosseau',
        
            img: rosseau,

            categoria: "escritorio",
            portada: false,
            stock: 18,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro con detalles en chapa prepintada.",
            alto: '46 cm',
            diametro: '0.20 x 0.16 m',
            Tipodelampara: 'Led - 1 und',
            madera: 'Cedro',
            pantallas: 'Lino - Venecia',
            ColoresPantalla: 'Consultar colores disponibles',
            },
            {
            nombre: 'Qatar',
        
            img: rosseau,

            categoria: "lampara de pie",
            portada: false,
            stock: 18,
            precio: 8500,
            caracteristica: "Trabajada en madera de cedro, prepintada en color blanco.",
            alto: '1.60 m',
            diametro: '0.48 x 0.43 m',
            Tipodelampara: 'Led - 1 und',
            madera: 'Cedro',
            pantallas: 'Lino - Tela de gros',
            ColoresPantalla: 'Negro - Blanco y Crudo (Consultar variedades).',
            },
    ]

    const miColeccion = collection(firestoreDB, 'lamparas');
    PRODUCTS.forEach((item) =>{
        const newDoc = doc(miColeccion);
        setDoc(newDoc, item)
        .then(()=>{
            console.log("document written with id: ",newDoc.id)
        })
        .catch(err =>{
            console.log("error", err);
        });
    });
}

export async function createBuyOrder (orderData){
    const buyTimestamp = Timestamp.now();
    const orderConFecha = 
        {...orderData, 
            date: buyTimestamp
            };
    
    const miColec = collection(firestoreDB, "buyOrders");
    const orderDoc = await addDoc(miColec, orderConFecha);        
    console.log("orden lista;", orderDoc.id);
    console.log("orden lista;", orderDoc.data());
}

export  async function sendCustomEmail(email, subject, body) {
	const collectionRef = collection(firestoreDB, 'emailNotificaciones');
	const emailContent = {
		to: email,
		message: {
			subject: subject,
			text: body,
			html: `<p>${body}</p>`,
		},
	};
	console.log('listo para ser enviado');
	return await addDoc(collectionRef, emailContent);
}


//<button onClick={dataToFirebase}>add to firebase</button>

/*
import { useState } from 'react';
import sendCustomEmail from '../componentes/data/formHooks';

function ContactUs() {
	function submitHandler(e) {
		e.preventDefault();
		let correo = e.target.correo.value;
		let asunto = e.target.asunto.value;
		let texto = e.target.texto.value;
		sendCustomEmail(correo, asunto, texto);
		correo = asunto = texto = '';
	}

	return (
		<>
			<h1>Envía correo</h1>
			<form onSubmit={submitHandler}>
				<input type="text" name="correo" placeholder="Escribe la dirección" />
				<input type="text" name="asunto" placeholder="Escribe el asunto" />
				<input type="text" name="texto" placeholder="Escribe el texto" />

				<button type="submit">Enviar Correo</button>
			</form>
		</>
	);
}
export default ContactUs
*/