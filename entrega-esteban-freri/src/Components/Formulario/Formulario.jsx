// import './Formulario.css';
// import { db } from "../services/firebase/config"
// import { useState } from "react";
// import { collection, addDoc } from "firebase/firestore"


//     const Formulario = () => {
//         const [nombre, setNombre] = ("");
//         const [apellido, setApellido] = ("");
//         const [email, setEmail] = ("");
//         const [consulta, setConsulta] = ("");

//         //3)creamos una funcion manejadora del formulario.
//         const manejadorFormulario = (event) => {
//             event.preventDefault();
//             addDoc(collection(db, "Observaciones"), {
//                 nombre: nombre,
//                 apellido: apellido,
//                 email: email,
//                 consulta: consulta,
//             })
//             setNombre("");
//             setApellido("");
//             setEmail("");
//             setConsulta("");
//         }

//         return (

//             <form onSubmit={manejadorFormulario}>
//                 <label htmlFor="">Nombre</label>
//                 <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />

//                 <label htmlFor="">Apellido</label>
//                 <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />

//                 <label htmlFor="">Email</label>
//                 <input type="text" value={email} onChange={(event) => setEmail(event.target.value)} />


//                 <label htmlFor="">Email</label>
//                 <input type="text" value={consulta} onChange={(event) => setConsulta(event.target.value)} />
//                 <button type="submit"> Enviar </button>
//             </form>

//         )
//     }

//     export default Formulario
