import './ScrambleText.css';

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrambleText = ({className,hoverClass, hoverEffect=false,text,letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" }) => {
  const [displayText, setDisplayText] = useState(text);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});
  const intervalRef = useRef(null);

  // Function to run scramble animation
//   const runScramble = () => {
//     clearInterval(intervalRef.current);

//     let iteration = 0;
//     intervalRef.current = setInterval(() => {
//       setDisplayText(
//         text
//           .split("")
//           .map((char, idx) =>
//             idx < iteration ? text[idx] : letters[Math.floor(Math.random() * letters.length)]
//           )
//           .join("")
//       );

//       iteration += 1 / 2;

//       if (iteration >= text.length) {
//         clearInterval(intervalRef.current);
//         setDisplayText(text);
//       }
//     }, 200);
//   };

const runScramble = () => {
    clearInterval(intervalRef.current);
  
    let iteration = 0;
    let letterIndex = 0; // pointer for cycling through letters
  
    intervalRef.current = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, idx) =>
            idx < iteration
              ? text[idx]
              : letters[(letterIndex + idx) % letters.length] // ordered scramble
          )
          .join("")
      );
  
      iteration += 1 / 2;
      letterIndex++; // move forward through scramble source
  
      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text);
      }
    }, 32); // adjust speed here
  };
  
  
  

  // Run on viewport enter
  useEffect(() => {
    if (isInView) {
      runScramble();
    }
    // Clean up interval on unmount
    return () => clearInterval(intervalRef.current);
  }, [isInView, text]);

  return (
    <motion.span
    className={`${className} ${hoverEffect?hoverClass:null} scramble-text overflow-hidden`} 
      ref={ref}
      initial={{ opacity: 0, y: 0 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onMouseEnter={hoverEffect?() => {
        runScramble();
      }:()=>{return;}}
      whileHover={hoverEffect?{ scale: 1.05, color: "#121212" }:""}
    >
      {displayText}
    </motion.span>
  );
};

export default ScrambleText;

const ScrambleText01 = ({className, text,letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789" }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  const handleMouseEnter = () => {
    let iteration = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(prev => {
        return text.split("").map((char, index) => {
          if (index < iteration) {
            return text[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        }).join("");
      });

      iteration += 1 / 2; // Controls speed of reveal

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
        setDisplayText(text); // Ensure final text is accurate
      }
    }, 60); // Controls update frequency
  };

  return (
    <span className={`${className} scramble-text overflow-hidden`} onMouseEnter={handleMouseEnter}>
      {displayText}
    </span>
  );
};

// export default ScrambleText01;
