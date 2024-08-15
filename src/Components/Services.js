import React from 'react';
import './services-style.css';
import serviceImage1 from'./service-image-1.png';
import serviceImage2 from './service-image-2.jfif';
import serviceImage3 from './service-image-3.jfif';
import serviceImage4 from './service-image-4.jfif';
function Services() {
    const servicesData = [
        {
            title: "Secure Cloud Storage",
            description: "Store your notes securely on our cloud servers with easy access anytime, anywhere.",
            imgSrc: serviceImage1,
        },
        {
            title: "Real-time Sync",
            description: "Sync your notes across all your devices in real-time, ensuring you always have the latest version.",
            imgSrc: serviceImage2,
        },
        {
            title: "Organized Notes",
            description: "Organize your notes with tags, categories, and search functions for quick retrieval.",
            imgSrc: serviceImage3,
        },
        {
            title: "Collaborative Editing",
            description: "Share and collaborate on notes with others in real-time, making teamwork easier.",
            imgSrc: serviceImage4,
        }
    ];

    return (
        
        <section className="services-section">
            <h2>OUR SERVICES</h2>
            <div className="services-container">
                {servicesData.map((service, index) => (
                    <div 
                        className={`service-card ${index % 2 === 0 ? 'odd-card' : 'even-card'}`} 
                        key={index}
                    >
                        <div className="service-image">
                        <img src= {service.imgSrc} alt={service.title} />
                        </div>
                        <div className="service-content">
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
