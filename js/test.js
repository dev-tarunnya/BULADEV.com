
    
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#0000CD',
                        'primary-dark': '#000099',
                        'primary-light': '#3333FF',
                        secondary: '#8B2323',
                        'secondary-dark': '#6B1A1A',
                        'secondary-light': '#A52D2D',
                        gold: '#FEE469',
                        'gold-dark': '#E6CF5A',
                        'gold-light': '#FFF0A0',
                        cream: '#FDFBF7',
                        'warm-gray': '#F5F3EF',
                        'dark-text': '#1A1A2E',
                        'body-text': '#4A4A5A',
                    },
                    fontFamily: {
                        'display': ['Playfair Display', 'Georgia', 'serif'],
                        'body': ['Inter', 'system-ui', 'sans-serif'],
                    }
                }
            }
        }
    

    
        const projects = [
            { title: "Residential Renovation", category: "Residential", subtitle: "Complete home transformation", image: "https://picsum.photos/seed/residential-renovation/900/500.jpg", description: "This residential renovation project transformed an outdated home into a modern living space. The project included kitchen and bathroom renovations, new flooring, interior painting, and exterior improvements. Our professional project management ensured the project stayed on schedule and within budget." },
            { title: "Commercial Build-Out", category: "Commercial", subtitle: "Office space renovation", image: "https://picsum.photos/seed/office-buildout/900/500.jpg", description: "A complete commercial build-out for a new office space, including interior construction, flooring, lighting, and finishes. The project was completed with minimal disruption to neighboring tenants and delivered on schedule for the client's move-in date." },
            { title: "Land Development Preparation", category: "Development", subtitle: "Site preparation & grading", image: "https://picsum.photos/seed/land-prep-site/900/500.jpg", description: "Comprehensive land development preparation including site clearing, grading, utility coordination, and access planning. This project prepared the site for future commercial construction, with careful attention to drainage and environmental considerations." },
            { title: "New Home Construction", category: "Residential", subtitle: "Custom home build", image: "https://picsum.photos/seed/new-home-build/900/500.jpg", description: "A new custom home construction project built to the client's specifications. The project included foundation work, framing, HVAC, electrical, plumbing, interior finishes, and landscaping. Our team managed every phase from planning to final walkthrough." },
            { title: "Tenant Improvement", category: "Commercial", subtitle: "Retail space build-out", image: "https://picsum.photos/seed/retail-tenant-improve/900/500.jpg", description: "A retail tenant improvement project that transformed a raw commercial space into a professional retail environment. Work included interior construction, display areas, storage, customer spaces, and all necessary building systems." },
            { title: "Exterior Property Improvement", category: "Development", subtitle: "Site enhancement project", image: "https://picsum.photos/seed/exterior-property/900/500.jpg", description: "An exterior property improvement project that enhanced curb appeal, accessibility, and functionality. Work included parking area improvements, landscaping, exterior lighting, signage areas, and access improvements." }
        ];

        const legalData = {
            privacy: {
                title: "Privacy Policy",
                content: `<p><strong>Last Updated:</strong> January 1, 2025</p>
                <p>BULADEV Building & Land Development ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Information We Collect</h4>
                <p>We may collect information that you voluntarily provide to us when you: fill out a contact form, request a consultation, request a quote, or communicate with us. This may include your name, email address, phone number, project type, project location, and project details.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">How We Use Your Information</h4>
                <p>We use the information we collect to: respond to your inquiries, provide requested services, send you relevant updates about our services, improve our website and services, and comply with legal obligations.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Information Sharing</h4>
                <p>We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website or providing our services, so long as those parties agree to keep this information confidential.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Data Security</h4>
                <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Contact Us</h4>
                <p>If you have questions about this Privacy Policy, please contact us at bula@BULADEV.com or call (313) 444-9734.</p>`
            },
            terms: {
                title: "Terms & Conditions",
                content: `<p><strong>Last Updated:</strong> January 1, 2025</p>
                <p>Welcome to BULADEV Building & Land Development. By accessing and using this website, you accept and agree to be bound by the terms and conditions of this agreement.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Use of Website</h4>
                <p>You may use this website for lawful purposes only. You agree not to use the site in any way that could damage, disable, overburden, or impair the site or interfere with any other party's use and enjoyment of the site.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Intellectual Property</h4>
                <p>All content on this website, including text, graphics, logos, images, and software, is the property of BULADEV Building & Land Development and ASA Construction LLC and is protected by intellectual property laws.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Project Estimates</h4>
                <p>Any estimates, quotes, or projections provided through this website are for informational purposes only and do not constitute a binding agreement. Final terms will be outlined in a formal contract.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Limitation of Liability</h4>
                <p>BULADEV Building & Land Development shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.</p>
                <h4 class="font-semibold text-dark-text text-base mt-6">Contact Information</h4>
                <p>For questions about these terms, contact us at bula@BULADEV.com or call (313) 444-9734.</p>`
            }
        };

        // Navigation
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menuToggle');
        const menuClose = document.getElementById('menuClose');
        const mobileMenu = document.getElementById('mobileMenu');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const backToTop = document.getElementById('backToTop');
            if (scrollY > 80) {
                navbar.classList.remove('nav-transparent');
                navbar.style.background = 'rgba(253,251,247,0.95)';
                navbar.style.backdropFilter = 'blur(20px)';
                navbar.style.boxShadow = '0 4px 30px rgba(0,0,0,0.08)';
            } else {
                navbar.classList.add('nav-transparent');
                navbar.style.background = 'transparent';
                navbar.style.backdropFilter = 'none';
                navbar.style.boxShadow = 'none';
            }
            if (scrollY > 600) { backToTop.classList.add('visible'); } else { backToTop.classList.remove('visible'); }
        });

        menuToggle.addEventListener('click', () => { mobileMenu.classList.add('active'); document.body.style.overflow = 'hidden'; });
        function closeMobileMenu() { mobileMenu.classList.remove('active'); document.body.style.overflow = ''; }
        menuClose.addEventListener('click', closeMobileMenu);
        document.querySelectorAll('.mobile-nav-link').forEach(link => link.addEventListener('click', closeMobileMenu));

        // Scroll Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
        document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

        // Project Filters
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.dataset.filter;
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block'; card.style.animation = 'scaleIn 0.4s ease-out';
                    } else { card.style.display = 'none'; }
                });
            });
        });
        function styleFilterBtns() {
            filterBtns.forEach(btn => {
                if (btn.classList.contains('active')) {
                    btn.style.background = 'linear-gradient(135deg, #0000CD, #000099)'; btn.style.color = 'white'; btn.style.boxShadow = '0 4px 15px rgba(0,0,205,0.3)';
                } else {
                    btn.style.background = 'white'; btn.style.color = '#4A4A5A'; btn.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)'; btn.style.border = '1px solid rgba(0,0,205,0.1)';
                }
            });
        }
        styleFilterBtns();
        filterBtns.forEach(btn => btn.addEventListener('click', styleFilterBtns));

        // FAQ
        function toggleFaq(element) {
            const item = element.parentElement;
            const isActive = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(faq => faq.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        }

        // Project Modal
        function openProjectModal(index) {
            const project = projects[index];
            document.getElementById('modalImage').src = project.image;
            document.getElementById('modalImage').alt = project.title;
            document.getElementById('modalCategory').textContent = project.category;
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalSubtitle').textContent = project.subtitle;
            document.getElementById('modalDescription').textContent = project.description;
            document.getElementById('projectModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeProjectModal() { document.getElementById('projectModal').classList.remove('active'); document.body.style.overflow = ''; }

        // Legal Modal
        function openLegalModal(type) {
            const data = legalData[type];
            document.getElementById('legalTitle').textContent = data.title;
            document.getElementById('legalContent').innerHTML = data.content;
            document.getElementById('legalModal').classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        function closeLegalModal() { document.getElementById('legalModal').classList.remove('active'); document.body.style.overflow = ''; }

        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeProjectModal(); closeLegalModal(); closeMobileMenu(); } });

        // Contact Form
        function handleFormSubmit(e) {
            e.preventDefault();
            const submitBtn = document.getElementById('submitBtn');
            document.getElementById('submitText').classList.add('hidden');
            document.getElementById('submitIcon').classList.add('hidden');
            document.getElementById('submitLoader').classList.remove('hidden');
            submitBtn.disabled = true; submitBtn.style.opacity = '0.7';
            setTimeout(() => {
                document.getElementById('submitText').classList.remove('hidden');
                document.getElementById('submitIcon').classList.remove('hidden');
                document.getElementById('submitLoader').classList.add('hidden');
                submitBtn.disabled = false; submitBtn.style.opacity = '1';
                e.target.reset();
                showToast('Thank you! Your request has been submitted successfully. We will contact you within 24 hours.', 'success');
            }, 2000);
        }

        // Toast
        function showToast(message, type = 'success') {
            const toast = document.getElementById('toast');
            document.getElementById('toastMessage').textContent = message;
            toast.className = 'toast ' + type;
            document.getElementById('toastIcon').className = type === 'success' ? 'fas fa-check-circle text-green-400' : 'fas fa-exclamation-circle text-red-400';
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 5000);
        }

        // Smooth Scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                const target = document.querySelector(targetId);
                if (target) { e.preventDefault(); window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' }); }
            });
        });
    