"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

const LanguageSwitcher = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const getCurrentLocale = () => {
    if (typeof document === "undefined") return "en";
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith("locale="))
      ?.split("=")[1];
    return value || "en";
  };

  const currentLocale = getCurrentLocale();

  const switchLanguage = (locale: string) => {
    // eslint-disable-next-line react-hooks/immutability
    document.cookie = `locale=${locale}; path=/; max-age=31536000`;
    setIsLanguageOpen(false);

    startTransition(() => {
      router.refresh();
    });
  };

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ar", name: "العربية", flag: "🇸🇦" },
  ];

  const currentLanguage =
    languages.find((lang) => lang.code === currentLocale) || languages[0];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="relative"
    >
      <motion.button
        onClick={() => setIsLanguageOpen(!isLanguageOpen)}
        disabled={isPending}
        className={`text-palladian transition-colors duration-300 font-medium flex items-center gap-2 px-3 py-2 rounded-lg hover:scale-105 hover:text-burning-flame hover:bg-blue-fantastic/30 border border-transparent hover:border-burning-flame/50 ${
          isLanguageOpen
            ? "scale-105 text-burning-flame bg-blue-fantastic/30 border-burning-flame/50"
            : ""
        }`}
      >
        <span className="text-sm font-medium">{currentLanguage.name}</span>
        <motion.svg
          animate={{ rotate: isLanguageOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </motion.svg>
        {isPending && (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-3 h-3 border border-burning-flame border-t-transparent rounded-full"
          />
        )}
      </motion.button>

      {/* Language Dropdown */}
      <AnimatePresence>
        {isLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full ltr:right-0 rtl:left-0 mt-2 w-40 bg-blue-fantastic/95 backdrop-blur-xl border border-burning-flame/30 rounded-xl shadow-2xl shadow-burning-flame/20 overflow-hidden z-50"
          >
            <div className="p-2">
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => switchLanguage(language.code)}
                  className={`w-full not-last:mb-1 flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 group ${
                    currentLocale === language.code
                      ? "bg-burning-flame/20 text-burning-flame"
                      : "text-palladian/80 hover:text-palladian hover:bg-blue-fantastic/50"
                  }`}
                >
                  <span className="font-medium">{language.name}</span>
                  <span className="text-lg">{language.flag}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LanguageSwitcher;
