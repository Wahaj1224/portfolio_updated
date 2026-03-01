import { motion } from "framer-motion";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero */}
      <header className="section-padding flex items-center justify-center min-h-[60vh] relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Wahaj</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Software Engineer · Full Stack Developer · AI/ML Enthusiast
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-primary to-accent rounded-full"
          />
        </motion.div>
      </header>

      {/* Sections */}
      <Experience />
      <Education />
      <Achievements />
      <Certifications />

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm border-t border-border">
        <p>© 2025 Wahaj. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
