function Image(titulo, artista, anio) {
  this.titulo = titulo;
  this.artista = artista;
  this.anio = anio;
}

Image.prototype.show = function() {
  console.log(`Título: ${this.titulo}, Artista: ${this.artista}, Año: ${this.anio}`);
};

const images = {
  list: [],

  contains(titulo) {
      return this.list.some(imagen => imagen.titulo === titulo);
  },

  add(titulo, artista, anio) {
      if (!this.contains(titulo)) {
          const nuevaImagen = new Image(titulo, artista, anio);
          this.list.push(nuevaImagen);
      }
  },

  show() {
      if (this.list.length === 0) {
          console.log("No hay imágenes en la lista.");
      } else {
          this.list.forEach(imagen => {
              imagen.show();
          });
      }
  },

  clear() {
      this.list = [];
      console.log("La lista ha sido limpiada.");
  },

  edit(titulo, nuevoArtista, nuevoAnio) {
      const imagen = this.list.find(imagen => imagen.titulo === titulo);
      if (imagen) {
          imagen.artista = nuevoArtista;
          imagen.anio = nuevoAnio;
      } else {
          console.log(`La imagen "${titulo}" no fue encontrada.`);
      }
  },

  delete(titulo) {
      const index = this.list.findIndex(imagen => imagen.titulo === titulo);
      if (index !== -1) {
          this.list.splice(index, 1);
          console.log(`La imagen "${titulo}" ha sido eliminada.`);
      } else {
          console.log(`La imagen "${titulo}" no fue encontrada.`);
      }
  }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
