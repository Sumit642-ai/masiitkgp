import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import './App.css'
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PreviousInvestors from './components/PreviousInvestors';
import PreviousStartups from './components/PreviousStartups';
import EventsHighlight from './components/EventsHighlight';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import RegistrationForm from './components/RegistrationForm';

const MainPage = ({ isLoading }) => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="page">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Navbar />
      </motion.div>

      <main>
        <motion.div 
          id="home"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          variants={fadeInVariants}
        >
          <LandingPage isLoadingComplete={!isLoading} />
        </motion.div>
        
        <motion.div 
          id="investors"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <PreviousInvestors />
        </motion.div>
        
        <motion.div 
          id="startups"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <PreviousStartups />
        </motion.div>
        
        <motion.div 
          id="highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <EventsHighlight />
        </motion.div>
        
        <motion.div 
          id="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={fadeInVariants}
        >
          <ContactUs />
        </motion.div>
      </main>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
      </AnimatePresence>
      
      {!isLoading && (
        <Routes>
          <Route path="/" element={<MainPage isLoading={isLoading} />} />
        </Routes>
      )}
    </>
  )
}

export default App
