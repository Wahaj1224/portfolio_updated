import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    role: "Full Stack Developer with AI/ML Integration",
    company: "HealOra Ltd.",
    type: "Remote",
    period: "Jan – Dec, 2025",
    bullets: [
      "Developed an automated MS Teams bot that joins scheduled meetings, records audio, transcribes it to text, generates user stories, and automatically posts them to Jira.",
      "Built automation scripts for Cruise Company Ltd. to clean unstructured data, handle multiple formats, and upload processed datasets into SQL tables using Python.",
    ],
  },
];

const Experience = () => {
  return (
    <SectionWrapper id="experience" title="Experience" subtitle="Professional journey">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className="absolute left-[20px] top-8 w-[15px] h-[15px] rounded-full bg-primary border-4 border-background z-10 hidden md:block" />

              <div className="glass-card p-6 md:p-8 md:ml-14 group hover:glow-primary transition-shadow duration-500 relative overflow-hidden">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/3 rounded-full translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

                <div className="flex flex-col gap-3 relative z-10">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-primary/80 font-medium">{exp.company}</p>

                  <ul className="space-y-3 mt-2">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + j * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
