/**
 * @function initialiseAccessibilityToolbar
 * @description Initializes the Accessibility Toolbar with all event listeners and features, retaining settings across sessions.
 * @param {number} retries - Number of retry attempts remaining (default: 5).
 * @param {number} delay - Delay between retries in milliseconds (default: 500).
 */
export function initialiseAccessibilityToolbar(retries = 5, delay = 500) {
    console.log('[Accessibility Toolbar] Initialization attempt.');

    // Select Toolbar Elements
    const toolbar = document.getElementById('accessibility-toolbar');
    const toggleBtn = document.getElementById('accessibility-toggle');
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    const resetBtn = document.getElementById('reset-accessibility');
    const toggleContrastBtn = document.getElementById('toggle-contrast');
    const screenMaskBtn = document.getElementById('screen-mask');
    const cursorRulerBtn = document.getElementById('cursor-ruler');
    const screenReaderBtn = document.getElementById('toggle-screen-reader');

    // Retry logic if elements are not found
    if (![toolbar, toggleBtn, increaseFontBtn, decreaseFontBtn, resetBtn, toggleContrastBtn, screenMaskBtn, cursorRulerBtn, screenReaderBtn].every(Boolean)) {
        console.warn('[Accessibility Toolbar] Some elements are missing. Retrying...');
        if (retries > 0) {
            setTimeout(() => initialiseAccessibilityToolbar(retries - 1, delay), delay);
        } else {
            console.error('[Accessibility Toolbar] Initialization failed after retries.');
        }
        return;
    }

    console.log('[Accessibility Toolbar] All required elements found. Attaching event listeners.');

    // Accessibility Settings with Defaults
    let settings = {
        fontSize: 16,         // Base font size in pixels
        highContrast: false,  // High contrast mode toggle
        screenMask: false,    // Screen mask toggle
        cursorRuler: false,   // Cursor ruler toggle
        screenReader: false   // Screen reader toggle
    };

    // Load settings from localStorage if available
    loadSettings();

    // Variables for Screen Reader
    let currentElementIndex = 0;
    let readableElements = [];

    // Elements for Screen Mask
    let topMask = null;
    let bottomMask = null;

    // Initialize Cursor Ruler based on settings
    initializeCursorRuler(settings.cursorRuler);

    /**
     * Updates the list of readable elements for the Screen Reader.
     */
    function updateReadableElements() {
        readableElements = Array.from(document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, a, button, li, span'));
        console.log(`[Accessibility Toolbar] Found ${readableElements.length} readable elements.`);
    }

    /**
     * Starts the Screen Reader functionality.
     */
    function startScreenReader() {
        if (!readableElements.length) updateReadableElements();
        if (readableElements.length === 0) {
            console.warn('[Accessibility Toolbar] No readable elements found.');
            return;
        }

        const element = readableElements[currentElementIndex];
        element.classList.add('screen-reader-focus');
        const text = element.innerText || element.getAttribute('alt') || 'No readable text';

        const speech = new SpeechSynthesisUtterance(text);
        speech.lang = 'en-US';
        speech.rate = 1;
        speech.pitch = 1;

        window.speechSynthesis.speak(speech);

        speech.onend = () => {
            element.classList.remove('screen-reader-focus');
            currentElementIndex = (currentElementIndex + 1) % readableElements.length;
            setTimeout(startScreenReader, 1000);
        };

        console.log(`[Accessibility Toolbar] Screen Reader is reading: "${text}"`);
    }

    /**
     * Stops the Screen Reader functionality.
     */
    function stopScreenReader() {
        window.speechSynthesis.cancel();
        readableElements.forEach(el => el.classList.remove('screen-reader-focus'));
        currentElementIndex = 0;
    }

    /* ==========================================
       Event Listeners
    ========================================== */

    // Toggle Toolbar Visibility
    toggleBtn.addEventListener('click', () => {
        toolbar.style.display = toolbar.style.display === 'flex' ? 'none' : 'flex';
    });

    // Increase Font Size
    increaseFontBtn.addEventListener('click', () => {
        settings.fontSize += 1;
        applyFontSize();
        saveSettings();
        console.log(`[Accessibility Toolbar] Font size increased to ${settings.fontSize}px`);
    });

    // Decrease Font Size
    decreaseFontBtn.addEventListener('click', () => {
        settings.fontSize = Math.max(12, settings.fontSize - 1); // Ensure minimum font size of 12px
        applyFontSize();
        saveSettings();
        console.log(`[Accessibility Toolbar] Font size decreased to ${settings.fontSize}px`);
    });

    // Toggle High Contrast Mode
    toggleContrastBtn.addEventListener('click', () => {
        settings.highContrast = !settings.highContrast;
        document.body.classList.toggle('high-contrast', settings.highContrast);
        saveSettings();
        console.log(`[Accessibility Toolbar] High Contrast: ${settings.highContrast}`);
    });

    // Reset All Accessibility Settings
    resetBtn.addEventListener('click', () => {
        settings = {
            fontSize: 16,
            highContrast: false,
            screenMask: false,
            cursorRuler: false,
            screenReader: false
        };
        applySettings();
        saveSettings();
        console.log('[Accessibility Toolbar] Settings reset.');
    });

    // Toggle Screen Mask
    screenMaskBtn.addEventListener('click', () => {
        settings.screenMask = !settings.screenMask;
        handleScreenMask(settings.screenMask);
        saveSettings();
        console.log(`[Accessibility Toolbar] Screen Mask: ${settings.screenMask}`);
    });

    // Toggle Cursor Ruler
    cursorRulerBtn.addEventListener('click', () => {
        settings.cursorRuler = !settings.cursorRuler;
        initializeCursorRuler(settings.cursorRuler);
        saveSettings();
        console.log(`[Accessibility Toolbar] Cursor Ruler: ${settings.cursorRuler}`);
    });

    // Toggle Screen Reader
    screenReaderBtn.addEventListener('click', () => {
        settings.screenReader = !settings.screenReader;
        if (settings.screenReader) {
            startScreenReader();
        } else {
            stopScreenReader();
        }
        saveSettings();
        console.log(`[Accessibility Toolbar] Screen Reader: ${settings.screenReader}`);
    });

    // Apply settings upon initialization
    applySettings();
    console.log('[Accessibility Toolbar] Initialization complete.');

    /* ==========================================
       Helper Functions
    ========================================== */

    /**
     * Applies the current font size settings to the document and relevant elements.
     */
    function applyFontSize() {
        // Apply font size to the body
        document.body.style.fontSize = `${settings.fontSize}px`;

        // Adjust font size for headings and buttons based on the new font size
        const adjustableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .section-title, #accessibility-toolbar button, #accessibility-toggle');
        adjustableElements.forEach(element => {
            // Reset font size to default before applying the new size
            element.style.fontSize = '';

            // Calculate the new font size relative to the base
            const baseFontSize = settings.fontSize; // Base font size
            const tag = element.tagName.toLowerCase();

            // Define relative font sizes for different elements
            let relativeSize;
            if (tag.startsWith('h')) {
                // Headings: h1 to h6
                const headingLevel = parseInt(tag.replace('h', ''));
                relativeSize = settings.fontSize + (6 - headingLevel); // Example: h1 larger than h6
            } else if (element.classList.contains('section-title')) {
                relativeSize = settings.fontSize + 2;
            } else if (tag === 'button' || element.id === 'accessibility-toggle') {
                relativeSize = settings.fontSize;
            } else {
                relativeSize = settings.fontSize;
            }

            element.style.fontSize = `${relativeSize}px`;

            // Adjust padding proportionally for buttons and toggle
            if (tag === 'button' || element.id === 'accessibility-toggle') {
                const currentPadding = window.getComputedStyle(element).padding.split(' ').map(val => parseFloat(val));
                const adjustedPadding = currentPadding.map(val => Math.max(4, val * (settings.fontSize / 16)));
                element.style.padding = `${adjustedPadding.join('px ')}px`;
            }
        });
    }

    /**
     * Initializes or disables the Cursor Ruler.
     * @param {boolean} active - Whether to activate the ruler.
     */
    function initializeCursorRuler(active) {
        let cursorRulerOverlay = document.getElementById('cursor-ruler-overlay');

        // Create the ruler overlay if it doesn't exist
        if (!cursorRulerOverlay) {
            cursorRulerOverlay = document.createElement('div');
            cursorRulerOverlay.id = 'cursor-ruler-overlay';
            cursorRulerOverlay.innerHTML = `
                <div class="cursor-ruler-horizontal"></div>
                <div class="cursor-ruler-measurements"></div>
            `;
            document.body.appendChild(cursorRulerOverlay);

            // Populate the ruler with tick marks
            populateRuler();

            // Attach mousemove event listener to update ruler position
            document.addEventListener('mousemove', updateRulerPosition);
        }

        // Toggle ruler visibility
        cursorRulerOverlay.style.display = active ? 'block' : 'none';
    }

    /**
     * Creates tick marks and labels on the horizontal ruler.
     */
    function populateRuler() {
        const horizontalRuler = document.querySelector('.cursor-ruler-horizontal');
        if (!horizontalRuler) return;

        horizontalRuler.innerHTML = ''; // Clear existing ticks

        // Create tick marks every 50px
        for (let i = 0; i <= window.innerWidth; i += 50) {
            const tick = document.createElement('div');
            tick.className = 'ruler-tick-horizontal';
            tick.style.left = `${i}px`;
            tick.textContent = i; // Display measurement
            horizontalRuler.appendChild(tick);
        }
    }

    /**
     * Updates the ruler's position based on cursor movement.
     * @param {MouseEvent} event - The mousemove event.
     */
    function updateRulerPosition(event) {
        const cursorRulerOverlay = document.getElementById('cursor-ruler-overlay');
        if (!cursorRulerOverlay || cursorRulerOverlay.style.display !== 'block') return;

        const horizontalLine = cursorRulerOverlay.querySelector('.cursor-ruler-horizontal');
        const measurements = cursorRulerOverlay.querySelector('.cursor-ruler-measurements');

        if (horizontalLine) {
            horizontalLine.style.top = `${event.clientY}px`;
        }

        if (measurements) {
            measurements.style.top = `${event.clientY + 15}px`; // Offset below cursor
            measurements.style.left = `${event.clientX + 15}px`; // Offset to the right of cursor
            measurements.textContent = `X: ${event.clientX}`;
        }
    }

    /**
     * Updates the heights of the top and bottom masks based on cursor Y position.
     * @param {number} y - The Y-coordinate of the cursor.
     */
    function updateScreenMask(y) {
        const windowHeight = window.innerHeight;
        const maskHalfHeight = 150; // Half of the 300px mask window

        // Calculate heights ensuring they are non-negative
        const topHeight = Math.max(0, y - maskHalfHeight);
        const bottomHeight = Math.max(0, windowHeight - y - maskHalfHeight);

        if (topMask && bottomMask) {
            topMask.style.height = `${topHeight}px`;
            bottomMask.style.height = `${bottomHeight}px`;
        }
    }

    /**
     * Handles the activation or deactivation of the Screen Mask.
     * @param {boolean} active - Whether the screen mask is active.
     */
    function handleScreenMask(active) {
        if (active) {
            // Create mask elements if they don't exist
            if (!topMask) {
                topMask = document.createElement('div');
                topMask.className = 'top-mask';
                document.body.appendChild(topMask);
            }
            if (!bottomMask) {
                bottomMask = document.createElement('div');
                bottomMask.className = 'bottom-mask';
                document.body.appendChild(bottomMask);
            }

            // Display masks
            topMask.style.display = 'block';
            bottomMask.style.display = 'block';

            // Attach mousemove listener to update mask positions
            document.addEventListener('mousemove', screenMaskMouseMoveHandler);

            // Initialize mask positions at the center
            updateScreenMask(window.innerHeight / 2);
        } else {
            // Hide masks
            if (topMask) topMask.style.display = 'none';
            if (bottomMask) bottomMask.style.display = 'none';

            // Remove mousemove listener
            document.removeEventListener('mousemove', screenMaskMouseMoveHandler);
        }
    }

    /**
     * Mousemove event handler for the Screen Mask.
     * @param {MouseEvent} event - The mousemove event.
     */
    function screenMaskMouseMoveHandler(event) {
        updateScreenMask(event.clientY);
    }

    /**
     * Saves the current accessibility settings to localStorage.
     */
    function saveSettings() {
        localStorage.setItem('accessibilitySettings', JSON.stringify(settings));
    }

    /**
     * Loads accessibility settings from localStorage if available.
     */
    function loadSettings() {
        const savedSettings = localStorage.getItem('accessibilitySettings');
        if (savedSettings) {
            try {
                settings = JSON.parse(savedSettings);
            } catch (e) {
                console.error('[Accessibility Toolbar] Failed to parse saved settings:', e);
                // Reset to defaults if parsing fails
                settings = {
                    fontSize: 16,
                    highContrast: false,
                    screenMask: false,
                    cursorRuler: false,
                    screenReader: false
                };
                saveSettings();
            }
        }
    }

    /**
     * Applies the loaded settings to the toolbar features.
     */
    function applySettings() {
        // Apply Font Size
        document.body.style.fontSize = `${settings.fontSize}px`;

        // Apply High Contrast Mode
        document.body.classList.toggle('high-contrast', settings.highContrast);

        // Apply Screen Mask
        handleScreenMask(settings.screenMask);

        // Apply Cursor Ruler
        initializeCursorRuler(settings.cursorRuler);

        // Apply Screen Reader
        if (settings.screenReader) {
            startScreenReader();
        } else {
            stopScreenReader();
        }

        // Adjust Font Size for Headings and Buttons
        const adjustableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, .section-title, #accessibility-toolbar button, #accessibility-toggle');
        adjustableElements.forEach(element => {
            // Reset font size to default before applying the new size
            element.style.fontSize = '';

            // Define base sizes based on element type
            let baseFontSize;
            const tag = element.tagName.toLowerCase();

            if (tag.startsWith('h')) {
                // Headings: h1 to h6 have varying sizes
                const headingLevel = parseInt(tag.replace('h', ''));
                baseFontSize = settings.fontSize + (6 - headingLevel); // Example: h1 larger than h6
            } else if (element.classList.contains('section-title')) {
                baseFontSize = settings.fontSize + 2;
            } else if (tag === 'button' || element.id === 'accessibility-toggle') {
                baseFontSize = settings.fontSize;
            } else {
                baseFontSize = settings.fontSize;
            }

            element.style.fontSize = `${baseFontSize}px`;

            // Adjust padding proportionally for buttons and toggle
            if (tag === 'button' || element.id === 'accessibility-toggle') {
                const currentPadding = window.getComputedStyle(element).padding.split(' ').map(val => parseFloat(val));
                const adjustedPadding = currentPadding.map(val => Math.max(4, val * (settings.fontSize / 16)));
                element.style.padding = `${adjustedPadding.join('px ')}px`;
            }
        });

        console.log('[Accessibility Toolbar] Settings applied.');
    }
}
