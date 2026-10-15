<script lang="ts">
  import './sobrenosotros.css';
  import { assetUrl } from '../../../../assets';
  // Props o lógica del componente
</script>

<section id="sobre-nosotros" class="fondo-principal sobre-seccion">
        <div class="cuadricula contenedor-seccion">
          <!-- Aquí va la imagen y debes usar la clase col-span-5 -->
          <div class="col-span-5">
            <!-- Aquí va la imagen solicitada -->
            <div class="contenedor-imagen">
              <img src={assetUrl("imagenes/sobrenosotros-imagen.webp")} alt="Trabajo artesanal en los detalles de una pieza de joyería" loading="lazy" class="imagen-estudio">
            </div>
          </div>

          <!-- Aquí va el texto y debes usar la clase col-span-7 -->
          <div class="col-span-7 sobre-texto-contenedor">
            <div class="sobre-nosotros-textos">
              <!-- Redacta aquí tu propio título con h2 y al menos dos párrafos con p -->
              <span class="seccion-etiqueta">Sobre nosotros</span>
              <h2 class="texto-secundario">Un espacio para encontrar <em>tu esencia.</em></h2>
              <p>En Emerald Boutique reunimos ropa y accesorios para que encuentres lo que te hace sentir tú. Elegimos piezas de buena calidad, a precios justos, para acompañarte en cada ocasión.</p>
              <p>Te escuchamos y te ayudamos a descubrir los colores y las prendas que más te favorecen. Queremos ser esa boutique de confianza a la que vuelves cuando buscas algo especial.</p>
            </div>
          </div>
        </div>
      </section>
