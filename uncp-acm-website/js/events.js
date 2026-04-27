/* =============================================
   UNCP ACM — EVENTS PAGE JAVASCRIPT
   ============================================= */

// ---- Mini Calendar Widget ----
(function () {
  const eventDays = {
    '2025-5': [8, 15, 22],
    '2025-6': [7, 20],
    '2025-8': [28]
  };

  let current = new Date(2025, 4, 1); // May 2025

  function render() {
    const year = current.getFullYear();
    const month = current.getMonth();
    const key = `${year}-${month + 1}`;
    const marked = eventDays[key] || [];
    const today = new Date();
    const isCurrentMonth = today.getFullYear() === year && today.getMonth() === month;

    const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    document.getElementById('calMonthYear').textContent = `${monthNames[month]} ${year}`;

    const grid = document.getElementById('calGrid');
    grid.innerHTML = '';

    const dayNames = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    dayNames.forEach(d => {
      const el = document.createElement('div');
      el.className = 'cal-day-name';
      el.textContent = d;
      grid.appendChild(el);
    });

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      const el = document.createElement('div');
      el.className = 'cal-day empty';
      grid.appendChild(el);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const el = document.createElement('div');
      let cls = 'cal-day';
      if (isCurrentMonth && d === today.getDate()) cls += ' today';
      else if (marked.includes(d)) cls += ' event';
      el.className = cls;
      el.textContent = d;
      grid.appendChild(el);
    }
  }

  document.getElementById('calPrev').addEventListener('click', () => {
    current.setMonth(current.getMonth() - 1);
    render();
  });

  document.getElementById('calNext').addEventListener('click', () => {
    current.setMonth(current.getMonth() + 1);
    render();
  });

  render();
})();

// ---- Event Filter Tabs ----
(function () {
  const tabs = document.querySelectorAll('#filterTabs .tab-btn');
  const items = document.querySelectorAll('#eventsList .event-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.dataset.filter;
      items.forEach(item => {
        const cat = item.dataset.category;
        const show = filter === 'all' || cat === filter;
        item.style.display = show ? '' : 'none';
      });
    });
  });
})();
