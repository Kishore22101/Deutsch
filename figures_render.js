// figures_render.js – SVG Matrix Renderer for dMAT Figure Sequences
(function() {
  const POS_MAP = [
    { r: 0, c: 0 }, // 0: top-left
    { r: 0, c: 1 }, // 1: top-center
    { r: 0, c: 2 }, // 2: top-right
    { r: 1, c: 2 }, // 3: mid-right
    { r: 2, c: 2 }, // 4: bottom-right
    { r: 2, c: 1 }, // 5: bottom-center
    { r: 2, c: 0 }, // 6: bottom-left
    { r: 1, c: 0 }, // 7: mid-left
    { r: 1, c: 1 }  // 8: center
  ];

  const COLOR_MAP = {
    yellow: '#fbbf24',
    blue: '#3b82f6',
    green: '#10b981',
    orange: '#f97316',
    pink: '#f472b6',
    black: '#f8fafc',
    white: '#ffffff'
  };

  function renderMatrixSvg(shapes, size) {
    if (!size) size = 90;
    if (!shapes) shapes = [];
    let svg = `<svg viewBox="0 0 90 90" width="${size}" height="${size}" class="matrix-grid-svg" xmlns="http://www.w3.org/2000/svg">`;
    // Outer border & grid lines
    svg += `<rect x="1" y="1" width="88" height="88" rx="4" fill="#0b0f19" stroke="#334155" stroke-width="1.5"/>`;
    svg += `<line x1="30" y1="1" x2="30" y2="89" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="60" y1="1" x2="60" y2="89" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="1" y1="30" x2="89" y2="30" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="1" y1="60" x2="89" y2="60" stroke="#1e293b" stroke-width="1"/>`;

    for (const s of shapes) {
      const p = POS_MAP[s.pos];
      if (!p) continue;
      const cx = p.c * 30 + 15;
      const cy = p.r * 30 + 15;
      const fill = COLOR_MAP[s.color] || s.color || '#fff';

      if (s.shape === 'circle') {
        svg += `<circle cx="${cx}" cy="${cy}" r="8" fill="${fill}" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>`;
      } else if (s.shape === 'square') {
        svg += `<rect x="${cx - 7}" y="${cy - 7}" width="14" height="14" rx="2" fill="${fill}" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>`;
      } else if (s.shape === 'diamond') {
        svg += `<polygon points="${cx},${cy - 9} ${cx + 9},${cy} ${cx},${cy + 9} ${cx - 9},${cy}" fill="${fill}" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>`;
      } else if (s.shape === 'hexagon') {
        svg += `<polygon points="${cx},${cy - 9} ${cx + 8},${cy - 4} ${cx + 8},${cy + 4} ${cx},${cy + 9} ${cx - 8},${cy + 4} ${cx - 8},${cy - 4}" fill="${fill}" stroke="rgba(0,0,0,0.5)" stroke-width="1"/>`;
      } else if (s.shape === 'arrow') {
        let angle = 0;
        if (s.dir === 'up') angle = -90;
        else if (s.dir === 'right') angle = 0;
        else if (s.dir === 'down') angle = 90;
        else if (s.dir === 'left') angle = 180;
        svg += `<g transform="rotate(${angle} ${cx} ${cy})">`;
        svg += `<polygon points="${cx + 8},${cy} ${cx - 6},${cy - 7} ${cx - 6},${cy + 7}" fill="${fill}" stroke="rgba(0,0,0,0.5)" stroke-width="0.8"/>`;
        svg += `</g>`;
      } else if (s.shape === 'bracket') {
        let angle = 0;
        if (s.bracketRot === 'bl') angle = 0;
        else if (s.bracketRot === 'tl') angle = 90;
        else if (s.bracketRot === 'tr') angle = 180;
        else if (s.bracketRot === 'br') angle = 270;
        svg += `<g transform="rotate(${angle} ${cx} ${cy})">`;
        svg += `<path d="M${cx - 6},${cy - 6} L${cx - 6},${cy + 6} L${cx + 6},${cy + 6}" fill="none" stroke="${fill}" stroke-width="4.5" stroke-linecap="square"/>`;
        svg += `</g>`;
      }
    }

    svg += `</svg>`;
    return svg;
  }

  function renderFigureSequenceStrip(q, userAns, size) {
    if (!size) size = 88;
    if (!q) return '';
    const seq = q.matrices || q.sequence;
    if (!Array.isArray(seq)) return '';
    const ans = userAns || {};

    let html = '';
    // Matrices 1 to 4
    for (let i = 0; i < 4; i++) {
      html += `
        <div class="matrix-seq-item">
          <span class="matrix-seq-title">Matrix ${i + 1}</span>
          <div class="matrix-svg-wrap">
            ${renderMatrixSvg(seq[i], size)}
          </div>
        </div>
        <div class="seq-arrow-divider">➔</div>
      `;
    }

    // Matrix 5 (User selected or placeholder ?)
    const selM5 = ans.m5 ? parseInt(ans.m5, 10) : null;
    html += `
      <div class="matrix-seq-item highlight-unknown" id="seq-item-m5">
        <span class="matrix-seq-title">Matrix 5 (?)</span>
        <div class="matrix-svg-wrap">
          ${selM5 && q.optionsM5 && q.optionsM5[selM5 - 1]
            ? renderMatrixSvg(q.optionsM5[selM5 - 1], size)
            : `<div class="matrix-seq-unknown-box" style="width:${size}px; height:${size}px;">
                 <span class="unknown-qmark">?</span>
                 <span class="unknown-sub">Select Below</span>
               </div>`
          }
        </div>
      </div>
      <div class="seq-arrow-divider">➔</div>
    `;

    // Matrix 6 (User selected or placeholder ?)
    const selM6 = ans.m6 ? parseInt(ans.m6, 10) : null;
    html += `
      <div class="matrix-seq-item highlight-unknown" id="seq-item-m6">
        <span class="matrix-seq-title">Matrix 6 (?)</span>
        <div class="matrix-svg-wrap">
          ${selM6 && q.optionsM6 && q.optionsM6[selM6 - 1]
            ? renderMatrixSvg(q.optionsM6[selM6 - 1], size)
            : `<div class="matrix-seq-unknown-box" style="width:${size}px; height:${size}px;">
                 <span class="unknown-qmark">?</span>
                 <span class="unknown-sub">Select Below</span>
               </div>`
          }
        </div>
      </div>
    `;

    return html;
  }

  function renderOptionCard(opt, optNum, isSelected, size) {
    if (!size) size = 76;
    return `
      <div class="figure-opt-card ${isSelected ? 'selected' : ''}" data-opt="${optNum}">
        <span class="opt-badge">${optNum}</span>
        <div class="opt-svg-box">
          ${renderMatrixSvg(opt, size)}
        </div>
        <span class="opt-status">${isSelected ? 'Selected ✓' : 'Option ' + optNum}</span>
      </div>
    `;
  }

  const exportObj = {
    renderMatrixSvg,
    renderFigureSequenceStrip,
    renderOptionCard
  };

  if (typeof window !== 'undefined') {
    window.FiguresRender = exportObj;
    window.renderMatrixSvg = renderMatrixSvg;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportObj;
  }
})();
