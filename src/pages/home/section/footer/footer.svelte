<script lang="ts">
  import './footer.css';
  import { assetUrl } from '../../../../assets';
  export let pageAttributes: Record<string, string> = {};
  export let pageLinks: string[] = [];
  function configureRoot(node: HTMLElement, config: { attributes: Record<string, string>; links: string[] }) {
    const update = (value: typeof config) => {
      Object.entries(value.attributes).forEach(([name, content]) => node.setAttribute(name, content));
      node.querySelectorAll('a').forEach((link, index) => {
        if (value.links[index] !== undefined) link.setAttribute('href', value.links[index]);
      });
    };
    update(config);
    return { update };
  }
</script>
<footer use:configureRoot={{ attributes: pageAttributes, links: pageLinks }} class="sitio-footer" id="pie-de-pagina">
      <div class="contenedor-footer">
        <!-- Columna única central -->
        <div class="footer-col-center">
          <h3 class="footer-brand">Emerald-Boutique</h3>
          <p class="footer-desc">
            Esta es una pagina donde puedes encontrar gran variedad de productos
            para brillar y encontrar tu luz por medio de todos nuestro servicios
          </p>
          <ul class="footer-links-inline">
            <li><a href="#heroe" class="footer-link">Inicio</a></li>
            <li>
              <a href="#sobre-nosotros" class="footer-link">Sobre Nosotros</a>
            </li>
            <li><a href="#catalogo" class="footer-link">Catálogo</a></li>
            <li><a href="#contacto" class="footer-link">Contacto</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="contenedor-footer">
          <p class="footer-copyright">© 2026 Emerald-Boutique</p>
        </div>
      </div>
    </footer>