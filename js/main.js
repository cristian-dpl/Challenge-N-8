const css = ["/css/estilos.css", "/css/estilos-urbano.css", "/css/estilos-futuro.css"]
let contador = 0;
const link = document.getElementsByTagName("link");
const onClick = () => {
    contador++
    if (contador > 2) {
        contador = 0
        
    }
    link[0].href = css[contador]
    console.log(link[0].href)
}
