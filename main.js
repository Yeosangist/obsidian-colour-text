'use strict';

const { Plugin } = require('obsidian');

/*
 * ============================================================
 * WORDS / COLOURS
 * ============================================================
 *
 * Add, remove, or modify entries here.
 *
 * Each entry has:
 *   words: words to match
 *   color: colours
 *
 */

const COLORS = [
        // Reds
        {
                words: ['red', 'bright red', 'true red'],
                color: ['#FF0000']
        },
        {
                words: ['crimson'],
                color: ['#DC143C']
        },
        {
                words: ['scarlet', 'vermilion'],
                color: ['#FF2400']
        },
        {
                words: ['ruby', 'ruby red'],
                color: ['#E0115F']
        },
        {
                words: ['cherry', 'cherry red'],
                color: ['#D2042D']
        },
        {
                words: ['carmine'],
                color: ['#960018']
        },
        {
                words: ['cardinal'],
                color: ['#C41E3A']
        },
        {
                words: ['firebrick'],
                color: ['#B22222']
        },
        {
                words: ['brick red'],
                color: ['#CB4154']
        },

        // Dark Reds
        {
                words: ['maroon'],
                color: ['#800000']
        },
        {
                words: ['burgundy', 'wine', 'wine red'],
                color: ['#800020']
        },
        {
                words: ['oxblood', 'blood'],
                color: ['#4A0000']
        },
        {
                words: ['garnet'],
                color: ['#733635']
        },

        // Oranges
        {
                words: ['orange', 'true orange'],
                color: ['#FFA500']
        },
        {
                words: ['tangerine'],
                color: ['#F28500']
        },
        {
                words: ['mandarin'],
                color: ['#F37A1F']
        },
        {
                words: ['carrot', 'carrot orange'],
                color: ['#ED9121']
        },
        {
                words: ['burnt orange'],
                color: ['#CC5500']
        },
        {
                words: ['pumpkin'],
                color: ['#FF7518']
        },
        {
                words: ['terracotta'],
                color: ['#E2725B']
        },
        {
                words: ['rust', 'rust orange'],
                color: ['#B7410E']
        },
        {
                words: ['copper'],
                color: ['#B87333']
        },
        {
                words: ['mango'],
                color: ['#FF8200']
        },

        // Yellows
        {
                words: ['yellow', 'true yellow'],
                color: ['#FFFF00']
        },
        {
                words: ['lemon', 'lemon yellow'],
                color: ['#FFF44F']
        },
        {
                words: ['canary', 'canary yellow'],
                color: ['#FFEF00']
        },
        {
                words: ['mustard'],
                color: ['#FFDB58']
        },
        {
                words: ['gold', 'golden'],
                color: ['#D4AF37']
        },
        {
                words: ['amber'],
                color: ['#FFBF00']
        },
        {
                words: ['honey'],
                color: ['#EB9605']
        },
        {
                words: ['ochre', 'yellow ochre'],
                color: ['#CC7722']
        },

        // Greens
        {
                words: ['green', 'true green'],
                color: ['#008000']
        },
        {
                words: ['lime', 'lime green'],
                color: ['#32CD32']
        },
        {
                words: ['chartreuse'],
                color: ['#7FFF00']
        },
        {
                words: ['emerald', 'emerald green'],
                color: ['#50C878']
        },
        {
                words: ['jade'],
                color: ['#00A86B']
        },
        {
                words: ['mint', 'mint green'],
                color: ['#98FF98']
        },
        {
                words: ['seafoam', 'seafoam green'],
                color: ['#93E9BE']
        },
        {
                words: ['sage', 'sage green'],
                color: ['#9CAF88']
        },
        {
                words: ['olive', 'olive green'],
                color: ['#808000']
        },
        {
                words: ['forest', 'forest green'],
                color: ['#228B22']
        },
        {
                words: ['moss', 'moss green'],
                color: ['#8A9A5B']
        },
        {
                words: ['hunter', 'hunter green'],
                color: ['#355E3B']
        },
        {
                words: ['pine', 'pine green'],
                color: ['#01796F']
        },
        {
                words: ['avocado'],
                color: ['#568203']
        },

        // Blues
        {
                words: ['blue', 'true blue'],
                color: ['#0000FF']
        },
        {
                words: ['sky', 'sky blue'],
                color: ['#87CEEB']
        },
        {
                words: ['baby blue'],
                color: ['#89CFF0']
        },
        {
                words: ['powder blue'],
                color: ['#B0E0E6']
        },
        {
                words: ['cornflower', 'cornflower blue'],
                color: ['#6495ED']
        },
        {
                words: ['azure'],
                color: ['#007FFF']
        },
        {
                words: ['cerulean'],
                color: ['#007BA7']
        },
        {
                words: ['cobalt', 'cobalt blue'],
                color: ['#0047AB']
        },
        {
                words: ['sapphire'],
                color: ['#0F52BA']
        },
        {
                words: ['royal', 'royal blue'],
                color: ['#4169E1']
        },
        {
                words: ['navy', 'navy blue'],
                color: ['#000080']
        },
        {
                words: ['midnight', 'midnight blue'],
                color: ['#191970']
        },
        {
                words: ['steel', 'steel blue'],
                color: ['#4682B4']
        },
        {
                words: ['denim'],
                color: ['#1560BD']
        },
        {
                words: ['slate blue'],
                color: ['#6A5ACD']
        },

        // Cyans / Blue-Greens
        {
                words: ['cyan'],
                color: ['#00FFFF']
        },
        {
                words: ['aqua'],
                color: ['#00FFFF']
        },
        {
                words: ['turquoise'],
                color: ['#40E0D0']
        },
        {
                words: ['teal'],
                color: ['#008080']
        },
        {
                words: ['aquamarine'],
                color: ['#7FFFD4']
        },
        {
                words: ['cyan blue'],
                color: ['#00B7EB']
        },
        {
                words: ['petrol', 'petrol blue'],
                color: ['#005F6A']
        },

        // Purples
        {
                words: ['purple', 'true purple'],
                color: ['#800080']
        },
        {
                words: ['violet'],
                color: ['#8F00FF']
        },
        {
                words: ['amethyst'],
                color: ['#9966CC']
        },
        {
                words: ['lavender'],
                color: ['#E6E6FA']
        },
        {
                words: ['lilac'],
                color: ['#C8A2C8']
        },
        {
                words: ['mauve'],
                color: ['#E0B0FF']
        },
        {
                words: ['plum'],
                color: ['#8E4585']
        },
        {
                words: ['grape'],
                color: ['#6F2DA8']
        },
        {
                words: ['eggplant', 'aubergine'],
                color: ['#483248']
        },
        {
                words: ['orchid'],
                color: ['#DA70D6']
        },
        {
                words: ['wisteria'],
                color: ['#BDB5D5']
        },

        // Indigos
        {
                words: ['indigo'],
                color: ['#4B0082']
        },
        {
                words: ['periwinkle'],
                color: ['#CCCCFF']
        },
        {
                words: ['blue violet', 'blue-violet'],
                color: ['#8A2BE2']
        },

        // Pinks
        {
                words: ['pink', 'true pink'],
                color: ['#FFC0CB']
        },
        {
                words: ['hot pink'],
                color: ['#FF69B4']
        },
        {
                words: ['bubblegum', 'bubblegum pink'],
                color: ['#FFC1CC']
        },
        {
                words: ['blush', 'blush pink'],
                color: ['#DE5D83']
        },
        {
                words: ['rose', 'rose pink'],
                color: ['#FF007F']
        },
        {
                words: ['dusty rose'],
                color: ['#C08081']
        },
        {
                words: ['salmon'],
                color: ['#FA8072']
        },
        {
                words: ['watermelon'],
                color: ['#FC6C85']
        },
        {
                words: ['fuchsia'],
                color: ['#FF00FF']
        },
        {
                words: ['magenta'],
                color: ['#FF00FF']
        },
        {
                words: ['raspberry'],
                color: ['#E30B5C']
        },
        {
                words: ['cerise'],
                color: ['#DE3163']
        },

        // Corals / Peaches
        {
                words: ['coral'],
                color: ['#FF7F50']
        },
        {
                words: ['light coral'],
                color: ['#F08080']
        },
        {
                words: ['peach'],
                color: ['#FFE5B4']
        },
        {
                words: ['apricot'],
                color: ['#FBCEB1']
        },
        {
                words: ['peachy'],
                color: ['#F8B878']
        },
        {
                words: ['melon'],
                color: ['#FDBCB4']
        },

        // Browns
        {
                words: ['brown', 'true brown'],
                color: ['#8B4513']
        },
        {
                words: ['chocolate'],
                color: ['#7B3F00']
        },
        {
                words: ['coffee'],
                color: ['#6F4E37']
        },
        {
                words: ['espresso'],
                color: ['#4B3621']
        },
        {
                words: ['chestnut'],
                color: ['#954535']
        },
        {
                words: ['mahogany'],
                color: ['#C04000']
        },
        {
                words: ['sienna'],
                color: ['#A0522D']
        },
        {
                words: ['burnt sienna'],
                color: ['#E97451']
        },
        {
                words: ['umber'],
                color: ['#635147']
        },
        {
                words: ['raw umber'],
                color: ['#826644']
        },
        {
                words: ['tan'],
                color: ['#D2B48C']
        },
        {
                words: ['camel'],
                color: ['#C19A6B']
        },
        {
                words: ['taupe'],
                color: ['#483C32']
        },

        // Beiges / Creams
        {
                words: ['beige'],
                color: ['#F5F5DC']
        },
        {
                words: ['cream'],
                color: ['#FFFDD0']
        },
        {
                words: ['ivory'],
                color: ['#FFFFF0']
        },
        {
                words: ['ecru'],
                color: ['#C2B280']
        },
        {
                words: ['sand', 'sandstone'],
                color: ['#C2B280']
        },
        {
                words: ['khaki'],
                color: ['#C3B091']
        },

        // Whites
        {
                words: ['off white', 'off-white'],
                color: ['#FAF9F6']
        },
        {
                words: ['snow'],
                color: ['#FFFAFA']
        },
        {
                words: ['pearl'],
                color: ['#EAE0C8']
        },
        {
                words: ['alabaster'],
                color: ['#EDEAE0']
        },

        // Grays
        {
                words: ['gray', 'grey'],
                color: ['#808080']
        },
        {
                words: ['light gray', 'light grey'],
                color: ['#D3D3D3']
        },
        {
                words: ['dark gray', 'dark grey'],
                color: ['#A9A9A9']
        },
        {
                words: ['charcoal'],
                color: ['#36454F']
        },
        {
                words: ['slate', 'slate gray', 'slate grey'],
                color: ['#708090']
        },
        {
                words: ['ash', 'ash gray'],
                color: ['#B2BEB5']
        },
        {
                words: ['smoke', 'smoky gray'],
                color: ['#848884']
        },
        {
                words: ['graphite'],
                color: ['#41424C']
        },

        // Blacks
        {
                words: ['jet', 'jet black', 'onyx'],
                color: ['#343434']
        },

        // Metallic / Special Colours
        {
                words: ['silver'],
                color: ['#C0C0C0']
        },
        {
                words: ['platinum'],
                color: ['#E5E4E2']
        },
        {
                words: ['gold'],
                color: ['#D4AF37']
        },
        {
                words: ['bronze'],
                color: ['#CD7F32']
        },
        {
                words: ['brass'],
                color: ['#B5A642']
        },
        {
                words: ['copper'],
                color: ['#B87333']
        },
];

const CASE_INSENSITIVE = true;
const WHOLE_WORDS_ONLY = true;
const IGNORED_ELEMENTS = new Set([
    'SCRIPT',
    'STYLE',
    'NOSCRIPT',
    'TEXTAREA',
    'INPUT',
    'SELECT',
    'OPTION',
    'CODE',
    'PRE',
    'KBD',
    'SAMP',
    'SVG',
    'MATH'
]);
const HIGHLIGHT_CLASS = '__color_word_highlight';

function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

class ColorWordPlugin extends Plugin {
    async onload() {
        this.wordToColor = new Map();
        for (const color of COLORS) {
            for (const word of color.words) {
                this.wordToColor.set(word.toLowerCase(), color);
            }
        }

        this.regex = this.buildRegex();
        this.installStyle();
        this.processPage();

        this.observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                for (const addedNode of mutation.addedNodes) {
                    if (addedNode.nodeType === Node.ELEMENT_NODE) {
                        this.processElement(addedNode);
                    } else if (addedNode.nodeType === Node.TEXT_NODE) {
                        this.processTextNode(addedNode);
                    }
                }

                if (mutation.type === 'characterData') {
                    this.processTextNode(mutation.target);
                }
            }
        });

        if (document.body) {
            this.observer.observe(document.body, {
                childList: true,
                subtree: true,
                characterData: true
            });
        }
    }

    onunload() {
        if (this.styleEl) {
            this.styleEl.remove();
            this.styleEl = null;
        }

        if (this.observer) {
            this.observer.disconnect();
            this.observer = null;
        }

        document.querySelectorAll(`.${HIGHLIGHT_CLASS}`).forEach((node) => {
            const text = document.createTextNode(node.textContent);
            node.replaceWith(text);
        });
    }

    buildRegex() {
        const words = [...this.wordToColor.keys()]
            .sort((a, b) => b.length - a.length)
            .map(escapeRegex);

        if (words.length === 0) {
            return null;
        }

        let boundaryStart = '';
        let boundaryEnd = '';

        if (WHOLE_WORDS_ONLY) {
            boundaryStart = '(?<![\\p{L}\\p{N}_-])';
            boundaryEnd = '(?![\\p{L}\\p{N}_-])';
        }

        return new RegExp(
            boundaryStart +
            `(${words.join('|')})` +
            boundaryEnd,
            CASE_INSENSITIVE ? 'giu' : 'gu'
        );
    }

    installStyle() {
        if (!this.styleEl) {
            this.styleEl = document.createElement('style');
            this.styleEl.textContent = `
                .${HIGHLIGHT_CLASS} {
                    display: inline;
                    background-image: var(--highlight) !important;
                    background-clip: text !important;
                    -webkit-background-clip: text !important;
                    color: var(--highlight) !important;
                    -webkit-text-fill-color: var(--highlight) !important;
                    font: inherit !important;
                }
            `;
        }

        if (document.head) {
            document.head.appendChild(this.styleEl);
        } else if (document.documentElement) {
            document.documentElement.appendChild(this.styleEl);
        }
    }

    makeHighlight(text) {
        const color = this.wordToColor.get(text.toLowerCase());

        if (!color) {
            return document.createTextNode(text);
        }

        const span = document.createElement('span');
        span.className = HIGHLIGHT_CLASS;
        span.textContent = text;
        span.style.setProperty('--highlight', color.color[0]);
        return span;
    }

    processTextNode(node) {
        if (!node || !node.parentElement || !this.regex) {
            return;
        }

        const parent = node.parentElement;

        if (IGNORED_ELEMENTS.has(parent.tagName) || parent.isContentEditable) {
            return;
        }

        if (parent.closest(`.${HIGHLIGHT_CLASS}`)) {
            return;
        }

        const text = node.nodeValue;

        if (!text || !this.regex.test(text)) {
            this.regex.lastIndex = 0;
            return;
        }

        this.regex.lastIndex = 0;

        const fragment = document.createDocumentFragment();
        let lastIndex = 0;
        let match;

        while ((match = this.regex.exec(text)) !== null) {
            const start = match.index;
            const end = start + match[0].length;

            if (start > lastIndex) {
                fragment.appendChild(document.createTextNode(text.slice(lastIndex, start)));
            }

            fragment.appendChild(this.makeHighlight(match[0]));
            lastIndex = end;
        }

        if (lastIndex < text.length) {
            fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
        }

        if (node.parentNode) {
            node.parentNode.replaceChild(fragment, node);
        }

        this.regex.lastIndex = 0;
    }

    processElement(element) {
        if (!element || element.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        if (IGNORED_ELEMENTS.has(element.tagName)) {
            return;
        }

        if (element.isContentEditable || element.classList.contains(HIGHLIGHT_CLASS)) {
            return;
        }

        const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                const parent = node.parentElement;

                if (!parent) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (IGNORED_ELEMENTS.has(parent.tagName)) {
                    return NodeFilter.FILTER_REJECT;
                }

                if (parent.isContentEditable || parent.closest(`.${HIGHLIGHT_CLASS}`)) {
                    return NodeFilter.FILTER_REJECT;
                }

                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const nodes = [];
        let node;

        while ((node = walker.nextNode())) {
            nodes.push(node);
        }

        for (const textNode of nodes) {
            this.processTextNode(textNode);
        }
    }

    processPage() {
        if (document.body) {
            this.processElement(document.body);
        }
    }
}

module.exports = ColorWordPlugin;
