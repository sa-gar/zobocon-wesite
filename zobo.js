 
        // Mobile Menu Toggle
        function toggleMenu() {
            const navMenu = document.getElementById('navMenu');
            const menuToggle = document.getElementById('menuToggle');
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        }

        // Close menu when link is clicked
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', function () {
                document.getElementById('navMenu').classList.remove('active');
                document.getElementById('menuToggle').classList.remove('active');
            });
        });

        function submitForm() {
            const name = document.getElementById('name').value;
            const company = document.getElementById('company').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const message = document.getElementById('message').value;

            if (!name || !company || !email || !phone || !message) {
                alert('Please fill all fields');
                return;
            }

            // Create WhatsApp message
            const whatsappMessage = `Hello Zobocon! I'd like to inquire about your painting services.\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;
            const whatsappUrl = `https://wa.me/917676024024?text=${encodeURIComponent(whatsappMessage)}`;

            window.open(whatsappUrl, '_blank');

            // Clear form
            document.getElementById('name').value = '';
            document.getElementById('company').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('message').value = '';
        }

        // Smooth scroll behavior for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function (event) {
            const nav = document.querySelector('nav');
            const menuToggle = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navMenu');

            if (!nav.contains(event.target) && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
   