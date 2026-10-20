<script lang="ts">
  import './detalle.css';
  import { assetUrl } from '../../assets';
  import { onMount } from 'svelte';
  import productos from '../../data/productos.json';
  export let productId = '';
  $: producto = productos.find((item) => item.id === productId);
  import Navbar from '../home/section/navbar/navbar.svelte';
  import Footer from '../home/section/footer/footer.svelte';
  const originalScripts: { attributes: string[][]; content: string }[] = [{"attributes":[],"content":"\n    (function () {\n      try {\n        var params = new URLSearchParams(window.location.search);\n        var titulo = params.get('titulo');\n        var precio = params.get('precio');\n        var desc = params.get('desc');\n        var img = params.get('img');\n\n        if (titulo) {\n          var tEl = document.getElementById('detalle-producto-titulo');\n          var bEl = document.getElementById('breadcrumb-producto');\n          var docTitle = document.getElementById('pagina-titulo');\n          if (tEl) tEl.textContent = titulo;\n          if (bEl) bEl.textContent = titulo;\n          if (docTitle) docTitle.textContent = titulo + ' | Detalle de Producto';\n        }\n        if (precio) {\n          var pEl = document.getElementById('detalle-producto-precio');\n          if (pEl) pEl.textContent = precio;\n        }\n        if (desc) {\n          var dEl = document.getElementById('detalle-producto-descripcion');\n          if (dEl) dEl.textContent = desc;\n        }\n        if (img) {\n          var iEl = document.getElementById('detalle-producto-img');\n          if (iEl) {\n            iEl.src = img;\n            if (titulo) iEl.alt = titulo;\n          }\n        }\n\n        // Actualizar botón de WhatsApp si hay datos\n        var btnWa = document.getElementById('detalle-btn-whatsapp');\n        var waNum = '573001234567';\n        var saludo = 'Hola, me interesa pedir este producto:';\n        if (btnWa && waNum) {\n          var finalProd = titulo || 'Bolso Tejido';\n          var finalPrice = precio || '$ 80,000';\n          var msg = saludo + ' ' + finalProd + ' (' + finalPrice + ')';\n          btnWa.href = 'https://wa.me/' + waNum + '?text=' + encodeURIComponent(msg);\n        }\n\n      } catch (err) {\n        console.error('Error cargando parámetros de producto:', err);\n      }\n    })();\n  "},{"attributes":[],"content":"\n(() => {\n  const navbar = document.body.querySelector('header, nav, .navbar, #navbar, .barra-navegacion');\n  if (!navbar) return;\n  const update = () => {\n    const fixed = getComputedStyle(navbar).position === 'fixed';\n    document.body.style.setProperty('--pagina-navbar-offset', fixed ? Math.max(0, navbar.getBoundingClientRect().bottom) + 'px' : '0px');\n  };\n  update();\n  const observer = new ResizeObserver(update);\n  observer.observe(navbar);\n  window.addEventListener('resize', update);\n  window.addEventListener('load', update, { once: true });\n})();\n"},{"attributes":[["src","navbar.js"],["defer",""]],"content":""}];
  onMount(() => {
    const previousClass = document.body.className;
    const previousStyle = document.body.getAttribute('style');
    const previousPage = document.body.getAttribute('data-svelte-page');
    const titleElement = document.head.querySelector('title');
    const previousTitleId = titleElement?.getAttribute('id');
    titleElement?.setAttribute('id', "pagina-titulo");
    document.body.className = "pagina-detalle-cuerpo detalle-tema-boutique detalle-typo-editorial-serif";
    document.body.setAttribute('data-svelte-page', "detalle");
    document.body.setAttribute('style', "");
    const mountedScripts: HTMLScriptElement[] = [];
    let cancelled = false;
    // Re-run the original page scripts after Svelte mounts their original DOM.
    queueMicrotask(async () => {
      for (const original of originalScripts) {
        if (cancelled) break;
        const script = document.createElement('script');
        for (const [name, value] of original.attributes) {
          script.setAttribute(name, name === 'src' ? assetUrl(value) : value);
        }
        script.textContent = original.content.replace(/\b(?:window\.)?location\.search\b/g, '(window.__svelteProductSearch ?? window.location.search)');
        const loaded = script.src ? new Promise<void>((resolve) => {
          script.onload = () => resolve();
          script.onerror = () => resolve();
        }) : Promise.resolve();
        mountedScripts.push(script);
        document.body.appendChild(script);
        await loaded;
      }
    });
    return () => {
      cancelled = true;
      mountedScripts.forEach((script) => script.remove());
      if (previousTitleId == null) titleElement?.removeAttribute('id');
      else titleElement?.setAttribute('id', previousTitleId);
      document.body.className = previousClass;
      if (previousPage === null) document.body.removeAttribute('data-svelte-page');
      else document.body.setAttribute('data-svelte-page', previousPage);
      if (previousStyle === null) document.body.removeAttribute('style');
      else document.body.setAttribute('style', previousStyle);
    };
  });
</script>
<svelte:head><meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Bolso Tejido | Detalle de Producto</title>


</svelte:head>


  <!-- 1. Header / Navbar Original del Proyecto (index.html) -->
<Navbar pageAttributes={{"id":"barra-navegacion","class":"navbar"}} pageLinks={["index.html#heroe","index.html#heroe","index.html#sobre-nosotros","catalogo.html","index.html#contacto"]} />

  <!-- Miga de Pan (Breadcrumb) -->
  <nav class="detalle-miga-pan" aria-label="Navegación de migas de pan">
    <div class="detalle-contenedor">
      <ol class="miga-pan-lista">
        <li><a href="index.html">Inicio</a></li>
        <li class="separador">/</li>
        <li><a href="catalogo.html">Catálogo</a></li>
        <li class="separador">/</li>
        <li class="activo" id="breadcrumb-producto">Bolso Tejido</li>
      </ol>
    </div>
  </nav>

  <!-- Ficha Principal del Producto Según Diseño Seleccionado -->
  <main class="detalle-principal-wrap">
    <div class="detalle-contenedor">
      
      <!-- DISEÑO 3: SHOWROOM FLOTANTE (COMERCIAL / ALTA CONVERSIÓN) -->
      <div class="detalle-tarjeta-producto detalle-diseno-3" id="ficha-producto">
        <!-- Banner Superior de Promoción -->
        <div class="detalle-promo-banner">
          <span class="flama-icono">🔥</span>
          <span><strong>OFERTA DE CATÁLOGO:</strong> Pedido directo y personalizado sin comisiones</span>
        </div>

        <div class="detalle-showroom-grid">
          <!-- Columna Izquierda: Vitrina Hero con Rating -->
          <div class="detalle-imagen-columna">
            <div class="detalle-imagen-showroom">
              <div class="detalle-badge-rating">
                <span class="estrellas-doradas">★★★★★</span>
                <span class="rating-num">4.9 / 5.0</span>
              </div>
              <img id="detalle-producto-img" src={assetUrl(producto?.imagen ?? '')} alt={producto?.nombre ?? ''} class="detalle-producto-img" loading="lazy">
              <div class="detalle-badge-disponibilidad-3">Disponible en Tienda</div>
            </div>
          </div>

          <!-- Columna Derecha: Tarjeta Flotante 3D de Checkout -->
          <div class="detalle-tarjeta-flotante-compra">
            <div class="detalle-tag-promo-wrap">
              <span class="detalle-tag-promo">⭐ Colección Exclusiva</span>
            </div>

            <h1 id="detalle-producto-titulo" class="detalle-titulo-showroom">{producto?.nombre ?? ''}</h1>

            <div class="detalle-precio-gigante-bloque">
              <span class="precio-label-promo">Precio de Venta:</span>
              <div class="precio-cifra-wrap">
                <span id="detalle-producto-precio" class="detalle-precio-gigante">{producto?.precio ?? ''}</span>
                <span class="badge-ahorro-catalogo">Mejor Valor</span>
              </div>
              <p class="detalle-precio-subnota">Precio final • Pedido directo sin intermediarios</p>
            </div>

            <div class="detalle-desc-showroom">
              <p id="detalle-producto-descripcion">{producto?.descripcion ?? ''}</p>
            </div>

            <div class="detalle-beneficios-caja">
              <h4 class="beneficios-titulo">Beneficios de comprar aquí:</h4>
              <ul class="beneficios-lista">
                <li><span class="check-icono">✓</span> <span>Atención humana y personalizada en tiempo real</span></li>
                <li><span class="check-icono">✓</span> <span>Disponibilidad inmediata confirmada con la tienda</span></li>
                <li><span class="check-icono">✓</span> <span>Sin cargos sorpresa ni intermediarios</span></li>
              </ul>
            </div>

            <div class="detalle-acciones-showroom">
              <a id="detalle-btn-whatsapp" href="https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20pedir%20este%20producto%3A%20Bolso%20Tejido%20(%24%2080%2C000)" target="_blank" rel="noopener noreferrer" class="btn-whatsapp-showroom" title="Pedir por WhatsApp">
                <svg class="icono-wa" viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.634.072-1.808-.413-1.42-.587-2.327-2.023-2.399-2.119-.072-.095-.584-.777-.584-1.482 0-.705.368-1.053.498-1.197.13-.145.284-.182.378-.182.095 0 .19.002.273.007.087.005.203-.033.317.241.116.275.399.972.434 1.045.035.072.058.156.01.25-.047.095-.072.155-.144.24-.072.084-.153.187-.218.251-.073.072-.149.15-.064.296.085.145.378.624.811 1.01.558.497 1.029.651 1.174.723.145.072.23.06.316-.036.087-.096.371-.433.47-.58.099-.148.199-.124.331-.075.132.048.838.395.982.467.144.073.24.108.276.17.036.06.036.353-.108.758z"></path>
                </svg>
                <div class="btn-wa-copy">
                  <span class="btn-wa-main">¡Pedir por WhatsApp Ahora!</span>
                  <span class="btn-wa-sub">Atención directa: +57 300 123 4567</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </main>

  <!-- 3. Footer Original del Proyecto (index.html) -->
<Footer pageAttributes={{"class":"sitio-footer","id":"pie-de-pagina"}} pageLinks={["index.html#heroe","index.html#sobre-nosotros","catalogo.html","index.html#contacto"]} />

  <!-- Script para recibir datos dinámicos desde URL (?titulo=...&precio=...&img=...&desc=...) -->
  



