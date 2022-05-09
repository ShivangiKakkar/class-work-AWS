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

// decrypt 

export function decodeJWT(token: string): any {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

// takes signature and takes it away
// it uses second half