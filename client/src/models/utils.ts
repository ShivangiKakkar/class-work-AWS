export function loadScript(url: string, id: string): Promise<void> {
  return new Promise((resolve, reject) => {
      if(document.getElementById(id)) {
          resolve(); return;}

    const script = document.createElement('script');
    script.id = id;
    script.src = url;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.head.appendChild(script);
  });
}