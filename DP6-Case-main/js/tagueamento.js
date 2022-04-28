(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');

// Menu entre em contato
try {
    (function() {
        document.querySelector('li > a.menu-lista-contato').addEventListener('click', (event) => {
            ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo'); 
        })
    })()
} catch (e) {
    console.error
}

// Menu Dowload PDF
try {
    (function() {
        document.querySelector('li > a.menu-lista-download').addEventListener('click', (event) => {
            ga('send', 'event', 'menu', 'download_pdf', 'download_pdf'); 
        })
    })()
} catch (e) {
    console.error
}

// Botões analise
try {
    (function() {
        document.querySelectorAll('div.cards-montadoras > div').forEach((element) => {
            element.addEventListener('click', (evt) => {
                ga('send', 'event', 'analise', 'ver_mais', element.getAttribute('data-name')); 
            })
        })
    })()
}catch (e) {
    console.error
}

// Campos do formulário
try {
    (function() {
        document.querySelectorAll('form.contato > ul > li > input').forEach((element) => {
            element.addEventListener('change', (evt) => {
                ga('send', 'event', 'contato', element.getAttribute('id'), 'preencheu');
            })
        })
        
    })()
}catch (e) {
    console.error
}

