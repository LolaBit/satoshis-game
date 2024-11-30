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
                    <h2>Nombre: Lionel Mancini</h2>
                    <p><strong>Edad:</strong> 34 años</p>
                    <p><strong>Origen:</strong> Rosario, Argentina</p>
                    <p><strong>Ocupación:</strong> Economista</p>
                    <h3>Historia:</h3>
                    <p>Lionel Mancini es un Economista que ha sido reconocido por primera vez gracias al éxito del presidente Javier Milei. Pese a esto su moneda se sigue devaluando y ha sufrido controles de capital y la necesidad de usar las "Cuevas".</p>
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
