// Car data
const cars = [
    {
        id: 1,
        name: "Rent Baleno New Model (Manual)",
        reviews: 456,
        category: "economy",
        price: 1300,
        image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?w=800&q=80",
        features: ["Manual", "5 Seats", "18km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking required. Fuel-efficient manual transmission sedan perfect for city and highway drives.",
        transmission: "Manual",
        mileage: "18km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 2,
        name: "Brand New Innova Hycross Automatic",
        reviews: 115,
        category: "luxury",
        price: 3600,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/140809/innova-crysta-exterior-right-front-three-quarter-2.png?isig=0&q=80",
        features: ["Automatic", "7 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium 7-seater MPV with automatic transmission, perfect for family trips and group travel.",
        transmission: "Automatic",
        mileage: "16km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 3,
        name: "Rent Maruti Baleno New (Automatic)",
        reviews: 116,
        category: "economy",
        price: 1600,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        features: ["Automatic", "5 Seats", "18km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium hatchback with automatic transmission for comfortable city driving.",
        transmission: "Automatic",
        mileage: "18km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 4,
        name: "Rent Swift New Model (Automatic)",
        reviews: 125,
        category: "economy",
        price: 1500,
        image: "https://www.livemint.com/lm-img/img/2024/05/09/600x338/swift_new_1715246471736_1715246481468.png",
        features: ["Automatic", "5 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Popular automatic hatchback known for reliability and fuel efficiency.",
        transmission: "Automatic",
        mileage: "16km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 5,
        name: "Mahindra Thar Automatic New Hard Top",
        reviews: 645,
        category: "sports",
        price: 3600,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-35.jpeg?isig=0&q=80",
        features: ["Automatic", "4 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Adventure-ready 4x4 SUV with automatic transmission and hard top for all-terrain driving.",
        transmission: "Automatic",
        mileage: "15km/Ltr",
        seats: "4 Seats",
        callToBook: true
    },
    {
        id: 6,
        name: "Mahindra Thar Convertible Automatic 4×4 (Soft Top)",
        reviews: 874,
        category: "sports",
        price: 3600,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-33.jpeg?isig=0&q=80",
        features: ["Automatic", "5 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Open-air adventure SUV with 4x4 capability and automatic transmission.",
        transmission: "Automatic",
        mileage: "15km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 7,
        name: "Rent Maruti Swift New (Manual)",
        reviews: 123,
        category: "economy",
        price: 1200,
        image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80",
        features: ["Manual", "5 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. India's favorite hatchback with manual transmission, perfect for economical city driving.",
        transmission: "Manual",
        mileage: "16km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 8,
        name: "Rent Hyundai i20 New (Manual)",
        reviews: 75,
        category: "economy",
        price: 1500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium hatchback with manual transmission offering comfort and efficiency.",
        transmission: "Manual",
        mileage: "16km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 9,
        name: "Rent Hyundai i20 New Model (Automatic)",
        reviews: 65,
        category: "economy",
        price: 1800,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40530/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        features: ["Automatic", "5 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium automatic hatchback with modern features and excellent fuel economy.",
        transmission: "Automatic",
        mileage: "16km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 10,
        name: "Rent Hyundai Creta New (Manual)",
        reviews: 458,
        category: "suv",
        price: 2500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-4.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Popular compact SUV with manual transmission, ideal for city and highway travel.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 11,
        name: "Rent Creta New Automatic – Panoramic Sunroof",
        reviews: 56,
        category: "luxury",
        price: 3500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/106815/creta-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        features: ["Automatic", "5 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium SUV with automatic transmission and panoramic sunroof for a luxurious experience.",
        transmission: "Automatic",
        mileage: "15km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 12,
        name: "Alcazar Automatic Panoramic Sunroof",
        reviews: 165,
        category: "luxury",
        price: 3800,
        image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
        features: ["Automatic", "7 Seats", "23km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium 7-seater SUV with automatic transmission and panoramic sunroof.",
        transmission: "Automatic",
        mileage: "23km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 13,
        name: "Maruti Ertiga New 7 Seater (Manual)",
        reviews: 94,
        category: "suv",
        price: 2300,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/115777/ertiga-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
        features: ["Manual", "7 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Spacious 7-seater MPV with manual transmission, perfect for family travel.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 14,
        name: "Rent Kia Carens – Manual",
        reviews: 84,
        category: "suv",
        price: 2700,
        image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
        features: ["Manual", "6,7 Seats", "18km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Versatile MPV with manual transmission, available in 6 or 7 seater configurations.",
        transmission: "Manual",
        mileage: "18km/Ltr",
        seats: "6,7 Seats",
        callToBook: true
    },
    {
        id: 15,
        name: "Maruti Suzuki Ertiga New Model (Auto)",
        reviews: 244,
        category: "suv",
        price: 2800,
        image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
        features: ["Automatic", "7 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium automatic 7-seater MPV for comfortable family journeys.",
        transmission: "Automatic",
        mileage: "15km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 16,
        name: "Rent Mahindra Thar New Manual Hard Top",
        reviews: 89,
        category: "sports",
        price: 3500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-37.jpeg?isig=0&q=80",
        features: ["Manual", "4 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Rugged 4x4 SUV with manual transmission and hard top for adventure enthusiasts.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "4 Seats",
        callToBook: true
    },
    {
        id: 17,
        name: "Maruti Jimny New Model Automatic",
        reviews: 195,
        category: "sports",
        price: 3000,
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
        features: ["Automatic", "5 Seats", "17km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Compact 4x4 SUV with automatic transmission, perfect for off-road adventures.",
        transmission: "Automatic",
        mileage: "17km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 18,
        name: "Rent Maruti Suzuki Ignis (Manual)",
        reviews: 78,
        category: "economy",
        price: 1100,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/142921/ignis-exterior-right-front-three-quarter-2.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Compact and stylish urban car with manual transmission.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 19,
        name: "Sonet/Venue Automatic Sunroof",
        reviews: 119,
        category: "suv",
        price: 2800,
        image: "https://gaadiwaadi.com/wp-content/uploads/2020/08/hyundai-venue-vs-kia-sonet-1536x864.jpg",
        features: ["Automatic", "5 Seats", "22km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Compact SUV with automatic transmission and sunroof feature.",
        transmission: "Automatic",
        mileage: "22km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 20,
        name: "Mahindra Thar Convertible Manual New (Open Roof)",
        reviews: 477,
        category: "sports",
        price: 3600,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/40087/thar-exterior-right-front-three-quarter-11.jpeg?isig=0&q=80",
        features: ["Manual", "4 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Open-top adventure SUV with manual transmission for the ultimate driving experience.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "4 Seats",
        callToBook: true
    },
    {
        id: 21,
        name: "Rent Maruti Fronx Manual ( Brand New )",
        reviews: 87,
        category: "economy",
        price: 1800,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "15km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Brand new compact SUV with manual transmission.",
        transmission: "Manual",
        mileage: "15km/Ltr",
        seats: "5 Seats",
        callToBook: true,
        fullyBooked: true
    },
    {
        id: 22,
        name: "Rent Innova Crysta (Automatic)",
        reviews: 26,
        category: "luxury",
        price: 3500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/51435/innova-crysta-exterior-right-front-three-quarter-3.jpeg?q=80",
        features: ["Automatic", "7 Seats", "14km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium 7-seater MPV with automatic transmission for luxurious travel.",
        transmission: "Automatic",
        mileage: "14km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 23,
        name: "Rent Toyota Innova Crysta (Manual)",
        reviews: 26,
        category: "luxury",
        price: 3000,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/130507/toyota-innova-crysta-right-front-three-quarter3.jpeg?isig=0&wm=1&q=80",
        features: ["Manual", "7 Seats", "14km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Premium 7-seater MPV with manual transmission.",
        transmission: "Manual",
        mileage: "14km/Ltr",
        seats: "7 Seats",
        callToBook: true
    },
    {
        id: 24,
        name: "Rent Hyundai Venue New (Manual)",
        reviews: 48,
        category: "suv",
        price: 2200,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/141113/venue-exterior-right-front-three-quarter-18.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "16km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Compact SUV with manual transmission and modern features.",
        transmission: "Manual",
        mileage: "16km/Ltr",
        seats: "5 Seats",
        callToBook: true
    },
    {
        id: 25,
        name: "Rent Swift Dzire New (Manual)",
        reviews: 89,
        category: "economy",
        price: 1500,
        image: "https://imgd.aeplcdn.com/664x374/n/cw/ec/170173/dzire-exterior-right-front-three-quarter-27.jpeg?isig=0&q=80",
        features: ["Manual", "5 Seats", "18km/Ltr", "No hidden charges"],
        description: "Minimum 2 days booking. Compact sedan with manual transmission, perfect for city and highway drives.",
        transmission: "Manual",
        mileage: "18km/Ltr",
        seats: "5 Seats",
        callToBook: true
    }
];

// DOM Elements
const carsGrid = document.getElementById('carsGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('carModal');
const modalBody = document.querySelector('.modal-body');
const closeModal = document.querySelector('.close');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const carSearch = document.getElementById('carSearch');
const noResults = document.getElementById('noResults');
const dropdownLinks = document.querySelectorAll('.dropdown-link');

// State
let currentFilter = 'all';
let currentSearchTerm = '';
let filteredCars = [...cars];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayCars(cars);
    setupEventListeners();
    setupScrollEffects();
    setupIntersectionObserver();
    setupHeroSlideshow();
    updateFilterCounts();
    setupRotatingText();
    setupScrollReveal();
    setupParallaxEffects();
    setupNumberCounters();
    ensureBackgroundsLoad();
});

// Ensure background images are loaded
function ensureBackgroundsLoad() {
    // Load critical background images
    const criticalImages = [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1600&q=80',
        'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80',
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=1600&q=80'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Display cars with staggered animation
function displayCars(carsToDisplay) {
    carsGrid.innerHTML = '';
    
    if (carsToDisplay.length === 0) {
        carsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    carsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    carsToDisplay.forEach((car, index) => {
        const carCard = createCarCard(car);
        carCard.style.setProperty('--index', index);
        carsGrid.appendChild(carCard);
    });
}

// Create car card
function createCarCard(car) {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.setAttribute('data-category', car.category);
    
    if (car.fullyBooked) {
        card.classList.add('fully-booked');
    }
    
    const reviewStars = Math.floor(Math.random() * 2 + 4); // 4 or 5 stars
    
    card.innerHTML = `
        ${car.fullyBooked ? '<div class="out-of-stock-badge">Fully Booked</div>' : ''}
        <img src="${car.image}" alt="${car.name}" class="car-image" loading="lazy">
        <div class="car-info">
            <div class="car-header">
                <h3 class="car-name">${car.name}</h3>
                <div class="car-reviews">
                    <div class="stars">
                        ${Array(reviewStars).fill('').map(() => '<i class="fas fa-star"></i>').join('')}
                        ${Array(5 - reviewStars).fill('').map(() => '<i class="far fa-star"></i>').join('')}
                    </div>
                    <span>(${car.reviews} reviews)</span>
                </div>
            </div>
            <p class="minimum-booking">Minimum 2 days booking</p>
            <div class="car-price">
                <span class="starting-from">Starting from</span>
                <div class="price-amount">₹ ${car.price.toLocaleString()}<span>/day</span></div>
                <p class="no-hidden">No hidden charges</p>
            </div>
            <div class="car-features">
                <div class="car-feature">
                    <i class="fas fa-cog"></i>
                    <span>${car.transmission}</span>
                </div>
                <div class="car-feature">
                    <i class="fas fa-users"></i>
                    <span>${car.seats}</span>
                </div>
                <div class="car-feature">
                    <i class="fas fa-gas-pump"></i>
                    <span>${car.mileage}</span>
                </div>
            </div>
            <div class="car-buttons">
                <button class="btn btn-primary btn-small" onclick="openModal(${car.id})" ${car.fullyBooked ? 'disabled' : ''}>
                    View all details
                </button>
                ${car.callToBook ? `
                    <div class="call-to-book-buttons">
                        <button class="btn btn-outline btn-small" onclick="callNow()" ${car.fullyBooked ? 'disabled' : ''}>
                            <i class="fas fa-phone"></i>
                            Call to Book
                        </button>
                        <button class="btn btn-whatsapp btn-small" onclick="bookOnWhatsapp()" ${car.fullyBooked ? 'disabled' : ''}>
                            <i class="fab fa-whatsapp"></i>
                            Book on Whatsapp
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
    
    return card;
}

// Setup event listeners
function setupEventListeners() {
    // Filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            currentFilter = filter;
            applyFilters();
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
    
    // Dropdown links in navigation
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            
            // Scroll to fleet section
            const fleetSection = document.getElementById('fleet');
            if (fleetSection) {
                const offset = 100;
                const targetPosition = fleetSection.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Apply filter after a short delay
            setTimeout(() => {
                currentFilter = filter;
                applyFilters();
                
                // Update filter buttons
                filterButtons.forEach(btn => {
                    if (btn.getAttribute('data-filter') === filter) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }, 500);
            
            // Close mobile menu if open
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Search input
    carSearch.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.toLowerCase();
        applyFilters();
    });
    
    // Modal close
    closeModal.addEventListener('click', () => {
        closeModalWithAnimation();
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalWithAnimation();
        }
    });
    
    // Mobile menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80; // Navbar height
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Touch events for mobile
    let touchStartX = 0;
    let touchEndX = 0;
    
    const filterContainer = document.querySelector('.filter-container');
    if (filterContainer) {
        filterContainer.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });
        
        filterContainer.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });
    }
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) {
            // Swipe left
            filterContainer.scrollLeft += 200;
        }
        if (touchEndX > touchStartX + 50) {
            // Swipe right
            filterContainer.scrollLeft -= 200;
        }
    }
}

// Setup scroll effects
function setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const heroContent = document.querySelector('.hero-content');
    const scrollIndicator = document.querySelector('.hero-scroll-indicator');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Navbar background on scroll
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hero content parallax fade
        if (heroContent && currentScroll < windowHeight) {
            const opacity = Math.max(0, 1 - (currentScroll / windowHeight) * 1.5);
            const scale = Math.max(0.8, 1 - (currentScroll / windowHeight) * 0.2);
            heroContent.style.opacity = opacity;
            heroContent.style.transform = `scale(${scale})`;
        }
        
        // Hide scroll indicator when scrolling
        if (scrollIndicator) {
            if (currentScroll > 100) {
                scrollIndicator.style.opacity = '0';
            } else {
                scrollIndicator.style.opacity = '1';
            }
        }
        
        lastScroll = currentScroll;
    });
}

// Setup intersection observer for animations
function setupIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe stats
    document.querySelectorAll('.stat-item').forEach(item => {
        item.style.animationPlayState = 'paused';
        observer.observe(item);
    });
    
    // Observe car cards
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            card.style.animationPlayState = 'paused';
            observer.observe(card);
        });
    }, 100);
}

// Apply filters based on search and category
function applyFilters() {
    filteredCars = cars.filter(car => {
        const matchesCategory = currentFilter === 'all' || car.category === currentFilter;
        const matchesSearch = currentSearchTerm === '' || 
            car.name.toLowerCase().includes(currentSearchTerm) ||
            car.features.some(feature => feature.toLowerCase().includes(currentSearchTerm)) ||
            car.description.toLowerCase().includes(currentSearchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    // Fade out current cars
    const currentCards = document.querySelectorAll('.car-card');
    currentCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
        }, index * 20);
    });
    
    // Display new cars after fade out
    setTimeout(() => {
        displayCars(filteredCars);
        setupIntersectionObserver();
        updateFilterCounts();
    }, Math.min(currentCards.length * 20 + 100, 300));
}

// Update filter button counts
function updateFilterCounts() {
    const counts = {
        all: cars.length,
        luxury: cars.filter(car => car.category === 'luxury').length,
        sports: cars.filter(car => car.category === 'sports').length,
        suv: cars.filter(car => car.category === 'suv').length,
        electric: cars.filter(car => car.category === 'electric').length
    };
    
    filterButtons.forEach(button => {
        const filter = button.getAttribute('data-filter');
        const countElement = button.querySelector('.filter-count');
        if (countElement) {
            countElement.textContent = counts[filter] || 0;
        }
    });
}

// Open modal with animation
function openModal(carId) {
    const car = cars.find(c => c.id === carId);
    if (!car) return;
    
    const reviewStars = Math.floor(Math.random() * 2 + 4); // 4 or 5 stars
    
    modalBody.innerHTML = `
        <img src="${car.image}" alt="${car.name}" class="modal-car-image">
        <div class="modal-car-info">
            <div class="modal-car-header">
                <div class="modal-car-title">
                    <h2>${car.name}</h2>
                    <div class="modal-reviews">
                        <div class="stars">
                            ${Array(reviewStars).fill('').map(() => '<i class="fas fa-star"></i>').join('')}
                            ${Array(5 - reviewStars).fill('').map(() => '<i class="far fa-star"></i>').join('')}
                        </div>
                        <span>(${car.reviews} reviews)</span>
                    </div>
                </div>
                <div class="modal-car-pricing">
                    <p class="minimum-booking">Minimum 2 days booking</p>
                    <div class="modal-price">₹ ${car.price.toLocaleString()}<span>/day</span></div>
                    <p class="no-hidden">No hidden charges</p>
                </div>
            </div>
            
            <div class="modal-features-grid">
                <div class="modal-feature-item">
                    <i class="fas fa-cog"></i>
                    <span>Car Transmission</span>
                    <strong>${car.transmission}</strong>
                </div>
                <div class="modal-feature-item">
                    <i class="fas fa-users"></i>
                    <span>Seats</span>
                    <strong>${car.seats}</strong>
                </div>
                <div class="modal-feature-item">
                    <i class="fas fa-gas-pump"></i>
                    <span>Mileage</span>
                    <strong>${car.mileage}</strong>
                </div>
            </div>
            
            <div class="modal-description">
                <h3>About This Vehicle</h3>
                <p>${car.description}</p>
            </div>
            
            <div class="modal-cta">
                <h3>Ready to Book?</h3>
                <p>Contact us to reserve this vehicle</p>
                <div class="modal-buttons">
                    <button class="btn btn-primary btn-large" onclick="callNow()">
                        <i class="fas fa-phone"></i>
                        <span>Call to Book</span>
                    </button>
                    <button class="btn btn-whatsapp btn-large" onclick="bookOnWhatsapp()">
                        <i class="fab fa-whatsapp"></i>
                        <span>Book on WhatsApp</span>
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal with animation
function closeModalWithAnimation() {
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        modal.style.opacity = '1';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Call now function
function callNow() {
    window.location.href = 'tel:+918623077121';
}

// Book on WhatsApp function
function bookOnWhatsapp() {
    window.open('https://wa.me/918623077121', '_blank');
}

// Scroll to fleet
function scrollToFleet() {
    document.getElementById('fleet').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Setup hero slideshow
function setupHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length === 0) return;
    
    let currentSlide = 0;
    
    // Preload all images
    slides.forEach((slide, index) => {
        if (index !== 0) {
            const img = new Image();
            img.src = slide.src;
        }
    });
    
    function nextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Change slide every 5 seconds
    setInterval(nextSlide, 5000);
}

// Setup rotating text
function setupRotatingText() {
    const rotatingElement = document.querySelector('.hero-rotating');
    if (!rotatingElement) return;
    
    const words = ['Extraordinary', 'Exceptional', 'Luxurious', 'Unforgettable'];
    let currentIndex = 0;
    
    function rotateText() {
        rotatingElement.style.opacity = '0';
        
        setTimeout(() => {
            currentIndex = (currentIndex + 1) % words.length;
            rotatingElement.textContent = words[currentIndex];
            rotatingElement.style.opacity = '1';
        }, 300);
    }
    
    // Add transition style
    rotatingElement.style.transition = 'opacity 0.3s ease';
    
    // Rotate text every 3 seconds
    setInterval(rotateText, 3000);
}

// Setup scroll reveal animations
function setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => {
        revealObserver.observe(element);
    });
}

// Setup parallax scrolling effects
function setupParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-img');
    const heroSlideshow = document.querySelector('.hero-slideshow');
    const floatingElements = document.querySelectorAll('.floating-element');
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const windowHeight = window.innerHeight;
        
        // Hero slideshow parallax
        if (heroSlideshow) {
            const heroSpeed = 0.5;
            heroSlideshow.style.transform = `translateY(${scrolled * heroSpeed}px)`;
        }
        
        // Floating elements parallax
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.dataset.speed || 0.5);
            const yPos = -(scrolled * speed);
            element.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
        
        // General parallax elements
        parallaxElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const speed = parseFloat(element.dataset.speed || 0.5);
            
            if (rect.bottom >= 0 && rect.top <= windowHeight) {
                const yPos = -(scrolled - element.offsetTop) * speed;
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
    window.addEventListener('resize', requestTick);
    
    // Initial call
    updateParallax();
}

// Setup animated number counters
function setupNumberCounters() {
    const numberElements = document.querySelectorAll('.stat-number[data-target]');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const target = parseInt(element.dataset.target);
                animateNumber(element, target);
                counterObserver.unobserve(element);
            }
        });
    }, {
        threshold: 0.5
    });
    
    numberElements.forEach(element => {
        counterObserver.observe(element);
    });
}

function animateNumber(element, target) {
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        
        element.textContent = Math.floor(current) + (element.textContent.includes('%') ? '%' : '+');
    }, 16);
}