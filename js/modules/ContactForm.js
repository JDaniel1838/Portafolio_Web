export default function ContactForm() {
    const $form = document.querySelector(".ResetearForm"),
        $textArea = document.querySelector(".ValidarTextArea");

    
    console.log($textArea);
    
    
    /* Codigo para cuando se le da click a textArea */
    /* document.addEventListener("keyup", (e) => {
        if (e.target.matches(".ValidarTextArea")) {
            let Longitud = $textArea.value;

            console.log(Longitud);
            if (Longitud.length>=200) {
                
            }
        }
    }); */

    document.addEventListener("submit", (e) => {
        e.preventDefault();

        const $response = document.querySelector(".ContainerMsg"),
            $h5Response = document.getElementById("TituloDivMsgSend");
        $response.classList.remove("animate__bounceOutUp");
        $response.classList.add("animate__bounceInUp");
        

        fetch("https://formsubmit.co/ajax/j.danielesp8062@gmail.com",{
                method:"POST",
                body:new FormData(e.target)
            })
            .then(res=>res.ok?res.json():Promise.reject(res))
            .then(json=>{
                console.log(json);
                $response.classList.remove("none"),
                $h5Response.textContent= json.success? `Mensaje Enviado`:`<p>No se pudo mandar el mensaje </p>`;
                $form.reset();
            })
            .catch((err)=>{
                console.log(err);
                $h5Response.textContent=`<p>Error ${err.status}: ${err.message}</p>`
            }).finally(()=>{
                
            });
    });


}