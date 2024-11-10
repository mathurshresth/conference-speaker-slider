document.addEventListener('DOMContentLoaded', () => {
    // Speaker Data
    const speakerData = [
        {
            name: 'John Doe',
            title: 'Chief Marketing Officer',
            company: 'Acme Corp',
            image: '/Assets/speaker1.jpeg',
            description: 'Monotonectally synergize business communities rather than client-centric convergence. Assertively unleash cross-platform best practices rather than pandemic total linkage. Synergistically monetize parallel infomediaries whereas 2.0 mindshare. Dramatically pursue real-time markets through e-business strategic theme areas..',
            twitter: 'https://twitter.com/johndoe',
            linkedin: 'https://linkedin.com/in/johndoe',
            website: 'https://johndoe.com'
        },
        {
            name: 'Jane Smith',
            title: 'Chief Engagement Officer',
            company: 'Acquia',
            image: '/Assets/speaker2.jpeg',
            description: 'Expert in driving customer engagement and retention strategies.',
            twitter: 'https://twitter.com/janesmith',
            linkedin: 'https://linkedin.com/in/janesmith',
            website: 'https://janesmith.com'
        },
        {
            name: 'Michael Brown',
            title: 'Chief Technical Developer',
            company: 'Pantheon',
            image: '/Assets/speaker3.jpeg',
            description: 'Passionate about technology and innovative solutions.',
            twitter: 'https://twitter.com/michaelbrown',
            linkedin: 'https://linkedin.com/in/michaelbrown',
            website: 'https://michaelbrown.com'
        },
        {
            name: 'Michael Brown',
            title: 'Chief Marketing Officer',
            company: 'Specbee',
            image: '/Assets/speaker4.jpeg',
            description: 'Innovative marketer with a focus on digital solutions.',
            twitter: 'https://twitter.com/specbee_michael',
            linkedin: 'https://linkedin.com/in/specbee_michael',
            website: 'https://specbee.com/michael'
        }
    ];

    // Popover Elements
    const speakerCards = document.querySelectorAll('.speaker-card');
    const popover = document.getElementById('popover');
    const popoverName = document.getElementById('popover-name');
    const popoverTitle = document.getElementById('popover-title');
    const popoverCompany = document.getElementById('popover-company');
    const popoverImg = document.getElementById('popover-img');
    const popoverDesc = document.getElementById('popover-description');
    const popoverTwitter = document.getElementById('popover-twitter');
    const popoverLinkedIn = document.getElementById('popover-linkedin');
    const popoverWebsite = document.getElementById('popover-website');
    const closeBtn = document.querySelector('.popover-close');

    // Arrow Buttons
    const leftButton = document.querySelector('.slider-btn.left');
    const rightButton = document.querySelector('.slider-btn.right');
    const sliderContainer = document.querySelector('.speaker-slider__container');

    // Scroll Amount
    const scrollAmount = 300; // Adjust this value if needed

    // Functionality for Popover on Speaker Card Click
    speakerCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const speaker = speakerData[index];
            popoverName.textContent = speaker.name;
            popoverTitle.textContent = speaker.title;
            popoverCompany.textContent = speaker.company;
            popoverImg.src = speaker.image;
            popoverDesc.textContent = speaker.description;

            // Populate social media links
            popoverTwitter.href = speaker.twitter;
            popoverLinkedIn.href = speaker.linkedin;
            popoverWebsite.href = speaker.website;

            // Show popover
            popover.style.display = 'block';
        });
    });

    // Close Popover
    closeBtn.addEventListener('click', () => {
        popover.style.display = 'none';
    });

    // Scroll Right Function
    rightButton.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth',
        });
    });

    // Scroll Left Function
    leftButton.addEventListener('click', () => {
        sliderContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth',
        });
    });
});
