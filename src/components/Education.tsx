import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  return (
    <SectionWrapper id="education" title="Education" subtitle="Academic background">
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="glass-card p-6 md:p-8 glow-primary relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="w-4 h-4" />
              <span>2022 – 2026</span>
            </div>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground">
              COMSATS University Islamabad, Wah Campus
            </h3>
            <p className="text-secondary-foreground text-lg">
              Software Engineering — <span className="text-primary font-semibold">CGPA: 3.86</span>
            </p>
            <p className="text-muted-foreground text-sm">Graduation: January 2026</p>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default Education;
