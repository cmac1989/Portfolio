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
import Reveal from './components/Reveal';

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
                    <Reveal><Projects /></Reveal>
                </section>
                <section id="skills">
                    <Reveal><Skills /></Reveal>
                </section>
                <section id="work">
                    <Reveal><Work /></Reveal>
                </section>
                <section id="education">
                    <Reveal><Education /></Reveal>
                </section>
                <section id="contact">
                    <Reveal><ContactForm /></Reveal>
                </section>
                <Reveal><Footer /></Reveal>
            </div>
        </div>
    );
}

export default App;
