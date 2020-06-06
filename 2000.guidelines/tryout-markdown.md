# Try-out

[[toc]]

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## This is awesome

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

REQUIRED RULES use <Required/>.

RECOMMENDED RULES use <Recommended/>.

# Markdown :ok_hand:

Her's my **awesome** text that lives in a '.md' file and is _emphasized_ in all of its magnificent glory! 🎉

:tada: :100: :ok_hand: :+1:

See [all emoji](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json).

> I ❤️ VuePress

## Sections Heading

And lists are easy...

- Apples
- Bananas
- Cherries

And ordered lists...

1. First you do this
2. And then this
3. And finnaly this

## Alert Options
::: tip
This is a tip
:::

::: warning No
This is a warning
:::

::: danger
This is a dangerous warning
:::

::: details
This is a details block, which does not work in IE / Edge
:::

### Line highlight in code blocks

```js{4,2}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

#### Using Vue in Markdown

_How are you doing?_
> **I'm doing fine, thanks!**

_Great, I was wondering what `49 + 32` is?_
> **{{49 + 32}}**

_Could you repeat that a few times?_

> **Sigh...**
<p v-for="i of 3">{{49 + 32}}</p>

{{ 4 + 5 * 9 }}

**Our Component:**
<NumberModifier :start="5"></NumberModifier>