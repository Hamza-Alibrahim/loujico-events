"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Projects");

  const projects = [
    {
      category: t("categories.mega.title"),
      projects: [
        {
          title: t("categories.mega.projects.0.title"),
          description: t("categories.mega.projects.0.description"),
          icon: "✨",
          features: [
            t("categories.mega.projects.0.features.0"),
            t("categories.mega.projects.0.features.1"),
            t("categories.mega.projects.0.features.2"),
          ],
          color: "from-burning-flame to-orange-400",
        },
        {
          title: t("categories.mega.projects.1.title"),
          description: t("categories.mega.projects.1.description"),
          icon: "🏎️",
          features: [
            t("categories.mega.projects.1.features.0"),
            t("categories.mega.projects.1.features.1"),
            t("categories.mega.projects.1.features.2"),
          ],
          color: "from-blue-fantastic to-blue-600",
        },
      ],
    },
    {
      category: t("categories.exhibitions.title"),
      projects: [
        {
          title: t("categories.exhibitions.projects.0.title"),
          description: t("categories.exhibitions.projects.0.description"),
          icon: "📚",
          features: [
            t("categories.exhibitions.projects.0.features.0"),
            t("categories.exhibitions.projects.0.features.1"),
            t("categories.exhibitions.projects.0.features.2"),
          ],
          color: "from-truffle-trouble to-red-600",
        },
        {
          title: t("categories.exhibitions.projects.1.title"),
          description: t("categories.exhibitions.projects.1.description"),
          icon: "🌸",
          features: [
            t("categories.exhibitions.projects.1.features.0"),
            t("categories.exhibitions.projects.1.features.1"),
            t("categories.exhibitions.projects.1.features.2"),
          ],
          color: "from-purple-500 to-purple-600",
        },
      ],
    },
    {
      category: t("categories.conferences.title"),
      projects: [
        {
          title: t("categories.conferences.projects.0.title"),
          description: t("categories.conferences.projects.0.description"),
          icon: "🤝",
          features: [
            t("categories.conferences.projects.0.features.0"),
            t("categories.conferences.projects.0.features.1"),
            t("categories.conferences.projects.0.features.2"),
          ],
          color: "from-green-500 to-emerald-600",
        },
        {
          title: t("categories.conferences.projects.1.title"),
          description: t("categories.conferences.projects.1.description"),
          icon: "💻",
          features: [
            t("categories.conferences.projects.1.features.0"),
            t("categories.conferences.projects.1.features.1"),
            t("categories.conferences.projects.1.features.2"),
          ],
          color: "from-gray-500 to-gray-600",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* PERFORMANCE: Static background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 ltr:left-20 rtl:right-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 ltr:right-20 rtl:left-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94] as const,
              }}
            >
              {t("title")}
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
                ease: "easeOut" as const,
              }}
            >
              {t("subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              {t("portfolio.title")}
            </h2>
            <p className="text-lg text-palladian/70">
              {t("portfolio.description")}
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="space-y-16 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {projects.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                variants={categoryVariants}
                transition={{ delay: categoryIndex * 0.15 }}
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-bold text-burning-flame mb-3">
                    {category.category}
                  </h3>
                  <div className="w-20 h-1 bg-burning-flame mx-auto rounded-full" />
                </div>

                {/* Projects in this Category */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.projects.map((project, projectIndex) => (
                    <motion.div
                      key={projectIndex}
                      className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-5 sm:p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ltr:text-left"
                      variants={projectVariants}
                      transition={{
                        delay: categoryIndex * 0.15 + projectIndex * 0.08,
                      }}
                    >
                      {/* Decorative Corner - Dynamic positioning */}
                      <div
                        className={`absolute top-0 ltr:left-0 rtl:right-0 w-16 h-16 bg-linear-to-br ${project.color} ltr:rounded-br-3xl rtl:rounded-bl-3xl opacity-20`}
                      />

                      {/* Project Header */}
                      <div className="flex items-start gap-3 mb-4 relative z-10">
                        <div
                          className={`w-12 h-12 rounded-xl bg-linear-to-r ${project.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                        >
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg sm:text-xl font-bold text-palladian mb-1">
                            {project.title}
                          </h3>
                          <p className="text-burning-flame font-semibold text-base mb-2">
                            {project.description}
                          </p>
                        </div>
                      </div>

                      {/* Features List */}
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-center gap-2 text-palladian/90 text-sm"
                            variants={featureVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                              delay: 0.3 + featureIndex * 0.06,
                            }}
                          >
                            <div
                              className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${project.color} shrink-0`}
                            />
                            <span>{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.46, 0.45, 0.94] as const,
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-4">
              {t("cta.title")}
            </h2>
            <p className="text-lg text-palladian/70 mb-6">
              {t("cta.description")}
            </p>

            {/* PERFORMANCE: CSS-based CTA button */}
            <Link href={"/contact"}>
              <button className="cursor-pointer bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
                <span className="relative z-10">{t("cta.button")}</span>

                {/* CSS shine effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

                {/* CSS pulse effect */}
                <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
