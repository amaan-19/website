const el = document.querySelector(".main-content");
if (el) {
  const observer = new ResizeObserver(() => {
    (el as HTMLElement).style.justifyContent = 
      el.scrollHeight > el.clientHeight ? "flex-start" : "";
  });
  observer.observe(el);
}