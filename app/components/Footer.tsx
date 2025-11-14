/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Properly defined variants
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

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const quickLinkVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      className="bg-linear-to-b from-blue-fantastic to-abyssal-blue text-palladian relative overflow-hidden"
      dir="rtl"
    >
      {/* Static background elements - no animation for performance */}
      <div className="absolute inset-0">
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-burning-flame/5 rounded-full blur-2xl" />
        <div className="absolute top-10 left-10 w-24 h-24 bg-truffle-trouble/5 rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Brand Column */}
            <motion.div className="lg:col-span-1" variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <motion.div
                  className="relative overflow-hidden group w-12 h-12 sm:w-14 sm:h-14"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {/* SVG as Image */}
                  <img
                    src="./logo.svg"
                    alt="Logo"
                    className="w-full h-full object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                  />
                </motion.div>
                <h3 className="text-xl font-bold">مؤسسة يوسف اللوجي</h3>
              </div>

              <p className="text-palladian/80 leading-relaxed mb-6 max-w-md text-right">
                شريكك الاستراتيجي نحو التميز في إدارة الفعاليات والمعارض. نقدم
                حلولاً متكاملة تجمع بين الإبداع والدقة.
              </p>

              {/* Social Links - CSS transitions for performance */}
              <div className="flex gap-3">
                {[
                  { name: "تويتر", icon: "🐦", href: "#" },
                  { name: "لينكد إن", icon: "💼", href: "#" },
                  { name: "انستغرام", icon: "📷", href: "#" },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-9 h-9 bg-palladian/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-palladian/20 transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:bg-burning-flame/20 hover:border-burning-flame/30 hover:rotate-3"
                    style={{
                      transition:
                        "all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    <span className="text-sm">{social.icon}</span>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                روابط سريعة
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  { name: "الرئيسية", href: "#home" },
                  { name: "عن الشركة", href: "#about" },
                  { name: "خدماتنا", href: "#services" },
                  { name: "مشاريعنا", href: "#projects" },
                  { name: "اتصل بنا", href: "#contact" },
                ].map((link) => (
                  <motion.li key={link.name} variants={quickLinkVariants}>
                    <a
                      href={link.href}
                      className="w-fit text-palladian/80 hover:text-burning-flame transition-all duration-300 flex items-center gap-2 group text-right py-1"
                    >
                      <span className="transition-transform duration-300 group-hover:-translate-x-1">
                        ←
                      </span>
                      <span className="transition-all duration-300 group-hover:font-medium">
                        {link.name}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                خدماتنا
              </h4>
              <ul className="flex flex-col gap-2">
                {[
                  "إدارة الفعاليات الشاملة",
                  "تنظيم وتصميم الفعاليات",
                  "تشغيل المعارض والأجنحة",
                  "التسويق والترويج",
                ].map((service) => (
                  <motion.li
                    key={service}
                    variants={quickLinkVariants}
                    className="text-right"
                  >
                    <span className="text-palladian/80 flex items-center gap-2 group cursor-default transition-all duration-300 hover:text-burning-flame hover:translate-x-1">
                      <span className="w-1.5 h-1.5 bg-burning-flame rounded-full transition-transform duration-300 group-hover:scale-125" />
                      <span>{service}</span>
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-bold mb-6 text-burning-flame text-right">
                معلومات الاتصال
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  {
                    icon: "📞",
                    label: "هاتف",
                    value: "963 996 320 963+",
                  },
                  {
                    icon: "📧",
                    label: "بريد إلكتروني",
                    value: "info@yousefallouji.com",
                  },
                  {
                    icon: "🏢",
                    label: "عنوان",
                    value: "أبو رمانة – دمشق - سوريا",
                  },
                ].map((contact) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center flex-row-reverse gap-3 justify-end group"
                    variants={quickLinkVariants}
                  >
                    <div className="text-right transition-all duration-300 group-hover:translate-x-1">
                      <p className="text-palladian/70 text-sm">
                        {contact.label}
                      </p>
                      <p className="font-medium transition-colors duration-300 group-hover:text-burning-flame">
                        {contact.value}
                      </p>
                    </div>
                    <div className="w-9 h-9 bg-palladian/10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-burning-flame/10">
                      <span className="text-burning-flame transition-transform duration-300 group-hover:scale-110">
                        {contact.icon}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-palladian/20 py-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-palladian/70 text-sm text-center md:text-right order-2 md:order-1">
              © {currentYear} مؤسسة يوسف اللوجي التجارية. جميع الحقوق محفوظة.
            </p>
            <div className="flex gap-6 text-sm order-1 md:order-2">
              {["سياسة الخصوصية", "شروط الخدمة"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-palladian/70 hover:text-burning-flame transition-all duration-300 hover:-translate-y-0.5"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
