"use client";

import { motion } from "framer-motion";

const Page = () => {
  const processSteps = [
    {
      step: "1",
      title: "الاستماع",
      description: "نتفهم أهدافك ومتطلباتك بعمق",
      icon: "👂",
      color: "from-burning-flame to-orange-400",
    },
    {
      step: "2",
      title: "التخطيط",
      description: "نضع خطة عمل استراتيجية شاملة",
      icon: "📝",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      step: "3",
      title: "التنفيذ",
      description: "ننفذ بدقة واحترافية عالية",
      icon: "⚡",
      color: "from-truffle-trouble to-red-600",
    },
    {
      step: "4",
      title: "المتابعة",
      description: "نقدم تقارير دورية وشاملة",
      icon: "📊",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const contactInfo = [
    {
      icon: "📞",
      title: "الهاتف",
      value: "+963996320963",
      link: "tel:+963996320963",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: "📧",
      title: "البريد الإلكتروني",
      value: "info@yousefallouji.com",
      link: "mailto:info@yousefallouji.com",
      color: "from-burning-flame to-orange-400",
    },
    {
      icon: "🌐",
      title: "الموقع الإلكتروني",
      value: "www.yousef.louji.com",
      link: "https://www.yousef.louji.com",
      color: "from-blue-fantastic to-blue-600",
    },
    {
      icon: "📍",
      title: "العنوان",
      value: "أبو رمانة – دمشق - سوريا",
      link: "https://maps.google.com/?q=أبو رمانة – دمشق - سوريا",
      color: "from-purple-500 to-purple-600",
    },
  ];

  // Optimized variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const contactVariants = {
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

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
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
              اتصل بنا
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
              لنبدأ رحلة نجاح مشروعك القادم معاً
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section */}
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
              كيف نعمل معاً؟
            </h2>
            <p className="text-lg text-palladian/70">
              رحلة تعاون منظمة تضمن نجاح مشروعك من البداية إلى النهاية
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group transition-all duration-300 hover:-translate-y-2"
                variants={stepVariants}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative mb-4 mx-auto">
                  {/* Step Number Background */}
                  <div className="w-16 h-16 bg-blue-fantastic rounded-full flex items-center justify-center text-xl font-bold text-white mb-3 mx-auto border-2 border-palladian/20 transition-all duration-300 group-hover:scale-110">
                    {step.step}
                  </div>

                  {/* Floating Icon */}
                  <div
                    className={`absolute -top-1 -right-1 w-10 h-10 rounded-lg bg-linear-to-r ${step.color} flex items-center justify-center text-base text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
                  >
                    {step.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-palladian mb-2">
                  {step.title}
                </h3>

                <p className="text-palladian/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Information Section */}
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
              معلومات الاتصال
            </h2>
            <p className="text-lg text-palladian/70">
              تواصل معنا عبر أي من القنوات التالية، نحن هنا لخدمتك
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.link.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-5 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] block"
                variants={contactVariants}
                transition={{ delay: index * 0.1 }}
              >
                {/* Hover Effect */}
                <div
                  className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Contact Card Content */}
                <div className="flex items-center gap-3 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl bg-linear-to-r ${contact.color} flex items-center justify-center text-xl text-white shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    {contact.icon}
                  </div>

                  <div className="flex-1 text-right">
                    <h3 className="text-lg font-bold text-palladian mb-1">
                      {contact.title}
                    </h3>

                    <p className="text-burning-flame font-semibold text-base">
                      {contact.value}
                    </p>
                  </div>
                </div>

                {/* Click Indicator */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-1.5 h-1.5 bg-burning-flame rounded-full" />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-blue">
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
              مستعد لبدء مشروعك؟
            </h2>
            <p className="text-lg text-palladian/70 mb-6 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا الآن، فريقنا متاح للإجابة على جميع
              استفساراتك ومساعدتك في تحقيق رؤيتك
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              {/* Phone Button */}
              <a
                href="tel:+963996320963"
                className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-burning-flame relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">اتصل بنا الآن</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl animate-pulse-slow" />
              </a>

              {/* Email Button */}
              <a
                href="mailto:info@yousefallouji.com"
                className="bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-palladian relative overflow-hidden group w-full sm:w-auto transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <span className="relative z-10">أرسل بريداً إلكترونياً</span>
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
              </a>
            </div>

            <p className="text-palladian/60 mt-6 text-sm">
              نعود إليك خلال ٢٤ ساعة كحد أقصى
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Page;
