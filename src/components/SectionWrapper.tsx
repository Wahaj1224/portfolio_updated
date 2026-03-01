import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const SectionWrapper = ({ id, title, subtitle, children }: SectionWrapperProps) => {
  return (
    <section id={id} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gradient mb-3">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
          <div className="h-1 w-16 bg-gradient-to-r from-primary to-accent rounded-full mt-4" />
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
