let string = ''
let form = document.querySelector('form')

form.addEventListener('submit', function(evento) {
    evento.preventDefault()
    let item
    for(let i = 0; i < this.elements.length - 1; i++) {
        item = this.elements[i]
        string = item.value
        string = string.trim()
        if(!string) {
            item.classList.add('erro')
        } else {
            item.classList.remove('erro')
            item.classList.remove('erro2')
        }
    }
})


for(let i of form.elements) {
    if(i.type !== 'submit') {
        i.addEventListener('keyup', function(){
            string = i.value
            string = string.trim()
            if(!string){
                i.value = ''
                i.setAttribute('placeholder', 'Preencha este campo')
                i.classList.add('erro2')
            } else {
                i.classList.remove('erro')
                i.classList.remove('erro2')
            }
        })
    }
}

