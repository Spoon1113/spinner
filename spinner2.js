const animations = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"]
let delay = 0;
for (const line of animations) {
  setTimeout(() => {
    process.stdout.write(`\r${line}`)
  }, delay += 200)
};
setTimeout(() => {
  process.stdout.write("\n")
}, delay);

