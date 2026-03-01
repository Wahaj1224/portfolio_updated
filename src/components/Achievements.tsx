import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Trophy } from "lucide-react";

const achievements = [
  {
    title: "Visio Spark — 1st Position Across Pakistan",
    description:
      "Achieved 1st position across Pakistan in the Visio Spark Software Competition for an AI-based application.",
  },
  {
    title: "Final Year Project — 1st Position in Department",
    description:
      "Secured 1st position in the CS (Software Engineering) department at the university for the Final Year Project.",
  },
];

const Achievements = () => {
  return (
    <SectionWrapper id="achievements" title="Achievements" subtitle="Recognition & awards">
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 relative overflow-hidden group hover:glow-accent transition-shadow duration-500"
          >
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/5 rounded-full group-hover:scale-[2] transition-transform duration-700" />
            <div className="flex items-start gap-4 relative z-10">
              <div className="p-3 rounded-lg bg-accent/10 text-accent shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Achievements;
