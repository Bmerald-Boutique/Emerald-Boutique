<script lang="ts">
  import './heroe.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section class="fondo-principal seccion-heroe" id="heroe">
        <div class="cuadricula contenedor-seccion contenedor-heroe">
          <div class="col-span-5 contenedor-texto">
            <span class="seccion-etiqueta">Tu esencia, tu estilo</span>
            <h1>
              Moda que trasciende
              <span class="text-secundario x fuente-elegante">tendencias.</span>
            </h1>
            <p>
              Prendas y accesorios elegidos por su calidad y elegancia. Descubre una colección atemporal que te acompaña y hace brillar tu estilo personal.
            </p>
            <div class="contenedor-boton">
              <a class="boton boton-secundario" href="#catalogo">Explorar colección</a>
              <a class="boton boton-blanco" href="#contacto">Hablemos de tu estilo</a>
            </div>
          </div>
          <div class="col-span-7 heroe-imagen-contenedor">
            <img src={assetUrl("imagenes/heroe-imagen.webp")} alt="Selección de moda de Emerald Boutique" fetchpriority="high" class="heroe-imagen">
          </div>
        </div>
      </section>
