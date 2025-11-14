"use client";

import { motion } from "framer-motion";

const Page = () => {
  const services = [
    {
      title: "إدارة الفعاليات الشاملة",
      icon: "📊",
      description: "نقدم حلولاً متكاملة لإدارة فعالياتك من البداية إلى النهاية",
      features: [
        "التخطيط الاستراتيجي ووضع الميزانيات",
        "الإشراف الكامل من الفكرة حتى التنفيذ",
        "إدارة المخاطر والمشاريع",
      ],
      color: "from-burning-flame to-orange-400",
    },
    {
      title: "تنظيم وتصميم الفعاليات",
      icon: "🎨",
      description: "نحول أفكارك إلى تجارب بصرية استثنائية لا تنسى",
      features: [
        "تصميم مفاهيم إبداعية مبتكرة",
        "توفير وتنسيق كافة العناصر (ديكور، إضاءة، صوتيات)",
        "إدارة المنصة والحضور",
      ],
      color: "from-blue-fantastic to-blue-600",
    },
    {
      title: "تشغيل المعارض والأجنحة",
      icon: "🏗️",
      description: "حلول متكاملة لتشغيل المعارض والأجنحة بأعلى معايير الجودة",
      features: [
        "التصميم والبناء الهندسي للأجنحة",
        "إدارة الكوادر البشرية والخدمات",
        "تشغيل وتنسيق العروض داخل الأجنحة",
      ],
      color: "from-truffle-trouble to-red-600",
    },
    {
      title: "التسويق والترويج",
      icon: "🚀",
      description: "نخلق استراتيجيات تسويقية فعالة تصل إلى جمهورك المستهدف",
      features: [
        "تطوير الهوية البصرية",
        "خطط التسويق الإلكتروني والتقليدي",
        "إدارة وسائل التواصل الاجتماعي والعلاقات العامة",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  // Optimized variants
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

  const itemVariants = {
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

  const processVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
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
          <div className="absolute top-20 left-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl" />
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
              خدماتنا
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
              حلول متكاملة تجمع بين الإبداع والدقة
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-blue-fantastic">
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
              كيف نعمل معاً؟
            </h2>
            <p className="text-lg text-palladian/70">
              رحلة تعاون منظمة تضمن نجاح فعاليتك من التخطيط إلى التنفيذ
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                step: "1",
                title: "الاستماع",
                description: "نتفهم أهدافك ومتطلباتك بعمق",
                icon: "👂",
              },
              {
                step: "2",
                title: "التخطيط",
                description: "نضع خطة عمل استراتيجية شاملة",
                icon: "📝",
              },
              {
                step: "3",
                title: "التنفيذ",
                description: "ننفذ بدقة واحترافية عالية",
                icon: "⚡",
              },
              {
                step: "4",
                title: "المتابعة",
                description: "نقدم تقارير دورية وشاملة",
                icon: "📊",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={processVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-burning-flame rounded-full flex items-center justify-center text-xl font-bold text-white mb-3 mx-auto transition-transform duration-300 group-hover:scale-110">
                  {step.step}
                </div>
                <div className="text-2xl mb-2 text-burning-flame">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-palladian mb-2">
                  {step.title}
                </h3>
                <p className="text-palladian/80 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
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
              خدماتنا المتكاملة
            </h2>
            <p className="text-lg text-palladian/70">
              نقدم مجموعة شاملة من الخدمات الاحترافية لتغطية كافة جوانب إدارة
              الفعاليات والمعارض
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-blue-fantastic rounded-2xl shadow-xl border border-palladian/20 p-6 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                variants={itemVariants}
                transition={{
                  delay: Math.floor(index / 2) * 0.1 + (index % 2) * 0.05,
                }}
              >
                {/* Decorative Corner */}
                <div
                  className={`absolute top-0 right-0 w-16 h-16 bg-linear-to-br ${service.color} rounded-bl-3xl opacity-20`}
                />

                {/* Service Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${service.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-palladian mb-2">
                      {service.title}
                    </h3>
                    <p className="text-palladian/80 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      className="flex items-center gap-2 text-palladian/90 text-sm"
                      variants={featureVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        delay: 0.3 + featureIndex * 0.08,
                      }}
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-linear-to-r ${service.color} shrink-0`}
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
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
              مستعد لبدء مشروعك القادم؟
            </h2>
            <p className="text-lg text-palladian/70 mb-6">
              تواصل معنا اليوم لنناقش كيف يمكننا تحويل رؤيتك إلى واقع ملموس
            </p>

            {/* PERFORMANCE: CSS-based CTA button */}
            <button className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">اتصل بنا الآن</span>

              {/* CSS shine effect */}
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

              {/* CSS pulse effect */}
              <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Add custom animation for pulse */}
      <style jsx>{`
        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;
