import type { Locale } from "@/lib/i18n/dictionaries";

/**
 * Textos da página da All In UGC. Base: rascunho de página comercial do kit de UGC.
 * Sem preço, resultados, clientes ou números de casting que ainda não foram confirmados.
 */
export const ugcContent = {
  pt: {
    metaTitle: "All In UGC | Vídeos de produto com criadoras",
    kicker: "All In UGC",
    title: "Vídeos de produto, com roteiro, criadoras e edição pela All In.",
    lead: "Uma produção coordenada para sua marca apresentar produtos e testar diferentes mensagens nas redes sociais e em anúncios. Vídeos em inglês e português.",
    cta: "Solicitar proposta de piloto",
    secondary: "Ver como funciona",
    get: {
      title: "O que você recebe",
      items: [
        { name: "Conceitos originais", body: "Cada vídeo parte de uma ideia própria: apresentar o produto, mostrar o uso no dia a dia, responder a uma dúvida. Não são cortes da mesma gravação." },
        { name: "Roteiro aprovado antes", body: "Você aprova cada roteiro antes da gravação e sabe exatamente o que vai receber." },
        { name: "Criadoras escolhidas para o projeto", body: "Do casting da All In, com perfil, idioma e estilo adequados ao produto. Você aprova os perfis antes de começar." },
        { name: "Arquivos prontos, direitos por escrito", body: "Vídeos verticais editados e legendados, com os direitos de uso definidos: canais, período e território." },
      ],
    },
    how: {
      title: "Como funciona",
      lead: "Quatro etapas. Em cada uma, você sabe o que depende da sua equipe.",
      steps: [
        { name: "Conte o objetivo", body: "Produto, público, idioma e onde os vídeos vão rodar." },
        { name: "Aprove conceitos e perfis", body: "Enviamos os conceitos, os roteiros e as criadoras sugeridas." },
        { name: "Acompanhe a produção", body: "A All In coordena o envio do produto, a gravação e a edição." },
        { name: "Receba os vídeos", body: "Arquivos editados para os canais combinados, com uma rodada de ajustes dentro do roteiro aprovado." },
      ],
    },
    pilot: {
      title: "Comece com um piloto",
      body: "Quatro vídeos originais, com duas criadoras. Escopo, licença, preço e cronograma ficam definidos na proposta, antes de qualquer gravação.",
      includedTitle: "No piloto",
      included: [
        "Quatro roteiros originais",
        "Duas criadoras selecionadas para o produto",
        "Direção remota e edição com legendas",
        "Vídeos verticais (9:16) de 15 a 45 segundos",
        "Uma rodada de ajustes dentro do roteiro aprovado",
      ],
      excludedTitle: "Fora do piloto",
      excluded: [
        "Gestão e verba de anúncios",
        "Publicação no perfil da criadora",
        "Exclusividade e arquivos brutos",
        "Uso para treinar IA ou clonar voz e rosto",
      ],
    },
    creators: {
      title: "Para criadoras",
      body: "Estamos montando o casting da All In. Se você cria conteúdo e quer trabalhar com marcas, escreva para a gente com o link do seu perfil.",
      cta: "Quero entrar no casting",
      mailSubject: "Casting UGC",
      dataTitle: "Sua conta, seus dados",
      data: "No casting, você pode conectar seu Instagram ou TikTok para a All In medir os posts das campanhas. A conexão só lê dados: não publica, não vê mensagens e não recebe sua senha. Você pode desconectar quando quiser.",
      privacy: "Política de privacidade",
      deletion: "Como excluir seus dados",
    },
    faq: {
      title: "Perguntas frequentes",
      items: [
        { q: "Vocês garantem vendas ou alcance?", a: "Não. Garantimos as entregas e o processo combinados na proposta. Vendas dependem também de mídia, oferta, página e preço. O piloto serve para testar mensagens." },
        { q: "Os vídeos podem sair no perfil da criadora?", a: "Não no piloto. Dá para avaliar como escopo adicional, com acordo, período e pagamento próprios para a criadora." },
        { q: "Quanto tempo leva?", a: "O prazo é confirmado na proposta. Ele começa a contar quando o produto chega e os roteiros são aprovados, e depende do retorno da sua equipe em cada etapa." },
        { q: "Posso ver trabalhos anteriores?", a: "Estamos lançando esta linha de serviço. Amostras de produção são sempre identificadas como demonstração, nunca como resultado de cliente." },
      ],
    },
  },
  en: {
    metaTitle: "All In UGC | Product videos with creators",
    kicker: "All In UGC",
    title: "Product videos, with scripts, creators and editing managed by All In.",
    lead: "A coordinated production service for brands that need to demonstrate products and test different messages across social channels and paid campaigns. Videos in English and Portuguese.",
    cta: "Request a pilot proposal",
    secondary: "See how it works",
    get: {
      title: "What you get",
      items: [
        { name: "Original concepts", body: "Each video starts from its own idea: introducing the product, showing everyday use, answering a question. Not cuts of the same shoot." },
        { name: "Scripts approved first", body: "You approve every script before filming, so you know exactly what you will receive." },
        { name: "Creators picked for the project", body: "From the All In casting, with the profile, language and style the product needs. You approve them before we start." },
        { name: "Finished files, rights in writing", body: "Edited vertical videos with captions, and usage rights defined up front: channels, period and territory." },
      ],
    },
    how: {
      title: "How it works",
      lead: "Four steps. At each one, you know what depends on your team.",
      steps: [
        { name: "Share your goal", body: "Product, audience, language and where the videos will run." },
        { name: "Approve concepts and creators", body: "We send the concepts, the scripts and the suggested creators." },
        { name: "Follow the production", body: "All In coordinates product shipping, filming and editing." },
        { name: "Receive your videos", body: "Edited files for the agreed channels, with one round of changes within the approved script." },
      ],
    },
    pilot: {
      title: "Start with a pilot",
      body: "Four original videos featuring two creators. Scope, usage rights, price and timeline are set in the proposal, before any filming.",
      includedTitle: "In the pilot",
      included: [
        "Four original scripts",
        "Two creators selected for the product",
        "Remote direction and editing with captions",
        "Vertical videos (9:16), 15 to 45 seconds",
        "One round of changes within the approved script",
      ],
      excludedTitle: "Not in the pilot",
      excluded: [
        "Ad management and ad spend",
        "Posting on the creator's profile",
        "Exclusivity and raw footage",
        "Use for AI training or voice and face cloning",
      ],
    },
    creators: {
      title: "For creators",
      body: "We are building the All In casting. If you create content and want to work with brands, write to us with a link to your profile.",
      cta: "Join the casting",
      mailSubject: "UGC casting",
      dataTitle: "Your account, your data",
      data: "In the casting, you can connect your Instagram or TikTok so All In can measure campaign posts. The connection only reads data: it never posts, never sees your messages and never receives your password. You can disconnect at any time.",
      privacy: "Privacy policy",
      deletion: "How to delete your data",
    },
    faq: {
      title: "Frequently asked questions",
      items: [
        { q: "Do you guarantee sales or reach?", a: "No. We guarantee the deliverables and the process agreed in the proposal. Sales also depend on media, offer, landing page and price. The pilot is for testing messages." },
        { q: "Can the videos be posted on the creator's profile?", a: "Not in the pilot. It can be scoped as an add-on, with its own agreement, period and payment for the creator." },
        { q: "How long does it take?", a: "The timeline is confirmed in the proposal. It starts when the product arrives and the scripts are approved, and depends on your team's feedback at each step." },
        { q: "Can I see previous work?", a: "We are launching this service line. Production samples are always labeled as demonstrations, never as client results." },
      ],
    },
  },
} satisfies Record<Locale, unknown>;
