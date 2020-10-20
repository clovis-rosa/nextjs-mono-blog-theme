---
title: "PrismJS with React: using babel-plugin-prismjs"
description: "Lots of things, because they were early humans."
date: "2020-10-19"
image: "/images/david-sjunnesso-unsplash.webp"
---

You're halfway there. You still need to import `prismjs` somewhere, usually in your `app.js` file, and then call `Prism.highlightAll()` in the appropriate file of the page you want syntax highlighting on.

My process was as follows:

1. Setup my `.babelrc.js` file:

```javascript
const env = require("./env-config")

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["transform-define", env],
    [
      "prismjs",
      {
        languages: ["javascript", "css", "html", "jsx"],
        plugins: ["line-numbers", "show-language", "copy-to-clipboard"],
        theme: "tomorrow",
        css: true,
      },
    ],
  ],
}
```

2. Import `prismjs` into my `_app.js` file (since I'm using Next.js, but with React, you would import this into our `app.js` file:

```javascript
// ...
import "prismjs"

// ...
```

3. Use the `prismjs` API to call the `.highlightAll()` method on your desired page(s):

```javascript
function usePrismHighlightAll() {
  useEffect(() => {
    Prism.highlightAll()
  }, [])
}

export default function Page() {
  usePrismHighlightAll()

  // ...
}
```

Orignal post from [**Stackoverflow**](https://stackoverflow.com/questions/60564172/prismjs-with-react-using-babel-plugin-prismjs).
