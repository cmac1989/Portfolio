import '../styles/header.css';
import { useEffect, useState } from "react";
import IconNavBar from "./IconNavBar";

const NAV_ITEMS = [
    { id: 'projects',  label: 'Projects'  },
    { id: 'skills',    label: 'Skills'    },
    { id: 'work',      label: 'Work'      },
    { id: 'education', label: 'Education' },
    { id: 'contact',   label: 'Contact'   },
];

function Header() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const scrollEl = document.querySelector('.scroll-container');
        if (!scrollEl) return;

        const updateActive = () => {
            const { scrollTop, scrollHeight, clientHeight } = scrollEl;
            const containerRect = scrollEl.getBoundingClientRect();

            // When the user has scrolled to the very bottom, the last
            // section's top may never reach the trigger threshold, so
            // force it active here.
            if (scrollHeight - scrollTop - clientHeight < 10) {
                setActiveSection('contact');
                return;
            }

            // Activate the last section whose top has entered the top
            // third of the visible scroll container.
            const sections = scrollEl.querySelectorAll('section[id]');
            let active = '';
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - containerRect.top;
                if (sectionTop <= clientHeight / 3) {
                    active = section.id;
                }
            });
            if (active) setActiveSection(active);
        };

        scrollEl.addEventListener('scroll', updateActive, { passive: true });
        updateActive(); // set initial state on mount

        return () => scrollEl.removeEventListener('scroll', updateActive);
    }, []);

    return (
        <div className="header">
            <nav className="site-nav" aria-label="Page sections">
                <ul>
                    {NAV_ITEMS.map(({ id, label }) => (
                        <li key={id}>
                            <a
                                href={`#${id}`}
                                className={activeSection === id ? 'active' : ''}
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            <IconNavBar />
        </div>
    );
}

export default Header;
