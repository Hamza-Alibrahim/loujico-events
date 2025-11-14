"use client";
import { motion } from "framer-motion";

const page = () => {
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

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-40 bg-linear-to-br from-blue-fantastic to-abyssal-blue text-palladian overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-40 h-40 bg-burning-flame/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-32 h-32 bg-truffle-trouble/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              اتصل بنا
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-burning-flame font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              كيف نعمل معاً؟
            </h2>
            <p className="text-lg text-palladian/70">
              رحلة تعاون منظمة تضمن نجاح مشروعك من البداية إلى النهاية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="relative mb-6 mx-auto"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                  }}
                >
                  {/* Step Number Background */}
                  <div className="w-20 h-20 bg-blue-fantastic rounded-full flex items-center justify-center text-2xl font-bold text-white mb-4 mx-auto border-2 border-palladian/20">
                    {step.step}
                  </div>

                  {/* Floating Icon */}
                  <motion.div
                    className={`absolute -top-2 -right-2 w-12 h-12 rounded-xl bg-linear-to-r ${step.color} flex items-center justify-center text-lg text-white shadow-lg`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                  >
                    {step.icon}
                  </motion.div>
                </motion.div>

                <motion.h3
                  className="text-xl font-bold text-palladian mb-3"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  {step.title}
                </motion.h3>

                <motion.p
                  className="text-palladian/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                >
                  {step.description}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-blue-fantastic">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              معلومات الاتصال
            </h2>
            <p className="text-lg text-palladian/70">
              تواصل معنا عبر أي من القنوات التالية، نحن هنا لخدمتك
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {contactInfo.map((contact, index) => (
              <motion.a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.link.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="bg-abyssal-blue rounded-2xl shadow-xl border border-palladian/20 p-6 relative overflow-hidden group hover:shadow-2xl transition-all duration-300 block"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px", amount: 0.1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${contact.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Contact Card Content */}
                <div className="flex items-center gap-4 relative z-10">
                  <motion.div
                    className={`w-16 h-16 rounded-xl bg-linear-to-r ${contact.color} flex items-center justify-center text-2xl text-white shrink-0`}
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  >
                    {contact.icon}
                  </motion.div>

                  <div className="flex-1 text-right">
                    <motion.h3
                      className="text-xl font-bold text-palladian mb-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    >
                      {contact.title}
                    </motion.h3>

                    <motion.p
                      className="text-burning-flame font-semibold text-lg"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    >
                      {contact.value}
                    </motion.p>
                  </div>
                </div>

                {/* Click Indicator */}
                <motion.div
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <div className="w-2 h-2 bg-burning-flame rounded-full" />
                </motion.div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-abyssal-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px", amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-palladian mb-6">
              مستعد لبدء مشروعك؟
            </h2>
            <p className="text-lg text-palladian/70 mb-8 max-w-2xl mx-auto">
              لا تتردد في التواصل معنا الآن، فريقنا متاح للإجابة على جميع
              استفساراتك ومساعدتك في تحقيق رؤيتك
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Phone Button - Burning Flame */}
              <motion.a
                href="tel:+963996320963"
                className="bg-burning-flame text-blue-fantastic px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative z-10">اتصل بنا الآن</span>
                {/* Button Shine Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full w-full transition-transform duration-1000" />
                {/* Pulse Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-burning-flame rounded-lg sm:rounded-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
              </motion.a>

              {/* Email Button - Blue Fantastic */}
              <motion.a
                href="mailto:info@yousefallouji.com"
                className="bg-blue-fantastic text-palladian px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold border-2 border-transparent relative overflow-hidden group w-full sm:w-auto"
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="relative z-10">أرسل بريداً إلكترونياً</span>
                {/* Button Shine Effect */}
                <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-palladian/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full w-full transition-transform duration-1000" />
              </motion.a>
            </div>

            <motion.p
              className="text-palladian/60 mt-8 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              نعود إليك خلال ٢٤ ساعة كحد أقصى
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default page;
