import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "IBM Full-Stack JavaScript Developer",
    subtitle: "Professional Certificate — Coursera",
    date: "Sep, 2025",
    description:
      "Covered cloud-native full-stack development with HTML, CSS, JavaScript, Git/GitHub, React, Node.js, Express, MongoDB, DevOps, CI/CD, Docker, Kubernetes, Microservices, and Serverless applications.",
    verifyLink: "#", // Replace with actual link
  },
];

const Certifications = () => {
  return (
    <SectionWrapper id="certifications" title="Certifications" subtitle="Professional credentials">
      <div className="space-y-6">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="glass-card p-6 md:p-8 group hover:glow-primary transition-shadow duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
            <div className="flex flex-col md:flex-row md:items-start gap-4 pl-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>{cert.date}</span>
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground">
                  {cert.title}
                </h3>
                <p className="text-primary/80 font-medium">{cert.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed">
                  {cert.description}
                </p>
                <a
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-2 font-medium text-sm group/link"
                >
                  <span>Verify Certificate</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Certifications;
