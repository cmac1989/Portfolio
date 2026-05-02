import '../styles/project.css';

const PROJECTS = [
    {
        title: 'Renova Ecommerce Website',
        image: '../images/renova.png',
        description:
            'Full-stack eCommerce application built with React, Node.js, Express, and MySQL. Features secure user authentication, email handling, Stripe integration for payments, and session management using cookies.',
        tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
        repo: 'https://github.com/cmac1989/RenovaEcommerce',
        portrait: false,
    },
    {
        title: 'Fitness Trainer',
        image: '../images/mobileapp.png',
        description:
            'Full-stack fitness application featuring client onboarding, in-app messaging, AI-generated workout plans and assignments, progress check-ins, Stripe integration for payments, and push notifications.',
        tech: ['React Native', 'Laravel', 'MySQL'],
        repo: 'https://github.com/cmac1989/FitnessApp',
        portrait: true,
    },
    {
        title: 'Money Tracker App',
        image: '../images/moneyTracker.png',
        description:
            'A desktop app for tracking personal finances in an organized, visually appealing way. Users can sign up, add, update, and delete transactions, and manage custom categories.',
        tech: ['JavaFX', 'Gradle', 'CSS'],
        repo: 'https://github.com/cmac1989/MoneyTrackerApp',
        portrait: false,
    },
];

export default function Projects() {
    return (
        <div className="projects" id="projects">
            <h2>Projects</h2>
            <div className="project-cards">
                {PROJECTS.map(({ title, image, description, tech, repo, portrait }) => (
                    <div className="project-card" key={title}>
                        <div className={`project-card-img${portrait ? ' project-card-img--portrait' : ''}`}>
                            <img src={image} alt={title} />
                        </div>
                        <div className="project-card-body">
                            <h3 className="project-title">{title}</h3>
                            <p className="project-description">{description}</p>
                            <div className="project-card-footer">
                                <div className="tech-tags">
                                    {tech.map((t) => (
                                        <span className="tech-tag" key={t}>{t}</span>
                                    ))}
                                </div>
                                <a
                                    className="project-repo-link"
                                    href={repo}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={`View ${title} on GitHub`}
                                >
                                    <svg className="project-repo-icon" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                                    </svg>
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
