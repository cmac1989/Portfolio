import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/queries.css'
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Work from './components/Work';
import Education from './components/Education';

function App() {
    return (
        <div className="main-container">
            <div className="fixed-container">
                <section id="hero">
                    <Hero />
                </section>
            </div>
            <div className="scroll-container">
                <section id="projects">
                    <Projects />
                </section>
                <section id="skills">
                    <Skills />
                </section>
                <section id="work">
                    <Work />
                </section>
                <section id="education">
                    <Education />
                </section>
                <section id="contact">
                    <ContactForm />
                </section>
                <Footer />
            </div>
        </div>
    );
}

export default App;
