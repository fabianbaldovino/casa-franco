/**
 * CASA FRANCO | GASTÃO RHODES, 394
 * DECISION BUILDER & STRATEGY ENGINE
 * WhatsApp Destino: (51) 99965-4160
 */

// --- TELEFONE DE DESTINO DO WHATSAPP ---
const WHATSAPP_DESTINO = '5551999654160';

// --- VALORES DE REFERÊNCIA DA AUDITORIA TÉCNICA DE MERCADO ---
const AUDITORIA_VALORES = {
  anuncio: 575000,
  fechamento: 550000,
  piso: 540000
};

// --- DADOS ESTRATÉGICOS: 30 INCORPORADORAS & CONSTRUTORAS (POA) ---
const CONSTRUTORAS_DATA = [
  { id: 'melnick', name: 'Melnick', category: 'gigante', tag: 'Gigante / Alto Padrão', desc: 'Líder em POA, forte apetite para landbank e torres residenciais.' },
  { id: 'cyrela', name: 'Cyrela Goldsztein', category: 'gigante', tag: 'Nacional / Alto Padrão', desc: 'Atuação consolidada no Santana e Petrópolis com foco em alta liquidez.' },
  { id: 'maiojama', name: 'Maiojama', category: 'gigante', tag: 'Alto Padrão / Conceito', desc: 'Projetos autorais e urbanismo de excelência em eixos nobres.' },
  { id: 'kopstein', name: 'Kopstein', category: 'gigante', tag: 'Tradicional / Luxo', desc: 'Foco exclusivo em áreas nobres e acabamentos de altíssimo padrão.' },
  { id: 'plaenge', name: 'Plaenge (Vanguard)', category: 'gigante', tag: 'Nacional / Inovação', desc: 'Braço jovem Vanguard foca em design cosmopolita e áreas centrais.' },
  { id: 'cfl', name: 'CFL Inc', category: 'gigante', tag: 'Triple A / Luxo', desc: 'Empreendimentos de altíssimo prestígio e complexos de saúde/hotelaria.' },
  { id: 'ivo_rizzo', name: 'Ivo Rizzo', category: 'gigante', tag: 'Tradicional / Corporativo', desc: 'Histórico sólido em empreendimentos corporativos e residenciais.' },
  { id: 'rotta_ely', name: 'Rotta Ely', category: 'gigante', tag: 'Forte Presença POA', desc: 'Foco em engenharia sustentável e empreendimentos multifamiliares.' },
  { id: 'nex_group', name: 'Nex Group', category: 'gigante', tag: 'Grande Porte', desc: 'Portfólio robusto com histórico em diversas zonas de Porto Alegre.' },
  { id: 'arquisul', name: 'Arquisul', category: 'gigante', tag: 'Tradicional / Qualidade', desc: 'Mais de 4 décadas de solidez construtiva na capital gaúcha.' },
  { id: 'smart', name: 'Smart (Arq. para a Vida)', category: 'boutique', tag: 'Boutique / Compactos', desc: 'Pioneira em compactos de design refinado próximos a hospitais e polos.' },
  { id: 'wikihaus', name: 'Wikihaus', category: 'boutique', tag: 'Colaborativo / Jovem', desc: 'Empreendimentos modernos com apelo para residentes médicos e estudantes.' },
  { id: 'abf', name: 'ABF Developments', category: 'boutique', tag: 'Inovação / Design', desc: 'Projetos arrojados como 4D Complex, forte no retrofit e novos conceitos.' },
  { id: 'astir', name: 'Astir Incorporadora', category: 'boutique', tag: 'Contemporâneo', desc: 'Linhas clean e foco em localização estratégica na região central/leste.' },
  { id: 'tgd', name: 'TGD Incorporadora', category: 'boutique', tag: 'Design Urbano', desc: 'Projetos bem inseridos na malha urbana com arquitetura moderna.' },
  { id: 'allem', name: 'Allem Incorporações', category: 'boutique', tag: 'Boutique / Estilo', desc: 'Foco em detalhes e prédios charmosos de média escala.' },
  { id: 'woss', name: 'Woss Incorporadora', category: 'boutique', tag: 'Contemporâneo', desc: 'Compactos premium com alta rentabilidade de locação.' },
  { id: 'tomasetto', name: 'Tomasetto Engenharia', category: 'boutique', tag: 'Engenharia & Conforto', desc: 'Projetos com certificações térmicas/acústicas diferenciadas.' },
  { id: 'baril', name: 'Báril Empreendimentos', category: 'boutique', tag: 'Inovação Urbana', desc: 'Projetos arrojados com foco no público universitário e médico.' },
  { id: 'wolens', name: 'Wolens Incorporadora', category: 'boutique', tag: 'Design / Autoral', desc: 'Empreendimentos exclusivos assinados por grandes escritórios de arquitetura.' },
  { id: 'zaffari', name: 'Zaffari Construtora', category: 'comercial', tag: 'Comercial / Misto', desc: 'Foco em centros de conveniência, strip malls e expansão de serviços.' },
  { id: 'dlegend', name: 'DLegend Empreendimentos', category: 'comercial', tag: 'Estruturação / Comercial', desc: 'Expertise forte em estruturação de clínicas boutique e imóveis de renda.' },
  { id: 'dallasanta', name: 'Dallasanta', category: 'comercial', tag: 'Investimentos & Terrenos', desc: 'Forte presença em landbank, projetos comerciais e BTS (Built to Suit).' },
  { id: 'ughini', name: 'Ughini Empreendimentos', category: 'comercial', tag: 'Tradicional / Misto', desc: 'Empreendimentos seguros com sólida reputação mercadológica.' },
  { id: 'knijnik', name: 'Knijnik Engenharia', category: 'comercial', tag: 'Engenharia Hospitalar/Civil', desc: 'Grande expertise estrutural e predial em Porto Alegre.' },
  { id: 'colla', name: 'Colla Construções', category: 'comercial', tag: 'Tradicional Familiar', desc: 'Histórico confiável em bairros tradicionais de POA.' },
  { id: 'salis', name: 'Salis Engenharia', category: 'comercial', tag: 'Soluções de Engenharia', desc: 'Projetos inteligentes com foco em custo-benefício e viabilidade.' },
  { id: 'vasco', name: 'Vasco Construtora', category: 'comercial', tag: 'Tradicional Gaúcha', desc: 'Atuação consolidada no mercado imobiliário regional.' },
  { id: 'leme', name: 'Leme Construtora', category: 'comercial', tag: 'Residencial & Comercial', desc: 'Foco em obras de qualidade com excelente aproveitamento de lote.' },
  { id: 'adn', name: 'ADN Construtora', category: 'comercial', tag: 'Expansão & Oportunidades', desc: 'Modelo ágil para aquisição de lotes urbanos consolidados.' }
];

// --- DADOS ESTRATÉGICOS: 6 CANAIS DE VENDA DIRETA (FSBO) ---
const PORTAIS_DATA = [
  { id: 'olx', name: 'OLX (Essencial no RS)', badge: 'Maior Liquidez no RS', hot: true, desc: 'O portal de maior giro direto em Porto Alegre. Os compradores da região usam massivamente o filtro "Direto com o Proprietário" para negociação ágil.', cost: 'Taxa fixa mensal acessível (anúncio avulso)', audience: 'Investidores locais, famílias do bairro, compradores de oportunidade rápida' },
  { id: 'zap_vivareal', name: 'ZAP Imóveis & Viva Real', badge: 'Maior Ticket Médio', hot: true, desc: 'O ecossistema OLX Brasil líder em buscas qualificadas. Permite planos de anúncios para pessoas físicas com alcance premium e visibilidade nacional.', cost: 'Plano direto para pessoa física (taxa fixa)', audience: 'Médicos dos hospitais do Santana, residentes, investidores de alto padrão' },
  { id: 'mercadolivre', name: 'Mercado Livre Imóveis', badge: 'Máxima Indexação Google', hot: false, desc: 'Altíssimo volume orgânico de buscas na internet. Excelente ranqueamento no Google quando alguém pesquisa por "casa ou terreno no Santana POA".', cost: 'Plano por publicação (custo fixo)', audience: 'Compradores ativos de fora de POA e investidores de patrimônio' },
  { id: 'imovelweb', name: 'Imovelweb', badge: 'Público Maduro & Capitalizado', hot: false, desc: 'Portal tradicional de alta relevância que aceita planos avulsos para proprietários. Atrai um perfil de comprador mais maduro e com recurso à vista.', cost: 'Anúncio avulso pré-pago', audience: 'Compradores tradicionais, aposentados, investidores conservadores' },
  { id: 'chavesnamao', name: 'Chaves na Mão', badge: 'Expansão Sul', hot: false, desc: 'Portal em acelerado crescimento nos estados do Sul do Brasil. Interface rápida e custo muito baixo por exposição qualificada.', cost: 'Pacote econômico sem intermediação', audience: 'Público regional do RS e Santa Catarina' },
  { id: 'meta_marketplace', name: 'Facebook Marketplace & Meta Ads Local', badge: 'Custo Zero + Segmentado', hot: true, desc: 'Combinação de postagens em grupos de vizinhança ("Moradores do Santana / Menino Deus") + campanha de anúncios direcionada ao raio de 2km ao redor.', cost: 'Orgânico GRÁTIS + Micro-orçamento opcional', audience: 'Comunidade hospitalar (Clínicas, Ernesto Dornelles, Cardiologia) e vizinhos' }
];

// --- ESTADO GLOBAL DA APLICAÇÃO ---
const state = {
  currentStep: 1,
  totalSteps: 4,
  francoPrecoAnuncio: 630000,
  francoPrecoFechamento: 590000,
  francoPrecoPiso: 560000,
  selectedCompanies: new Set(), // 100% desmarcado por padrão (decisão do Franco)
  selectedPortals: new Set(),    // 100% desmarcado por padrão (decisão do Franco)
  executionMode: null,           // 100% desmarcado por padrão (decisão do Franco)
  francoNotes: '',
  isApproved: false,
  approvedAt: null,
  approvalCode: null
};

// --- HELPER: PROTEÇÃO XSS ---
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag])
  );
}

// --- FORMATAÇÃO DE MOEDA ---
function formatCurrency(val) {
  if (isNaN(val) || val === null || val === undefined) return 'R$ 0';
  return val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
}

function parseCurrencyInput(str) {
  if (!str) return 0;
  const clean = str.toString().replace(/\D/g, '');
  return parseInt(clean, 10) || 0;
}

// --- PERCENTUAL NO PADRÃO BRASILEIRO (vírgula decimal) ---
function formatPercent(val) {
  return val.toLocaleString('pt-BR', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
}

// --- ORÇAMENTO DE PREPARAÇÃO (fonte única para tela, PDF e WhatsApp) ---
const ORCAMENTO_PREPARACAO = [
  { item: 'Corte de grama e roçada (pátio e recuos)', valor: 'R$ 300,00' },
  { item: 'Limpeza pesada e lavagem da fachada', valor: 'R$ 600,00' },
  { item: 'Banner de venda (lona com ilhós)', valor: 'R$ 120,00' },
  { item: 'Publicidade mensal (portais e anúncios locais)', valor: 'R$ 350,00/mês' }
];

const MODOS_EXECUCAO = {
  hybrid: {
    curto: 'Aceleração Total (B2B + Venda Direta simultâneas)',
    longo: 'Aceleração Total — prospecção das incorporadoras e anúncios nos canais diretos iniciam ao mesmo tempo, para ampliar a concorrência entre interessados.'
  },
  b2b_only: {
    curto: 'Prioridade B2B (incorporadoras primeiro)',
    longo: 'Prioridade B2B — abordagem exclusiva das incorporadoras durante os primeiros 20 dias; depois disso, publicação nos portais.'
  },
  fsbo_only: {
    curto: 'Prioridade Venda Direta (portais primeiro)',
    longo: 'Prioridade Venda Direta — publicação imediata nos portais para compradores pessoas físicas e investidores locais.'
  }
};

// --- DATA/HORA DA APROVAÇÃO (fixa, não muda a cada abertura do documento) ---
function formatApprovalDateTime() {
  const d = state.approvedAt ? new Date(state.approvedAt) : new Date();
  return d.toLocaleString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

// --- IMPRESSÃO DIGITAL DO CONTEÚDO (FNV-1a 32 bits) ---
// Permite conferir que o PDF e a mensagem do WhatsApp se referem exatamente ao mesmo plano.
function planFingerprint() {
  const canonical = JSON.stringify({
    a: state.francoPrecoAnuncio,
    f: state.francoPrecoFechamento,
    p: state.francoPrecoPiso,
    c: Array.from(state.selectedCompanies).sort(),
    po: Array.from(state.selectedPortals).sort(),
    m: state.executionMode,
    n: state.francoNotes
  });
  let h = 0x811c9dc5;
  for (let i = 0; i < canonical.length; i++) {
    h ^= canonical.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).toUpperCase().padStart(8, '0');
}

function generateApprovalCode() {
  let rand;
  try {
    const arr = new Uint16Array(1);
    crypto.getRandomValues(arr);
    rand = (arr[0] % 9000) + 1000;
  } catch (e) {
    rand = Math.floor(1000 + Math.random() * 9000);
  }
  return `GR394-${rand}-${planFingerprint()}`;
}

// --- VALIDAÇÃO ANTES DA APROVAÇÃO ---
function validatePlan() {
  const erros = [];
  const { francoPrecoAnuncio: a, francoPrecoFechamento: f, francoPrecoPiso: p } = state;
  if (!a || !f || !p) erros.push('Preencha os três valores de preço (anúncio, fechamento e piso).');
  else {
    if (f > a) erros.push('A meta de fechamento não pode ser maior que o preço de anúncio.');
    if (p > f) erros.push('O piso mínimo não pode ser maior que a meta de fechamento.');
  }
  if (!state.executionMode) erros.push('Escolha o ritmo de início na Etapa 4.');
  if (state.selectedCompanies.size === 0 && state.selectedPortals.size === 0) {
    erros.push('Selecione ao menos uma construtora (Etapa 2) ou um portal (Etapa 3).');
  }
  return erros;
}

// --- REVOGA A APROVAÇÃO SE O PLANO FOR ALTERADO DEPOIS DE APROVADO ---
// Garante que o que chega ao destinatário é exatamente o que o Franco aprovou.
function revokeApprovalIfChanged() {
  if (!state.isApproved) return;
  state.isApproved = false;
  state.approvedAt = null;
  state.approvalCode = null;
  const btnApprove = document.getElementById('btnApproveMaster');
  if (btnApprove) {
    btnApprove.className = 'btn-approve-master';
    btnApprove.innerHTML = '<span>APROVAR PLANO DE AÇÃO ESTRATÉGICO</span>';
  }
  document.getElementById('postApprovalActions')?.classList.remove('visible');
  const codeDisplay = document.getElementById('dossierApprovalCode');
  if (codeDisplay) codeDisplay.textContent = 'CÓD: PENDENTE';
  const waBtn = document.getElementById('btnShareWhatsApp');
  if (waBtn) waBtn.href = '#';
  showToast('O plano foi alterado após a aprovação. Revise e aprove novamente para gerar o PDF e a mensagem atualizados.');
}

// --- CONTROLE DE SCROLL: PREVENIR RESTAURAÇÃO E FORÇAR TOPO ABSOLUTO ---
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

// Limpa qualquer fragmento de hash que force rolagem automática para o meio da página
if (window.location.hash) {
  try {
    history.replaceState(null, null, window.location.pathname + window.location.search);
  } catch (e) {}
}

// --- INICIALIZAÇÃO DO DOM ---
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  loadFromStorage();
  initPricingInputs();
  renderConstrutorasGrid();
  renderPortaisGrid();
  updateMetricsHUD();
  setupEventListeners();
  updateWizardUI();

  // Garante que o site sempre inicie no topo absoluto com todas as informações visíveis primeiro
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

// Fallbacks adicionais pós-renderização completa de imagens, fontes e histórico bfcache
window.addEventListener('load', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

window.addEventListener('pageshow', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
});

// --- GERENCIAMENTO DE TEMA (PRIORIDADE ABSOLUTA: MODO CLARO) ---
function initTheme() {
  // O site SEMPRE inicia em Modo Claro (Light Mode) como prioridade máxima solicitada
  applyTheme('light');
  try {
    localStorage.setItem('casa_franco_theme', 'light');
  } catch (e) {}

  document.getElementById('themeToggleBtn')?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    const nextTheme = current === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
    try {
      localStorage.setItem('casa_franco_theme', nextTheme);
    } catch (e) {}
    showToast(nextTheme === 'light' ? '☀️ Modo Claro ativado' : '🌙 Modo Escuro ativado');
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) {
    btn.textContent = theme === 'light' ? '🌙' : '☀️';
    btn.setAttribute('aria-label', theme === 'light' ? 'Mudar para Modo Escuro' : 'Mudar para Modo Claro');
    btn.title = theme === 'light' ? 'Mudar para Modo Escuro' : 'Mudar para Modo Claro';
  }
}

// --- GERENCIAMENTO DE PREÇOS DO FRANCO ---
function initPricingInputs() {
  const inputAnuncio = document.getElementById('inputFrancoAnuncio');
  const inputFechamento = document.getElementById('inputFrancoFechamento');
  const inputPiso = document.getElementById('inputFrancoPiso');

  const bindings = [
    [inputAnuncio, 'francoPrecoAnuncio'],
    [inputFechamento, 'francoPrecoFechamento'],
    [inputPiso, 'francoPrecoPiso']
  ];

  bindings.forEach(([input, key]) => {
    if (!input) return;
    input.value = formatCurrency(state[key]);
    input.setAttribute('inputmode', 'numeric');
    input.addEventListener('input', (e) => {
      const num = parseCurrencyInput(e.target.value);
      if (num !== state[key]) revokeApprovalIfChanged();
      state[key] = num;
      e.target.value = formatCurrency(num);
      updatePricingCalculations();
      updateMetricsHUD();
      saveToStorage();
    });
  });

  updatePricingCalculations();
}

function updatePricingCalculations() {
  const diffEl = document.getElementById('francoPriceDeltaBadge');
  if (diffEl) {
    const diff = state.francoPrecoAnuncio - AUDITORIA_VALORES.anuncio;
    const pct = formatPercent(Math.abs(diff / AUDITORIA_VALORES.anuncio) * 100);
    const ordemInvalida = state.francoPrecoFechamento > state.francoPrecoAnuncio || state.francoPrecoPiso > state.francoPrecoFechamento;
    if (ordemInvalida) {
      diffEl.textContent = '⚠️ Atenção: o anúncio deve ser ≥ fechamento ≥ piso';
      diffEl.className = 'price-delta-badge minus';
    } else if (diff > 0) {
      diffEl.textContent = `+ ${formatCurrency(diff)} (+${pct}%) acima da auditoria`;
      diffEl.className = 'price-delta-badge plus';
    } else if (diff < 0) {
      diffEl.textContent = `− ${formatCurrency(Math.abs(diff))} (−${pct}%) abaixo da auditoria`;
      diffEl.className = 'price-delta-badge minus';
    } else {
      diffEl.textContent = 'Igual ao valor de referência da auditoria';
      diffEl.className = 'price-delta-badge equal';
    }
  }

  const hudPriceEl = document.getElementById('hudFrancoPrice');
  if (hudPriceEl) hudPriceEl.textContent = formatCurrency(state.francoPrecoAnuncio);
  
  const dossierAnuncio = document.getElementById('dossierFrancoAnuncio');
  if (dossierAnuncio) dossierAnuncio.textContent = formatCurrency(state.francoPrecoAnuncio);
  
  const dossierFechamento = document.getElementById('dossierFrancoFechamento');
  if (dossierFechamento) dossierFechamento.textContent = formatCurrency(state.francoPrecoFechamento);
  
  const dossierPiso = document.getElementById('dossierFrancoPiso');
  if (dossierPiso) dossierPiso.textContent = formatCurrency(state.francoPrecoPiso);

  if (state.isApproved) setupWhatsAppLink();
}

// --- RENDERIZADORES DE GRID ---
function renderConstrutorasGrid(categoryFilter = 'all') {
  const container = document.getElementById('companyGrid');
  if (!container) return;

  container.innerHTML = '';
  const filtered = categoryFilter === 'all' 
    ? CONSTRUTORAS_DATA 
    : CONSTRUTORAS_DATA.filter(c => c.category === categoryFilter);

  filtered.forEach(company => {
    const isSelected = state.selectedCompanies.has(company.id);
    const card = document.createElement('div');
    card.className = `company-card ${isSelected ? 'selected' : ''}`;
    card.dataset.id = company.id;
    card.innerHTML = `
      <div class="company-info">
        <span class="company-name">${escapeHTML(company.name)}</span>
        <span class="company-tag">${escapeHTML(company.tag)}</span>
      </div>
      <div class="company-checkbox">${isSelected ? '✓' : ''}</div>
    `;
    card.addEventListener('click', () => toggleCompany(company.id, card));
    container.appendChild(card);
  });
}

function renderPortaisGrid() {
  const container = document.getElementById('portalsGrid');
  if (!container) return;

  container.innerHTML = '';
  PORTAIS_DATA.forEach(portal => {
    const isSelected = state.selectedPortals.has(portal.id);
    const card = document.createElement('div');
    card.className = `portal-card ${isSelected ? 'active' : ''}`;
    card.dataset.id = portal.id;
    card.innerHTML = `
      <div class="portal-card-top">
        <div class="portal-header">
          <div class="portal-header-info">
            <div class="portal-title">${escapeHTML(portal.name)}</div>
            <div class="portal-badges-row">
              <span class="portal-badge ${portal.hot ? 'hot' : ''}">${escapeHTML(portal.badge)}</span>
              <span class="portal-selection-chip">${isSelected ? '✓ HABILITADO' : 'DESMARCADO'}</span>
            </div>
          </div>
          <label class="toggle-switch" onclick="event.stopPropagation()">
            <input type="checkbox" ${isSelected ? 'checked' : ''} data-portal="${portal.id}">
            <span class="toggle-slider"></span>
          </label>
        </div>
        <p class="portal-desc">${escapeHTML(portal.desc)}</p>
        <div class="portal-audience-box">
          <strong style="color:var(--text-main);">Público-alvo:</strong> ${escapeHTML(portal.audience)}
        </div>
      </div>
      <div class="portal-footer">
        <span class="portal-cost">${escapeHTML(portal.cost)}</span>
        <div class="portal-status-pill">
          <span class="status-pill-icon">${isSelected ? '✓' : '○'}</span>
          <span class="status-pill-text">${isSelected ? 'CANAL ATIVADO' : 'CLIQUE P/ ATIVAR'}</span>
        </div>
      </div>
    `;
    card.addEventListener('click', () => {
      const input = card.querySelector('input[type="checkbox"]');
      input.checked = !input.checked;
      togglePortal(portal.id, input.checked, card);
    });
    const input = card.querySelector('input[type="checkbox"]');
    input.addEventListener('change', (e) => togglePortal(portal.id, e.target.checked, card));
    container.appendChild(card);
  });
}

// --- INTERAÇÕES E TOGGLES ---
function toggleCompany(id, cardElement) {
  revokeApprovalIfChanged();
  if (state.selectedCompanies.has(id)) {
    state.selectedCompanies.delete(id);
    cardElement.classList.remove('selected');
    cardElement.querySelector('.company-checkbox').textContent = '';
  } else {
    state.selectedCompanies.add(id);
    cardElement.classList.add('selected');
    cardElement.querySelector('.company-checkbox').textContent = '✓';
  }
  updateMetricsHUD();
  saveToStorage();
}

function togglePortal(id, isChecked, cardElement) {
  revokeApprovalIfChanged();
  if (isChecked) {
    state.selectedPortals.add(id);
    cardElement.classList.add('active');
  } else {
    state.selectedPortals.delete(id);
    cardElement.classList.remove('active');
  }

  const chip = cardElement.querySelector('.portal-selection-chip');
  if (chip) {
    chip.textContent = isChecked ? '✓ HABILITADO' : 'DESMARCADO';
  }

  const statusPill = cardElement.querySelector('.portal-status-pill');
  if (statusPill) {
    const icon = statusPill.querySelector('.status-pill-icon');
    const text = statusPill.querySelector('.status-pill-text');
    if (icon) icon.textContent = isChecked ? '✓' : '○';
    if (text) text.textContent = isChecked ? 'CANAL ATIVADO' : 'CLIQUE P/ ATIVAR';
  }

  updateMetricsHUD();
  saveToStorage();
}

function selectAllPortals() {
  revokeApprovalIfChanged();
  PORTAIS_DATA.forEach(p => state.selectedPortals.add(p.id));
  renderPortaisGrid();
  updateMetricsHUD();
  saveToStorage();
  showToast('Todos os 6 portais de venda direta foram ativados pelo Franco!');
}

function clearAllPortals() {
  revokeApprovalIfChanged();
  state.selectedPortals.clear();
  renderPortaisGrid();
  updateMetricsHUD();
  saveToStorage();
  showToast('Todos os portais foram desmarcados.');
}

function selectAllCompanies() {
  revokeApprovalIfChanged();
  CONSTRUTORAS_DATA.forEach(c => state.selectedCompanies.add(c.id));
  renderConstrutorasGrid(document.querySelector('.filter-chip.active')?.dataset.filter || 'all');
  updateMetricsHUD();
  saveToStorage();
  showToast('Todas as 30 construtoras foram selecionadas pelo Franco!');
}

function clearAllCompanies() {
  revokeApprovalIfChanged();
  state.selectedCompanies.clear();
  renderConstrutorasGrid(document.querySelector('.filter-chip.active')?.dataset.filter || 'all');
  updateMetricsHUD();
  saveToStorage();
  showToast('Todas as construtoras foram desmarcadas.');
}

function selectOnlyCategory(category) {
  revokeApprovalIfChanged();
  state.selectedCompanies.clear();
  CONSTRUTORAS_DATA.filter(c => c.category === category).forEach(c => state.selectedCompanies.add(c.id));
  renderConstrutorasGrid(document.querySelector('.filter-chip.active')?.dataset.filter || 'all');
  updateMetricsHUD();
  saveToStorage();
  showToast(`Filtradas e selecionadas empresas da categoria: ${category.toUpperCase()}`);
}

// --- CONTROLE DE MÉTRICAS HUD & RESUMO ---
function updateMetricsHUD() {
  if (document.getElementById('hudB2bCount')) {
    document.getElementById('hudB2bCount').textContent = `${state.selectedCompanies.size} de ${CONSTRUTORAS_DATA.length}`;
  }
  if (document.getElementById('hudFsboCount')) {
    document.getElementById('hudFsboCount').textContent = `${state.selectedPortals.size} de ${PORTAIS_DATA.length}`;
  }
  if (document.getElementById('hudStrategy')) {
    const stratEl = document.getElementById('hudStrategy');
    if (state.executionMode === 'hybrid') stratEl.textContent = 'Híbrida (B2B + Direta)';
    else if (state.executionMode === 'b2b_only') stratEl.textContent = 'Foco Construtoras (B2B)';
    else if (state.executionMode === 'fsbo_only') stratEl.textContent = 'Foco Venda Direta (FSBO)';
    else stratEl.textContent = 'Aguardando Decisão do Franco';
  }
  if (document.getElementById('summaryB2bCount')) {
    document.getElementById('summaryB2bCount').textContent = state.selectedCompanies.size === 0 
      ? '0 construtoras (aguardando seleção do Franco)'
      : `${state.selectedCompanies.size} construtora(s) aprovada(s)`;
  }
  if (document.getElementById('summaryPortalsCount')) {
    document.getElementById('summaryPortalsCount').textContent = state.selectedPortals.size === 0 
      ? '0 canais (aguardando seleção do Franco)'
      : `${state.selectedPortals.size} canal(is) de venda direta`;
  }
  if (document.getElementById('summaryStrategyMode')) {
    const modes = {
      'hybrid': 'Aceleração Total (B2B + FSBO Simultâneo)',
      'b2b_only': 'Prioridade B2B (Incorporadoras primeiro)',
      'fsbo_only': 'Prioridade FSBO (Venda Direta primeiro)'
    };
    document.getElementById('summaryStrategyMode').textContent = state.executionMode 
      ? (modes[state.executionMode] || 'Não definido') 
      : 'Pendente (Franco definirá na Etapa 4)';
  }

  const headerStatusEl = document.getElementById('headerStatusPill');
  if (headerStatusEl) {
    if (state.isApproved) {
      headerStatusEl.className = 'status-pill approved';
      headerStatusEl.innerHTML = `<span class="status-dot"></span> PLANO APROVADO PELO FRANCO (${new Date(state.approvedAt).toLocaleDateString('pt-BR')})`;
    } else {
      headerStatusEl.className = 'status-pill';
      headerStatusEl.innerHTML = `<span class="status-dot"></span> Aguardando Decisão do Franco`;
    }
  }

  renderPrintablePlan();
}

// --- WIZARD NAVIGATION ---
function setStep(step) {
  if (step < 1 || step > state.totalSteps) return;
  state.currentStep = step;
  updateWizardUI();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  saveToStorage();
}

function updateWizardUI() {
  document.querySelectorAll('.wizard-step-tab').forEach((tab, index) => {
    const stepNumber = index + 1;
    tab.classList.remove('active', 'completed');
    if (stepNumber === state.currentStep) tab.classList.add('active');
    else if (stepNumber < state.currentStep) tab.classList.add('completed');
  });

  document.querySelectorAll('.step-panel').forEach((panel) => {
    panel.classList.remove('active');
    if (parseInt(panel.dataset.step, 10) === state.currentStep) panel.classList.add('active');
  });

  const prevBtn = document.getElementById('btnPrevStep');
  const nextBtn = document.getElementById('btnNextStep');
  if (prevBtn) prevBtn.style.visibility = state.currentStep === 1 ? 'hidden' : 'visible';
  if (nextBtn) {
    if (state.currentStep === state.totalSteps) nextBtn.style.display = 'none';
    else {
      nextBtn.style.display = 'flex';
      nextBtn.innerHTML = `Avançar para Etapa ${state.currentStep + 1} →`;
    }
  }
}

// --- MODO DE EXECUÇÃO ---
function setExecutionMode(mode) {
  if (mode !== state.executionMode) revokeApprovalIfChanged();
  state.executionMode = mode;
  document.querySelectorAll('.mode-option-btn').forEach(btn => {
    const isSelected = btn.dataset.mode === mode;
    btn.classList.toggle('selected', isSelected);
    const span = btn.querySelector('span:last-child');
    if (span) span.textContent = isSelected ? '✓' : '○';
  });
  updateMetricsHUD();
  saveToStorage();
}

// --- APROVAÇÃO FORMAL DO FRANCO ---
function approveStrategy() {
  if (state.isApproved) return;

  const notesEl = document.getElementById('francoNotesInput');
  state.francoNotes = (notesEl?.value || '').trim().slice(0, 1000);

  const erros = validatePlan();
  if (erros.length) {
    showToast(`Não foi possível aprovar ainda:<br>• ${erros.map(escapeHTML).join('<br>• ')}`);
    return;
  }

  state.isApproved = true;
  state.approvedAt = new Date().toISOString();
  state.approvalCode = generateApprovalCode();

  applyApprovedUI();
  updateMetricsHUD();
  saveToStorage();
  setupWhatsAppLink();

  showToast(`🎉 Plano de Ação aprovado pelo Franco!<br>Código: ${escapeHTML(state.approvalCode)}`);
}

function applyApprovedUI() {
  const btnApprove = document.getElementById('btnApproveMaster');
  if (btnApprove) {
    btnApprove.className = 'btn-approve-master approved';
    btnApprove.textContent = `✓ PLANO APROVADO PELO FRANCO (${state.approvalCode})`;
  }
  document.getElementById('postApprovalActions')?.classList.add('visible');
  const codeDisplay = document.getElementById('dossierApprovalCode');
  if (codeDisplay) codeDisplay.textContent = `CÓD: ${state.approvalCode}`;
}

// --- MONTAGEM DO LINK DIRETO DO WHATSAPP ---
// Observação: o wa.me apenas abre a conversa com o texto preenchido.
// Nenhum dado passa por servidor próprio; o PDF precisa ser anexado manualmente pelo Franco.
function buildWhatsAppMessage() {
  const modo = MODOS_EXECUCAO[state.executionMode]?.curto || 'Não definido';

  const construtoras = CONSTRUTORAS_DATA
    .filter(c => state.selectedCompanies.has(c.id))
    .map(c => `• ${c.name}`)
    .join('\n');

  const portais = PORTAIS_DATA
    .filter(p => state.selectedPortals.has(p.id))
    .map(p => `• ${p.name}`)
    .join('\n');

  const orcamento = ORCAMENTO_PREPARACAO.map(o => `• ${o.item}: ${o.valor}`).join('\n');

  // Remove marcadores de formatação do WhatsApp das observações para que o texto chegue literal
  const notas = state.francoNotes ? state.francoNotes.replace(/[*_~`]/g, '') : '';

  return [
    '*PLANO DE AÇÃO APROVADO – RUA DR. GASTÃO RHODES, 394*',
    'Proprietário: Franco',
    `Código da aprovação: ${state.approvalCode}`,
    `Data/hora da aprovação: ${formatApprovalDateTime()}`,
    '',
    '💰 *PREÇOS DEFINIDOS PELO FRANCO*',
    `• Preço de anúncio inicial: ${formatCurrency(state.francoPrecoAnuncio)}`,
    `• Meta de fechamento: ${formatCurrency(state.francoPrecoFechamento)}`,
    `• Piso mínimo inegociável: ${formatCurrency(state.francoPrecoPiso)}`,
    `Referência da auditoria: anúncio ${formatCurrency(AUDITORIA_VALORES.anuncio)} / fechamento ${formatCurrency(AUDITORIA_VALORES.fechamento)} / piso ${formatCurrency(AUDITORIA_VALORES.piso)}`,
    '',
    '🛠️ *ORÇAMENTO MÁXIMO DE PREPARAÇÃO*',
    orcamento,
    '',
    '🎯 *RITMO DE INÍCIO*',
    modo,
    '',
    `🏢 *CONSTRUTORAS APROVADAS (${state.selectedCompanies.size})*`,
    construtoras || 'Nenhuma construtora selecionada.',
    '',
    `🌐 *PORTAIS APROVADOS (${state.selectedPortals.size})*`,
    portais || 'Nenhum portal selecionado.',
    '',
    '📝 *OBSERVAÇÕES DO FRANCO*',
    notas ? `"${notas}"` : 'Sem observações adicionais.',
    '',
    '📎 O PDF completo do plano segue anexado nesta conversa. Confira se o código da aprovação no PDF é o mesmo desta mensagem.'
  ].join('\n');
}

function setupWhatsAppLink() {
  const waBtn = document.getElementById('btnShareWhatsApp');
  if (!waBtn) return;
  if (!state.isApproved || !state.approvalCode) {
    waBtn.href = '#';
    return;
  }
  waBtn.href = `https://wa.me/${WHATSAPP_DESTINO}?text=${encodeURIComponent(buildWhatsAppMessage())}`;
}

// ==========================================================================
// RENDERIZADOR DO DOCUMENTO COMPLETO DO PLANO DE AÇÃO PARA PDF / IMPRESSÃO
// ==========================================================================
function renderPrintablePlan() {
  let printContainer = document.getElementById('printableDocumentArea');
  if (!printContainer) {
    printContainer = document.createElement('div');
    printContainer.id = 'printableDocumentArea';
    printContainer.className = 'print-only-document';
    document.body.appendChild(printContainer);
  }

  const selectedCompanies = CONSTRUTORAS_DATA.filter(c => state.selectedCompanies.has(c.id));
  const selectedPortals = PORTAIS_DATA.filter(p => state.selectedPortals.has(p.id));

  const diffAnuncio = state.francoPrecoAnuncio - AUDITORIA_VALORES.anuncio;
  const pctAnuncio = formatPercent(Math.abs(diffAnuncio / AUDITORIA_VALORES.anuncio) * 100);
  const diffStr = diffAnuncio > 0
    ? `+ ${formatCurrency(diffAnuncio)} (+${pctAnuncio}%)`
    : diffAnuncio < 0
    ? `− ${formatCurrency(Math.abs(diffAnuncio))} (−${pctAnuncio}%)`
    : 'Igual à referência';
  const diffColor = diffAnuncio >= 0 ? '#16a34a' : '#dc2626';

  const introPrecos = diffAnuncio > 0
    ? 'O proprietário optou por iniciar as ofertas acima da referência da auditoria, para testar a resposta do mercado. Também foi aprovado o orçamento máximo de preparação do imóvel:'
    : diffAnuncio < 0
    ? 'O proprietário optou por iniciar as ofertas abaixo da referência da auditoria, para acelerar a liquidez. Também foi aprovado o orçamento máximo de preparação do imóvel:'
    : 'O proprietário optou por iniciar as ofertas no valor de referência da auditoria. Também foi aprovado o orçamento máximo de preparação do imóvel:';

  const aprovado = state.isApproved && state.approvalCode;
  const codigo = aprovado ? escapeHTML(state.approvalCode) : 'PENDENTE';
  const dataDoc = aprovado ? `Aprovado em: ${formatApprovalDateTime()}` : `Gerado em: ${new Date().toLocaleDateString('pt-BR')}`;
  const modoLongo = MODOS_EXECUCAO[state.executionMode]?.longo || 'Pendente — ainda não definido pelo proprietário.';

  printContainer.innerHTML = `
    <!-- CABEÇALHO FORMAL -->
    <div class="print-doc-header">
      <div style="border-bottom: 3px solid #1e3a8a; padding-bottom: 12px; margin-bottom: 20px;">
        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
          <div>
            <div style="font-size:11px; font-weight:800; letter-spacing:1px; text-transform:uppercase; color:#2563eb; margin-bottom:4px;">
              Documento Executivo de Comercialização
            </div>
            <h1 style="font-size:22px; font-weight:900; margin:0; text-transform:uppercase; color:#0f172a; line-height:1.2;">
              Plano de Ação Estratégico de Venda
            </h1>
            <div style="font-size:13px; color:#475569; margin-top:4px;">
              Imóvel: <strong>Rua Dr. Gastão Rhodes, 394 – Bairro Santana, Porto Alegre/RS</strong> (CEP 90620-040)
            </div>
          </div>
          <div style="text-align:right; border-left:2px solid #e2e8f0; padding-left:15px;">
            <div style="font-size:11px; text-transform:uppercase; color:#64748b; font-weight:700;">Status do Plano</div>
            <div style="font-size:13px; font-weight:800; color:${aprovado ? '#16a34a' : '#d97706'};">${aprovado ? 'APROVADO PELO PROPRIETÁRIO' : 'RASCUNHO – NÃO APROVADO'}</div>
            <div style="font-size:11px; color:#64748b; margin-top:3px;">Código: <strong>${codigo}</strong></div>
            <div style="font-size:11px; color:#64748b;">${dataDoc}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- SEÇÃO 1: IDENTIFICAÇÃO DO IMÓVEL -->
    <div class="print-doc-section">
      <h2 class="print-sec-title">1. Identificação Técnica, Cadastral e Jurídica do Imóvel</h2>
      <table class="print-table">
        <tbody>
          <tr>
            <td style="width:25%; font-weight:bold; background:#f8fafc;">Endereço</td>
            <td style="width:75%;">Rua Dr. Gastão Rhodes, 394 – Bairro Santana, Porto Alegre/RS, CEP 90620-040</td>
          </tr>
          <tr>
            <td style="font-weight:bold; background:#f8fafc;">Expediente Municipal</td>
            <td><strong>002.208593.00.3</strong> (SMAMUS – Prefeitura de Porto Alegre)</td>
          </tr>
          <tr>
            <td style="font-weight:bold; background:#f8fafc;">Cadastro / Cartório</td>
            <td>CIB: <strong>X6D4EEEY</strong> • Quarteirão Fiscal: <strong>25</strong> • <strong>2º Registro de Imóveis de Porto Alegre</strong></td>
          </tr>
          <tr>
            <td style="font-weight:bold; background:#f8fafc;">Áreas</td>
            <td>Terreno: <strong>199,65 m²</strong> • Área construída: <strong>171,62 m²</strong> (Habite-se / Carta de Habitação emitida)</td>
          </tr>
          <tr>
            <td style="font-weight:bold; background:#f8fafc;">Regime Urbanístico</td>
            <td>Macrozona 1 • Unidade de Estruturação Urbana 74 (UEU 74) • Subunidade 1</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- SEÇÃO 2: PREÇOS E ORÇAMENTO -->
    <div class="print-doc-section">
      <h2 class="print-sec-title">2. Precificação e Orçamento de Preparação</h2>
      <p style="font-size:12px; color:#475569; margin:4px 0 10px 0;">${introPrecos}</p>
      <table class="print-table">
        <thead>
          <tr style="background:#f1f5f9;">
            <th>Parâmetro</th>
            <th>Definido pelo Franco</th>
            <th>Referência da Auditoria</th>
            <th>Observação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Preço de anúncio inicial</strong></td>
            <td><strong style="font-size:14px; color:#0f172a;">${formatCurrency(state.francoPrecoAnuncio)}</strong></td>
            <td>${formatCurrency(AUDITORIA_VALORES.anuncio)}</td>
            <td><strong style="color:${diffColor};">${diffStr}</strong></td>
          </tr>
          <tr>
            <td><strong>Meta de fechamento</strong></td>
            <td><strong>${formatCurrency(state.francoPrecoFechamento)}</strong></td>
            <td>${formatCurrency(AUDITORIA_VALORES.fechamento)}</td>
            <td>Valor-alvo da negociação</td>
          </tr>
          <tr>
            <td><strong>Piso mínimo inegociável</strong></td>
            <td><strong>${formatCurrency(state.francoPrecoPiso)}</strong></td>
            <td>${formatCurrency(AUDITORIA_VALORES.piso)}</td>
            <td>Propostas abaixo deste valor serão recusadas</td>
          </tr>
        </tbody>
      </table>

      <table class="print-table" style="margin-top:-6px;">
        <thead>
          <tr style="background:#fffbeb;">
            <th colspan="2" style="color:#d97706; text-transform:uppercase; font-size:11px;">Orçamento Máximo de Preparação Aprovado</th>
          </tr>
        </thead>
        <tbody>
          ${ORCAMENTO_PREPARACAO.map(o => `
          <tr>
            <td style="width:75%; font-size:11px;">${escapeHTML(o.item)}</td>
            <td style="width:25%; font-size:12px; font-weight:bold; text-align:right;">${escapeHTML(o.valor)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>

    <!-- SEÇÃO 3: RITMO -->
    <div class="print-doc-section">
      <h2 class="print-sec-title">3. Ritmo de Início</h2>
      <div style="background:#f8fafc; border:1px solid #cbd5e1; padding:10px 14px; border-radius:4px; font-size:12px; line-height:1.5;">
        <strong>Modalidade escolhida:</strong> ${escapeHTML(modoLongo)}
      </div>
    </div>

    <!-- SEÇÃO 4: B2B -->
    <div class="print-doc-section" style="page-break-inside: avoid;">
      <h2 class="print-sec-title">4. Fase 1: Incorporadoras e Construtoras (B2B)</h2>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:12px;">
        <div style="border:1px solid #e2e8f0; padding:8px 12px; background:#fff; font-size:11px;">
          <strong>Ação 1 – Prospecção ativa:</strong><br>
          Contato direto com as áreas de Novos Negócios e Captação de Terrenos, apresentação do regime urbanístico (UEU 74), envio do dossiê técnico de precificação e do vídeo com imagens aéreas em 4K.
        </div>
        <div style="border:1px solid #e2e8f0; padding:8px 12px; background:#fff; font-size:11px;">
          <strong>Ação 2 – Vistorias e negociação:</strong><br>
          Recepção de engenheiros e diretores no imóvel para avaliação técnica e condução das propostas de compra ou permuta.
        </div>
      </div>

      <div style="font-size:12px; font-weight:bold; margin-bottom:6px;">
        Construtoras aprovadas pelo Franco para abordagem (${selectedCompanies.length}):
      </div>

      ${selectedCompanies.length === 0 ? `
        <div style="font-size:12px; color:#64748b; font-style:italic; padding:10px; background:#f8fafc; border:1px dashed #cbd5e1;">Nenhuma construtora foi selecionada. A prospecção B2B fica suspensa.</div>
      ` : `
        <table class="print-table" style="font-size:11px;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="width:28%;">Empresa</th>
              <th style="width:25%;">Categoria / Perfil</th>
              <th style="width:47%;">Perfil de Atuação</th>
            </tr>
          </thead>
          <tbody>
            ${selectedCompanies.map(c => `
              <tr>
                <td><strong>${escapeHTML(c.name)}</strong></td>
                <td>${escapeHTML(c.tag)}</td>
                <td>${escapeHTML(c.desc)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    </div>

    <!-- SEÇÃO 5: FSBO -->
    <div class="print-doc-section" style="page-break-inside: avoid; margin-top:15px;">
      <h2 class="print-sec-title">5. Fase 2: Portais e Canais de Venda Direta</h2>

      <div style="display:grid; grid-template-columns: 1fr 1fr; gap:10px; margin-bottom:12px;">
        <div style="border:1px solid #e2e8f0; padding:8px 12px; background:#fff; font-size:11px;">
          <strong>Ação 1 – Atendimento e mídia:</strong><br>
          Envio das fotos e vídeos do imóvel aos interessados, por WhatsApp ou link.
        </div>
        <div style="border:1px solid #e2e8f0; padding:8px 12px; background:#fff; font-size:11px;">
          <strong>Ação 2 – Qualificação e visitas:</strong><br>
          Verificação prévia da capacidade de pagamento e agendamento de visitas nos horários de melhor iluminação.
        </div>
      </div>

      <div style="font-size:12px; font-weight:bold; margin-bottom:6px;">
        Portais e canais aprovados (${selectedPortals.length}):
      </div>

      ${selectedPortals.length === 0 ? `
        <div style="font-size:12px; color:#64748b; font-style:italic; padding:10px; background:#f8fafc; border:1px dashed #cbd5e1;">Nenhum portal foi selecionado. A divulgação direta fica suspensa.</div>
      ` : `
        <table class="print-table" style="font-size:11px;">
          <thead>
            <tr style="background:#f1f5f9;">
              <th style="width:25%;">Canal / Plataforma</th>
              <th style="width:25%;">Modelo de Custo</th>
              <th style="width:50%;">Público-Alvo</th>
            </tr>
          </thead>
          <tbody>
            ${selectedPortals.map(p => `
              <tr>
                <td><strong>${escapeHTML(p.name)}</strong></td>
                <td>${escapeHTML(p.cost)}</td>
                <td>${escapeHTML(p.audience)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `}
    </div>

    <!-- SEÇÃO 6: OBSERVAÇÕES -->
    <div class="print-doc-section" style="page-break-inside: avoid; margin-top:15px;">
      <h2 class="print-sec-title">6. Observações do Franco</h2>
      <div style="border:1px solid #cbd5e1; background:#fcfcfc; padding:12px 16px; border-radius:4px; font-size:12px; line-height:1.6; font-style:italic; white-space:pre-wrap;">${state.francoNotes ? `"${escapeHTML(state.francoNotes)}"` : 'Sem observações adicionais. Seguir o plano conforme aprovado.'}</div>
    </div>

    <!-- SEÇÃO 7: TERMO DE APROVAÇÃO -->
    <div class="print-doc-section" style="page-break-inside: avoid; margin-top:25px;">
      <div style="border: 2px solid #0f172a; padding: 15px; border-radius: 4px; background:#f8fafc;">
        <h3 style="margin:0 0 8px 0; font-size:13px; text-transform:uppercase; color:#0f172a; font-weight:800;">
          Termo de Aprovação e Autorização de Execução
        </h3>
        <p style="font-size:11px; color:#334155; line-height:1.5; margin:0 0 15px 0;">
          Declaro que revisei e aprovei integralmente os preços, o orçamento de preparação, o ritmo de início e a lista de construtoras e portais selecionados neste Plano de Ação para a venda do imóvel situado na Rua Dr. Gastão Rhodes, 394 – Santana, Porto Alegre/RS. Autorizo a execução dos trabalhos e a condução das negociações com base nas definições deste documento.
        </p>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; border-top:1px dashed #94a3b8; padding-top:15px;">
          <div>
            <div style="height:28px;"></div>
            <div style="border-top:1px solid #0f172a; width:220px; padding-top:4px; font-size:12px; font-weight:800; color:#0f172a;">FRANCO (PROPRIETÁRIO)</div>
            <div style="font-size:10px; color:#64748b;">Assinatura</div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:11px; font-weight:800; color:#1e3a8a;">CÓDIGO DA APROVAÇÃO</div>
            <div style="font-family:monospace; font-size:12px; font-weight:700; color:#0f172a;">${codigo}</div>
            <div style="font-size:10px; color:#64748b;">Deve coincidir com o código da mensagem de WhatsApp</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// --- PREVIEW DO PLANO NA TELA ---
function openPlanPreviewModal() {
  renderPrintablePlan();
  let modal = document.getElementById('planPreviewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'planPreviewModal';
    modal.className = 'plan-preview-modal';
    modal.innerHTML = `
      <div class="plan-preview-backdrop" onclick="closePlanPreviewModal()"></div>
      <div class="plan-preview-dialog">
        <div class="plan-preview-header">
          <div>
            <h3 style="margin:0; font-size:1.15rem; font-weight:800;">Visualização do Plano de Ação Completo (PDF)</h3>
            <p style="margin:0; font-size:0.8rem; color:var(--text-muted);">Confira o conteúdo formal gerado no documento oficial</p>
          </div>
          <div style="display:flex; gap:0.5rem;">
            <button class="action-secondary-btn" onclick="window.print()" type="button" style="padding:0.4rem 0.8rem;">
              <span>🖨️ Imprimir / Salvar PDF</span>
            </button>
            <button class="batch-action-btn" onclick="closePlanPreviewModal()" type="button" style="padding:0.4rem 0.8rem;">✕ Fechar</button>
          </div>
        </div>
        <div id="planPreviewContent" class="plan-preview-body"></div>
      </div>
    `;
    document.body.appendChild(modal);
  }
  const content = document.getElementById('planPreviewContent');
  const printDoc = document.getElementById('printableDocumentArea');
  if (content && printDoc) content.innerHTML = printDoc.innerHTML;
  modal.classList.add('open');
}

function closePlanPreviewModal() {
  const modal = document.getElementById('planPreviewModal');
  if (modal) modal.classList.remove('open');
}

// --- EVENT LISTENERS ---
function setupEventListeners() {
  document.querySelectorAll('.wizard-step-tab').forEach((tab, index) => {
    tab.addEventListener('click', () => setStep(index + 1));
  });
  document.getElementById('btnPrevStep')?.addEventListener('click', () => setStep(state.currentStep - 1));
  document.getElementById('btnNextStep')?.addEventListener('click', () => setStep(state.currentStep + 1));
  document.getElementById('btnJumpToApproval')?.addEventListener('click', () => setStep(4));

  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderConstrutorasGrid(chip.dataset.filter);
    });
  });

  document.getElementById('btnSelectAllCompanies')?.addEventListener('click', selectAllCompanies);
  document.getElementById('btnClearAllCompanies')?.addEventListener('click', clearAllCompanies);

  document.getElementById('btnSelectAllPortals')?.addEventListener('click', selectAllPortals);
  document.getElementById('btnClearAllPortals')?.addEventListener('click', clearAllPortals);

  document.querySelectorAll('.mode-option-btn').forEach(btn => {
    btn.addEventListener('click', () => setExecutionMode(btn.dataset.mode));
  });

  document.getElementById('btnApproveMaster')?.addEventListener('click', approveStrategy);
  document.getElementById('btnPrintPlan')?.addEventListener('click', () => {
    renderPrintablePlan();
    window.print();
  });
  document.getElementById('btnPreviewPlanModal')?.addEventListener('click', openPlanPreviewModal);

  // Seletor de Fotos da Propriedade (Galeria Interativa)
  document.querySelectorAll('.photo-switch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.photo-switch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const mainImg = document.getElementById('propertyMainImage');
      if (mainImg && btn.dataset.src) {
        mainImg.style.transition = 'opacity 0.2s ease';
        mainImg.style.opacity = '0.35';
        setTimeout(() => {
          mainImg.src = btn.dataset.src;
          mainImg.alt = btn.dataset.alt || 'Imóvel Gastão Rhodes, 394';
          mainImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

// --- LOCAL STORAGE & PERSISTÊNCIA ---
function saveToStorage() {
  try {
    const payload = {
      currentStep: state.currentStep,
      francoPrecoAnuncio: state.francoPrecoAnuncio,
      francoPrecoFechamento: state.francoPrecoFechamento,
      francoPrecoPiso: state.francoPrecoPiso,
      selectedCompanies: Array.from(state.selectedCompanies),
      selectedPortals: Array.from(state.selectedPortals),
      executionMode: state.executionMode,
      francoNotes: state.francoNotes,
      isApproved: state.isApproved,
      approvedAt: state.approvedAt,
      approvalCode: state.approvalCode
    };
    localStorage.setItem('casa_franco_builder_state_v5', JSON.stringify(payload));
  } catch (e) { console.warn('LocalStorage save failed:', e); }
}

function loadFromStorage() {
  try {
    const saved = localStorage.getItem('casa_franco_builder_state_v5');
    if (!saved) return;
    const parsed = JSON.parse(saved);
    if (parsed.francoPrecoAnuncio) state.francoPrecoAnuncio = parsed.francoPrecoAnuncio;
    if (parsed.francoPrecoFechamento) state.francoPrecoFechamento = parsed.francoPrecoFechamento;
    if (parsed.francoPrecoPiso) state.francoPrecoPiso = parsed.francoPrecoPiso;
    if (parsed.selectedCompanies && Array.isArray(parsed.selectedCompanies)) {
      state.selectedCompanies = new Set(parsed.selectedCompanies);
    }
    if (parsed.selectedPortals && Array.isArray(parsed.selectedPortals)) {
      state.selectedPortals = new Set(parsed.selectedPortals);
    }
    if (parsed.executionMode) {
      state.executionMode = parsed.executionMode;
      document.querySelectorAll('.mode-option-btn').forEach(btn => {
        const isSel = btn.dataset.mode === parsed.executionMode;
        btn.classList.toggle('selected', isSel);
        const span = btn.querySelector('span:last-child');
        if (span) span.textContent = isSel ? '✓' : '○';
      });
    }
    if (parsed.francoNotes) {
      state.francoNotes = parsed.francoNotes;
      const notesEl = document.getElementById('francoNotesInput');
      if (notesEl) notesEl.value = parsed.francoNotes;
    }
    if (parsed.isApproved) {
      state.isApproved = true;
      state.approvedAt = parsed.approvedAt;
      state.approvalCode = parsed.approvalCode;
      const btnApprove = document.getElementById('btnApproveMaster');
      if (btnApprove) {
        btnApprove.className = 'btn-approve-master approved';
        btnApprove.innerHTML = `✓ PLANO APROVADO PELO FRANCO (${state.approvalCode})`;
      }
      const postActions = document.getElementById('postApprovalActions');
      if (postActions) postActions.classList.add('visible');
    }
  } catch (e) { console.warn('LocalStorage load failed:', e); }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message) {
  let toast = document.getElementById('toastNotice');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotice';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span style="font-size:1.4rem;">⚡</span> <div><strong>Sistema de Decisão:</strong><br>${message}</div>`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}
