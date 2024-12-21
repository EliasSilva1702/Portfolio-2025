"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Fondo animado para la transición de página */}
      <motion.div
        key={`transition-${pathname}`}
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        className="fixed inset-0 bg-primary pointer-events-none z-50"
      />
      {/* Contenido de la página */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.4, ease: "easeInOut" },
        }}
        className="relative z-10"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
