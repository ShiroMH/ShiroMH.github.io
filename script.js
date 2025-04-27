        // Crear estrellas aleatorias
        const estrellasContainer = document.getElementById('estrellas');
        for (let i = 0; i < 200; i++) {
            const estrella = document.createElement('div');
            estrella.classList.add('estrella');
            
            const size = Math.random() * 2;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const opacity = Math.random() * 0.5 + 0.1;
            const duration = Math.random() * 5 + 3;
            
            estrella.style.width = `${size}px`;
            estrella.style.height = `${size}px`;
            estrella.style.left = `${x}%`;
            estrella.style.top = `${y}%`;
            estrella.style.opacity = opacity;
            estrella.style.animationDuration = `${duration}s`;
            
            estrellasContainer.appendChild(estrella);
        }
        
        // Efecto de corazones al pasar el cursor por los botones
        const botones = document.querySelectorAll('.boton-quantum, .enlace-constelacion, #boton-corazones');
        
        botones.forEach(boton => {
            boton.addEventListener('mousemove', (e) => {
                for (let i = 0; i < 5; i++) {
                    const corazon = document.createElement('div');
                    corazon.classList.add('corazon-flotante');
                    corazon.innerHTML = '❤️';
                    
                    const x = e.clientX - 10 + (Math.random() * 20);
                    const y = e.clientY - 10 + (Math.random() * 20);
                    
                    corazon.style.left = `${x}px`;
                    corazon.style.top = `${y}px`;
                    
                    document.body.appendChild(corazon);
                    
                    setTimeout(() => {
                        corazon.remove();
                    }, 3000);
                }
            });
        });
        
        // Efecto de partículas para elementos importantes
        const elementosConParticulas = document.querySelectorAll('.titulo-galactico, .boton-quantum, .tarjeta-holograma');
        
        elementosConParticulas.forEach(elemento => {
            elemento.addEventListener('mousemove', (e) => {
                const particula = document.createElement('div');
                particula.classList.add('particula');
                
                const x = e.clientX - elemento.getBoundingClientRect().left;
                const y = e.clientY - elemento.getBoundingClientRect().top;
                
                const size = Math.random() * 5 + 2;
                const opacity = Math.random() * 0.5 + 0.3;
                
                particula.style.width = `${size}px`;
                particula.style.height = `${size}px`;
                particula.style.left = `${x}px`;
                particula.style.top = `${y}px`;
                particula.style.opacity = opacity;
                
                elemento.appendChild(particula);
                
                setTimeout(() => {
                    particula.style.transform = `translate(${Math.random() * 40 - 20}px, ${Math.random() * 40 - 20}px)`;
                    particula.style.opacity = '0';
                }, 10);
                
                setTimeout(() => {
                    particula.remove();
                }, 1000);
            });
        });
        
        // Botón de corazones flotante
        document.getElementById('boton-corazones').addEventListener('click', () => {
            for (let i = 0; i < 20; i++) {
                const corazon = document.createElement('div');
                corazon.classList.add('corazon-flotante');
                corazon.innerHTML = '❤️';
                
                const x = Math.random() * window.innerWidth;
                const y = window.innerHeight + 50;
                
                corazon.style.left = `${x}px`;
                corazon.style.top = `${y}px`;
                corazon.style.fontSize = `${Math.random() * 2 + 1.5}rem`;
                
                document.body.appendChild(corazon);
                
                setTimeout(() => {
                    corazon.remove();
                }, 3000);
            }
        });