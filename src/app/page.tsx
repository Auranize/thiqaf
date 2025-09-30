"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Define types for translations
interface Service {
  title: string;
  description: string;
  features: string[];
}

interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface Stat {
  label: string;
  value: string;
}

interface Translations {
  en: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
    };
    hero: {
      title: string;
      description: string;
      startProject: string;
      viewWork: string;
    };
    services: {
      title: string;
      description: string;
      webDesign: Service;
      socialMedia: Service;
      brandDevelopment: Service;
    };
    about: {
      title: string;
      description: string;
    };
    process: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      responseTime: string;
    };
    footer: {
      tagline: string;
      privacy: string;
      terms: string;
      contact: string;
      copyright: string;
    };
  };
  ar: {
    nav: {
      home: string;
      services: string;
      about: string;
      contact: string;
    };
    hero: {
      title: string;
      description: string;
      startProject: string;
      viewWork: string;
    };
    services: {
      title: string;
      description: string;
      webDesign: Service;
      socialMedia: Service;
      brandDevelopment: Service;
    };
    about: {
      title: string;
      description: string;
    };
    process: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      description: string;
      email: string;
      responseTime: string;
    };
    footer: {
      tagline: string;
      privacy: string;
      terms: string;
      contact: string;
      copyright: string;
    };
  };
}

// Translations object
const translations: Translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      contact: "Contact",
    },
    hero: {
      title: "Design that speaks volumes",
      description:
        "We craft exceptional digital experiences through thoughtful web design and strategic social media management that elevates your brand.",
      startProject: "Start Your Project",
      viewWork: "View Our Work",
    },
    services: {
      title: "Our Services",
      description:
        "We specialize in creating digital solutions that help your business thrive in the modern landscape.",
      webDesign: {
        title: "Web Design",
        description:
          "Beautiful, responsive websites that convert visitors into customers. We focus on user experience and modern design principles.",
        features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern UI/UX"],
      },
      socialMedia: {
        title: "Social Media Management",
        description:
          "Strategic social media presence that builds communities and drives engagement. From content creation to analytics.",
        features: ["Content Strategy", "Community Building", "Analytics & Insights", "Brand Consistency"],
      },
      brandDevelopment: {
        title: "Brand Development",
        description:
          "Create a memorable brand identity that resonates with your audience and stands out in the market.",
        features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Market Research"],
      },
    },
    about: {
      title: "Crafting digital experiences with purpose",
      description:
        "At Thiqaf, we believe that great design is more than just aesthetics—it's about creating meaningful connections between brands and their audiences. Our team combines creative vision with strategic thinking to deliver solutions that not only look exceptional but also drive real business results.",
    },
    process: {
      title: "What to Expect",
      description: "Our streamlined process ensures your project runs smoothly from start to finish.",
    },
    contact: {
      title: "Let's Work Together",
      description:
        "Ready to elevate your digital presence? Get in touch and let's discuss how we can bring your vision to life.",
      email: "hello@thiqaf.com",
      responseTime: "We typically respond within 24 hours",
    },
    footer: {
      tagline: "Crafting digital experiences with purpose",
      privacy: "Privacy",
      terms: "Terms",
      contact: "Contact",
      copyright: "© 2025 Thiqaf. All rights reserved.",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      services: "الخدمات",
      about: "عنّا",
      contact: "تواصلوا معنا",
    },
    hero: {
      title: "تصميم يتحدث بصوت عالٍ",
      description:
        "نصنع تجارب رقمية استثنائية من خلال تصميم ويب مدروس وإدارة استراتيجية لوسائل التواصل الاجتماعي التي ترفع من قيمة علامتك التجارية.",
      startProject: "ابدأ مشروعك",
      viewWork: "شاهد أعمالنا",
    },
    services: {
      title: "خدماتنا",
      description:
        "نحن متخصصون في إنشاء حلول رقمية تساعد عملك على الازدهار في المشهد الحديث.",
      webDesign: {
        title: "تصميم المواقع",
        description:
          "مواقع ويب جميلة ومتجاوبة تحول الزوار إلى عملاء. نحن نركز على تجربة المستخدم ومبادئ التصميم الحديثة.",
        features: ["تصميم متجاوب", "محسّن لمحركات البحث", "تحميل سريع", "واجهة مستخدم حديثة"],
      },
      socialMedia: {
        title: "إدارة وسائل التواصل الاجتماعي",
        description:
          "وجود استراتيجي على وسائل التواصل الاجتماعي يبني المجتمعات ويعزز التفاعل. من إنشاء المحتوى إلى التحليلات.",
        features: ["استراتيجية المحتوى", "بناء المجتمع", "تحليلات ورؤى", "ثبات العلامة التجارية"],
      },
      brandDevelopment: {
        title: "تطوير العلامة التجارية",
        description:
          "إنشاء هوية علامة تجارية لا تُنسى تتفاعل مع جمهورك وتبرز في السوق.",
        features: ["استراتيجية العلامة", "هوية بصرية", "إرشادات العلامة", "أبحاث السوق"],
      },
    },
    about: {
      title: "صيغة التجارب الرقمية بغرض",
      description:
        "في ثقاف، نؤمن أن التصميم العظيم هو أكثر من مجرد جماليات—إنه يتعلق بإنشاء علاقات هادفة بين العلامات التجارية وجماهيرها. يجمع فريقنا بين الرؤية الإبداعية والتفكير الاستراتيجي لتقديم حلول لا تبدو استثنائية فحسب، بل تحقق نتائج تجارية حقيقية.",
    },
    process: {
      title: "ما يمكن توقعه",
      description: "عمليتنا المبسطة تضمن سير مشروعك بسلاسة من البداية إلى النهاية.",
    },
    contact: {
      title: "لنعمل معًا",
      description:
        "هل أنت جاهز لرفع حضورك الرقمي؟ تواصل معنا ودعنا نناقش كيف يمكننا تحقيق رؤيتك.",
      email: "hello@thiqaf.com",
      responseTime: "نرد عادةً خلال 24 ساعة",
    },
    footer: {
      tagline: "صيغة التجارب الرقمية بغرض",
      privacy: "الخصوصية",
      terms: "الشروط",
      contact: "التواصل",
      copyright: "© 2025 ثقاف. جميع الحقوق محفوظة.",
    },
  },
};

// Define service keys for type-safe access
const serviceKeys = ["webDesign", "socialMedia", "brandDevelopment"] as const;
type ServiceKey = (typeof serviceKeys)[number];

const services: Service[] = [
  {
    title: translations.en.services.webDesign.title,
    description: translations.en.services.webDesign.description,
    features: translations.en.services.webDesign.features,
  },
  {
    title: translations.en.services.socialMedia.title,
    description: translations.en.services.socialMedia.description,
    features: translations.en.services.socialMedia.features,
  },
  {
    title: translations.en.services.brandDevelopment.title,
    description: translations.en.services.brandDevelopment.description,
    features: translations.en.services.brandDevelopment.features,
  },
];

const stats: Stat[] = [
  { label: "Web Design", value: "95%" },
  { label: "Social Media Strategy", value: "90%" },
  { label: "Brand Development", value: "88%" },
];

const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We'll discuss your project goals and requirements",
  },
  {
    step: "02",
    title: "Proposal",
    description: "Detailed project timeline and pricing",
  },
  {
    step: "03",
    title: "Project Start",
    description: "Begin bringing your vision to life",
  },
];

export default function ThiqafAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [language, setLanguage] = useState<"en" | "ar">("en");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const t = translations[language];

  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-gray-900 to-black text-white font-sans ${
        language === "ar" ? "font-arabic" : "font-inter"
      }`}
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/95 backdrop-blur-lg shadow-xl" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-2xl">
                T
              </div>
              <div>
                <div className="text-xl font-bold">thiqaf</div>
                <div className="text-xs text-gray-400">{t.footer.tagline}</div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
              <button
                onClick={toggleLanguage}
                className="px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
                aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-lg border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              <Link href="#home" className="block text-gray-300 hover:text-white transition-colors">
                {t.nav.home}
              </Link>
              <Link href="#services" className="block text-gray-300 hover:text-white transition-colors">
                {t.nav.services}
              </Link>
              <Link href="#about" className="block text-gray-300 hover:text-white transition-colors">
                {t.nav.about}
              </Link>
              <Link href="#contact" className="block text-gray-300 hover:text-white transition-colors">
                {t.nav.contact}
              </Link>
              <button
                onClick={toggleLanguage}
                className="w-full text-left px-3 py-1 bg-purple-600 rounded-full text-sm font-semibold hover:bg-purple-700 transition-colors"
                aria-label={language === "en" ? "Switch to Arabic" : "Switch to English"}
              >
                {language === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {t.hero.title.split(" ").slice(0, 2).join(" ")}
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">
                {t.hero.title.split(" ").slice(2).join(" ")}
              </span>
            </h1>
            <p className="text-lg text-gray-300">{t.hero.description}</p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-purple-600 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                {t.hero.startProject}
              </button>
              <button className="px-6 py-3 border border-gray-600 rounded-full font-semibold hover:bg-gray-800 transition-colors">
                {t.hero.viewWork}
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://via.placeholder.com/500x400?text=Hero+Image"
              alt={t.hero.title}
              width={500}
              height={400}
              className="rounded-2xl shadow-2xl animate-slide-in"
              priority
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in">{t.services.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">{t.services.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-in"
              >
                <Image
                  src={`https://via.placeholder.com/300x200?text=${service.title}`}
                  alt={t.services[serviceKeys[index]].title}
                  width={300}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{t.services[serviceKeys[index]].title}</h3>
                <p className="text-gray-300 mb-4">{t.services[serviceKeys[index]].description}</p>
                <ul className="space-y-2 text-sm text-gray-400">
                  {t.services[serviceKeys[index]].features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.about.title.split(" ").slice(0, 3).join(" ")}
              <span className="block text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text">
                {t.about.title.split(" ").slice(3).join(" ")}
              </span>
            </h2>
            <p className="text-lg text-gray-300">{t.about.description}</p>
          </div>
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2 animate-slide-in">
                <div className="flex justify-between text-sm font-medium">
                  <span>{stat.label}</span>
                  <span className="text-purple-400">{stat.value}</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-1000"
                    style={{ width: stat.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-slide-in">{t.process.title}</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">{t.process.description}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-slide-in"
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-6 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
            <p className="text-lg text-gray-300">{t.contact.description}</p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="font-semibold">{language === "en" ? "Email" : "البريد الإلكتروني"}</div>
                  <div className="text-gray-300">{t.contact.email}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="font-semibold">{language === "en" ? "Response Time" : "وقت الرد"}</div>
                  <div className="text-gray-300">{t.contact.responseTime}</div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-purple-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
          <div className="bg-gray-800 rounded-2xl p-6 shadow-xl animate-slide-in">
            <form className="space-y-4">
              <input
                type="text"
                placeholder={language === "en" ? "Name" : "الاسم"}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
              <input
                type="email"
                placeholder={language === "en" ? "your@email.com" : "بريدك الإلكتروني"}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
              <input
                type="text"
                placeholder={language === "en" ? "Subject" : "الموضوع"}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              />
              <textarea
                placeholder={language === "en" ? "Tell us about your project..." : "أخبرنا عن مشروعك..."}
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 text-white"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                {language === "en" ? "Send Message" : "إرسال الرسالة"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex items-center justify-center font-bold text-2xl">
              T
            </div>
            <div>
              <div className="text-lg font-bold">thiqaf</div>
              <div className="text-xs text-gray-400">{t.footer.tagline}</div>
            </div>
          </div>
          <div className="flex gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.privacy}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.terms}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {t.footer.contact}
            </a>
          </div>
        </div>
        <div className="mt-4 text-center text-gray-500 text-sm">{t.footer.copyright}</div>
      </footer>
    </div>
  );
}