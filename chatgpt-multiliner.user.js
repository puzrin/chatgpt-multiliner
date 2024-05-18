// ==UserScript==
// @name         Custom Input Keybindings for ChatGPT
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Adds ctrl+enter support for multiline messages and ensures enter within existing lines does not send the message on ChatGPT.
// @match        https://chatgpt.com/*
// @grant        none
// @updateURL    https://github.com/puzrin/chatgpt-multiliner/raw/master/chatgpt-multiliner.user.js
// @installURL   https://github.com/puzrin/chatgpt-multiliner/raw/master/chatgpt-multiliner.user.js
// ==/UserScript==

(function() {
    'use strict';

    const inputSelector = '#prompt-textarea';

    let keyBindingsAdded = false;

    function addKeyBindings() {
        if (keyBindingsAdded) return;

        const inputField = document.querySelector(inputSelector);

        if (!inputField) {
            return;
        }

        inputField.addEventListener('keydown', function(event) {
            try {
                if (event.ctrlKey && event.key === 'Enter') {
                    event.preventDefault();
                    event.stopImmediatePropagation();
                    const cursorPosition = inputField.selectionStart;
                    const text = inputField.value;
                    inputField.value = text.substring(0, cursorPosition) + '\n' + text.substring(cursorPosition);
                    inputField.selectionStart = cursorPosition + 1;
                    inputField.selectionEnd = cursorPosition + 1;
                } else if (event.key === 'Enter') {
                    if (inputField.value.includes('\n')) {
                        event.preventDefault();
                        event.stopImmediatePropagation();
                        const cursorPosition = inputField.selectionStart;
                        const text = inputField.value;
                        inputField.value = text.substring(0, cursorPosition) + '\n' + text.substring(cursorPosition);
                        inputField.selectionStart = cursorPosition + 1;
                        inputField.selectionEnd = cursorPosition + 1;
                    }
                }
            } catch (error) {
                console.error('Error handling keydown event:', error);
            }
        });

        keyBindingsAdded = true;
    }

    function ensureKeyBindingsAdded() {
        const inputField = document.querySelector(inputSelector);

        if (!inputField) {
            setTimeout(ensureKeyBindingsAdded, 500);
        } else {
            addKeyBindings();
        }
    }

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        ensureKeyBindingsAdded();
    } else {
        document.addEventListener('DOMContentLoaded', ensureKeyBindingsAdded);
        window.addEventListener('load', ensureKeyBindingsAdded);
    }
})();
