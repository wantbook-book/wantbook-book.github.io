(() => {
  'use strict';
  const root = document.documentElement;
  const languageButtons = [...document.querySelectorAll('[data-set-language]')];
  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  const groups = [...document.querySelectorAll('.publication-group')];
  const count = document.querySelector('.publication-count');
  let language = 'en';

  function updateCount() {
    const visible = publications.filter(paper => !paper.hidden).length;
    if (count) count.textContent = language === 'zh' ? `${visible} 篇论文` : `${visible} ${visible === 1 ? 'paper' : 'papers'}`;
  }

  function setLanguage(nextLanguage, remember = false) {
    language = nextLanguage === 'zh' ? 'zh' : 'en';
    root.lang = language === 'zh' ? 'zh-CN' : 'en';
    document.title = language === 'zh' ? '方文凯 · 浙江大学' : 'Wenkai Fang · Zhejiang University';
    document.querySelector('meta[name="description"]').content = language === 'zh'
      ? '方文凯，浙江大学计算机科学与技术学院博士研究生。研究方向：强化学习、大语言模型推理与通用智能体。'
      : 'Wenkai Fang, Ph.D. candidate at Zhejiang University. Research in reinforcement learning, language model reasoning, and intelligent agents.';
    languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.setLanguage === language)));
    document.querySelectorAll('[data-label-en]').forEach(element => {
      element.setAttribute('aria-label', language === 'zh' ? element.dataset.labelZh : element.dataset.labelEn);
    });
    document.querySelectorAll('[data-alt-en]').forEach(element => {
      element.alt = language === 'zh' ? element.dataset.altZh : element.dataset.altEn;
    });
    if (remember) {
      try { localStorage.setItem('wenkai-language', language); } catch { /* Switching works even when storage is disabled. */ }
      try {
        const url = new URL(location.href);
        url.searchParams.set('lang', language);
        history.replaceState(null, '', url);
      } catch { /* The same page also works when opened as a local file. */ }
    }
    updateCount();
  }

  languageButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.setLanguage, true)));
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    publications.forEach(paper => { paper.hidden = filter !== 'all' && paper.dataset.status !== filter; });
    groups.forEach(group => { group.hidden = ![...group.querySelectorAll('.publication')].some(paper => !paper.hidden); });
    updateCount();
  }));

  let savedLanguage;
  try { savedLanguage = localStorage.getItem('wenkai-language'); } catch { /* The first visit defaults to English. */ }
  const requestedLanguage = new URLSearchParams(location.search).get('lang');
  setLanguage(['en', 'zh'].includes(requestedLanguage) ? requestedLanguage : savedLanguage);
  root.classList.add('js');

  const dialog = document.querySelector('#figure-dialog');
  if (dialog && typeof dialog.showModal === 'function') {
    const dialogImage = document.querySelector('#figure-dialog-image');
    const dialogTitle = document.querySelector('#figure-dialog-title');
    const dialogCaption = document.querySelector('#figure-dialog-caption');
    const dialogSource = document.querySelector('#figure-dialog-source');
    document.querySelectorAll('[data-figure]').forEach(link => link.addEventListener('click', event => {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      dialogTitle.textContent = link.closest('.publication').querySelector('h4').textContent;
      dialogTitle.lang = 'en';
      dialogImage.src = link.href;
      dialogImage.alt = link.querySelector('img').alt;
      dialogCaption.textContent = language === 'zh' ? link.dataset.captionZh : link.dataset.captionEn;
      dialogSource.href = link.dataset.figureSource;
      dialog.showModal();
      document.body.classList.add('dialog-open');
    }));
    dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      const rect = dialog.getBoundingClientRect();
      if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
    });
    dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
  }
})();
