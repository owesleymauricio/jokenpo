function jogar() {
    if (document.querySelector('#pedra').checked == false && document.querySelector('#tesoura')
        .checked == false && document.querySelector('#papel').checked == false) {
        alert('escolha uma opção')
    } else {
        var sorteio = Math.floor(Math.random() * 2)

        switch (sorteio) {
            case 0:
                document.querySelector('#pedra')
                break;
            case 1:
                document.querySelector('#papel')
                break;
            case 2:
                document.querySelector('#tesoura')
                break;
            default:
                break;
        }


        //empate
        if ((document.getElementById("pedra").checked == true && sorteio == 0) || (document.getElementById("papel").checked == true && sorteio == 1) ||
            (document.getElementById("tesoura").checked == true && sorteio == 2)) {
            document.getElementById("placar").innerHTML = "Empate";
            document.getElementById("placar").style.color = "orange";
            //jogador venceu
        } else if ((document.getElementById("pedra").checked == true && sorteio == 2) || (document.getElementById("papel").checked == true && sorteio == 0) ||
            (document.getElementById("tesoura").checked == true && sorteio == 1)) {
            document.getElementById("placar").innerHTML = "Você venceu";
            document.getElementById("placar").style.color = "blue";
            //computador venceu
        } else {
            document.getElementById("placar").innerHTML = "Computador venceu";
            document.getElementById("placar").style.color = "red";
        }
    }
}

function reset() {

    document.getElementById("placar").innerHTML = " ";
}