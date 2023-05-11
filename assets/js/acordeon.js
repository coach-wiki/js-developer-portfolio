


///Adiciona a Class (Open) ON click 

const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        acordeon.classList.toggle('open')               //DOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOM
    })
})
