# Process Reflection

## What I Built

I built a contact form with three fields — name, email, and message. When you submit it, it checks that everything is filled out correctly. If something is wrong, it shows an error in red underneath that field. If everything looks good, it shows a success card with what you submitted. There's also a header, a footer with a dynamic year, and basic styling.

## How Micro-Iteration Felt

It felt pretty natural. Breaking it into steps made each part feel manageable on its own. Structure first, then styling, then validation, then error messages, then the success state. The only annoying part was that the AI would sometimes re-explain things I already knew just to set up the next step. It felt like filler when I just wanted to move on.

## What Self-Review Caught

When I reviewed the HTML structure, I caught that Claude had placed the `<script>` tag at the bottom of the body instead of in the `<head>`. It's a common pattern to put scripts at the bottom so they don't block the page from loading, but the better fix is to keep it in the `<head>` and add `defer`. That way the script loads without blocking anything and still runs after the DOM is ready. The final version has it in the `<head>` with `defer`.

## Tool Impressions

Claude Web is easy since there's no setup — it's just a browser tab. Building on previous steps in the same conversation worked well. The downside is no memory between sessions. If I closed the tab, I'd have to re-explain everything from scratch. Fine for a project this size, but I can see it becoming a problem on something bigger.

---

## Self-Review Patterns

Claude was pretty consistent about catching edge cases. It flagged the whitespace issue and made sure the email validation wasn't too loose. What it didn't catch was something I noticed on my own. The final `script.js` has two `submit` event listeners. One was from an earlier step that just logged to the console, and the other was the updated version that shows the success card. The old one never got removed, so both fire every time you submit. Claude never flagged that. It's better at catching logic problems than it is at noticing leftover code.

## Browser Tool vs. CLI Comparison

With Claude Web, you're copying and pasting code back and forth, so it's on you to keep track of what's current. With Claude Code CLI, it can read your files directly. There's a lot less room for things to get out of sync. For a project this small, the browser was fine. For something with more files, I think CLI would be way more efficient.

## When to Use Micro-Iteration + Self-Review

It makes sense when you're building something step by step and want each piece solid before moving on. Also useful when you're not sure what the end result should look like — smaller steps give you more chances to adjust. I'd skip it for something simple I already know how to do. The extra review steps add time and it's not always worth it.
