// Function to fetch LinkedIn jobs
function fetchLinkedInJobs() {
    const jobResults = document.getElementById('jobResults');
    const lastUpdated = document.getElementById('lastUpdated');
    
    // Show loading state
    jobResults.innerHTML = '<div class="loading">🔄 Fetching latest jobs...</div>';
    
    // Simulate API call with demo data
    // In a real implementation, you would call a backend API that interfaces with LinkedIn
    setTimeout(() => {
        displayDemoJobs();
        lastUpdated.textContent = `Last updated: ${new Date().toLocaleString()}`;
    }, 1000);
}

// Helper function to escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Display demo jobs
function displayDemoJobs() {
    const jobResults = document.getElementById('jobResults');
    
    const demoJobs = [
        {
            title: 'Junior DevOps Engineer',
            company: 'Tech Company Inc.',
            location: 'Remote',
            posted: '2 days ago',
            description: 'Looking for an entry-level DevOps Engineer to join our growing team. Experience with Docker, Kubernetes, and CI/CD pipelines preferred. You will work closely with our development team to automate deployment processes.',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        },
        {
            title: 'DevOps Associate',
            company: 'Cloud Solutions Ltd.',
            location: 'New York, NY',
            posted: '1 day ago',
            description: 'Seeking a motivated DevOps Associate with knowledge of AWS, Jenkins, and automation tools. Great opportunity for recent graduates to learn from experienced engineers and grow their skills.',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        },
        {
            title: 'Entry Level DevOps Specialist',
            company: 'Innovative Startups',
            location: 'San Francisco, CA',
            posted: '3 days ago',
            description: 'Join our startup as an Entry Level DevOps Specialist. Work with modern tools like Terraform, Docker, and GitHub Actions. You will help build and maintain our cloud infrastructure.',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        },
        {
            title: 'DevOps Trainee',
            company: 'Digital Innovations Corp',
            location: 'Austin, TX',
            posted: '2 days ago',
            description: 'We are looking for a DevOps Trainee who is passionate about automation and cloud technologies. Training will be provided on AWS, Docker, Kubernetes, and CI/CD tools. Great for career starters!',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        },
        {
            title: 'Junior Site Reliability Engineer',
            company: 'FinTech Solutions',
            location: 'Remote',
            posted: '1 day ago',
            description: 'Entry-level SRE position focused on maintaining system reliability and performance. Experience with Linux, Python scripting, and monitoring tools is a plus. We offer mentorship and growth opportunities.',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        },
        {
            title: 'DevOps Engineer - Entry Level',
            company: 'Global Tech Systems',
            location: 'Seattle, WA',
            posted: '3 days ago',
            description: 'Entry level DevOps Engineer needed for our cloud operations team. You will work on automating infrastructure deployment, managing containers, and implementing CI/CD pipelines using modern DevOps practices.',
            type: 'Full-time',
            link: 'https://www.linkedin.com/jobs/'
        }
    ];
    
    let jobsHTML = '';
    demoJobs.forEach(job => {
        // Escape all user-provided content to prevent XSS
        const safeTitle = escapeHtml(job.title);
        const safeCompany = escapeHtml(job.company);
        const safeLocation = escapeHtml(job.location);
        const safePosted = escapeHtml(job.posted);
        const safeDescription = escapeHtml(job.description);
        const safeType = escapeHtml(job.type);
        const safeLink = escapeHtml(job.link);
        
        jobsHTML += `
            <div class="job-card demo">
                <div class="job-header">
                    <h3>${safeTitle}</h3>
                    <span class="company">${safeCompany}</span>
                </div>
                <div class="job-details">
                    <span class="location">📍 ${safeLocation}</span>
                    <span class="posted">🕒 Posted ${safePosted}</span>
                </div>
                <p class="job-description">${safeDescription}</p>
                <div class="job-footer">
                    <span class="job-type">${safeType}</span>
                    <a href="${safeLink}" target="_blank" rel="noopener noreferrer" class="btn-apply">View on LinkedIn</a>
                </div>
            </div>
        `;
    });
    
    jobResults.innerHTML = jobsHTML;
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
    
    // Smooth scroll
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
    
    // Set initial last updated time
    const lastUpdated = document.getElementById('lastUpdated');
    lastUpdated.textContent = `Last updated: ${new Date().toLocaleString()}`;
    
    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe all cards for animation
    document.querySelectorAll('.week-card, .job-card, .pillar').forEach(card => {
        card.classList.add('fade-in-element');
        observer.observe(card);
    });
});

// Integration guide for real LinkedIn API
const linkedInAPIGuide = {
    note: "To integrate real LinkedIn job data, follow these steps:",
    steps: [
        "1. LinkedIn Official API: Register for LinkedIn API access at https://www.linkedin.com/developers/",
        "2. OAuth 2.0 Authentication: Implement LinkedIn OAuth flow for user authentication",
        "3. API Endpoints: Use LinkedIn's Job Search API endpoints with proper parameters",
        "4. Backend Service: Create a backend (Node.js, Python, etc.) to handle API requests securely",
        "5. Rate Limits: Be aware of LinkedIn's API rate limits and implement caching",
        "6. Alternative: Use job aggregation APIs like:",
        "   - RapidAPI LinkedIn Job Search",
        "   - Adzuna Job Search API",
        "   - The Muse Job API",
        "   - JSearch API",
        "7. Server-side Implementation: Always make API calls from server-side to protect API keys",
        "8. Caching Strategy: Implement Redis or similar to cache job listings and reduce API calls"
    ],
    exampleBackendCode: `
    // Example Node.js backend endpoint using a job aggregation API
    app.get('/api/jobs', async (req, res) => {
        try {
            // Note: This is a placeholder. Actual API endpoints vary by provider.
            // LinkedIn's API requires specific parameters like keywords, location, etc.
            const response = await fetch('YOUR_JOB_API_ENDPOINT_HERE', {
                headers: {
                    'Authorization': 'Bearer ' + process.env.API_TOKEN,
                    'Content-Type': 'application/json'
                },
                params: {
                    keywords: 'DevOps',
                    location: 'United States',
                    experience: 'entry-level',
                    date_posted: 'last3days'
                }
            });
            const jobs = await response.json();
            res.json(jobs);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch jobs' });
        }
    });
    `
};

console.log('LinkedIn API Integration Guide:', linkedInAPIGuide);
