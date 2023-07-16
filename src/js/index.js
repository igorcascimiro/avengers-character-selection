const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {

    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }

        const personagemselecionado = document.querySelector('.selecionado');
        personagemselecionado.classList.remove('selecionado');

        const nomegrande = document.querySelector('.nome-grande');
        const nomegrandecorreto = personagem.getAttribute('data-name');
        nomegrande.textContent = nomegrandecorreto;

        const descricaogrande = document.querySelector('.descricao-grande');
        const descricaograndecorreto = personagem.getAttribute('data-description');
        descricaogrande.textContent = descricaograndecorreto;

        const imagemgrande = document.querySelector('.personagem-grande');
        const imagemgrandecorreto = personagem.attributes.id.value
        imagemgrande.src = `./src/imagens/${imagemgrandecorreto}.png`;

        personagem.classList.add('selecionado');

    })
})


