// Phone data
const phones = [
    // Aquos Phones
    { brand: 'Aquos', name: 'V45', storage: '64GB', price: 280, condition: 'UK Used', image: 'SENSE 5.jpg' },
    { brand: 'Aquos', name: 'Sense+5', storage: '64GB', price: 350, condition: 'UK Used', image: 'SENSE 5.jpg' },
    { brand: 'Aquos', name: 'V40', storage: '32GB', price: 200, condition: 'UK Used', image: 'SENSE 4PLUS.jpg' },
    { brand: 'Aquos', name: 'V43', storage: '32GB', price: 220, condition: 'UK Used', image: 'SENSE 5.jpg' },
    { brand: 'Aquos', name: 'R2', storage: '64GB', price: 300, condition: 'UK Used', image: 'SENSE 4PLUS.jpg' },
    { brand: 'Aquos', name: 'Sense+2', storage: '32GB', price: 230, condition: 'UK Used', image: 'SENSE 5.jpg' },
    { brand: 'Aquos', name: 'Sense+3+V46', storage: '64GB', price: 320, condition: 'UK Used', image: 'SENSE 3.jpg' },
    { brand: 'Aquos', name: 'Zero+5G', storage: '128GB', price: 480, condition: 'UK Used', image: 'SENSE 4PLUS.jpg' },
    { brand: 'Aquos', name: 'Zero+2+5G', storage: '256GB', price: 520, condition: 'UK Used', image: 'SENSE 5.jpg' },
    { brand: 'Aquos', name: 'Sense+4plus', storage: '128GB', price: 0, condition: 'UK Used', image: 'SENSE 4PLUS.jpg' },

    // Sony Phones
    { brand: 'Sony', name: 'Xperia+XZ3', storage: '64GB', price: 400, condition: 'UK Used', image: 'XZ3 SONY XPERIA.jpg' },
    { brand: 'Sony', name: 'Mono', storage: '32GB', price: 200, condition: 'UK Used', image: 'MONO.jpg' },
    { brand: 'Sony', name: 'Xperia+XZ2', storage: '64GB', price: 300, condition: 'UK Used', image: 'XZ2 SONY XPERIA.jpg' },
    { brand: 'Sony', name: 'Xperia+XZ1+Compact', storage: '32GB', price: 220, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Sony+XZ1' },

    // Arrows Phones
    { brand: 'Arrows', name: 'F-02L', storage: '32GB', price: 200, condition: 'UK Used', image: 'DOCOMO.jpg' },
    { brand: 'Arrows', name: 'F-04K', storage: '32GB', price: 200, condition: 'UK Used', image: 'DOCOMO.jpg' },
    { brand: 'Arrows', name: 'U', storage: '32GB', price: 230, condition: 'UK Used', image: 'DOCOMO.jpg' },

    // Huawei Phones
    { brand: 'Huawei', name: 'Nova+2+Plus', storage: '128GB', price: 300, condition: 'UK Used', image: 'HAWEI.jpg' },
    { brand: 'Huawei', name: 'P10+Lite', storage: '64GB', price: 350, condition: 'UK Used', image: 'HAWEI.jpg' },
    { brand: 'Huawei', name: 'Honor+8X', storage: '128GB', price: 420, condition: 'UK Used', image: 'HAWEI.jpg' },

    // Sharp Phones
    { brand: 'Sharp', name: 'Basio', storage: '32GB', price: 170, condition: 'UK Used', image: 'BASIO SHARP.jpg' },
    { brand: 'Sharp', name: 'Basio+5+A001SH', storage: '32GB', price: 220, condition: 'UK Used', image: 'BASIO SHARP.jpg' },
    { brand: 'Sharp', name: '704+SH', storage: '32GB', price: 170, condition: 'UK Used', image: 'DOCOMO 2.jpg' },

    // Other Brands
    { brand: 'LG', name: 'Style', storage: '8GB', price: 220, condition: 'UK Used', image: 'LG.jpg' },
    { brand: 'KYV45', name: 'Urbano', storage: '64GB', price: 220, condition: 'UK Used', image: 'KYV45 URBANO.jpg' },
    { brand: 'Oppo', name: 'A83', storage: '64GB', price: 250, condition: 'UK Used', image: 'OPPO.jpg' },
    { brand: 'Google', name: 'Pixel+4a', storage: '128GB', price: 550, condition: 'UK Used', image: 'GOOGLE PIXI.jpg' },
    { brand: 'Oppo', name: 'A73', storage: '128GB', price: 350, condition: 'UK Used', image: 'A73.jpg' },

    // Samsung Phones
    { brand: 'Samsung', name: 'Galaxy+S7+Edge', storage: '64GB', price: 300, condition: 'UK Used', image: 'S7.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S8', storage: '64GB', price: 400, condition: 'UK Used', image: 'galaxy s8.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S9', storage: '64GB', price: 450, condition: 'UK Used', image: 'S9.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S10', storage: '128GB', price: 600, condition: 'UK Used', image: 's10.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S8+Plus', storage: '64GB', price: 500, condition: 'UK Used', image: 'S8+.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S9+Plus', storage: '64GB', price: 600, condition: 'UK Used', image: 'S9+.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S10+Plus', storage: '128GB', price: 730, condition: 'UK Used', image: 's10.jpg' },
    { brand: 'Samsung', name: 'Galaxy+Note+8', storage: '64GB', price: 550, condition: 'UK Used', image: 'note 8.jpg' },
    { brand: 'Samsung', name: 'Galaxy+Note+9', storage: '128GB', price: 620, condition: 'UK Used', image: 'S9+.jpg' },
    { brand: 'Samsung', name: 'Galaxy+Note+10+Plus', storage: '256GB', price: 1100, condition: 'UK Used', image: 'note 10.jpg' },
    { brand: 'Samsung', name: 'Galaxy+A30', storage: '64GB', price: 420, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+A30' },
    { brand: 'Samsung', name: 'Galaxy+A31', storage: '128GB', price: 470, condition: 'UK Used', image: 'A31.jpg' },
    { brand: 'Samsung', name: 'Galaxy+A32', storage: '128GB', price: 520, condition: 'UK Used', image: 'A32.jpg' },
    { brand: 'Samsung', name: 'Galaxy+A50', storage: '128GB', price: 550, condition: 'UK Used', image: 'A50.jpg' },
    { brand: 'Samsung', name: 'Galaxy+A73', storage: '128GB', price: 1700, condition: 'UK Used', image: 'A73.jpg' },
    { brand: 'Samsung', name: 'Galaxy+A14+5G', storage: '128GB', price: 650, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+A14' },
    { brand: 'Samsung', name: 'Galaxy+A15+5G', storage: '128GB', price: 970, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+A15' },
    { brand: 'Samsung', name: 'Galaxy+A24+5G', storage: '128GB', price: 750, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+A24' },
    { brand: 'Samsung', name: 'Galaxy+S20', storage: '128GB', price: 720, condition: 'UK Used', image: 'S20 ULTRA.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S20+FE+5G', storage: '128GB', price: 700, condition: 'UK Used', image: 'S20 FE.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S20+Ultra+5G', storage: '128GB', price: 970, condition: 'UK Used', image: 'S20 ULTRA.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S21+5G', storage: '128GB', price: 1300, condition: 'UK Used', image: 'S21.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S21+Ultra+5G', storage: '128GB', price: 1700, condition: 'UK Used', image: 'S21 ULTRA.jpg' },
    { brand: 'Samsung', name: 'Galaxy+S24+Ultra', storage: '256GB', price: 3800, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+S24' },
    { brand: 'Samsung', name: 'Tab+A+10.1+(2016)', storage: '32GB', price: 450, condition: 'UK Used', image: 'https://via.placeholder.com/180x240.png?text=Samsung+Tab+A' },

    // Infinix Phones
    { brand: 'Infinix', name: 'Hot+30', storage: '128GB', price: 525, condition: 'Boxed', image: 'HOT 30.jpg' },
    { brand: 'Infinix', name: 'Hot+30i', storage: '128GB', price: 475, condition: 'Boxed', image: 'HOT 30i.jpg' },
    { brand: 'Infinix', name: 'Smart+7HD', storage: '64GB', price: 355, condition: 'Boxed', image: 'SMART 7.jpg' },

    // Tecno Phones
    { brand: 'Tecno', name: '7+Pop', storage: '64GB', price: 350, condition: 'Boxed', image: 'https://via.placeholder.com/180x240.png?text=Tecno+Pop+7' },
    { brand: 'Tecno', name: '10+Spark', storage: '128GB', price: 450, condition: 'Boxed', image: 'SPARK 10C.jpg' },
    { brand: 'Tecno', name: '7+Pro+Pop', storage: '64GB', price: 387, condition: 'Boxed', image: 'https://via.placeholder.com/180x240.png?text=Tecno+Pop+7+Pro' },
    { brand: 'Tecno', name: '10+Pro+Spark', storage: '128GB', price: 595, condition: 'Boxed', image: 'SPARK 10.jpg' },

    // iPhone Phones
    { brand: 'iPhone', name: '12', storage: '128GB', price: 1150, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '12+Pro', storage: '128GB', price: 1800, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '12+Pro', storage: '256GB', price: 1950, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '12+Pro+Max', storage: '128GB', price: 1900, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '12+Pro+Max', storage: '256GB', price: 2000, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '13', storage: '128GB', price: 1400, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '13', storage: '256GB', price: 1550, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '13+Pro', storage: '128GB', price: 1800, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '13+Pro', storage: '256GB', price: 2000, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '13+Pro+Max', storage: '128GB', price: 1970, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '13+Pro+Max', storage: '256GB', price: 2300, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '14', storage: '128GB', price: 2000, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '14', storage: '256GB', price: 2900, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '14+Pro', storage: '128GB', price: 2500, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '14+Pro', storage: '256GB', price: 3000, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '14+Pro+Max', storage: '128GB', price: 2780, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '14+Pro+Max', storage: '256GB', price: 2870, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '15', storage: '128GB', price: 2800, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '15', storage: '256GB', price: 3000, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '15+Pro', storage: '128GB', price: 2900, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '15+Pro', storage: '256GB', price: 3000, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '15+Pro+Max', storage: '128GB', price: 3500, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '15+Pro+Max', storage: '256GB', price: 3900, condition: 'Boxed', image: 'IPHONE 1.jpg' },
    { brand: 'iPhone', name: '16', storage: '128GB', price: 3600, condition: 'Boxed', image: 'IPHONE 2.jpg' },
    { brand: 'iPhone', name: '16+Pro+Max', storage: '256GB', price: 4990, condition: 'Boxed', image: 'IPHONE 1.jpg' }
];

// DOM elements
const phonesGrid = document.getElementById('phonesGrid');
const brandFilter = document.getElementById('brandFilter');
const priceFilter = document.getElementById('priceFilter');
const conditionFilter = document.getElementById('conditionFilter');
const searchInput = document.getElementById('searchInput');
const orderThankYou = document.getElementById('orderThankYou');
const orderOnlineBtn = document.getElementById('orderOnlineBtn');
const detailsModal = document.getElementById('phoneDetailsModal');
const detailsModalClose = document.getElementById('detailsModalClose');
const phoneDetailsContent = document.getElementById('phoneDetailsContent');

// Format price
function formatPrice(price) {
    if (price >= 1000) {
        return `${(price / 1000).toFixed(1)}M`;
    }
    return `${price}k`;
}

// Create phone card
function createPhoneCard(phone, index) {
    const card = document.createElement('div');
    card.className = 'phone-card';
    card.dataset.index = index;

    const conditionClass = phone.condition === 'UK Used' ? 'condition-uk-used' : 'condition-boxed';

    card.innerHTML = `
        <div class="phone-image"><img src="${phone.image}" alt="${phone.brand} ${phone.name}" class="phone-img"></div>
        <div class="phone-brand">${phone.brand}</div>
        <div class="phone-name">${phone.name}</div>
        <div class="phone-specs">Storage: ${phone.storage}</div>
        <div class="phone-price">${formatPrice(phone.price)}</div>
        <span class="phone-condition ${conditionClass}">${phone.condition}</span>
        <button class="order-btn" data-phone="${phone.brand} ${phone.name} (${phone.storage}, ${phone.condition})">Order</button>
    `;

    return card;
}

// Filter phones
function filterPhones() {
    const brandValue = brandFilter.value;
    const priceValue = priceFilter.value;
    const conditionValue = conditionFilter.value;
    const searchValue = searchInput.value.toLowerCase();

    let filteredPhones = phones.filter(phone => {
        // Brand filter
        if (brandValue && phone.brand !== brandValue) return false;

        // Condition filter
        if (conditionValue && phone.condition !== conditionValue) return false;

        // Price filter
        if (priceValue) {
            const [min, max] = priceValue.split('-').map(Number);
            if (max && (phone.price < min || phone.price > max)) return false;
            if (!max && phone.price < min) return false;
        }

        // Search filter
        if (searchValue) {
            const searchText = `${phone.brand} ${phone.name} ${phone.storage}`.toLowerCase();
            if (!searchText.includes(searchValue)) return false;
        }

        return true;
    });

    displayPhones(filteredPhones);

    // Auto-scroll to results for better visibility
    const phonesSection = document.getElementById('phones');
    if (phonesSection) {
        phonesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Display phones
function displayPhones(phonesToShow) {
    phonesGrid.innerHTML = '';

    if (phonesToShow.length === 0) {
        phonesGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #666;">
                <h3>No phones found matching your criteria</h3>
                <p>Try adjusting your filters or search terms</p>
            </div>
        `;
        return;
    }

    phonesToShow.forEach((phone, index) => {
        const card = createPhoneCard(phone, phones.indexOf(phone));
        phonesGrid.appendChild(card);
    });
}

// Event listeners
brandFilter.addEventListener('change', filterPhones);
priceFilter.addEventListener('change', filterPhones);
conditionFilter.addEventListener('change', filterPhones);
searchInput.addEventListener('input', filterPhones);

// Enhanced mobile accessibility features
function addMobileAccessibility() {
    // Add touch support for better mobile interaction
    let touchStartY = 0;
    let touchEndY = 0;
    let touchStartX = 0;
    let touchEndX = 0;

    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
        touchStartX = e.changedTouches[0].screenX;
    });

    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diffY = touchStartY - touchEndY;
        const diffX = touchStartX - touchEndX;

        // Only handle vertical swipes to avoid interfering with horizontal scrolling
        if (Math.abs(diffY) > swipeThreshold && Math.abs(diffY) > Math.abs(diffX)) {
            if (diffY > 0) {
                // Swipe up - scroll to top smoothly
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    }

    // Improve mobile scrolling performance
    let ticking = false;

    function updateScroll() {
        // Add any scroll-based animations or effects here
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScroll);
            ticking = true;
        }
    }

    // Optimize scroll events for mobile
    window.addEventListener('scroll', function() {
        requestTick();
    }, { passive: true });

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close modals
        if (e.key === 'Escape') {
            if (detailsModal.style.display === 'flex') {
                closeModal(detailsModal);
            }
            if (orderModal.style.display === 'flex') {
                closeModal(orderModal);
                orderForm.reset();
            }
        }

        // Enter key to submit forms
        if (e.key === 'Enter' && e.target.tagName === 'INPUT') {
            const form = e.target.closest('form');
            if (form && form.requestSubmit) {
                form.requestSubmit();
            }
        }
    });

    // Add focus management for better accessibility
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

    function trapFocus(element) {
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = focusableContent[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Apply focus trapping to modals
    if (detailsModal) trapFocus(detailsModal);
    if (orderModal) trapFocus(orderModal);

    // Add mobile-specific improvements
    function addMobileImprovements() {
        // Prevent zoom on double tap for iOS
        let lastTouchEnd = 0;
        document.addEventListener('touchend', function(event) {
            const now = (new Date()).getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        }, false);

        // Improve touch targets on mobile
        const touchTargets = document.querySelectorAll('button, a, input, select, textarea');
        touchTargets.forEach(target => {
            target.style.minHeight = '44px';
            target.style.minWidth = '44px';
        });
    }

    // Call mobile improvements
    addMobileImprovements();
}

// Add loading states and better user feedback
function addLoadingStates() {
    // Add loading indicator for filter operations
    const filterElements = [brandFilter, priceFilter, conditionFilter, searchInput];

    filterElements.forEach(element => {
        element.addEventListener('change', function() {
            // Add visual feedback
            phonesGrid.style.opacity = '0.7';
            setTimeout(() => {
                phonesGrid.style.opacity = '1';
            }, 300);
        });
    });

    // Add loading state for form submission
    orderForm.addEventListener('submit', function() {
        const submitBtn = orderForm.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Submitting...';
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = 'Order Online';
            }, 3000);
        }
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayPhones(phones);

    // Add mobile accessibility features
    addMobileAccessibility();
    addLoadingStates();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Add skip link functionality
    const skipLink = document.createElement('a');
    skipLink.href = '#phones';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Modal logic
const orderModal = document.getElementById('orderModal');
const orderModalClose = document.getElementById('orderModalClose');
const orderForm = document.getElementById('orderForm');
const orderPhoneDetails = document.getElementById('orderPhoneDetails');
const customerName = document.getElementById('customerName');
const customerPhone = document.getElementById('customerPhone');
const orderMessage = document.getElementById('orderMessage');

// --- Details Modal Logic ---
function showPhoneDetails(phone) {
    phoneDetailsContent.innerHTML = `
        <div class="details-image">
            <img src="${phone.image}" alt="${phone.brand} ${phone.name}">
        </div>
        <div class="details-info">
            <div class="details-brand">${phone.brand}</div>
            <h2>${phone.name}</h2>
            <div class="details-specs"><b>Storage:</b> ${phone.storage}</div>
            <div class="details-condition"><b>Condition:</b> ${phone.condition}</div>
            <div class="details-price">${formatPrice(phone.price)}</div>
            <button class="order-btn" data-phone="${phone.brand} ${phone.name} (${phone.storage}, ${phone.condition})">Order Now</button>
        </div>
    `;
    detailsModal.style.display = 'flex';
}

// =================================================================
// UNIFIED EVENT LISTENER FOR ALL CLICKS
// =================================================================
document.addEventListener('click', function(e) {
    const target = e.target;

    // --- Close Modals ---
    if (target === detailsModal || target.id === 'detailsModalClose') {
        closeModal(detailsModal);
        return;
    }
    if (target === orderModal || target.id === 'orderModalClose') {
        closeModal(orderModal);
        orderForm.reset();
        return;
    }

    // --- Handle clicks on a phone card in the grid ---
    const phoneCard = target.closest('.phone-card');
    if (phoneCard && phonesGrid.contains(phoneCard)) {
        const phoneIndex = parseInt(phoneCard.dataset.index, 10);
        const phone = phones[phoneIndex];

        if (phone) {
            if (target.classList.contains('order-btn')) {
                // Clicked the ORDER button on the card
                const phoneDetails = target.getAttribute('data-phone');
                orderPhoneDetails.value = phoneDetails;
                openModal(orderModal);
            } else {
                // Clicked the card body
                showPhoneDetails(phone);
            }
        }
        return;
    }

    // --- Handle click on ORDER button inside the details modal ---
    if (detailsModal.contains(target) && target.classList.contains('order-btn')) {
        const phoneDetails = target.getAttribute('data-phone');
        orderPhoneDetails.value = phoneDetails;
        closeModal(detailsModal);
        openModal(orderModal);
    }
});

// Enhanced modal functions for better accessibility
function openModal(modal) {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');

    // Focus management
    const firstFocusable = modal.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) {
        firstFocusable.focus();
    }

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');

    // Restore body scroll
    document.body.style.overflow = '';

    // Return focus to the element that opened the modal
    if (document.activeElement && modal.contains(document.activeElement)) {
        const phonesGridElement = document.querySelector('.phones-grid');
        if (phonesGridElement) {
            phonesGridElement.focus();
        }
    }
}

// Show thank you message after Formspree submission
orderForm.addEventListener('submit', function(e) {
    const submitter = e.submitter || document.activeElement;
    if (submitter && submitter.classList.contains('order-online')) {
        // Let the form submit normally for Formspree
        orderForm.style.display = 'none';
        orderThankYou.style.display = 'block';
        setTimeout(() => {
            orderModal.style.display = 'none';
            orderForm.reset();
            orderForm.style.display = 'block';
            orderThankYou.style.display = 'none';
        }, 3000);
    } else {
        // WhatsApp logic
        e.preventDefault();
        const phone = orderPhoneDetails.value;
        const name = customerName.value;
        const phoneNum = customerPhone.value;
        const msg = orderMessage.value;
        let fullMsg = `Hello, I want to order the ${phone}.\nName: ${name}\nPhone: ${phoneNum}`;
        if (msg) fullMsg += `\nMessage: ${msg}`;
        const whatsappNumber = '256773074155';
        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMsg)}`;
        window.open(whatsappLink, '_blank');
        orderModal.style.display = 'none';
        orderForm.reset();
    }
});

// Handle order button clicks
document.querySelector('.modal-actions').addEventListener('click', function(e) {
    if (e.target.classList.contains('order-whatsapp')) {
        // Trigger form submission for wasspp
        const event = new Event('submit', { bubbles: true, cancelable: true });
        orderForm.dispatchEvent(event);

    } else if (e.target.classList.contains('order-online')) {
        // Trigger form submission for online
        // create a temporary submit button to trigger formspree
        const tempSubmit = document.createElement('button');
        tempSubmit.type = 'submit';
        tempSubmit.className = 'order-online'; // so the logic catches it
        tempSubmit.style.display = 'none';
        orderForm.appendChild(tempSubmit);
        tempSubmit.click();
        orderForm.removeChild(tempSubmit);
    }
});

// Ripple effect for contact-btn
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    button.appendChild(circle);
    setTimeout(() => {
        circle.remove();
    }, 600);
}
document.querySelectorAll('.contact-btn').forEach(btn => {
    btn.addEventListener('click', createRipple);
});