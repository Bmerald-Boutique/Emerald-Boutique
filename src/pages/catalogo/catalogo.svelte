<script lang="ts">
  import './catalogo.css';
  import { assetUrl } from '../../assets';
  import { onMount } from 'svelte';
  import productos from '../../data/productos.json';

  import Navbar from '../home/section/navbar/navbar.svelte';
  import Footer from '../home/section/footer/footer.svelte';
  const originalScripts: { attributes: string[][]; content: string }[] = [{"attributes":[],"content":"\n(() => {\n  const navbar = document.body.querySelector('header, nav, .navbar, #navbar, .barra-navegacion');\n  if (!navbar) return;\n  const update = () => {\n    const fixed = getComputedStyle(navbar).position === 'fixed';\n    document.body.style.setProperty('--pagina-navbar-offset', fixed ? Math.max(0, navbar.getBoundingClientRect().bottom) + 'px' : '0px');\n  };\n  update();\n  const observer = new ResizeObserver(update);\n  observer.observe(navbar);\n  window.addEventListener('resize', update);\n  window.addEventListener('load', update, { once: true });\n})();\n"},{"attributes":[["src","navbar.js"],["defer",""]],"content":""}];
  onMount(() => {
    const previousClass = document.body.className;
    const previousStyle = document.body.getAttribute('style');
    const previousPage = document.body.getAttribute('data-svelte-page');
    const titleElement = document.head.querySelector('title');
    const previousTitleId = titleElement?.getAttribute('id');
    
    document.body.className = "pagina-catalogo-cuerpo";
    document.body.setAttribute('data-svelte-page', "catalogo");
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
<title>Explora nuestros productos • Catálogo Oficial</title>


</svelte:head>


  <!-- 1. Header / Navbar Original del Proyecto (index.html) -->
<Navbar pageAttributes={{"id":"barra-navegacion","class":"navbar"}} pageLinks={["index.html#heroe","index.html#heroe","index.html#sobre-nosotros","catalogo.html","index.html#contacto"]} />

  <!-- 2. Área Principal del Catálogo -->
  <main class="seccion-catalogo-externa">
    <section id="catalogo">
      <div class="contenedor-seccion">
        <div class="catalogo-header">
          <span style="color: #f2d973 !important;">Colección Exclusiva</span>
          <h2 style="color: #f2d973 !important;">Explora nuestros productos</h2>
          <p style="color: #1F1717 !important; display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">Explora nuestra colección completa de artículos.</p>
        </div>
        <div class="catalogo-grid-wrapper">
        <!-- Tarjeta: Bolso Tejido -->
        {#each productos as producto (producto.id)}
<div class="card-modern-pill" data-producto={producto.id}>
          <div class="card-img-box">
            <img src={assetUrl(producto.imagen)} alt={producto.nombre} loading="lazy" on:error|once={(event) => { event.currentTarget.setAttribute('src', 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80'); }}>
          </div>
          <div class="card-body">
            <div class="card-header-row">
              <h3 class="card-titulo">{producto.nombre}</h3>
              <span class="pastilla-precio" style="background-color: #f2d973 !important; color: #ffffff !important; margin: 0 !important; letter-spacing: normal !important; text-transform: none !important;">{producto.precio}</span>
            </div>
            <p class="card-desc" style="display: -webkit-box !important; -webkit-line-clamp: 3 !important; -webkit-box-orient: vertical !important; overflow: hidden !important; text-overflow: ellipsis !important;">{producto.descripcion}</p>
            <a href={import.meta.env.BASE_URL + 'detalle/' + encodeURIComponent(producto.id)} class="boton-pill-full" style="background-color: #f2d973 !important; color: #1e293b !important; text-decoration: none !important;">
              <span style="color: #1e293b !important; font-weight: 700 !important; text-transform: none !important; letter-spacing: normal !important; margin: 0 !important;">Ver detalles</span>
            </a>
          </div>
        </div>
{/each}

        <!-- Tarjeta: Cadena En Forma De Girasol -->
        

        <!-- Tarjeta: Falda Floral -->
        
        </div>
      </div>
    </section>
  </main>

  <!-- 3. Footer Original del Proyecto (index.html) -->
<Footer pageAttributes={{"class":"sitio-footer","id":"pie-de-pagina"}} pageLinks={["index.html#heroe","index.html#sobre-nosotros","catalogo.html","index.html#contacto"]} />




