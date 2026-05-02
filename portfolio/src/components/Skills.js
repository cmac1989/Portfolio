import '../styles/skills.css';

const SKILL_GROUPS = [
    {
        label: 'Frontend',
        skills: ['React', 'Angular', 'JavaScript', 'HTML', 'CSS'],
    },
    {
        label: 'Backend',
        skills: ['Laravel', 'PHP', 'MySQL'],
    },
    {
        label: 'Mobile',
        skills: ['Java', 'Kotlin', 'Android'],
    },
    {
        label: 'General',
        skills: ['C#']
    },
];

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h2>Skills</h2>
            <div className="skill-groups">
                {SKILL_GROUPS.map(({ label, skills }) => (
                    <div className="skill-group" key={label}>
                        <span className="skill-group-label">{label}</span>
                        <div className="skill-tags">
                            {skills.map((skill) => (
                                <span className="skill-tag" key={skill}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
