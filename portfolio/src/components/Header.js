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
            // On mobile the container doesn't scroll — the window does.
            const containerScrolls = scrollEl.scrollHeight > scrollEl.clientHeight + 1;

            const scrollTop    = containerScrolls ? scrollEl.scrollTop    : window.scrollY;
            const clientHeight = containerScrolls ? scrollEl.clientHeight : window.innerHeight;
            const scrollHeight = containerScrolls ? scrollEl.scrollHeight : document.documentElement.scrollHeight;
            const originTop    = containerScrolls ? scrollEl.getBoundingClientRect().top : 0;

            if (scrollHeight - scrollTop - clientHeight < 10) {
                setActiveSection('contact');
                return;
            }

            const sections = document.querySelectorAll('section[id]');
            let active = '';
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top - originTop;
                if (sectionTop <= clientHeight / 3) {
                    active = section.id;
                }
            });
            if (active) setActiveSection(active);
        };

        scrollEl.addEventListener('scroll', updateActive, { passive: true });
        window.addEventListener('scroll', updateActive, { passive: true });
        updateActive();

        return () => {
            scrollEl.removeEventListener('scroll', updateActive);
            window.removeEventListener('scroll', updateActive);
        };
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
