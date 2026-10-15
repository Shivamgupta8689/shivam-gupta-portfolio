import { useTheme } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import { Toaster } from 'react-hot-toast';

export default function App() {
  const { theme } = useTheme();

  return (
    <>
    <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: 'var(--bg)',
            color: 'var(--ink)',
            border: '1.5px solid var(--accent)',
            borderRadius: '8px',
            fontFamily: 'var(--display)',
            fontWeight: 600,
          },
          error: { style: { border: '1.5px solid #e53e3e' } },
        }}
      />
      <CustomCursor />
      <Navbar />
      <main>
        <Hero theme={theme} />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
