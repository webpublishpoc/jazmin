/* =============================================
   i18n — Inline translations (works offline / file://)
   ============================================= */

const TRANSLATIONS = {
  en: {
    nav_home: "Home", nav_about: "About", nav_contact: "Contact", nav_faq: "FAQ",
    nav_privacy: "Privacy", nav_terms: "Terms",
    footer_tagline: "Compassionate birth support for every family.",
    footer_pages: "Pages", footer_contact_label: "Contact",
    footer_copy: "© 2025 The Love Doula Care. All rights reserved.",

    hero_eyebrow: "Seattle-Tacoma Area Doula",
    hero_title: "You deserve to feel <em>supported</em>",
    hero_subtitle: "The Love Doula Care is a certified doula offering compassionate support in English and Spanish — from pregnancy through postpartum.",
    hero_cta_primary: "Schedule a Free Consultation",
    hero_cta_secondary: "Learn About Me",

    doula_eyebrow: "What I Offer",
    doula_heading: "What is a Doula?",
    doula_body: "A doula is a trained professional who provides continuous physical, emotional, and informational support before, during, and after birth. Studies show that doula care reduces cesarean rates, shortens labor, and improves parent satisfaction.",
    pillar_emotional: "Emotional", pillar_physical: "Physical", pillar_info: "Informational", pillar_post: "Postpartum",

    services_eyebrow: "Services",
    services_heading: "How I Can Help",
    service_prenatal_title: "Prenatal Support",
    service_prenatal_body: "Birth planning, education sessions, and continuous guidance through your pregnancy journey.",
    service_birth_title: "Birth Support",
    service_birth_body: "Continuous presence during labor and delivery — comfort measures, advocacy, and encouragement.",
    service_postpartum_title: "Postpartum Care",
    service_postpartum_body: "In-home visits, feeding support, newborn care guidance, and emotional well-being after birth.",

    testimonial_eyebrow: "Kind Words",
    testimonial_heading: "What Families Say",
    testimonial_quote: "Having Jazmín by my side during labor changed everything. Her calm presence and expertise gave me the confidence to trust my body. I cannot recommend her enough.",
    testimonial_author: "— Maria S., Seattle",

    share_eyebrow: "Stay Connected",
    share_heading: "Follow Along",
    share_body: "Join Jazmín's community for tips, support, and birth stories.",
    share_instagram: "Follow on Instagram",
    share_facebook: "Share on Facebook",
    share_whatsapp: "Chat on WhatsApp",

    about_eyebrow: "About Me",
    about_heading: "Hello, I'm Jazmín",
    about_intro: "I'm a certified doula based in the Seattle-Tacoma area, passionate about empowering birthing people and their families with compassionate, evidence-based support.",
    about_story_heading: "My Story",
    about_story: "My name is Jazmín, yes, like the flower. My mother loved flowers and she was delighted imagining her daughter having this name. So now you know my name is a tribute to the flower and I am very proud of the story behind my name. My children are Valerie, 9, and Rodrick, 4. My path hasn't always been easy. I have lived through many challenges, moments of fear, doubts, and lessons that marked my story. But every experience taught me something valuable. Instead of letting difficulties stop me, I decided to turn them into teachings and tools to accompany other moms.",
    credentials_heading: "Credentials",
    cred_1: "Certified Doula with (CIM Seattle)",
    cred_2: "Certified Postpartum Doula",
    cred_3: "CPR & First Aid Certified",
    cred_4: "Certified Lactation Counselor",
    cred_5: "Bilingual: English & Spanish",
    values_eyebrow: "My Values",
    values_heading: "What I Believe",
    value_1_title: "Respect", value_1_body: "Every birth is unique. I honour your choices, culture, and birth plan without judgment.",
    value_2_title: "Evidence", value_2_body: "I stay current with the latest research to provide information that empowers your decisions.",
    value_3_title: "Presence", value_3_body: "I am fully present — physically, emotionally, and spiritually — for you and your family.",
    value_4_title: "Inclusion", value_4_body: "I warmly serve all families regardless of background, identity, or birth preference.",

    contact_eyebrow: "Get In Touch",
    contact_heading: "Let's Connect",
    contact_intro: "Ready to start your journey? Fill out the form below and Jazmín will get back to you within 24 hours.",
    form_name: "Full Name", form_email: "Email Address", form_phone: "Phone (optional)",
    form_lang: "Preferred Language", form_lang_en: "English", form_lang_es: "Spanish",
    form_message: "Message", form_submit: "Send Message",
    info_location_label: "Location", info_location_value: "Seattle-Tacoma Area, WA",
    info_lang_label: "Languages", info_lang_value: "English · Spanish",
    info_response_label: "Response Time", info_response_value: "Within 24 hours",
    info_services_label: "Services", info_services_value: "Birth & Postpartum Doula",

    faq_eyebrow: "FAQ",
    faq_heading: "Frequently Asked Questions",
    faq_intro: "Have more questions? Reach out — I'd love to talk.",
    faq_1_q: "What does a doula do?",
    faq_1_a: "A doula provides continuous emotional, physical, and informational support to birthing people and their partners before, during, and after birth. Unlike a midwife or OB, a doula does not perform clinical tasks.",
    faq_2_q: "When should I hire a doula?",
    faq_2_a: "Ideally in the second trimester (14–28 weeks), but it's never too late! Many families hire a doula even at 35–38 weeks.",
    faq_3_q: "Do you support all birth settings?",
    faq_3_a: "Yes — hospital births, birth centers, and planned home births. I work alongside your chosen medical team.",
    faq_4_q: "What if I have a C-section?",
    faq_4_a: "I support planned and unplanned cesareans. I help you prepare, advocate for your preferences, and support your recovery.",
    faq_5_q: "Do you offer postpartum support only?",
    faq_5_a: "Absolutely. Postpartum-only packages are available to help with newborn care, infant feeding, and your emotional wellbeing.",
    faq_6_q: "Do you serve families who speak Spanish?",
    faq_6_a: "Yes! I am fully fluent in English and Spanish and can provide all services in any of these languages.",
    faq_7_q: "What areas do you serve?",
    faq_7_a: "I primarily serve the Seattle-Tacoma area. Please contact me to discuss your location.",
    faq_8_q: "How do I get started?",
    faq_8_a: "Simply fill out the contact form or send me a message on WhatsApp. I offer a free 30-minute consultation so we can get to know each other.",

    privacy_heading: "Privacy Policy",
    privacy_updated: "Last updated: January 2025",
    terms_heading: "Terms of Service",
    terms_updated: "Last updated: January 2025",
  },


  es: {
    nav_home: "Inicio", nav_about: "Acerca", nav_contact: "Contacto", nav_faq: "Preguntas",
    nav_privacy: "Privacidad", nav_terms: "Términos",
    footer_tagline: "Apoyo compasivo al parto para cada familia.",
    footer_pages: "Páginas", footer_contact_label: "Contacto",
    footer_copy: "© 2025 The Love Doula Care. Todos los derechos reservados.",

    hero_eyebrow: "Doula en el Área de Seattle-Tacoma",
    hero_title: "Mereces sentirte <em>apoyada</em>",
    hero_subtitle: "The Love Doula Care es una doula certificada que ofrece apoyo compasivo en inglés y español — desde el embarazo hasta el posparto.",
    hero_cta_primary: "Agenda una Consulta Gratuita",
    hero_cta_secondary: "Conóceme",

    doula_eyebrow: "Lo Que Ofrezco",
    doula_heading: "¿Qué es una Doula?",
    doula_body: "Una doula es una profesional capacitada que brinda apoyo emocional, físico e informativo continuo antes, durante y después del parto. Los estudios muestran que la atención con doula reduce las tasas de cesárea, acorta el trabajo de parto y mejora la satisfacción.",
    pillar_emotional: "Emocional", pillar_physical: "Físico", pillar_info: "Informativo", pillar_post: "Posparto",

    services_eyebrow: "Servicios",
    services_heading: "Cómo Puedo Ayudarte",
    service_prenatal_title: "Apoyo Prenatal",
    service_prenatal_body: "Planificación del parto, sesiones educativas y orientación continua durante tu embarazo.",
    service_birth_title: "Apoyo al Parto",
    service_birth_body: "Presencia continua durante el trabajo de parto — confort, defensa y aliento.",
    service_postpartum_title: "Cuidado Posparto",
    service_postpartum_body: "Visitas a domicilio, apoyo a la lactancia, orientación sobre el recién nacido y bienestar emocional.",

    testimonial_eyebrow: "Palabras Amables",
    testimonial_heading: "Lo Que Dicen las Familias",
    testimonial_quote: "Tener a Jazmín a mi lado durante el trabajo de parto cambió todo. Su presencia tranquila y experiencia me dieron la confianza para confiar en mi cuerpo. No puedo recomendarla lo suficiente.",
    testimonial_author: "— María S., Seattle",

    share_eyebrow: "Conéctate",
    share_heading: "Sígueme",
    share_body: "Únete a la comunidad de Jazmín para consejos, apoyo e historias de parto.",
    share_instagram: "Seguir en Instagram",
    share_facebook: "Compartir en Facebook",
    share_whatsapp: "Chatear en WhatsApp",

    about_eyebrow: "Sobre Mí",
    about_heading: "Hola, soy Jazmín",
    about_intro: "Soy doula certificada en el área de Seattle-Tacoma, apasionada por empoderar a las personas que dan a luz y a sus familias con apoyo compasivo y basado en evidencia.",
    about_story_heading: "Mi Historia",
    about_story: "Mi nombre es Jazmín, sí, como la flor. Mi madre amaba las flores y se encantó imaginando a su hija con este nombre. Así que ya saben que mi nombre es un homenaje a la flor y estoy muy orgullosa de la historia de mi nombre. Mis niños son Valerie de 9 y Rodrick de 4. Mi camino no siempre ha sido fácil. He vivido muchos retos, momentos de miedo, dudas y aprendizajes que marcaron mi historia. Pero cada experiencia me enseñó algo valioso. En lugar de dejar que las dificultades me detuvieran, decidí convertirlas en enseñanzas y en herramientas para acompañar a otras mamás.",
    credentials_heading: "Certificaciones",
    cred_1: "Doula Certificada con (CIM Seattle)",
    cred_2: "Doula Posparto Certificada",
    cred_3: "Certificación en RCP y Primeros Auxilios",
    cred_4: "Asesora certificada de Lactancia",
    cred_5: "Bilingüe: Inglés y Español",
    values_eyebrow: "Mis Valores",
    values_heading: "En Qué Creo",
    value_1_title: "Respeto", value_1_body: "Cada parto es único. Honro tus elecciones, cultura y plan de parto sin juicio.",
    value_2_title: "Evidencia", value_2_body: "Me mantengo al día con las investigaciones más recientes para empoderar tus decisiones.",
    value_3_title: "Presencia", value_3_body: "Estoy plenamente presente — física, emocional y espiritualmente — para ti y tu familia.",
    value_4_title: "Inclusión", value_4_body: "Atiendo a todas las familias con calidez, sin importar origen, identidad o preferencia de parto.",

    contact_eyebrow: "Contáctame",
    contact_heading: "Hablemos",
    contact_intro: "¿Lista para comenzar? Completa el formulario y Jazmín te responderá en 24 horas.",
    form_name: "Nombre Completo", form_email: "Correo Electrónico", form_phone: "Teléfono (opcional)",
    form_lang: "Idioma Preferido", form_lang_en: "Inglés", form_lang_es: "Español",
    form_message: "Mensaje", form_submit: "Enviar Mensaje",
    info_location_label: "Ubicación", info_location_value: "Área de Seattle-Tacoma, WA",
    info_lang_label: "Idiomas", info_lang_value: "Inglés · Español",
    info_response_label: "Tiempo de Respuesta", info_response_value: "En 24 horas",
    info_services_label: "Servicios", info_services_value: "Doula de Parto y Posparto",

    faq_eyebrow: "Preguntas",
    faq_heading: "Preguntas Frecuentes",
    faq_intro: "¿Tienes más preguntas? Contáctame — me encanta hablar.",
    faq_1_q: "¿Qué hace una doula?",
    faq_1_a: "Una doula brinda apoyo emocional, físico e informativo continuo antes, durante y después del parto. A diferencia de una partera u obstetra, la doula no realiza tareas clínicas.",
    faq_2_q: "¿Cuándo debo contratar una doula?",
    faq_2_a: "Idealmente en el segundo trimestre (14–28 semanas), ¡pero nunca es tarde! Muchas familias contratan a una doula entre las 35–38 semanas.",
    faq_3_q: "¿Apoya todos los entornos de parto?",
    faq_3_a: "Sí — partos hospitalarios, centros de parto y partos en casa planificados. Trabajo junto a tu equipo médico.",
    faq_4_q: "¿Y si tengo una cesárea?",
    faq_4_a: "Apoyo cesáreas planificadas y de emergencia. Ayudo a prepararte, defender tus preferencias y apoyar tu recuperación.",
    faq_5_q: "¿Ofreces solo apoyo posparto?",
    faq_5_a: "Por supuesto. Los paquetes solo de posparto están disponibles para el cuidado del recién nacido, la lactancia y el bienestar emocional.",
    faq_6_q: "¿Atiende a familias que hablan español?",
    faq_6_a: "¡Sí! Soy completamente fluida en inglés y español y puedo brindar todos los servicios en cualquiera de estos idiomas.",
    faq_7_q: "¿Qué áreas atiendes?",
    faq_7_a: "Principalmente el área de Seattle-Tacoma. Contáctame para hablar sobre tu ubicación.",
    faq_8_q: "¿Cómo empezar?",
    faq_8_a: "Simplemente completa el formulario de contacto o envíame un mensaje por WhatsApp. Ofrezco una consulta gratuita de 30 minutos.",

    privacy_heading: "Política de Privacidad",
    privacy_updated: "Última actualización: Enero 2025",
    terms_heading: "Términos de Servicio",
    terms_updated: "Última actualización: Enero 2025",
  }
};

/* ---- Engine ---- */
const I18n = {
  current: 'es',

  init() {
    const saved = localStorage.getItem('pm-lang');
    this.current = (saved && TRANSLATIONS[saved]) ? saved : 'es';
    this.apply();
    this._bindButtons();
  },

  t(key) {
    return (TRANSLATIONS[this.current] && TRANSLATIONS[this.current][key]) ||
           (TRANSLATIONS['en'][key]) || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.t(key);
      if (el.dataset.i18nHtml !== undefined) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      el.placeholder = this.t(el.dataset.i18nPlaceholder);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('lang-btn--active', btn.dataset.lang === this.current);
    });
    document.documentElement.lang = this.current;
  },

  set(lang) {
    if (!TRANSLATIONS[lang]) return;
    this.current = lang;
    localStorage.setItem('pm-lang', lang);
    this.apply();
  },

  _bindButtons() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  }
};
