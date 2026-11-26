// figures_render.js – SVG Matrix Renderer for dMAT Figure Sequences (4x4 Grid Standard)
(function() {
  const COLOR_MAP = {
    red: '#ef4444',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#eab308',
    orange: '#f97316',
    pink: '#ec4899',
    purple: '#a855f7',
    white: '#f8fafc',
    black: '#1e293b',
    dark: '#0f172a'
  };

  function getShapeCenter(s) {
    let r = 0;
    let c = 0;
    if (typeof s.r === 'number' && typeof s.c === 'number') {
      r = s.r;
      c = s.c;
    } else if (typeof s.pos === 'number') {
      r = Math.floor(s.pos / 4);
      c = s.pos % 4;
    } else if (s.pos && typeof s.pos.r === 'number' && typeof s.pos.c === 'number') {
      r = s.pos.r;
      c = s.pos.c;
    }
    // Clamp to 0..3
    r = Math.max(0, Math.min(3, r));
    c = Math.max(0, Math.min(3, c));
    return {
      r,
      c,
      cx: c * 25 + 12.5,
      cy: r * 25 + 12.5
    };
  }

  function getRotationAngle(s) {
    if (typeof s.rot === 'number') return s.rot;
    if (typeof s.angle === 'number') return s.angle;
    if (s.dir === 'up') return 0;
    if (s.dir === 'right') return 90;
    if (s.dir === 'down') return 180;
    if (s.dir === 'left') return 270;
    if (s.bracketRot === 'bl') return 0;
    if (s.bracketRot === 'tl') return 90;
    if (s.bracketRot === 'tr') return 180;
    if (s.bracketRot === 'br') return 270;
    return 0;
  }

  function renderMatrixSvg(shapes, size) {
    if (!size) size = 96;
    if (!Array.isArray(shapes)) shapes = [];

    let svg = `<svg viewBox="0 0 100 100" width="${size}" height="${size}" class="matrix-grid-svg" xmlns="http://www.w3.org/2000/svg">`;
    // Outer border & 4x4 grid cells
    svg += `<rect x="1" y="1" width="98" height="98" rx="4" fill="#0b0f19" stroke="#334155" stroke-width="1.5"/>`;
    // Vertical grid lines (4 columns -> lines at 25, 50, 75)
    svg += `<line x1="25" y1="1" x2="25" y2="99" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="50" y1="1" x2="50" y2="99" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="75" y1="1" x2="75" y2="99" stroke="#1e293b" stroke-width="1"/>`;
    // Horizontal grid lines (4 rows -> lines at 25, 50, 75)
    svg += `<line x1="1" y1="25" x2="99" y2="25" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="1" y1="50" x2="99" y2="50" stroke="#1e293b" stroke-width="1"/>`;
    svg += `<line x1="1" y1="75" x2="99" y2="75" stroke="#1e293b" stroke-width="1"/>`;

    for (const s of shapes) {
      if (!s) continue;
      const { cx, cy } = getShapeCenter(s);
      const rawColor = s.color || 'white';
      const fill = COLOR_MAP[rawColor] || rawColor;
      const isBlack = (rawColor === 'black' || fill === '#1e293b' || fill === '#0f172a');
      const stroke = isBlack ? '#94a3b8' : 'rgba(0,0,0,0.7)';
      const strokeWidth = isBlack ? '1.2' : '0.8';
      const rot = getRotationAngle(s);

      const shapeType = (s.shape || 'circle').toLowerCase();

      if (shapeType === 'circle') {
        svg += `<circle cx="${cx}" cy="${cy}" r="7" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
      } else if (shapeType === 'semicircle' || shapeType === 'semi-circle') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<path d="M${cx - 7},${cy + 3} A7,7 0 0,1 ${cx + 7},${cy + 3} Z" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'quartercircle' || shapeType === 'quarter-circle' || shapeType === 'quadrant') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<path d="M${cx - 6},${cy + 6} L${cx - 6},${cy - 6} A12,12 0 0,1 ${cx + 6},${cy + 6} Z" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'square') {
        svg += `<rect x="${cx - 6.5}" y="${cy - 6.5}" width="13" height="13" rx="1.5" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
      } else if (shapeType === 'diamond') {
        svg += `<polygon points="${cx},${cy - 8.5} ${cx + 8.5},${cy} ${cx},${cy + 8.5} ${cx - 8.5},${cy}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
      } else if (shapeType === 'pentagon') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<polygon points="${cx},${cy - 7.5} ${cx + 7.1},${cy - 2.3} ${cx + 4.4},${cy + 6.1} ${cx - 4.4},${cy + 6.1} ${cx - 7.1},${cy - 2.3}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'hexagon') {
        svg += `<polygon points="${cx},${cy - 8} ${cx + 7},${cy - 4} ${cx + 7},${cy + 4} ${cx},${cy + 8} ${cx - 7},${cy + 4} ${cx - 7},${cy - 4}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
      } else if (shapeType === 'triangle') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<polygon points="${cx},${cy - 8} ${cx + 7.5},${cy + 6.5} ${cx - 7.5},${cy + 6.5}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'right-triangle' || shapeType === 'right_triangle') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<polygon points="${cx - 6.5},${cy + 6.5} ${cx + 6.5},${cy + 6.5} ${cx - 6.5},${cy - 6.5}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'arrow') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<polygon points="${cx},${cy - 8} ${cx + 6.5},${cy + 1} ${cx + 2.5},${cy + 1} ${cx + 2.5},${cy + 8} ${cx - 2.5},${cy + 8} ${cx - 2.5},${cy + 1} ${cx - 6.5},${cy + 1}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      } else if (shapeType === 'l' || shapeType === 'bracket' || shapeType === 'l-shape' || shapeType === 'l_shape') {
        svg += `<g transform="rotate(${rot} ${cx} ${cy})">`;
        svg += `<path d="M${cx - 6},${cy - 6} L${cx - 1},${cy - 6} L${cx - 1},${cy + 1} L${cx + 6},${cy + 1} L${cx + 6},${cy + 6} L${cx - 6},${cy + 6} Z" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}"/>`;
        svg += `</g>`;
      }
    }

    svg += `</svg>`;
    return svg;
  }

  function renderFigureSequenceStrip(q, userAns, size) {
    if (!size) size = 92;
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
    if (!size) size = 80;
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

  function renderAnswerCompareSvg(label, userOptNum, solOptNum, optionsArr, isCorrect) {
    const uIdx = parseInt(userOptNum, 10) - 1;
    const sIdx = parseInt(solOptNum, 10) - 1;
    const userShapes = Array.isArray(optionsArr) && uIdx >= 0 ? optionsArr[uIdx] : null;
    const solShapes  = Array.isArray(optionsArr) && sIdx >= 0 ? optionsArr[sIdx]  : null;
    const userSvg = userShapes ? renderMatrixSvg(userShapes, 64) : '<span class="bd-no-fig">—</span>';
    const solSvg  = solShapes  ? renderMatrixSvg(solShapes, 64)  : '<span class="bd-no-fig">—</span>';
    const sameOpt = parseInt(userOptNum, 10) === parseInt(solOptNum, 10);
    return `
      <div class="bd-compare-block ${isCorrect ? 'ans-pass' : 'ans-fail'}">
        <div class="bd-compare-row bd-candidate-row">
          <span class="bd-compare-label">Candidate Choice:</span>
          <span class="bd-compare-matrix">${label} = Option ${userOptNum || '—'}</span>
          <div class="bd-fig-box">${userSvg}</div>
          <span class="bd-verdict ${isCorrect ? 'verdict-pass' : 'verdict-fail'}">${isCorrect ? '✓' : '✕'}</span>
        </div>
        <div class="bd-compare-row bd-solution-row${sameOpt ? ' bd-same-opt' : ''}">
          <span class="bd-compare-label">Official Solution:</span>
          <span class="bd-compare-matrix">${label} = Option ${solOptNum || '—'}</span>
          <div class="bd-fig-box bd-sol-fig-box">${solSvg}</div>
        </div>
      </div>
    `;
  }

  function renderBreakdownItem(item, idx) {
    const qNum = idx + 1;
    const isCorrect = !!item.isCorrect;
    const user = item.userAnswer || {};
    const sol = item.solution || {};
    const m5Correct = (item.fieldCorrectness && typeof item.fieldCorrectness.m5 === 'boolean')
      ? item.fieldCorrectness.m5
      : (parseInt(user.m5, 10) === parseInt(sol.m5, 10));
    const m6Correct = (item.fieldCorrectness && typeof item.fieldCorrectness.m6 === 'boolean')
      ? item.fieldCorrectness.m6
      : (parseInt(user.m6, 10) === parseInt(sol.m6, 10));

    const seq = item.sequence || item.matrices || [];
    let seqStripHtml = '';
    for (let i = 0; i < Math.min(4, seq.length); i++) {
      seqStripHtml += `
        <div class="bd-matrix-item">
          <span class="bd-matrix-lbl">M${i + 1}</span>
          ${renderMatrixSvg(seq[i], 60)}
        </div>
      `;
    }

    return `
      <div class="breakdown-card-head">
        <div class="bd-title-wrap">
          <span class="bd-qnum">Question ${qNum}</span>
          <span class="bd-badge ${isCorrect ? 'bd-correct' : 'bd-incorrect'}">
            ${isCorrect ? '✓ Correct (+1 pt)' : '✕ Incorrect (0 pt)'}
          </span>
        </div>
      </div>

      <div class="bd-seq-strip">
        ${seqStripHtml}
      </div>

      <div class="bd-answers-grid">
        ${renderAnswerCompareSvg('M5', user.m5, sol.m5, item.optionsM5, m5Correct)}
        ${renderAnswerCompareSvg('M6', user.m6, sol.m6, item.optionsM6, m6Correct)}
      </div>

      ${item.explanation ? `
        <div class="bd-explanation-box">
          <strong>Rule Explanation:</strong>
          <p>${item.explanation}</p>
        </div>
      ` : ''}
    `;
  }

  const exportObj = {
    renderMatrixSvg,
    renderMatrixSVG: renderMatrixSvg,
    renderFigureSequenceStrip,
    renderOptionCard,
    renderBreakdownItem,
    renderAnswerCompareSvg
  };

  if (typeof window !== 'undefined') {
    window.FiguresRender = exportObj;
    window.renderMatrixSvg = renderMatrixSvg;
    window.renderMatrixSVG = renderMatrixSvg;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exportObj;
  }
})();
