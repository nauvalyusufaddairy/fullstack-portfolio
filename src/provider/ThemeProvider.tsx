"use client";
import { motion } from "framer-motion";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext, useEffect, useState } from "react";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 5, stiffness: 600 }}
        whileInView={{ opacity: 1 }}
        className={theme}
      >
        {children}
      </motion.div>
    );
  }
};
