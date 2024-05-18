# Custom Input Keybindings for ChatGPT

This Tampermonkey script customizes the `Enter` key behavior for ChatGPT.

- It adds a `Ctrl+Enter` binding for a new line.
- For multiline texts, `Enter` adds a new line instead of sending the text.

## Installation

1. Install [Tampermonkey](https://www.tampermonkey.net/) on your browser.
2. Click on the `@installURL` link: [https://github.com/puzrin/chatgpt-multiliner/raw/master/chatgpt-multiliner.user.js](https://github.com/puzrin/chatgpt-multiliner/raw/master/chatgpt-multiliner.user.js)
3. Tampermonkey will open a new tab and show you the script installation screen. Click on `Install`.

## Usage

Once installed, the script will automatically run whenever you visit
[https://chatgpt.com/](https://chatgpt.com/). It adds the following keybindings
to the input field:

- `Ctrl+Enter`: Inserts a newline at the current cursor position.
- `Enter`: If the input field contains a newline, it inserts a newline at the
  current cursor position instead of sending the message.
