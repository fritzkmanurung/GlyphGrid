document.addEventListener('DOMContentLoaded', function() {
    // Sample icon data
    const icons = [
        {
            id: 1,
            name: "Facebook",
            desc: "Connect with friends and share updates",
            tags: ["social", "brand"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/facebook-new.png"
        },
        {
            id: 2,
            name: "Twitter",
            desc: "Stay updated with news and trends",
            tags: ["social", "brand"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/twitter.png"
        },
        {
            id: 3,
            name: "Instagram",
            desc: "Share your moments with stunning visuals",
            tags: ["social", "brand"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/instagram-new.png"
        },
        {
            id: 4,
            name: "LinkedIn",
            desc: "Build your professional network",
            tags: ["social", "brand"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/linkedin.png"
        },
        {
            id: 5,
            name: "YouTube",
            desc: "Watch and share videos",
            tags: ["social", "media", "brand"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/youtube-play.png"
        },
        {
            id: 6,
            name: "TikTok",
            desc: "Create and discover short videos",
            tags: ["social", "media"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/tiktok.png"
        },
        {
            id: 7,
            name: "Settings",
            desc: "Application configuration options",
            tags: ["ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/settings.png"
        },
        {
            id: 8,
            name: "Search",
            desc: "Find content within the application",
            tags: ["ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/search.png"
        },
        {
            id: 9,
            name: "Notification",
            desc: "Alert users about new activity",
            tags: ["ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/appointment-reminders.png"
        },
        {
            id: 10,
            name: "Camera",
            desc: "Capture photos and videos",
            tags: ["media", "ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/compact-camera.png"
        },
        {
            id: 11,
            name: "Microphone",
            desc: "Record audio input",
            tags: ["media", "ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/microphone.png"
        },
        {
            id: 12,
            name: "Play",
            desc: "Start media playback",
            tags: ["media", "ui"],
            img: "https://img.icons8.com/ios-filled/150/4361ee/play-button-circled.png"
        }
    ];
    
    // DOM elements
    const iconGrid = document.getElementById('iconGrid');
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const iconModal = document.getElementById('iconModal');
    const modalClose = document.getElementById('modalClose');
    const modalIcon = document.getElementById('modalIcon');
    const modalTitle = document.getElementById('modalTitle');
    const modalText = document.getElementById('modalText');
    const downloadBtns = document.querySelectorAll('.download-btn');
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const themeToggle = document.getElementById('themeToggle');
    
    let currentFilter = 'all';
    let currentSearch = '';
    let selectedIcon = null;
    
    // Initialize the gallery
    function initGallery() {
        renderIcons(icons);
        setupEventListeners();
    }
    
    // Render icons based on filter and search
    function renderIcons(iconsToRender) {
        iconGrid.innerHTML = '';
        
        if (iconsToRender.length === 0) {
            iconGrid.innerHTML = '<div class="no-results">No icons found matching your criteria</div>';
            return;
        }
        
        iconsToRender.forEach(icon => {
            const iconCard = document.createElement('div');
            iconCard.className = 'icon-card';
            iconCard.dataset.id = icon.id;
            iconCard.dataset.tags = icon.tags.join(' ');
            
            iconCard.innerHTML = `
                <img src="${icon.img}" alt="${icon.name}" class="icon-img">
                <h4 class="icon-name">${icon.name}</h4>
                <p class="icon-desc">${icon.desc}</p>
                <div class="icon-tags">
                    ${icon.tags.map(tag => `<span class="icon-tag">${tag}</span>`).join('')}
                </div>
                <div class="icon-actions">
                    <button class="action-btn" data-action="preview">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn secondary" data-action="download">
                        <i class="fas fa-download"></i>
                    </button>
                </div>
            `;
            
            iconGrid.appendChild(iconCard);
        });
    }
    
    // Filter icons based on selected filter and search term
    function filterIcons() {
        let filteredIcons = icons;
        
        // Apply filter
        if (currentFilter !== 'all') {
            filteredIcons = filteredIcons.filter(icon => 
                icon.tags.includes(currentFilter)
            );
        }
        
        // Apply search
        if (currentSearch) {
            const searchTerm = currentSearch.toLowerCase();
            filteredIcons = filteredIcons.filter(icon => 
                icon.name.toLowerCase().includes(searchTerm) || 
                icon.desc.toLowerCase().includes(searchTerm) ||
                icon.tags.some(tag => tag.toLowerCase().includes(searchTerm))
            );
        }
        
        renderIcons(filteredIcons);
    }
    
    // Show modal with icon details
    function showModal(iconId) {
        selectedIcon = icons.find(icon => icon.id === iconId);
        
        if (selectedIcon) {
            modalIcon.src = selectedIcon.img;
            modalIcon.alt = selectedIcon.name;
            modalTitle.textContent = selectedIcon.name;
            modalText.textContent = selectedIcon.desc;
            iconModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
    
    // Close modal
    function closeModal() {
        iconModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Show toast notification
    function showToast(message) {
        toastMessage.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
    
    // Toggle dark/light theme
    function toggleTheme() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }
    
    // Set up event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                currentFilter = button.dataset.filter;
                filterIcons();
            });
        });
        
        // Search input
        searchInput.addEventListener('input', (e) => {
            currentSearch = e.target.value.trim();
            filterIcons();
        });
        
        // Icon card clicks
        iconGrid.addEventListener('click', (e) => {
            const iconCard = e.target.closest('.icon-card');
            const actionBtn = e.target.closest('.action-btn');
            
            if (!iconCard && !actionBtn) return;
            
            const iconId = parseInt(iconCard.dataset.id);
            
            if (actionBtn) {
                const action = actionBtn.dataset.action;
                
                if (action === 'preview') {
                    showModal(iconId);
                } else if (action === 'download') {
                    downloadIcon(iconId, 'png');
                }
            } else {
                showModal(iconId);
            }
        });
        
        // Modal close
        modalClose.addEventListener('click', closeModal);
        
        // Modal backdrop click
        iconModal.addEventListener('click', (e) => {
            if (e.target === iconModal) {
                closeModal();
            }
        });
        
        // Download buttons
        downloadBtns.forEach(button => {
            button.addEventListener('click', () => {
                if (selectedIcon) {
                    const format = button.dataset.format;
                    downloadIcon(selectedIcon.id, format);
                    closeModal();
                }
            });
        });
        
        // Theme toggle
        themeToggle.addEventListener('click', toggleTheme);
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && iconModal.classList.contains('active')) {
                closeModal();
            }
        });
    }
    
    // Simulate icon download
    function downloadIcon(iconId, format) {
        const icon = icons.find(i => i.id === iconId);
        if (icon) {
            showToast(`${icon.name} icon downloaded as ${format.toUpperCase()}`);
            // In a real app, this would trigger an actual download
            console.log(`Downloading ${icon.name} as ${format}`);
        }
    }
    
    // Initialize the gallery
    initGallery();
});
