import '../styles/education.css';

const SKILLS = [
    'JavaScript', 'React', 'Angular', 'Java',
    'Kotlin', 'PHP', 'MySQL', 'Android', 'HTML', 'CSS',
];

export default function Education() {
    return (
        <div className="education-section">
            <h2 className="education-heading">Education</h2>

            <div className="edu-card">
                <div className="edu-card-top">
                    <span className="edu-badge">Diploma</span>
                    <span className="edu-date">2023 – 2025</span>
                </div>

                <h3 className="edu-program">Computer Programming</h3>
                <p className="edu-institution">St. Clair College &middot; Windsor, ON</p>

                <p className="edu-description">
                    Graduated from the Computer Programming diploma programme,
                    building hands-on experience across full-stack web development,
                    mobile application development, database design, and software
                    engineering fundamentals.
                </p>

                <div className="edu-tags">
                    {SKILLS.map((skill) => (
                        <span className="edu-tag" key={skill}>{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
