import type { Locale } from "@/lib/i18n/dictionaries";

/**
 * Política de privacidade, termos de uso e instruções de exclusão de dados, em PT e EN.
 * Cobrem o site, a plataforma da All In e a conexão de contas do Instagram e do TikTok ao
 * casting de UGC (o que a integração lê de fato está em ~/all-in-platform, src/server/ugc).
 * "{email}" é trocado pelo e-mail de contato do site na hora de mostrar.
 */

export type LegalKey = "privacy" | "terms" | "deletion";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
  after?: string[];
  links?: { label: string; href: string }[];
  mail?: { label: string; subject: string };
};

export type LegalDoc = {
  metaTitle: string;
  description: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

/** Data da versão em vigor (AAAA-MM-DD). Atualize ao mudar qualquer texto abaixo. */
export const LEGAL_UPDATED = "2026-11-24";

export const legalLabels = {
  pt: { updated: "Atualizada em", onThisPage: "Nesta página", others: "Outros documentos" },
  en: { updated: "Last updated", onThisPage: "On this page", others: "Other documents" },
} satisfies Record<Locale, unknown>;

export const legalPaths: Record<LegalKey, string> = {
  privacy: "/privacy",
  terms: "/terms",
  deletion: "/data-deletion",
};

export const legalContent: Record<Locale, Record<LegalKey, LegalDoc>> = {
  pt: {
    privacy: {
      metaTitle: "Política de privacidade | All In",
      description: "Quais dados a All In trata, por quê, com quem compartilha e como exercer seus direitos.",
      title: "Política de privacidade",
      intro:
        "Esta política explica quais dados pessoais a All In trata, por que, com quem compartilha e como você exerce seus direitos. Ela vale para este site, para a plataforma da All In e para a conexão de contas do Instagram e do TikTok ao nosso casting de UGC.",
      sections: [
        {
          id: "quem-somos",
          heading: "Quem somos",
          paragraphs: [
            "A All In é uma agência que cria sites, landing pages e aplicações web e coordena a produção de vídeos com criadoras (UGC), com atuação no Brasil e nos EUA. A All In é a responsável pelo tratamento dos dados descritos aqui. Para qualquer assunto de privacidade, escreva para {email}.",
          ],
        },
        {
          id: "dados",
          heading: "Quais dados tratamos",
          items: [
            "Formulário de contato do site: nome, e-mail, a mensagem e os serviços escolhidos no site.",
            "Preferência de idioma do site: guardada só no seu navegador, sem identificar você.",
            "Criadoras do casting: nome de apresentação, contatos, região, idiomas, categorias, formatos, fotos e vídeos de portfólio enviados por você, perfis públicos nas redes e número de seguidores. Faixa etária e gênero só com o seu consentimento.",
            "Conta do Instagram ou do TikTok conectada: identificador e nome de usuário da conta, número de seguidores, a lista das suas publicações (link, data e formato) e as métricas delas, como visualizações, alcance, curtidas, comentários, compartilhamentos e salvamentos.",
            "Marcas que acessam um catálogo de criadoras: o nome e o comentário digitados ao marcar interesse, e o número de acessos ao link.",
            "Dados técnicos: endereço IP e informações do navegador registrados pelos servidores, para segurança e funcionamento.",
          ],
        },
        {
          id: "nao-acessamos",
          heading: "O que não acessamos",
          items: [
            "Sua senha do Instagram ou do TikTok: o login acontece na página da própria rede social.",
            "Mensagens diretas ou qualquer conteúdo que não esteja ligado às suas publicações.",
            "Publicar, comentar ou curtir em seu nome: a conexão só permite ler dados.",
          ],
        },
        {
          id: "finalidades",
          heading: "Para que usamos",
          items: [
            "Responder contatos e preparar propostas.",
            "Montar o casting e apresentar criadoras a marcas, com o acordo delas.",
            "Medir os posts feitos em campanhas e prestar contas às marcas que contrataram cada campanha.",
            "Sugerir à equipe da All In posts recentes da sua conta que podem fazer parte de uma campanha, para confirmação.",
            "Manter a segurança da plataforma e cumprir obrigações legais.",
          ],
          after: [
            "Não vendemos dados pessoais, não os usamos para publicidade de terceiros e não os usamos para treinar modelos de inteligência artificial.",
          ],
        },
        {
          id: "bases-legais",
          heading: "Bases legais",
          paragraphs: [
            "Tratamos dados com base no seu consentimento (por exemplo, ao conectar uma conta ou informar faixa etária e gênero), na execução de contratos e de providências que você pediu, no cumprimento de obrigações legais e no legítimo interesse da All In em operar e proteger seus serviços, sempre dentro do que você pode esperar. No Brasil, o tratamento segue a Lei Geral de Proteção de Dados (Lei 13.709/2018).",
          ],
        },
        {
          id: "compartilhamento",
          heading: "Com quem compartilhamos",
          items: [
            "Marcas que recebem um link de catálogo: veem só a apresentação que liberamos (fotos e vídeos escolhidos, apresentação, categorias, formatos, idiomas, região, perfis públicos e seguidores; faixa etária e gênero apenas com consentimento). Contatos e anotações internas nunca aparecem.",
            "Marcas que contrataram uma campanha: recebem as métricas dos posts daquela campanha.",
            "Prestadores que hospedam o site, o banco de dados e os arquivos e que enviam e-mails, tratando os dados apenas em nome da All In.",
            "Autoridades, quando a lei exigir.",
          ],
        },
        {
          id: "retencao",
          heading: "Por quanto tempo guardamos",
          paragraphs: [
            "Guardamos os dados pelo tempo necessário para as finalidades acima. Quando uma conta é desconectada, apagamos as chaves de acesso na hora e paramos de ler dados dela. Links de catálogo enviados a marcas expiram em até 90 dias. Dados que a lei ou um contrato obrigam a manter, como registros de pagamento, ficam guardados pelo prazo exigido.",
          ],
        },
        {
          id: "seguranca",
          heading: "Segurança",
          paragraphs: [
            "As chaves de acesso às redes sociais são guardadas cifradas. Cada empresa atendida só vê os próprios dados, o acesso da equipe depende do papel de cada pessoa, e os links de catálogo podem ser revogados a qualquer momento.",
          ],
        },
        {
          id: "direitos",
          heading: "Seus direitos",
          paragraphs: [
            "Você pode pedir para confirmar se tratamos seus dados, acessá-los, corrigi-los, levá-los para outro serviço, apagá-los ou revogar um consentimento. Também pode desconectar sua conta do Instagram ou do TikTok a qualquer momento. Escreva para {email}; respondemos em até 15 dias.",
          ],
          links: [{ label: "Como excluir seus dados", href: "/data-deletion" }],
        },
        {
          id: "transferencia",
          heading: "Transferência internacional",
          paragraphs: [
            "A All In atua no Brasil e nos EUA, e alguns prestadores guardam dados em outros países. Nesses casos, usamos prestadores que oferecem garantias adequadas de proteção.",
          ],
        },
        {
          id: "menores",
          heading: "Menores de idade",
          paragraphs: ["O casting e a plataforma da All In são destinados a maiores de 18 anos."],
        },
        {
          id: "mudancas",
          heading: "Mudanças nesta política",
          paragraphs: [
            "Quando esta política mudar, atualizamos a data no topo da página. Mudanças importantes são avisadas a quem tem uma conta conectada.",
          ],
        },
      ],
    },
    terms: {
      metaTitle: "Termos de uso | All In",
      description: "As regras para usar o site, a plataforma e os links de catálogo da All In.",
      title: "Termos de uso",
      intro:
        "Estes termos valem para quem usa este site, a plataforma da All In ou um link de catálogo de criadoras. Ao usar esses serviços, você concorda com eles. Propostas e contratos assinados com a All In prevalecem sobre estes termos naquilo que tratarem de forma diferente.",
      sections: [
        {
          id: "servicos",
          heading: "Os serviços",
          paragraphs: [
            "A All In cria sites, landing pages e aplicações web e coordena a produção de vídeos com criadoras (UGC). As condições de cada projeto, como escopo, prazo, preço e direitos de uso, ficam na proposta ou no contrato.",
          ],
        },
        {
          id: "uso-do-site",
          heading: "Uso do site",
          paragraphs: [
            "Você pode navegar e falar com a All In livremente. Não é permitido tentar invadir ou sobrecarregar o site, copiá-lo de forma automatizada, nem enviar pelo formulário conteúdo ilegal ou de terceiros sem autorização.",
          ],
        },
        {
          id: "contas",
          heading: "Contas na plataforma",
          paragraphs: [
            "O acesso à plataforma é pessoal. Mantenha sua senha em sigilo e avise a All In se suspeitar de uso indevido. A All In pode suspender acessos usados em desacordo com estes termos.",
          ],
        },
        {
          id: "catalogo",
          heading: "Links de catálogo",
          items: [
            "Cada link é enviado a uma marca específica, tem validade e pode ser revogado pela All In a qualquer momento.",
            "Fotos, vídeos e informações das criadoras servem só para avaliar uma contratação. Não podem ser copiados, divulgados ou usados em campanhas sem contrato.",
            "Marcar interesse em uma criadora não gera contratação nem reserva de agenda.",
          ],
        },
        {
          id: "criadoras",
          heading: "Criadoras e contas conectadas",
          items: [
            "Conectar o Instagram ou o TikTok é opcional e só permite à All In ler dados da conta e das publicações.",
            "Você pode desconectar a qualquer momento, pela própria rede social ou pedindo à All In.",
            "A participação em cada campanha depende de acordo próprio, com escopo, pagamento e direitos de uso definidos por escrito.",
          ],
        },
        {
          id: "propriedade",
          heading: "Propriedade intelectual",
          paragraphs: [
            "A marca All In, o Otto, este site e a plataforma pertencem à All In. Os vídeos e materiais de cada projeto seguem os direitos definidos no contrato correspondente.",
          ],
        },
        {
          id: "resultados",
          heading: "Resultados",
          paragraphs: [
            "A All In se compromete com as entregas e o processo combinados. Não garantimos vendas, alcance ou resultados de anúncios, que dependem também de mídia, oferta, preço e outros fatores fora do nosso controle.",
          ],
        },
        {
          id: "responsabilidade",
          heading: "Limitação de responsabilidade",
          paragraphs: [
            "Trabalhamos para manter o site e a plataforma disponíveis e corretos, mas eles podem passar por interrupções. Na medida permitida pela lei, a All In não responde por danos indiretos decorrentes do uso do site. Nada nestes termos limita direitos que a lei garante ao consumidor.",
          ],
        },
        {
          id: "privacidade",
          heading: "Privacidade",
          paragraphs: ["O tratamento de dados pessoais segue a política de privacidade da All In."],
          links: [{ label: "Política de privacidade", href: "/privacy" }],
        },
        {
          id: "mudancas",
          heading: "Mudanças e contato",
          paragraphs: [
            "A All In pode atualizar estes termos, e a data no topo mostra a versão em vigor. Dúvidas sobre estes termos: {email}.",
          ],
        },
      ],
    },
    deletion: {
      metaTitle: "Exclusão de dados | All In",
      description: "Como desconectar sua conta e pedir que a All In apague seus dados.",
      title: "Exclusão de dados",
      intro:
        "Você pode pedir que a All In apague seus dados pessoais a qualquer momento. Abaixo está como desconectar sua conta do Instagram ou do TikTok e como pedir a exclusão do que já temos.",
      sections: [
        {
          id: "pedir",
          heading: "Pedir a exclusão",
          ordered: true,
          items: [
            "Escreva para {email} com o assunto “Exclusão de dados”.",
            "Envie do e-mail que você usou com a All In e informe seu nome e, se for criadora, o perfil no Instagram ou no TikTok.",
            "Confirmamos o recebimento e concluímos a exclusão em até 15 dias, com aviso por e-mail.",
          ],
          mail: { label: "Pedir a exclusão por e-mail", subject: "Exclusão de dados" },
        },
        {
          id: "instagram",
          heading: "Desconectar o Instagram",
          paragraphs: [
            "No Instagram, abra as configurações, entre na área de apps e sites conectados e remova a All In. A All In perde o acesso na hora e para de ler dados da sua conta. Para apagar o que já foi lido, faça também o pedido de exclusão acima.",
          ],
        },
        {
          id: "tiktok",
          heading: "Desconectar o TikTok",
          paragraphs: [
            "No TikTok, abra Configurações e privacidade, entre na área de permissões de apps e remova a All In. A All In perde o acesso na hora e para de ler dados da sua conta. Para apagar o que já foi lido, faça também o pedido de exclusão acima.",
          ],
        },
        {
          id: "apagado",
          heading: "O que é apagado",
          items: [
            "Seu perfil no casting e as fotos e os vídeos de portfólio.",
            "Os dados da conta conectada: chaves de acesso, seguidores, lista de publicações e métricas lidas pela conexão.",
            "Mensagens enviadas pelo formulário do site e interesses marcados em catálogos.",
          ],
        },
        {
          id: "mantido",
          heading: "O que pode ficar guardado",
          paragraphs: [
            "Registros que a lei ou um contrato obrigam a manter, como notas fiscais, pagamentos e o contrato de uma campanha, ficam guardados pelo prazo exigido e apenas para esse fim. Relatórios de campanha já entregues a uma marca contratante ficam com ela.",
          ],
          links: [{ label: "Política de privacidade", href: "/privacy" }],
        },
      ],
    },
  },
  en: {
    privacy: {
      metaTitle: "Privacy policy | All In",
      description: "What data All In processes, why, who we share it with and how to exercise your rights.",
      title: "Privacy policy",
      intro:
        "This policy explains what personal data All In processes, why, who we share it with and how you can exercise your rights. It covers this website, the All In platform and the connection of Instagram and TikTok accounts to our UGC casting.",
      sections: [
        {
          id: "who-we-are",
          heading: "Who we are",
          paragraphs: [
            "All In is an agency that builds websites, landing pages and web applications and coordinates video production with creators (UGC), operating in Brazil and the USA. All In is responsible for the processing described here. For any privacy matter, write to {email}.",
          ],
        },
        {
          id: "data",
          heading: "What data we process",
          items: [
            "Website contact form: name, email, your message and the services you picked on the site.",
            "Website language preference: stored only in your browser, without identifying you.",
            "Creators in the casting: display name, contact details, region, languages, categories, formats, portfolio photos and videos you send, public social profiles and follower counts. Age range and gender only with your consent.",
            "Connected Instagram or TikTok account: the account ID and username, follower count, the list of your posts (link, date and format) and their metrics, such as views, reach, likes, comments, shares and saves.",
            "Brands viewing a creator catalog: the name and comment typed when marking interest, and the number of visits to the link.",
            "Technical data: IP address and browser information logged by our servers, for security and operation.",
          ],
        },
        {
          id: "not-accessed",
          heading: "What we never access",
          items: [
            "Your Instagram or TikTok password: you log in on the social network's own page.",
            "Direct messages or any content not tied to your posts.",
            "Posting, commenting or liking on your behalf: the connection is read-only.",
          ],
        },
        {
          id: "purposes",
          heading: "How we use it",
          items: [
            "To reply to inquiries and prepare proposals.",
            "To build the casting and present creators to brands, with their agreement.",
            "To measure posts made for campaigns and report to the brands that hired each campaign.",
            "To suggest to the All In team recent posts from your account that may belong to a campaign, for confirmation.",
            "To keep the platform secure and meet legal obligations.",
          ],
          after: [
            "We do not sell personal data, use it for third-party advertising or use it to train artificial intelligence models.",
          ],
        },
        {
          id: "legal-bases",
          heading: "Legal bases",
          paragraphs: [
            "We process data based on your consent (for example, when you connect an account or share your age range and gender), to perform contracts and steps you asked for, to meet legal obligations and on All In's legitimate interest in running and protecting its services, always within what you can reasonably expect. In Brazil, processing follows the General Data Protection Law (Law 13,709/2018).",
          ],
        },
        {
          id: "sharing",
          heading: "Who we share it with",
          items: [
            "Brands that receive a catalog link: they see only the presentation we release (selected photos and videos, bio, categories, formats, languages, region, public profiles and followers; age range and gender only with consent). Contact details and internal notes never appear.",
            "Brands that hired a campaign: they receive the metrics of that campaign's posts.",
            "Providers that host the website, database and files and that send emails, processing data only on All In's behalf.",
            "Authorities, when required by law.",
          ],
        },
        {
          id: "retention",
          heading: "How long we keep it",
          paragraphs: [
            "We keep data for as long as the purposes above require. When an account is disconnected, we delete its access keys immediately and stop reading its data. Catalog links sent to brands expire within 90 days. Data that the law or a contract requires us to keep, such as payment records, is kept for the required period.",
          ],
        },
        {
          id: "security",
          heading: "Security",
          paragraphs: [
            "Social network access keys are stored encrypted. Each client company sees only its own data, team access depends on each person's role, and catalog links can be revoked at any time.",
          ],
        },
        {
          id: "rights",
          heading: "Your rights",
          paragraphs: [
            "You can ask us to confirm whether we process your data, access it, correct it, take it to another service, delete it or withdraw consent. You can also disconnect your Instagram or TikTok account at any time. Write to {email}; we reply within 15 days.",
          ],
          links: [{ label: "How to delete your data", href: "/data-deletion" }],
        },
        {
          id: "transfers",
          heading: "International transfers",
          paragraphs: [
            "All In operates in Brazil and the USA, and some providers store data in other countries. In those cases, we use providers that offer adequate protection safeguards.",
          ],
        },
        {
          id: "minors",
          heading: "Minors",
          paragraphs: ["The All In casting and platform are intended for people aged 18 or older."],
        },
        {
          id: "changes",
          heading: "Changes to this policy",
          paragraphs: [
            "When this policy changes, we update the date at the top of this page. Significant changes are announced to people with a connected account.",
          ],
        },
      ],
    },
    terms: {
      metaTitle: "Terms of use | All In",
      description: "The rules for using the All In website, platform and catalog links.",
      title: "Terms of use",
      intro:
        "These terms apply to anyone using this website, the All In platform or a creator catalog link. By using these services, you agree to them. Proposals and contracts signed with All In prevail over these terms where they differ.",
      sections: [
        {
          id: "services",
          heading: "The services",
          paragraphs: [
            "All In builds websites, landing pages and web applications and coordinates video production with creators (UGC). The terms of each project, such as scope, timeline, price and usage rights, are set in the proposal or contract.",
          ],
        },
        {
          id: "site-use",
          heading: "Using the website",
          paragraphs: [
            "You are free to browse and contact All In. You may not try to break into or overload the website, copy it by automated means, or send illegal content or third-party content without permission through the form.",
          ],
        },
        {
          id: "accounts",
          heading: "Platform accounts",
          paragraphs: [
            "Platform access is personal. Keep your password private and tell All In if you suspect misuse. All In may suspend access used against these terms.",
          ],
        },
        {
          id: "catalog",
          heading: "Catalog links",
          items: [
            "Each link is sent to a specific brand, has an expiry date and can be revoked by All In at any time.",
            "Creators' photos, videos and information are only for evaluating a booking. They may not be copied, shared or used in campaigns without a contract.",
            "Marking interest in a creator is not a booking or a schedule hold.",
          ],
        },
        {
          id: "creators",
          heading: "Creators and connected accounts",
          items: [
            "Connecting Instagram or TikTok is optional and only lets All In read account and post data.",
            "You can disconnect at any time, through the social network itself or by asking All In.",
            "Taking part in each campaign requires its own agreement, with scope, payment and usage rights in writing.",
          ],
        },
        {
          id: "ip",
          heading: "Intellectual property",
          paragraphs: [
            "The All In brand, Otto, this website and the platform belong to All In. Videos and materials from each project follow the rights set in the corresponding contract.",
          ],
        },
        {
          id: "results",
          heading: "Results",
          paragraphs: [
            "All In commits to the agreed deliverables and process. We do not guarantee sales, reach or ad results, which also depend on media, offer, price and other factors outside our control.",
          ],
        },
        {
          id: "liability",
          heading: "Limitation of liability",
          paragraphs: [
            "We work to keep the website and platform available and accurate, but they may have interruptions. To the extent permitted by law, All In is not liable for indirect damages arising from use of the website. Nothing in these terms limits rights that consumer law guarantees you.",
          ],
        },
        {
          id: "privacy",
          heading: "Privacy",
          paragraphs: ["Personal data is handled under the All In privacy policy."],
          links: [{ label: "Privacy policy", href: "/privacy" }],
        },
        {
          id: "changes",
          heading: "Changes and contact",
          paragraphs: [
            "All In may update these terms, and the date at the top shows the version in force. Questions about these terms: {email}.",
          ],
        },
      ],
    },
    deletion: {
      metaTitle: "Data deletion | All In",
      description: "How to disconnect your account and ask All In to delete your data.",
      title: "Data deletion",
      intro:
        "You can ask All In to delete your personal data at any time. Below is how to disconnect your Instagram or TikTok account and how to request deletion of the data we already hold.",
      sections: [
        {
          id: "request",
          heading: "Request deletion",
          ordered: true,
          items: [
            "Write to {email} with the subject “Data deletion”.",
            "Send it from the email you used with All In, and include your name and, if you are a creator, your Instagram or TikTok profile.",
            "We confirm receipt and complete the deletion within 15 days, letting you know by email.",
          ],
          mail: { label: "Request deletion by email", subject: "Data deletion" },
        },
        {
          id: "instagram",
          heading: "Disconnect Instagram",
          paragraphs: [
            "In Instagram, open your settings, go to the apps and websites section and remove All In. All In loses access immediately and stops reading your account data. To delete what was already read, also send the deletion request above.",
          ],
        },
        {
          id: "tiktok",
          heading: "Disconnect TikTok",
          paragraphs: [
            "In TikTok, open Settings and privacy, go to the app permissions section and remove All In. All In loses access immediately and stops reading your account data. To delete what was already read, also send the deletion request above.",
          ],
        },
        {
          id: "deleted",
          heading: "What gets deleted",
          items: [
            "Your casting profile and portfolio photos and videos.",
            "Connected account data: access keys, followers, list of posts and metrics read through the connection.",
            "Messages sent through the website form and interest marked in catalogs.",
          ],
        },
        {
          id: "kept",
          heading: "What may be kept",
          paragraphs: [
            "Records that the law or a contract requires us to keep, such as invoices, payments and a campaign contract, are kept for the required period and only for that purpose. Campaign reports already delivered to a brand that hired the campaign remain with that brand.",
          ],
          links: [{ label: "Privacy policy", href: "/privacy" }],
        },
      ],
    },
  },
};
