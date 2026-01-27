import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';

export const useSectionTracking = () => {
    // We use a ref to keep track of the last tracked section to avoid duplicate events
    // while browsing the same section.
    const lastSectionRef = useRef<string | null>(null);

    useEffect(() => {
        // Options for the observer
        const options = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: 0.5, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const sectionId = entry.target.id;

                    // Only track if it's a new section
                    if (sectionId && sectionId !== lastSectionRef.current) {
                        lastSectionRef.current = sectionId;

                        // Send a virtual pageview
                        // We use /#[sectionId] to represent the "page"
                        ReactGA.send({
                            hitType: "pageview",
                            page: `/#${sectionId}`,
                            title: sectionId.charAt(0).toUpperCase() + sectionId.slice(1) // Capitalize "about" -> "About"
                        });

                        // Optional: Log to console for debugging if strictly needed
                        // console.log(`tracked section: ${sectionId}`);
                    }
                }
            });
        }, options);

        // Find all sections with an ID
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
            observer.disconnect();
        };
    }, []); // Run once on mount
};
