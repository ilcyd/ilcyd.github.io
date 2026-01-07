// ========================================
//  PORTFOLIO JAVASCRIPT - INTERACTIVE FEATURES
// ========================================

// ===== PROJECT DATA =====
const projects = [
    {
        id: 1,
        title: "STII E-Vote System",
        category: "civic",
        description: "Secure electronic voting platform with real-time results, voter authentication, and comprehensive admin dashboards for democratic processes.",
        tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        image: "images/projects/evote.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Clinic Management System",
        category: "healthcare",
        description: "Comprehensive healthcare solution featuring patient records, appointment scheduling, prescription management, and staff coordination.",
        tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
        image: "images/projects/clinic.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "FarmVet Platform",
        category: "agriculture",
        description: "Farm and veterinary management system connecting farmers with veterinary services, product marketplace, and online reservations.",
        tech: ["PHP", "MySQL", "JavaScript", "Payment API"],
        image: "images/projects/farmvet.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 4,
        title: "Rental Management System",
        category: "ecommerce",
        description: "Complete rental platform with property listings, booking system, payment integration, and tenant management features.",
        tech: ["PHP", "MySQL", "Bootstrap", "PayPal"],
        image: "images/projects/rental.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 5,
        title: "School Management System",
        category: "education",
        description: "Educational platform for managing students, teachers, courses, grades, and administrative tasks efficiently.",
        tech: ["PHP", "MySQL", "JavaScript", "Chart.js"],
        image: "images/projects/school.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 6,
        title: "PawPrint - Pet Products & Services",
        category: "services",
        description: "Comprehensive platform for pet products and veterinary clinic services, featuring product catalog, appointment booking, and pet care solutions.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "images/projects/pawprint.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 7,
        title: "Thesis Management System",
        category: "education",
        description: "Academic platform for thesis proposal, tracking, evaluation, and documentation management for educational institutions.",
        tech: ["PHP", "MySQL", "jQuery", "Bootstrap"],
        image: "images/projects/thesis.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 8,
        title: "Online Store Platform",
        category: "ecommerce",
        description: "E-commerce solution with product catalog, shopping cart, payment gateway integration, and order management.",
        tech: ["PHP", "MySQL", "JavaScript", "Stripe"],
        image: "images/projects/store.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 9,
        title: "Lending Management System",
        category: "services",
        description: "Financial management platform for tracking loans, payments, interest calculations, and borrower information.",
        tech: ["Flutter", "Dart", "Firebase", "API"],
        image: "images/projects/lending.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 10,
        title: "Water Refilling Station System",
        category: "services",
        description: "Business management system for water refilling stations with inventory, sales tracking, and customer management.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "images/projects/water.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 11,
        title: "PWD Management System",
        category: "civic",
        description: "System for managing Persons with Disabilities records, benefits, and services for local government units.",
        tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        image: "images/projects/pwd.jpg",
        link: "#",
        github: "#"
    },
    {
        id: 12,
        title: "ILCYD Platform",
        category: "civic",
        description: "Youth development platform for program management, event coordination, and member engagement tracking.",
        tech: ["PHP", "MySQL", "Bootstrap", "JavaScript"],
        image: "images/projects/ilcyd.jpg",
        link: "#",
        github: "#"
    }
];

// ===== NAVIGATION FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
            
            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
});

// ===== PROJECTS RENDERING =====
function renderProjects(filter = 'all') {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    const filteredProjects = filter === 'all' 
        ? projects 
        : projects.filter(project => project.category === filter);

    filteredProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.setAttribute('data-category', project.category);
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" 
                     onerror="this.src='https://via.placeholder.com/400x250/667eea/ffffff?text=${encodeURIComponent(project.title)}'">
                <span class="project-category">${getCategoryName(project.category)}</span>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" class="project-link primary">
                        <span>View Project</span>
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                    <a href="${project.github}" class="project-link secondary">
                        <i class="fab fa-github"></i>
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

function getCategoryName(category) {
    const categoryNames = {
        'healthcare': 'Healthcare',
        'civic': 'Civic Tech',
        'agriculture': 'Agriculture',
        'education': 'Education',
        'ecommerce': 'E-Commerce',
        'services': 'Services'
    };
    return categoryNames[category] || category;
}

// ===== PROJECT FILTERS =====
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Initial render
    renderProjects('all');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            const filter = this.getAttribute('data-filter');
            renderProjects(filter);
        });
    });
});

// ===== SKILLS ANIMATION =====
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillsSection = document.getElementById('skills');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 200);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

document.addEventListener('DOMContentLoaded', animateSkills);

// ===== CONTACT FORM HANDLING =====
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {
                name: formData.get('name'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', data);
            
            // Show success message (you can customize this)
            alert('Thank you for your message! I will get back to you soon.');
            
            // Reset form
            this.reset();
        });
    }
});

// ===== SCROLL ANIMATIONS =====
function observeElements() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const elementsToObserve = document.querySelectorAll(
        '.experience-card, .about-text, .about-image, .skills-category'
    );
    
    elementsToObserve.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', observeElements);

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== TYPING EFFECT FOR HERO (Optional Enhancement) =====
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ===== SCROLL TO TOP BUTTON (Optional Enhancement) =====
function createScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        border: none;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.transform = 'translateY(-5px)';
        scrollBtn.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.5)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.transform = 'translateY(0)';
        scrollBtn.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
    });
}

document.addEventListener('DOMContentLoaded', createScrollToTop);

// ===== PERFORMANCE: Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== CONSOLE GREETING =====
console.log('%c👋 Welcome to my Portfolio!', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cInterested in the code? Let\'s connect!', 'font-size: 14px; color: #764ba2;');
