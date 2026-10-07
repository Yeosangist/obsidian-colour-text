# Colours

An Obsidian plugin that automatically highlights color words in your notes with their actual colors. Makes your notes more vibrant and visually intuitive!

## Features

- **100+ Color Words**: Supports a comprehensive palette of color names including:
  - Reds (crimson, scarlet, ruby, cherry, burgundy, etc.)
  - Oranges (tangerine, pumpkin, terracotta, rust, etc.)
  - Yellows (lemon, canary, mustard, gold, amber, etc.)
  - Greens (lime, emerald, jade, mint, forest, etc.)
  - Blues (sky, azure, cerulean, navy, cobalt, etc.)
  - Purples (violet, lavender, lilac, amethyst, etc.)
  - Pinks (hot pink, rose, fuchsia, magenta, etc.)
  - Browns (chocolate, coffee, mahogany, sienna, etc.)
  - Grays (charcoal, slate, graphite, etc.)
  - Metallics (silver, gold, bronze, copper, etc.)
  - And many more!

- **Case-Insensitive**: Matches "red", "Red", "RED", etc.
- **Whole Word Matching**: Only highlights complete words (won't match "red" inside "credit")
- **Smart Ignoring**: Skips code blocks, scripts, and other technical elements
- **Clean Unload**: Removes all highlights when the plugin is disabled

## Installation

### Manual Installation

1. Download the latest release from the [GitHub repository](https://github.com/Yeosangist/obsidian-colour-text)
2. Extract the downloaded file
3. Copy the `Colours` folder to your Obsidian vault's `.obsidian/plugins/` directory
4. Enable the plugin in Obsidian Settings → Community Plugins

## Usage

Once installed and enabled, the plugin automatically highlights all color words in your notes with their corresponding colors. No configuration needed!

Simply type color names in your notes like:

- "The sky was **azure** and the grass was **emerald** green"
- "She wore a **crimson** dress with **gold** accents"
- "The leaves turned **amber** and **rust** orange in autumn"

And they'll be highlighted automatically (in reading mode)!

## Customization

You can customize the color mappings by editing the `main.js` file:

1. Open `.obsidian/plugins/Colours/main.js` in a text editor
2. Find the `COLORS` array (lines 18-600)
3. Add, remove, or modify color entries:

```javascript
{
    words: ['your', 'color', 'names'],
    color: ['#HEXCODE']
}
```

### Configuration Options

At the top of `main.js`, you can also modify:

- `CASE_INSENSITIVE` (line 602): Set to `false` for case-sensitive matching
- `WHOLE_WORDS_ONLY` (line 603): Set to `false` to match partial words
- `IGNORED_ELEMENTS` (lines 604-618): Add HTML tags to ignore (e.g., `'A'`, `'SPAN'`)

## Examples

### Before:
```
The forest was dark green and the sky was midnight blue.
Her ruby red lips matched her scarlet dress.
```

### After:
```
The forest was dark **green** and the sky was midnight **blue**.
Her **ruby** **red** lips matched her **scarlet** dress.
```

*(The highlighted words appear in their actual colors)*

## Compatibility

- Obsidian Desktop
- Obsidian Mobile
- All themes (uses CSS variables for compatibility)

## Credits

- **Author**: Yeosangist
- **GitHub**: [Yeosangist/obsidian-colour-text](https://github.com/Yeosangist/obsidian-colour-text)

## License

This plugin is released under the GPLv3 License.

## Contributing

Contributions are welcome! Feel free to:
- Add more color words to the palette
- Report bugs or issues
- Suggest new features
- Submit pull requests

## Support

If you encounter any issues or have suggestions, please open an issue on the [GitHub repository](https://github.com/Yeosangist/obsidian-colour-text/issues).
