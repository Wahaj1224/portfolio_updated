// import { motion } from "framer-motion";
// import Education from "@/components/Education";
// import Achievements from "@/components/Achievements";
// import Certifications from "@/components/Certifications";
// import Experience from "@/components/Experience";

// const Index = () => {
//    const duration = "3s";
//   return (
//     <div className="min-h-screen bg-background overflow-x-hidden">
     

//       {/* Sections */}
//       <Experience />
//       <Education />

//       {/* Hero */}
//       <header className="section-padding flex items-center justify-center min-h-[60vh] relative">
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
//           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
//           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
//         </div>
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center relative z-10 max-w-3xl mx-auto"
//         >
//           {/* <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
//             Building Intelligent & Scalable <span className="text-gradient">Digital Solutions</span>
//           </h1> */}

//      {/* <h1 className="font-display text-4xl md:text-6xl font-bold mb-4 leading-tight">
//   <span className="block whitespace-nowrap">
//    BUILDING INTELLIGENT & SCALABLE
//   </span>
//   <span className="block text-gradient">
//     Digital Solutions
//   </span>
// </h1> */}


// <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
//   <span className="block whitespace-nowrap tracking-wide">
//     Building Intelligent & Scalable
//   </span>
//   <span className="block text-gradient mt-2  pb-2">
//     Digital Solutions
//   </span>
// </h1>
//           {/* <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
//            I design and build secure, scalable web, AI-powered, and DevOps-enabled systems that solve real-world problems efficiently
//           </p> */}

//           <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
//   I design and build secure, scalable web, AI-powered, and DevOps-enabled systems that solve real-world problems efficiently.
// </p>
//           <motion.div
//             initial={{ scaleX: 0 }}
//             animate={{ scaleX: 1 }}
//             transition={{ duration: 0.6, delay: 0.5 }}
//             className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-primary to-accent rounded-full"
//           />
//         </motion.div>
        


        
       
       
//       </header>




//       <Achievements />
//       <Certifications />

    
//     </div>
//   );
// };

// export default Index;




















import { motion } from "framer-motion";
import Education from "@/components/Education";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Experience from "@/components/Experience";

/* ✅ Import Loader */
const RippleLogoLoader = () => {
  const size = "150px";
  const duration = "3s";

  return (
    <div
      // style={{
      //   "--size": size,
      //   "--duration": duration,
      //   "--logo-color": "grey",
      //   "--background":
      //     "linear-gradient(0deg, rgba(50,50,50,0.2) 0%, rgba(100,100,100,0.2) 100%)",
      //   height: "var(--size)",
      //   aspectRatio: "1",
      //   position: "relative",
      //   background: "transparent",
      //   margin: "40px auto 0",
      // }}

      style={{
  "--size": size,
  "--duration": duration,
  "--logo-color": "grey",
  "--background":
    "linear-gradient(0deg, rgba(50,50,50,0.2) 0%, rgba(100,100,100,0.2) 100%)",
  height: "var(--size)",
  aspectRatio: "1",
  position: "relative",
  background: "transparent",
  margin: "40px auto 0",
} as React.CSSProperties}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            inset:
              i === 0
                ? "40%"
                : i === 1
                ? "30%"
                : i === 2
                ? "20%"
                : i === 3
                ? "10%"
                : "0%",
            zIndex: 100 - i,
            borderRadius: "50%",
            borderTop: "1px solid rgba(100,100,100,0.8)",
            background: "var(--background)",
            boxShadow: "rgba(0,0,0,0.3) 0px 10px 10px",
            backdropFilter: "blur(5px)",
            animation: `ripple ${duration} infinite ease-in-out`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeContent: "center",
          padding: "30%",
        }}
      >
        <svg
          viewBox="0 0 94 94"
          style={{
            width: "100%",
            fill: "var(--logo-color)",
            animation: `color-change ${duration} infinite ease-in-out`,
          }}
        >
          <path d="M38.0481 4.82927C38.0481 2.16214 40.018 0 42.4481 0H51.2391C53.6692 0 55.6391 2.16214 55.6391 4.82927V40.1401C55.6391 48.8912 53.2343 55.6657 48.4248 60.4636C43.6153 65.2277 36.7304 67.6098 27.7701 67.6098C18.8099 67.6098 11.925 65.2953 7.11548 60.6663C2.37183 56.0036 3.8147e-06 49.2967 3.8147e-06 40.5456V4.82927C3.8147e-06 2.16213 1.96995 0 4.4 0H13.2405C15.6705 0 17.6405 2.16214 17.6405 4.82927V39.1265C17.6405 43.7892 18.4805 47.2018 20.1605 49.3642C21.8735 51.5267 24.4759 52.6079 27.9678 52.6079C31.4596 52.6079 34.0127 51.5436 35.6268 49.4149C37.241 47.2863 38.0481 43.8399 38.0481 39.0758V4.82927Z" />
          <path d="M86.9 61.8682C86.9 64.5353 84.9301 66.6975 82.5 66.6975H73.6595C71.2295 66.6975 69.2595 64.5353 69.2595 61.8682V4.82927C69.2595 2.16214 71.2295 0 73.6595 0H82.5C84.9301 0 86.9 2.16214 86.9 4.82927V61.8682Z" />
          <path d="M0 83.2195C0 80.5524 1.96995 78.3902 4.4 78.3902H83.6C86.0301 78.3902 88 80.5524 88 83.2195V89.1707C88 91.8379 86.0301 94 83.6 94H4.4C1.96995 94 0 91.8379 0 89.1707Z" />
        </svg>
      </div>

      {/* Inline Animation */}
      <style>
        {`
          @keyframes ripple {
            0% { transform: scale(1); }
            50% { transform: scale(1.3); }
            100% { transform: scale(1); }
          }

          @keyframes color-change {
            0% { fill: grey; }
            50% { fill: white; }
            100% { fill: grey; }
          }
        `}
      </style>
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden" id="About">
      
      {/* Sections BEFORE Hero */}
      <Experience />
      <Education />

      {/* Hero */}
      <header className="section-padding flex items-center justify-center min-h-[60vh] relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow [animation-delay:1.5s]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-float" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="font-display text-3xl md:text-5xl font-bold mb-4 leading-tight">
            <span className="block whitespace-nowrap tracking-wide">
              Building Intelligent & Scalable
            </span>
            <span className="block text-gradient mt-2 pb-2">
              Digital Solutions
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-center">
            I design and build secure, scalable web, AI-powered, and DevOps-enabled systems that solve real-world problems efficiently.
          </p>

          {/* Animated Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-primary to-accent rounded-full"
          />

          {/* ✅ LOADER ADDED HERE */}
          <RippleLogoLoader />
        </motion.div>
      </header>

      <Achievements />
      <Certifications />
    </div>
  );
};

export default Index;