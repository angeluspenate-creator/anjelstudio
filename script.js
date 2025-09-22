document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle functionality
    const hamburger = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.navbar a').forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            // Asegúrate de que el objetivo existe antes de hacer scroll
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevents default form submission

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const trabajo = document.getElementById('trabajo').value;
            const mensaje = document.getElementById('mensaje').value;

            // Construir el mensaje para WhatsApp (o correo)
            // En este caso, lo enviaremos a WhatsApp, como en tu solicitud original
            const whatsappNumber = '50371784190'; // Tu número de WhatsApp
            const customMessage = `Hola ANJEL STUDIO, me gustaría contactarte.
            \nNombre: ${nombre}
            \nEmail: ${email}
            \nTipo de trabajo: ${trabajo}
            \nMensaje: ${mensaje || 'No hay mensaje adicional.'}`;
            
            const encodedMessage = encodeURIComponent(customMessage);
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
            
            // Abrir WhatsApp en una nueva pestaña
            window.open(whatsappUrl, '_blank');

            // Opcional: También podrías enviar un correo electrónico si prefieres
            // const mailtoLink = `mailto:jorge@ruva.mx?subject=Consulta de Proyecto&body=${encodedMessage}`;
            // window.location.href = mailtoLink;

            // Opcional: Limpiar el formulario después de enviar
            contactForm.reset();
            alert('¡Tu mensaje ha sido enviado! Te redirigiremos a WhatsApp para finalizar el contacto.');
        });
    }
});