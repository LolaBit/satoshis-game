document.addEventListener('DOMContentLoaded', () => {
    const characters = document.querySelectorAll('.character');
    const characterInfo = document.getElementById('character-info');

    characters.forEach(character => {
        character.addEventListener('click', () => {
            const bioId = character.getAttribute('data-bio');
            displayBio(bioId);
        });

        character.addEventListener('mouseover', () => {
            const bioId = character.getAttribute('data-bio');
            displayBio(bioId);
        });

        character.addEventListener('mouseleave', () => {
            characterInfo.classList.remove('visible');
        });
    });

    function displayBio(bioId) {
        let bioContent = '';

        switch(bioId) {
            case 'bio1':
                bioContent = `
                    <h2>Nombre: Nicolas Vargas</h2>
                    <p><strong>Edad:</strong> 32 años</p>
                    <p><strong>Origen:</strong> Caracas, Venezuela</p>
                    <p><strong>Ocupación:</strong> Ingeniero en Sistemas, reconvertido a repartidor y comerciante informal</p>
                    <h3>Historia:</h3>
                    <p>Nicolas vive en Venezuela, escuchando historias de su familia sobre una vieja Venezuela próspera, el sueña pon soñaba con trabajar en el sector tecnológico sin embargo enfrenta diariamente la corrupción de sus dirigentes quienes han abusado del control del Banco Central.</p>
                `;
                break;
            case 'bio2':
                bioContent = `
                    <h2>Nombre: Lionel Messi</h2>
                    <p><strong>Edad:</strong> 34 años</p>
                    <p><strong>Origen:</strong> Rosario, Argentina</p>
                    <p><strong>Ocupación:</strong> Futbolista Profesional</p>
                    <h3>Historia:</h3>
                    <p>Lionel Messi es uno de los mejores jugadores de fútbol de todos los tiempos. Ha jugado la mayor parte de su carrera en el FC Barcelona, donde ha ganado numerosos títulos y premios individuales. Actualmente, juega para el Paris Saint-Germain y la selección argentina, con la que ganó la Copa América en 2021.</p>
                `;
                break;
            case 'bio3':
                bioContent = `
                    <h2>Nombre: Gabriela Medina</h2>
                    <p><strong>Edad:</strong> 29 años</p>
                    <p><strong>Origen:</strong> Quito, Ecuador</p>
                    <p><strong>Ocupación:</strong> Abogada y Activista</p>
                    <h3>Historia:</h3>
                    <p>Gabriela Medina es una abogada y activista comprometida con la defensa de los derechos humanos en Ecuador. Ha trabajado en varias organizaciones no gubernamentales y ha liderado campañas contra la corrupción y por la igualdad de género.</p>
                `;
                break;
        }

        characterInfo.innerHTML = bioContent;
        characterInfo.classList.add('visible');
    }
});
