const Boton = document.getElementById("menuHamburger"),
    Display = document.querySelector(".MenuVertical");

let Activo = false;

export default function MenuHamburguesa() {
    Boton.addEventListener("click", (e) => {
        if (!Activo) {
            
            Display.classList.add("activo");
            Activo = true;
            
        } else {
            Display.classList.remove("activo");
            
            Activo = false;
        }
    });



}
