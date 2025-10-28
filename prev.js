document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('brain-popup');
    const popupTitle = popup.querySelector('.title');
    const popupSubtitle = popup.querySelector('.subtitle');

    function updatePopup(event, region) {
        const info = REGION_INFO[region];
        if (!info) return;

        const svgRect = document.getElementById('brain-svg').getBoundingClientRect();
        const x = event.clientX - svgRect.left;
        const y = event.clientY - svgRect.top;

        popupTitle.textContent = info.name;
        popupSubtitle.textContent = info.shortDesc || "Click to learn more";

        popup.style.left = `${x + 20}px`;
        popup.style.top = `${y - 20}px`;
        popup.classList.add('show');
    }

    function hidePopup() {
        popup.classList.remove('show');
    }

    // Brain region connections map
    const REGION_CONNECTIONS = {
        "working": ["frontal", "parietal"],
        "shortterm": ["frontal", "parietal"],
        "longterm": ["temporal", "frontal"],
        "sensory": ["parietal", "occipital", "temporal"],
        "motor": ["frontal", "cerebellum"],
        "cognitive": ["frontal"],
        "attention": ["frontal", "parietal"],
        "perceptual": ["occipital", "parietal", "temporal"]
    };


    const REGION_INFO = {
        frontal: {
            name: "Frontal Lobe",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>frontal lobe</b> is the command center of human cognition — responsible for reasoning, decision-making, working memory, and emotional regulation.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Prefrontal Cortex:</b> Controls executive functions such as planning, impulse control, and abstract thought.</li>
    <li><b>Motor Cortex:</b> Initiates and coordinates voluntary movement.</li>
    <li><b>Broca’s Area:</b> Governs speech production and articulation.</li>
  </ul>
  <p>Acts as the <b>central processor</b> of the human cognitive system — integrating memory, perception, and motor plans into coherent action.</p>
</div>
        `,
            mapping: "Working Memory, Cognitive Control, Executive System, Decision-Making, Planning, Human Cognitive System, Emotion Regulation"
        },

        parietal: {
            name: "Parietal Lobe",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>parietal lobe</b> integrates information from multiple senses to form body awareness and spatial understanding.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Somatosensory Cortex:</b> Processes touch, pressure, pain, and temperature.</li>
    <li><b>Spatial Mapping:</b> Maintains a body map for movement and spatial awareness.</li>
    <li><b>Perceptual Integration:</b> Combines visual, tactile, and proprioceptive data.</li>
  </ul>
  <p>Crucial for <b>sensory memory</b> and attention allocation — translating raw input into meaningful perception.</p>
</div>
        `,
            mapping: "Perception & Sensory Integration, Spatial Processing, Sensory Memory, Human Perceptual System"
        },

        temporal: {
            name: "Temporal Lobe",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>temporal lobe</b> manages auditory processing, language comprehension, and long-term memory storage.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Hippocampus:</b> Encodes and retrieves long-term memories.</li>
    <li><b>Wernicke’s Area:</b> Handles understanding of spoken language.</li>
    <li><b>Amygdala:</b> Links emotions to memory and sensory experience.</li>
  </ul>
  <p>Transforms perception into knowledge, supporting <b>semantic processing</b> and emotional memory.</p>
</div>
        `,
            mapping: "Long-Term Memory (LTM), Auditory Processing, Emotional Memory, Language Comprehension, Semantic Processing"
        },

        occipital: {
            name: "Occipital Lobe",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>occipital lobe</b> handles all aspects of visual processing and interpretation.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Primary Visual Cortex (V1):</b> Decodes shape, color, and motion.</li>
    <li><b>Visual Association Areas:</b> Recognize objects, faces, and spatial layout.</li>
    <li><b>Visual Attention:</b> Directs focus toward important visual stimuli.</li>
  </ul>
  <p>It acts as the <b>visual input layer</b> of the human perceptual system, converting light into structured perception.</p>
</div>
        `,
            mapping: "Visual Perception System, Visual Cortex, Sensory Input Processing, Visual Attention"
        },

        cerebellum: {
            name: "Cerebellum",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>cerebellum</b> fine-tunes motion, timing, and balance for smooth, coordinated behavior.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Motor Coordination:</b> Adjusts muscle control for precise execution.</li>
    <li><b>Procedural Memory:</b> Stores learned skills and repetitive actions.</li>
    <li><b>Predictive Control:</b> Anticipates motion outcomes for efficient action.</li>
  </ul>
  <p>Functions as the <b>motor refinement system</b> of the human processor — optimizing performance and learning through repetition.</p>
</div>
        `,
            mapping: "Motor System / Coordination, Procedural Memory, Human Motor System, Movement Optimization"
        },
        // === New functional systems, styled like the first six ===
        working: {
            name: "Working Memory",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Active short-term storage used for reasoning, decision-making, and problem-solving.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Frontal Lobe:</b> Maintains and manipulates information for cognitive tasks.</li>
    <li><b>Parietal Lobe:</b> Supports spatial and sensory working memory.</li>
  </ul>
</div>
        `,
            mapping: "Frontal Lobe, Parietal Lobe"
        },

        shortterm: {
            name: "Short-term Memory",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Temporary holding of information for immediate use and cognitive processing.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Frontal Lobe:</b> Maintains information temporarily during reasoning.</li>
    <li><b>Parietal Lobe:</b> Integrates sensory input for short-term retention.</li>
  </ul>
</div>
        `,
            mapping: "Frontal Lobe, Parietal Lobe"
        },

        longterm: {
            name: "Long-term Memory",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Durable storage of facts, experiences, and skills.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Temporal Lobe:</b> Encodes and retrieves long-term memories.</li>
    <li><b>Frontal Lobe:</b> Supports strategic recall and organization of memories.</li>
  </ul>
</div>
        `,
            mapping: "Temporal Lobe, Frontal Lobe"
        },

        motor: {
            name: "Motor System",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Coordinates movement and motor output.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Frontal Lobe:</b> Initiates voluntary movement.</li>
    <li><b>Cerebellum:</b> Refines and smooths motor execution.</li>
  </ul>
</div>
        `,
            mapping: "Frontal Lobe, Cerebellum"
        },

        cognitive: {
            name: "Cognitive System",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Higher-level processes for attention, reasoning, and executive control.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Frontal Lobe:</b> Central hub for executive function and cognitive control.</li>
  </ul>
</div>
        `,
            mapping: "Frontal Lobe"
        },

        perceptual: {
            name: "Perceptual System",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> The <b>perceptual system</b> integrates sensory input from multiple modalities for coherent perception and awareness.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Occipital Lobe:</b> Processes visual information.</li>
    <li><b>Parietal Lobe:</b> Processes tactile, spatial, and proprioceptive input.</li>
    <li><b>Temporal Lobe:</b> Processes auditory input and links sensory information to memory.</li>
    <li><b>Brainstem:</b> Modulates arousal, attention, and reflexive sensory gating.</li>
  </ul>
  <p>Serves as the <b>sensory integration layer</b> of the human cognitive system — filtering, combining, and routing sensory data for higher processing.</p>
</div>
    `,
            mapping: "Occipital Lobe, Parietal Lobe, Temporal Lobe, Brainstem, Human Perceptual System, Sensory Integration"
        },

        sensory: {
            name: "Sensory Memory",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Very short-term retention of sensory impressions before conscious processing.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Parietal Lobe:</b> Processes tactile and spatial input.</li>
    <li><b>Occipital Lobe:</b> Processes visual input.</li>
    <li><b>Temporal Lobe:</b> Processes auditory input.</li>
  </ul>
  <p>Captures immediate sensory information for rapid perception and attention allocation.</p>
</div>
    `,
            mapping: "Parietal Lobe, Occipital Lobe, Temporal Lobe, Human Perceptual System, Sensory Memory"
        },

        attention: {
            name: "Attention",
            desc: `
<div style="font-size:1rem; line-height:1.6; color:#e8e8e8;">
  <p><b style="color:#ffd54f;">Primary Role:</b> Selective processing of sensory information and allocation of cognitive resources.</p>
  <ul style="margin-left:1em; list-style:disc; color:#cfd8dc;">
    <li><b>Frontal Lobe:</b> Executive control, focus, and top-down attention.</li>
    <li><b>Parietal Lobe:</b> Spatial attention and integration of sensory inputs.</li>
    <li><b>Brainstem:</b> Modulates arousal and alertness for attention readiness.</li>
  </ul>
  <p>Acts as the <b>cognitive spotlight</b>, directing processing resources to relevant sensory or internal information.</p>
</div>
    `,
            mapping: "Frontal Lobe, Parietal Lobe, Brainstem, Human Cognitive System, Attention Regulation"
        }

    };




    const parts = Array.from(document.querySelectorAll('#brain-svg [data-region]'));

    const infoTitle = document.getElementById('infotitle');
    const infoDesc = document.getElementById('infodesc');
    const infoKey = document.getElementById('infokey');
    const infoPanel = document.getElementById('info-panel');

    let _typingToken = 0;
    function typeText(el, fullText, opts = {}) {
        const speed = typeof opts.speed === 'number' ? opts.speed : 24;
        const finalHtml = opts.finalHtml || null;

        const token = _typingToken;

        // Prepare element
        if (!el) return;
        el.classList.add('typing');
        // Use textContent while typing to avoid injecting partial HTML
        el.textContent = '';

        let i = 0;
        function step() {
            // If a new typing session started, abort this one
            if (token !== _typingToken) {
                el.classList.remove('typing');
                return;
            }
            i += 1;
            el.textContent = fullText.slice(0, i);
            if (i < fullText.length) {
                setTimeout(step, speed);
            } else {
                // Completed typing. If finalHtml is provided, swap in the rich content
                if (finalHtml) {
                    // Small timeout to keep caret visible briefly
                    setTimeout(() => {
                        if (token !== _typingToken) return;
                        el.innerHTML = finalHtml;
                        el.classList.remove('typing');
                    }, 80);
                } else {
                    // remove caret class
                    setTimeout(() => el.classList.remove('typing'), 80);
                }
            }
        }
        step();
    }

    function clearSelection() {
        parts.forEach(p => p.classList.remove('highlight'));
        parts.forEach(p => p.classList.remove('dim'));
        // Cancel any active typing and reset display
        _typingToken++;
        if (infoTitle) infoTitle.textContent = 'Click any brain region';
        if (infoDesc) infoDesc.textContent = 'Human information processor mapping — click a part to see name & function.';
        if (infoKey) infoKey.textContent = '';
        hidePopup();
    }

    function selectRegion(region) {
        if (!region) return clearSelection();

        // Get connected regions if this is a system/concept region
        const connectedRegions = REGION_CONNECTIONS[region] || [];

        parts.forEach(p => {
            const dr = (p.getAttribute('data-region') || '').trim();
            const keys = dr ? dr.split(/\s+/) : [];

            // Highlight if it matches the selected region OR is a connected region
            if (keys.includes(region) || connectedRegions.some(r => keys.includes(r))) {
                p.classList.add('highlight');
                p.classList.remove('dim');
            } else {
                p.classList.remove('highlight');
                p.classList.add('dim');
            }
        });

        const info = REGION_INFO[region];
        if (info) {
            // Immediately set the info panel content (no typing effect)
            if (infoTitle) infoTitle.textContent = info.name || '';
            if (infoDesc) infoDesc.innerHTML = info.desc || '';
            if (infoKey) {
                const connections = REGION_CONNECTIONS[region];
                const mappingText = info.mapping + (connections ?
                    `\nInvolves: ${connections.map(r => REGION_INFO[r].name).join(', ')}` : '');
                infoKey.textContent = 'Cognitive mapping: ' + mappingText;
            }
        } else {
            if (infoTitle) infoTitle.textContent = 'Unknown region';
            if (infoDesc) infoDesc.textContent = '';
            if (infoKey) infoKey.textContent = '';
        }

        // Add a small pulse animation when a region is selected for better feedback
        parts.forEach(p => {
            const dr = (p.getAttribute('data-region') || '').trim();
            const keys = dr ? dr.split(/\s+/) : [];
            if (keys.includes(region)) {
    p.classList.add('pulse');
    setTimeout(() => p.classList.remove('pulse'), 600);
    if (window.gsap) {
        try {
            window.gsap.fromTo(p, 
                { scale: 1 }, 
                { scale: 1.06, transformOrigin: '50% 50%', duration: 0.18, yoyo: true, repeat: 1 }
            );
        } catch (e) {}
    }
}
        });
    }

    // Attach events
    parts.forEach(p => {
        // enable pointer events on shapes
        p.style.pointerEvents = 'all';
        // make focusable
        try { p.setAttribute('tabindex', '0'); } catch (e) { }

        p.addEventListener('mousemove', (e) => {
            const region = p.getAttribute('data-region');
            updatePopup(e, region);
        });

        p.addEventListener('mouseleave', hidePopup);

        p.addEventListener('click', (e) => {
            e.stopPropagation();
            const region = p.getAttribute('data-region');
            selectRegion(region, e);
        });

        p.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const region = p.getAttribute('data-region');
                selectRegion(region);
            }
        });
    });

    // Wire up HTML label buttons (two places in page) so they trigger the same selection logic
    const labelBtns = Array.from(document.querySelectorAll('.label-btn'));
    labelBtns.forEach(b => {
        b.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = b.getAttribute('data-region');
            selectRegion(key);
        });
    });

    // Background clears selection
    const bg = document.getElementById('bg-clearpad');
    if (bg) bg.addEventListener('click', clearSelection);

    // Clicks inside info panel shouldn't collapse selection (stop propagation)
    if (infoPanel) infoPanel.addEventListener('click', e => e.stopPropagation());

    // Init
    clearSelection();

    // Typing effect for the main title (small, non-blocking)
    const titleEl = document.querySelector('.page-title h1');
    if (titleEl) {
        const fullTitle = titleEl.textContent.trim();
        titleEl.textContent = '';
        let idx = 0;
        const typer = setInterval(() => {
            titleEl.textContent += fullTitle.charAt(idx);
            idx += 1;
            if (idx >= fullTitle.length) clearInterval(typer);
        }, 45);
    }

    // Entrance animations (use GSAP if present, otherwise rely on CSS/AOS)
    if (window.gsap) {
        try {
            window.gsap.from('.svg-wrap', {
                autoAlpha: 0,
                y: 18,
                scale: 0.95,
                duration: 0.8,
                ease: 'elastic.out(1, 0.5)'
            });
            window.gsap.from('.label-btn', { autoAlpha: 0, y: 8, stagger: 0.06, duration: 0.45, ease: 'power2.out' });
            window.gsap.from('#info-panel', { autoAlpha: 0, y: 8, duration: 0.6, delay: 0.06 });

            // Add hover animation for brain parts
            document.querySelectorAll('.brain-part').forEach(part => {
                part.addEventListener('mouseenter', () => {
                    gsap.to(part, {
                        scale: 1.02,
                        duration: 0.3,
                        ease: "power2.out"
                    });
                });
                part.addEventListener('mouseleave', () => {
                    gsap.to(part, {
                        scale: 1,
                        duration: 0.2,
                        ease: "power2.inOut"
                    });
                });
            });

            // Make SVG slightly smaller
            gsap.set('#brain-svg', {
                scale: 0.9,
                transformOrigin: 'center center'
            });
        } catch (e) { /* ignore */ }
    }

});
