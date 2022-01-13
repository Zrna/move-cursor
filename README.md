# 🖱️ Move Cursor 🖱️

A script that moves your cursor automatically.

The initial duration is `1 minute`.

## Usage

---

Instal using `npm` (globally):

```sh
npm install move-cursor -g
```

Run command from the terminal:

```sh
move-cursor 10 sec
```

---

Run using `npx`:

```sh
npx move-cursor 10 sec
```

## Examples

---

Any value can be added when running the script, e.g.:

`move-cursor` → moves the cursor every `1 min`  
`move-cursor 5 sec` → moves the cursor every `5 sec`  
`move-cursor 5 min` → moves the cursor every `5 min`

If the type of the time is not provided, default type will be `min`, e.g.:

`move-cursor 5` → moves the cursor every `5 min`  
`move-cursor 5 sec` → moves the cursor every `5 sec`
