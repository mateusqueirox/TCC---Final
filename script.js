document.addEventListener('DOMContentLoaded', function () {
    let count = 0;

    // Criar contador fixo do carrinho no canto superior direito, um pouco mais para baixo
    const cartCounter = document.createElement('div');
   cartCounter.style.position = 'fixed';
cartCounter.style.top = '50%';         // meio vertical da tela
cartCounter.style.left = '20px';       // 20px do lado esquerdo
cartCounter.style.transform = 'translateY(-50%)'; // para centralizar verticalmente exato
cartCounter.style.backgroundColor = '#572822';
cartCounter.style.color = 'white';
cartCounter.style.padding = '8px 15px';
cartCounter.style.borderRadius = '20px';
cartCounter.style.fontWeight = 'bold';
cartCounter.style.fontSize = '16px';
cartCounter.style.zIndex = '10000';
cartCounter.style.display = 'flex';
cartCounter.style.alignItems = 'center';
cartCounter.style.gap = '8px';
cartCounter.style.cursor = 'default';

    // Ícone de carrinho simples com emoji
    cartCounter.innerHTML = '🛒 <span id="cart-count">0</span>';
    document.body.appendChild(cartCounter);

    const books = document.querySelectorAll('.col-4');

    books.forEach(function (book) {
        book.style.cursor = 'pointer';

        // Previne clique do link e adiciona ao carrinho
        book.addEventListener('click', function (event) {
            event.preventDefault(); // Impede links dentro do .col-4 de abrir
            event.stopPropagation(); // Para propagação caso necessário

            const tituloElement = book.querySelector('h4');
            const titulo = tituloElement ? tituloElement.innerText : 'Livro';

            count++;
            document.getElementById('cart-count').textContent = count;

            mostrarMensagem(`"${titulo}" adicionado ao carrinho!`);
        });
    });

    function mostrarMensagem(texto) {
        // Container geral da mensagem
        const mensagem = document.createElement('div');
        mensagem.style.position = 'fixed';
        mensagem.style.bottom = '20px';
        mensagem.style.right = '20px';
        mensagem.style.backgroundColor = '#572822';
        mensagem.style.color = 'white';
        mensagem.style.padding = '15px 20px';
        mensagem.style.borderRadius = '8px';
        mensagem.style.boxShadow = '0 4px 12px rgba(0,0,0,0.4)';
        mensagem.style.zIndex = '10001';
        mensagem.style.display = 'flex';
        mensagem.style.alignItems = 'center';
        mensagem.style.gap = '12px';
        mensagem.style.minWidth = '250px';
        mensagem.style.fontSize = '16px';
        mensagem.style.fontWeight = '500';

        // Texto da mensagem
        const textoSpan = document.createElement('span');
        textoSpan.textContent = texto;

        // Botão fechar
        const btnFechar = document.createElement('button');
        btnFechar.textContent = '✖';
        btnFechar.style.background = 'transparent';
        btnFechar.style.border = 'none';
        btnFechar.style.color = 'white';
        btnFechar.style.fontSize = '18px';
        btnFechar.style.cursor = 'pointer';
        btnFechar.style.padding = '0';
        btnFechar.style.margin = '0';
        btnFechar.style.lineHeight = '1';

        btnFechar.addEventListener('click', () => {
            mensagem.remove();
        });

        mensagem.appendChild(textoSpan);
        mensagem.appendChild(btnFechar);
        document.body.appendChild(mensagem);

        // Desaparece automaticamente após 5 segundos
        setTimeout(() => {
            if (document.body.contains(mensagem)) {
                mensagem.remove();
            }
        }, 5000);
    }

    // Botão de voltar ao topo
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerText = '↑ Topo';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.backgroundColor = '#572822';
    scrollToTopButton.style.color = 'white';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '5px';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.zIndex = '999';

    document.body.appendChild(scrollToTopButton);

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
