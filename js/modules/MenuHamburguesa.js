const Boton = document.getElementById("menuHamburger"),
    Display = document.querySelector(".MenuVertical"),
    BtnCard = document.getElementById("MsgEnviadoBtn"),
$response = document.querySelector(".ContainerMsg");

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

    BtnCard.addEventListener("click", (e) => {
        $response.classList.remove("animate__bounceInUp");
        $response.classList.add("animate__bounceOutUp");

        setTimeout(() => {
            $response.classList.add("none");
        }, 2000);

    });


}
