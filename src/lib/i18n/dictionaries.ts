export type Locale = "pt" | "en";

export const dictionaries = {
  pt: {
    nav: {
      work: "Trabalho",
      services: "Serviços",
      about: "Sobre",
      process: "Processo",
      careers: "Carreiras",
      contact: "Contato",
    },
    menu: {
      links: [
        { num: "01", label: "Trabalho", href: "#work" },
        { num: "02", label: "Serviços", href: "#services" },
        { num: "03", label: "Processo", href: "#process" },
        { num: "04", label: "Sobre", href: "#about" },
        { num: "05", label: "Contato", href: "#contact" },
      ],
      email: "contato@agenciaallin.com.br",
      close: "Fechar menu",
      open: "Abrir menu",
    },
    hero: {
      badge: "Aceitando novos projetos",
      line1: "Nós criamos",
      rotating: ["Websites.", "Landing Pages.", "Web Apps."],
      subtitle:
        "Agência digital bilíngue que entrega sites, landing pages e web applications de alta performance para marcas ambiciosas no Brasil e nos EUA.",
      ctaPrimary: "Iniciar um projeto →",
      ctaSecondary: "Ver nosso trabalho →",
      stats: [
        { value: "120+", label: "Projetos entregues" },
        { value: "60+", label: "Clientes satisfeitos" },
        { value: "8+", label: "Anos juntos" },
      ],
      cardCenter: {
        number: "01",
        title: "O crescimento começa aqui.",
        body: "Landing pages desenhadas para converter visitantes em clientes.",
        cta: "Vamos conversar →",
      },
      cardBrowser: {
        tag: "Website",
        title: "Layout editorial",
      },
      cardDash: {
        title: "Overview",
        revenue: "$128,840",
        revenueLabel: "Receita",
        users: "1,284",
        usersLabel: "Usuários ativos",
        activity: "Atividade recente",
      },
      scroll: "Scroll",
    },
    services: {
      eyebrow: "SERVIÇOS_",
      title: "O que fazemos",
      items: [
        {
          num: "01",
          title: "Sites Institucionais",
          desc: "Sites customizados, rápidos e escaláveis, construídos para sua marca.",
        },
        {
          num: "02",
          title: "Landing Pages",
          desc: "Páginas de alta conversão focadas em performance e resultados.",
        },
        {
          num: "03",
          title: "Web Applications",
          desc: "Aplicações web poderosas com ótima UX e tecnologia de ponta.",
        },
        {
          num: "04",
          title: "E-commerce",
          desc: "Lojas online que vendem mais e escalam com seu negócio.",
        },
        {
          num: "05",
          title: "Manutenção",
          desc: "Suporte contínuo, atualizações e monitoramento de performance.",
        },
      ],
    },
    statsBar: [
      { value: "120+", label: "Projetos entregues" },
      { value: "98%", label: "Satisfação dos clientes" },
      { value: "40+", label: "Clientes nos EUA" },
      { value: "80%", label: "Fidelização de clientes" },
      { value: "2", label: "Países" },
    ],
    work: {
      eyebrow: "CASE STUDIES_",
      title: "Trabalhos em destaque",
      viewAll: "Ver todos os projetos →",
      viewProject: "Ver projeto →",
      prev: "Anterior",
      next: "Próximo",
      // placeholder — substituir por cases reais
      cases: [
        { name: "Finovex", tag: "Web Application", theme: "dark" as const },
        { name: "Boldpack", tag: "Landing Page", theme: "red" as const },
        { name: "Verde Casa", tag: "E-commerce", theme: "light" as const },
        { name: "Elevate", tag: "Website", theme: "blue" as const },
      ],
    },
    process: {
      eyebrow: "NOSSO PROCESSO_",
      title: "Como trabalhamos",
      steps: [
        {
          title: "Descoberta",
          desc: "Conhecemos sua marca, objetivos e público.",
          icon: "eye" as const,
        },
        {
          title: "Planejamento",
          desc: "Pesquisamos, estruturamos e definimos a solução certa.",
          icon: "grid" as const,
        },
        {
          title: "Design",
          desc: "Criamos designs limpos e impactantes que conectam.",
          icon: "pen" as const,
        },
        {
          title: "Desenvolvimento",
          desc: "Construímos experiências rápidas, responsivas e escaláveis.",
          icon: "code" as const,
        },
        {
          title: "Lançamento & Growth",
          desc: "Lançamos com cuidado e damos suporte ao seu crescimento.",
          icon: "rocket" as const,
        },
      ],
    },
    testimonials: {
      eyebrow: "DEPOIMENTOS_",
      title: "O que dizem os clientes",
      // Placeholders explícitos — não inventar depoimentos reais
      items: [
        {
          quote: "[Depoimento do cliente]",
          author: "[Nome do cliente, Cargo — Empresa]",
        },
        {
          quote: "[Depoimento do cliente]",
          author: "[Nome do cliente, Cargo — Empresa]",
        },
        {
          quote: "[Depoimento do cliente]",
          author: "[Nome do cliente, Cargo — Empresa]",
        },
      ],
      prev: "Depoimento anterior",
      next: "Próximo depoimento",
    },
    cta: {
      title: "Vamos construir algo incrível juntos.",
      subtitle: "Conte-nos sobre o seu projeto e vamos fazê-lo acontecer.",
      button: "Iniciar seu projeto →",
    },
    contact: {
      eyebrow: "CONTATO_",
      title: "Vamos conversar",
      offices: [
        { city: "São Paulo", country: "Brasil", detail: "São Paulo · Brasil" },
        { city: "Miami", country: "EUA", detail: "Miami · EUA" },
      ],
      email: "contato@agenciaallin.com.br",
      phone: "+55 11 98933-8312",
      form: {
        name: "Nome",
        email: "E-mail",
        message: "Mensagem",
        submit: "Enviar mensagem →",
        success: "Mensagem enviada. Entraremos em contato em breve.",
        errors: {
          name: "Informe seu nome.",
          email: "Informe um e-mail válido.",
          message: "Escreva uma mensagem.",
        },
      },
    },
    footer: {
      tagline:
        "Agência digital criando experiências de alta performance que geram resultado para marcas no Brasil e nos EUA.",
      navigation: "Navegação",
      services: "Serviços",
      company: "Empresa",
      letsTalk: "Fale conosco",
      navLinks: [
        { label: "Trabalho", href: "#work" },
        { label: "Serviços", href: "#services" },
        { label: "Sobre", href: "#about" },
        { label: "Processo", href: "#process" },
        { label: "Carreiras", href: "#contact" },
        { label: "Contato", href: "#contact" },
      ],
      serviceLinks: [
        "Sites",
        "Landing Pages",
        "Web Applications",
        "E-commerce",
        "Manutenção",
      ],
      companyLinks: [
        { label: "Sobre nós", href: "#about" },
        { label: "Nosso processo", href: "#process" },
        { label: "Carreiras", href: "#contact" },
        { label: "Blog", href: "#contact" },
        { label: "Contato", href: "#contact" },
      ],
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
      copyright: "© 2026 All In. Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      work: "Work",
      services: "Services",
      about: "About",
      process: "Process",
      careers: "Careers",
      contact: "Contact",
    },
    menu: {
      links: [
        { num: "01", label: "Work", href: "#work" },
        { num: "02", label: "Services", href: "#services" },
        { num: "03", label: "Process", href: "#process" },
        { num: "04", label: "About", href: "#about" },
        { num: "05", label: "Contact", href: "#contact" },
      ],
      email: "contato@agenciaallin.com.br",
      close: "Close menu",
      open: "Open menu",
    },
    hero: {
      badge: "Currently taking new projects",
      line1: "We build",
      rotating: ["Websites.", "Landing Pages.", "Web Apps."],
      subtitle:
        "A bilingual digital agency delivering high-performance websites, landing pages, and web applications for ambitious brands in Brazil and the USA.",
      ctaPrimary: "Start a project →",
      ctaSecondary: "View our work →",
      stats: [
        { value: "120+", label: "Projects delivered" },
        { value: "60+", label: "Happy clients" },
        { value: "8+", label: "Years together" },
      ],
      cardCenter: {
        number: "01",
        title: "Growth starts here.",
        body: "Landing pages designed to turn visitors into customers.",
        cta: "Let's talk →",
      },
      cardBrowser: {
        tag: "Website",
        title: "Editorial layout",
      },
      cardDash: {
        title: "Overview",
        revenue: "$128,840",
        revenueLabel: "Revenue",
        users: "1,284",
        usersLabel: "Active users",
        activity: "Recent activity",
      },
      scroll: "Scroll",
    },
    services: {
      eyebrow: "SERVICES_",
      title: "What we do",
      items: [
        {
          num: "01",
          title: "Websites",
          desc: "Custom, fast, and scalable websites built for your brand.",
        },
        {
          num: "02",
          title: "Landing Pages",
          desc: "High-converting pages focused on performance and results.",
        },
        {
          num: "03",
          title: "Web Applications",
          desc: "Powerful web apps with great UX and modern technology.",
        },
        {
          num: "04",
          title: "E-commerce",
          desc: "Online stores that sell more and scale with your business.",
        },
        {
          num: "05",
          title: "Maintenance",
          desc: "Ongoing support, updates, and performance monitoring.",
        },
      ],
    },
    statsBar: [
      { value: "120+", label: "Projects delivered" },
      { value: "98%", label: "Client satisfaction" },
      { value: "40+", label: "Clients in the USA" },
      { value: "80%", label: "Repeat business" },
      { value: "2", label: "Countries" },
    ],
    work: {
      eyebrow: "CASE STUDIES_",
      title: "Featured work",
      viewAll: "View all projects →",
      viewProject: "View project →",
      prev: "Previous",
      next: "Next",
      // placeholder — substituir por cases reais
      cases: [
        { name: "Finovex", tag: "Web Application", theme: "dark" as const },
        { name: "Boldpack", tag: "Landing Page", theme: "red" as const },
        { name: "Verde Casa", tag: "E-commerce", theme: "light" as const },
        { name: "Elevate", tag: "Website", theme: "blue" as const },
      ],
    },
    process: {
      eyebrow: "OUR PROCESS_",
      title: "How we work",
      steps: [
        {
          title: "Discover",
          desc: "We learn your brand, goals, and audience.",
          icon: "eye" as const,
        },
        {
          title: "Plan",
          desc: "We research, structure, and define the right solution.",
          icon: "grid" as const,
        },
        {
          title: "Design",
          desc: "We craft clean, impactful designs that connect.",
          icon: "pen" as const,
        },
        {
          title: "Develop",
          desc: "We build fast, responsive, and scalable experiences.",
          icon: "code" as const,
        },
        {
          title: "Launch & Grow",
          desc: "We launch carefully and support your growth.",
          icon: "rocket" as const,
        },
      ],
    },
    testimonials: {
      eyebrow: "TESTIMONIALS_",
      title: "What clients say",
      // Explicit placeholders — do not invent real testimonials
      items: [
        {
          quote: "[Client testimonial]",
          author: "[Client name, Role — Company]",
        },
        {
          quote: "[Client testimonial]",
          author: "[Client name, Role — Company]",
        },
        {
          quote: "[Client testimonial]",
          author: "[Client name, Role — Company]",
        },
      ],
      prev: "Previous testimonial",
      next: "Next testimonial",
    },
    cta: {
      title: "Let's build something great together.",
      subtitle: "Tell us about your project and let's make it happen.",
      button: "Start your project →",
    },
    contact: {
      eyebrow: "CONTACT_",
      title: "Let's talk",
      offices: [
        { city: "São Paulo", country: "Brazil", detail: "São Paulo · Brazil" },
        { city: "Miami", country: "USA", detail: "Miami · USA" },
      ],
      email: "contato@agenciaallin.com.br",
      phone: "+55 11 98933-8312",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        submit: "Send message →",
        success: "Message sent. We'll get back to you soon.",
        errors: {
          name: "Please enter your name.",
          email: "Please enter a valid email.",
          message: "Please write a message.",
        },
      },
    },
    footer: {
      tagline:
        "A digital agency crafting high-performance experiences that drive results for brands in Brazil and the USA.",
      navigation: "Navigation",
      services: "Services",
      company: "Company",
      letsTalk: "Let's talk",
      navLinks: [
        { label: "Work", href: "#work" },
        { label: "Services", href: "#services" },
        { label: "About", href: "#about" },
        { label: "Process", href: "#process" },
        { label: "Careers", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
      serviceLinks: [
        "Websites",
        "Landing Pages",
        "Web Applications",
        "E-commerce",
        "Maintenance",
      ],
      companyLinks: [
        { label: "About us", href: "#about" },
        { label: "Our process", href: "#process" },
        { label: "Careers", href: "#contact" },
        { label: "Blog", href: "#contact" },
        { label: "Contact", href: "#contact" },
      ],
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      copyright: "© 2026 All In. All rights reserved.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
