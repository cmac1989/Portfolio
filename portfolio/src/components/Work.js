import '../styles/work.css'
import {Card} from "react-bootstrap";

export default function work() {
    return (
        <div className="work" id="work">
            <h2>Work</h2>
            <Card>
                <Card.Body>
                    <div className="card-body-container">
                        <div className="card-body-left">
                            <p className="date-text">2025 – present</p>
                        </div>
                        <div className="card-body-right">
                            <h3 className="body-text">Corum Digital</h3>
                            <p className="body-text">
                                Software developer with experience working across multiple
                                codebases, including C# applications, native Android, and
                                hybrid mobile solutions. Proficient in C#, JavaScript,
                                Java, Kotlin, and PHP, with a focus on building and
                                maintaining scalable, cross-platform applications.
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <div className="card-body-container">
                        <div className="card-body-left">
                            <p className="date-text">2024 – 2025</p>
                        </div>
                        <div className="card-body-right">
                            <h3 className="body-text">St. Clair College</h3>
                            <p className="body-text">
                                I tutored students in the Mobile Applications Development
                                program from 2024 to 2025, providing guidance on core
                                concepts in Angular, JavaScript, HTML, CSS, PHP, MySQL,
                                and Java.
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <div className="card-body-container">
                        <div className="card-body-left">
                            <p className="date-text">2024 – 2025</p>
                        </div>
                        <div className="card-body-right">
                            <h3 className="body-text">Family Respite Services</h3>
                            <p className="body-text">
                                Served as a Direct Support Provider, offering
                                assistance and relief to families in need. My role
                                involved promoting positive habits in children with
                                intellectual disabilities through encouragement, positive
                                reinforcement, and tailored support.
                            </p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}
