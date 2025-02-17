const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container form');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

   // Fonction pour ouvrir le popup
        function openQRPopup() {
            document.getElementById('qrPopup').style.display = 'flex';
        }

        // Fonction pour fermer le popup
        function closeQRPopup() {
            document.getElementById('qrPopup').style.display = 'none';
        }

        // Ajouter les événements click sur les icônes QR code
        document.querySelectorAll('.qr-code').forEach(qrButton => {
            qrButton.addEventListener('click', openQRPopup);
        });

        // Fermer le popup en cliquant sur l'overlay
        document.getElementById('qrPopup').addEventListener('click', function(e) {
            if (e.target === this) {
                closeQRPopup();
            }
        });