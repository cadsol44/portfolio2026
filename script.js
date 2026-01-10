// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = document.querySelector('#navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.querySelector('.nav-menu').classList.remove('active');
        }
    });
});

// Hide/show navbar on scroll
let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
const navbar = document.querySelector('#navbar');
window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        navbar.classList.add('hidden');
    } else {
        // Scrolling up
        navbar.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

// CTA button smooth scroll
document.querySelector('.cta-button').addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('#contact');
    const navHeight = document.querySelector('#navbar').offsetHeight;
    const targetPosition = contactSection.offsetTop - navHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});

// Project data
const projectData = {
    1: {
        title: "AI-Powered Analytics Dashboard",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop",
        description: "A comprehensive real-time data visualization platform that leverages machine learning algorithms to provide actionable business intelligence insights. The dashboard processes millions of data points daily and presents them through intuitive, interactive visualizations.",
        tags: ["React", "Python", "TensorFlow", "D3.js"],
        features: [
            "Real-time data streaming and processing with Apache Kafka",
            "Machine learning models for predictive analytics and trend forecasting",
            "Interactive data visualizations with drill-down capabilities",
            "Custom alert system for anomaly detection",
            "Multi-user support with role-based access control",
            "Export functionality for reports and visualizations"
        ],
        technologies: ["React", "Redux", "Python", "TensorFlow", "Pandas", "Apache Kafka", "PostgreSQL", "D3.js", "WebSockets"],
        liveLink: "#",
        githubLink: "#"
    },
    2: {
        title: "Smart Home Automation System",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&h=600&fit=crop",
        description: "An IoT-based home automation solution that integrates with various smart devices to provide seamless control through mobile applications and voice commands. The system uses edge computing for low-latency responses and includes advanced scheduling features.",
        tags: ["IoT", "Node.js", "React Native", "AWS IoT"],
        features: [
            "Control lights, thermostats, locks, and appliances from anywhere",
            "Voice integration with Alexa and Google Assistant",
            "Automated routines based on time, location, or sensor triggers",
            "Energy consumption monitoring and optimization",
            "Security camera integration with motion detection",
            "Cross-platform mobile app for iOS and Android"
        ],
        technologies: ["Node.js", "React Native", "MQTT", "AWS IoT Core", "DynamoDB", "Raspberry Pi", "Arduino", "WebRTC"],
        liveLink: "#",
        githubLink: "#"
    },
    3: {
        title: "E-Commerce Platform",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&h=600&fit=crop",
        description: "A full-featured online marketplace with advanced product management, secure payment processing, and comprehensive inventory tracking. The platform supports multiple vendors and includes sophisticated search and recommendation engines.",
        tags: ["Vue.js", "Django", "PostgreSQL", "Stripe"],
        features: [
            "Multi-vendor marketplace with separate seller dashboards",
            "Secure payment processing with Stripe integration",
            "Advanced product search with filters and sorting",
            "Real-time inventory management and tracking",
            "Customer reviews and rating system",
            "Automated email notifications and order tracking",
            "Admin panel for platform management"
        ],
        technologies: ["Vue.js", "Vuex", "Django", "Django REST Framework", "PostgreSQL", "Redis", "Celery", "Stripe API", "Elasticsearch"],
        liveLink: "#",
        githubLink: "#"
    },
    4: {
        title: "Blockchain-Based Supply Chain",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&h=600&fit=crop",
        description: "A transparent and immutable tracking system for supply chain management using Ethereum blockchain technology. The system ensures authenticity, prevents counterfeiting, and provides complete visibility throughout the product lifecycle.",
        tags: ["Solidity", "Ethereum", "Web3.js", "IPFS"],
        features: [
            "Immutable record of product journey from manufacturer to consumer",
            "Smart contracts for automated compliance checking",
            "QR code scanning for instant product verification",
            "Decentralized file storage using IPFS",
            "Multi-stakeholder access with permission levels",
            "Real-time tracking and status updates",
            "Analytics dashboard for supply chain insights"
        ],
        technologies: ["Solidity", "Ethereum", "Web3.js", "React", "IPFS", "Truffle", "Ganache", "MetaMask"],
        liveLink: "#",
        githubLink: "#"
    },
    5: {
        title: "Fitness Tracking Mobile App",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&h=600&fit=crop",
        description: "A comprehensive cross-platform fitness application that helps users achieve their health goals through personalized workout plans, nutrition tracking, and social features. The app uses AI to provide customized recommendations.",
        tags: ["Flutter", "Firebase", "Dart", "TensorFlow Lite"],
        features: [
            "Personalized workout plans based on fitness level and goals",
            "Exercise library with video demonstrations",
            "Nutrition tracking with barcode scanning",
            "Progress tracking with charts and statistics",
            "Social features for sharing achievements",
            "Integration with wearable devices",
            "AI-powered form correction using camera"
        ],
        technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Auth", "TensorFlow Lite", "Google Fit API", "Apple HealthKit"],
        liveLink: "#",
        githubLink: "#"
    },
    6: {
        title: "Computer Vision Security System",
        image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&h=600&fit=crop",
        description: "An intelligent surveillance system powered by deep learning for facial recognition, object detection, and anomaly detection. The system provides real-time alerts and maintains a comprehensive security log.",
        tags: ["Python", "OpenCV", "TensorFlow", "Deep Learning"],
        features: [
            "Real-time facial recognition with high accuracy",
            "Object detection and tracking across multiple cameras",
            "Anomaly detection for unusual behavior patterns",
            "Automatic license plate recognition (ALPR)",
            "People counting and crowd density estimation",
            "Cloud storage for video archives",
            "Mobile app for remote monitoring and alerts"
        ],
        technologies: ["Python", "OpenCV", "TensorFlow", "Keras", "YOLO", "Face Recognition", "Flask", "WebSockets", "FFmpeg", "AWS S3"],
        liveLink: "#",
        githubLink: "#"
    },
    7: {
        title: "Real-Time Chat Application",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&h=600&fit=crop",
        description: "A scalable messaging platform with end-to-end encryption, supporting text, voice, and video communication. The application handles thousands of concurrent connections with minimal latency.",
        tags: ["Socket.io", "Express", "MongoDB", "WebRTC"],
        features: [
            "End-to-end encrypted messaging for privacy",
            "Group chats with admin controls",
            "File sharing with drag-and-drop support",
            "Voice and video calling using WebRTC",
            "Message reactions and threaded conversations",
            "Read receipts and typing indicators",
            "User presence and status updates",
            "Message search and archive functionality"
        ],
        technologies: ["Node.js", "Express", "Socket.io", "MongoDB", "Redis", "WebRTC", "JWT", "Bcrypt", "AWS S3"],
        liveLink: "#",
        githubLink: "#"
    },
    8: {
        title: "Autonomous Drone Navigation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&h=600&fit=crop",
        description: "An advanced path planning and obstacle avoidance system for autonomous drone operations using computer vision and sensor fusion. The system enables safe navigation in complex environments.",
        tags: ["ROS", "C++", "Python", "Computer Vision"],
        features: [
            "Real-time 3D mapping and localization (SLAM)",
            "Dynamic path planning with A* and RRT algorithms",
            "Obstacle detection and avoidance using multiple sensors",
            "GPS waypoint navigation with precision landing",
            "Computer vision for object recognition and tracking",
            "Emergency protocols for safe failure handling",
            "Ground control station for mission planning"
        ],
        technologies: ["ROS", "C++", "Python", "OpenCV", "PCL", "Gazebo", "PX4", "MAVLink", "TensorFlow"],
        liveLink: "#",
        githubLink: "#"
    },
    9: {
        title: "Cloud Infrastructure Manager",
        image: "https://images.unsplash.com/photo-1547954575-855750c57bd3?w=900&h=600&fit=crop",
        description: "An automated deployment and monitoring tool for managing cloud-based applications across multiple providers. The platform provides infrastructure as code, automated scaling, and comprehensive monitoring.",
        tags: ["Docker", "Kubernetes", "AWS", "Terraform"],
        features: [
            "Infrastructure as Code using Terraform",
            "Automated CI/CD pipelines with GitLab",
            "Container orchestration with Kubernetes",
            "Auto-scaling based on traffic and resource usage",
            "Real-time monitoring and logging with Prometheus and Grafana",
            "Multi-cloud support (AWS, Azure, GCP)",
            "Cost optimization recommendations",
            "Disaster recovery and backup automation"
        ],
        technologies: ["Docker", "Kubernetes", "Terraform", "AWS", "Prometheus", "Grafana", "GitLab CI", "Ansible", "Helm"],
        liveLink: "#",
        githubLink: "#"
    },
    10: {
        title: "Machine Learning Recommendation Engine",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&h=600&fit=crop",
        description: "A sophisticated personalized content recommendation system that uses collaborative filtering and deep learning to predict user preferences. The engine processes user behavior patterns and provides highly accurate recommendations in real-time.",
        tags: ["Python", "PyTorch", "FastAPI", "Redis"],
        features: [
            "Collaborative filtering with matrix factorization",
            "Deep learning models for content understanding",
            "Real-time recommendation generation with low latency",
            "A/B testing framework for model evaluation",
            "User behavior tracking and analysis",
            "Scalable architecture handling millions of requests",
            "Cold start problem solutions for new users"
        ],
        technologies: ["Python", "PyTorch", "FastAPI", "Redis", "PostgreSQL", "Scikit-learn", "Pandas", "NumPy", "Docker"],
        liveLink: "#",
        githubLink: "#"
    },
    11: {
        title: "DevOps Automation Suite",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=900&h=600&fit=crop",
        description: "A comprehensive toolset designed to automate the entire software development lifecycle from code commit to production deployment. The suite includes continuous integration, automated testing, deployment orchestration, and monitoring.",
        tags: ["Jenkins", "Ansible", "Python", "Bash"],
        features: [
            "Automated CI/CD pipelines with Jenkins",
            "Infrastructure provisioning with Ansible playbooks",
            "Automated testing and quality gates",
            "Blue-green deployment strategies",
            "Rollback mechanisms for failed deployments",
            "Slack and email notifications for pipeline events",
            "Centralized logging and monitoring dashboard",
            "Security scanning and compliance checking"
        ],
        technologies: ["Jenkins", "Ansible", "Python", "Bash", "Docker", "Git", "SonarQube", "Nagios", "ELK Stack"],
        liveLink: "#",
        githubLink: "#"
    }
};

// Project modal functionality
const modal = document.getElementById('projectModal');
const modalClose = document.querySelector('.modal-close');

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function() {
        const projectId = this.dataset.project;
        const project = projectData[projectId];
        
        // Populate modal content
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalDescription').innerHTML = `<p>${project.description}</p>`;
        
        // Tags
        const tagsContainer = document.getElementById('modalTags');
        tagsContainer.innerHTML = project.tags.map(tag => `<span>${tag}</span>`).join('');
        
        // Features
        const featuresContainer = document.getElementById('modalFeatures');
        featuresContainer.innerHTML = project.features.map(feature => `<li>${feature}</li>`).join('');
        
        // Technologies
        const techContainer = document.getElementById('modalTech');
        techContainer.innerHTML = project.technologies.map(tech => `<span>${tech}</span>`).join('');
        
        // Links
        document.getElementById('modalLiveLink').href = project.liveLink;
        document.getElementById('modalGithubLink').href = project.githubLink;
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Close modal
modalClose.addEventListener('click', function() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside
modal.addEventListener('click', function(e) {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = document.querySelector('#navbar').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    // Add shadow to navbar on scroll
    const navbar = document.querySelector('#navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    }
});

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.project-card, .timeline-item, .resume-item, .contact-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Skill bars animation
const skillBarsObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillLevels = entry.target.querySelectorAll('.skill-level');
            skillLevels.forEach(level => {
                const width = level.style.width;
                level.style.width = '0';
                setTimeout(() => {
                    level.style.width = width;
                }, 100);
            });
            skillBarsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillBarsContainer = document.querySelector('.skill-bars');
if (skillBarsContainer) {
    skillBarsObserver.observe(skillBarsContainer);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Add loading effect for project images
const projectImages = document.querySelectorAll('.project-image img');

projectImages.forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
});

// Typing effect for hero title (optional enhancement)
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

// Smooth scroll reveal on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add to CSS: body { opacity: 0; transition: opacity 0.5s; }
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s';

// Cursor effect (optional - modern touch)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const distX = mouseX - cursorX;
    const distY = mouseY - cursorY;
    
    cursorX += distX * 0.1;
    cursorY += distY * 0.1;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// Add hover effect to interactive elements
const interactiveElements = document.querySelectorAll('a, button, .project-card');

interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
    });
});

// Scroll progress indicator
const progressBar = document.createElement('div');
progressBar.classList.add('scroll-progress');
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add CSS for custom cursor and progress bar
const style = document.createElement('style');
style.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid #3a3a3a;
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        mix-blend-mode: difference;
    }
    
    .scroll-progress {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #3a3a3a, #555555);
        z-index: 9999;
        transition: width 0.2s ease;
    }
    
    .nav-link.active {
        color: var(--text-primary);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Lazy loading for images (improved performance)
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

// Easter egg: Konami code
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join('') === konamiPattern.join('')) {
        document.body.style.animation = 'rainbow 2s infinite';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 5000);
    }
});

const rainbowStyle = document.createElement('style');
rainbowStyle.textContent = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyle);

console.log('Portfolio loaded successfully! 🚀');
console.log('Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A');
