function Image(titulo, artista, anio) {
  this.titulo = titulo;
  this.artista = artista;
  this.anio = anio;
}

const images = {
  list: [],

  contains(titulo) {
      return this.list.some(imagen => imagen.titulo === titulo);
  },

  add(titulo, artista, anio) {
      if (!this.contains(titulo)) {
          const nuevaImagen = new Image(titulo, artista, anio);
          this.list.push(nuevaImagen);
      } else {
          console.log(`La imagen "${titulo}" ya está en la lista.`);
      }
  },

  show() {
      if (this.list.length === 0) {
          console.log("No hay imágenes en la lista.");
      } else {
          this.list.forEach(imagen => {
              console.log(`Título: ${imagen.titulo}, Artista: ${imagen.artista}, Año: ${imagen.anio}`);
          });
      }
  },

  clear() {
      this.list = [];
      console.log("La lista ha sido limpiada.");
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
images.clear();
images.show();
