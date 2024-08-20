import { getDatos } from "../hooks/fetch"
let nombre = document.getElementById("nombre")
let correo = document.getElementById("correo")
let clave = document.getElementById("clave")
let ingresar = document.getElementById("ingresar")

ingresar.addEventListener("click", async() => {
    let info = await getDatos()
    if (nombre.value==="" || correo.value==="" || clave.value==="") {
        //sweet alert
        }
        })
        
        let datos = {
            nombre: nombre.value,
            correo: correo.value,
            clave: clave.value,
        }