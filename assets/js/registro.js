var registro = '<div class="modal-div" id="modal"><div class="modal"><div class="modal__fechar"><div class="modal__fechar--botao" id="fechar"><a class="modal__fechar--botao-text">close</a></div></div><div class="modal__logo"><div class="modal__logo--imagem"><img src="assets/img/logo_modal.png" class="modal__logo--imagem-logo"></div></div><div class="modal__formulario"><div class="modal__formulario--form"><form action="" class="modal__formulario--form_init"><label for="" class="modal__formulario--form_init-username-title">Username</label><input type="email" class="modal__formulario--form_init-username-input" placeholder="@seunome"><label for="" class="modal__formulario--form_init-password-title">Password</label><input type="text" class="modal__formulario--form_init-password-input" placeholder="Senha123"></form></div><div class="modal__formulario--botao"><button class="modal__formulario--botao-botao">Register</button></div></div><div class="modal__recover"><div class="modal__recover--login-menu"><a href="#" class="modal__recover--login-menu_item item-1">Login</a><a href="#" class="modal__recover--login-menu_item item-2">Lost your password?</a></br></div><p class="modal__recover--login-menu-back item-3"><a href="#" class="modal__recover--login-menu_item" id="back"> ← Back</a></p></div></div></div>'
var botaoregistro = document.getElementById('registrar')
var corpo =  document.getElementById('body')

function clicks(){

    botaoregistro.addEventListener('click', ()=>{
        criarmodal()
        fechar.addEventListener('click', ()=>{
            removermodal()
            atualiza()
        })

        back.addEventListener('click', ()=>{
            removermodal()
            atualiza()
        })
    })
}

function criarmodal(){
    corpo.innerHTML = registro + corpo.innerHTML
    var fechar =  document.getElementById('fechar')
    var back =  document.getElementById('back')
}

function removermodal(){
    var modal = document.getElementById('modal')
    modal.remove()
}

function atualiza(){
    botaoregistro = document.getElementById('registrar')
    corpo =  document.getElementById('body')
    clicks()
}

clicks()