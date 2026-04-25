export async function includeHTML(selector, file) {
  const el = document.querySelector(selector);
  if (!el) return;
  try {
    const response = await fetch(file);
    const html = await response.text();
    el.innerHTML = html;
  } catch (err) {
    console.error(`Error loading ${file}:`, err);
  }
}
