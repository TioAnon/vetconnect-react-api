import { Injectable } from '@nestjs/common';

@Injectable()
export class MascotasService {
  private mascotas = [
    {
      id: 1,
      nombre: 'Firulais',
      especie: 'Perro',
      edad: 5,
      vacunada: true,
    },
    {
      id: 2,
      nombre: 'Michi',
      especie: 'Gato',
      edad: 3,
      vacunada: false,
    },
  ];

  obtenerTodas() {
    return this.mascotas;
  }

  crear(nuevaMascota: any) {
    const mascota = {
      id: Date.now(),
      ...nuevaMascota,
    };
    this.mascotas.push(mascota);
    return mascota;
  }
}