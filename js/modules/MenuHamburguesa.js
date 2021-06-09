const Boton = document.getElementById("menuHamburger"),
    Display = document.querySelector(".MenuVertical");

let Activo = false;

export default function MenuHamburguesa() {
    Boton.addEventListener("click", (e) => {
        if (!Activo) {
            
            Display.classList.add("activo");
            Activo = true;
            Display.classList.add("animate__fadeInRight");
            setInterval(() => {
                Display.classList.remove("animate__fadeInRight");
            }, 1000);
        } else {
            

            Display.classList.add("animate__fadeOutRight");

            setTimeout(() => {
                Display.classList.remove("activo");
                Display.classList.remove("animate__fadeOutRight");
            }, 1000);
            
            Activo = false;
        }
    });



}
