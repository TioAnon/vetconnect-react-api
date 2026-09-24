import { Body, Controller, Get, Post } from '@nestjs/common';
import { MascotasService } from './mascotas.service';

@Controller('mascotas')
export class MascotasController {
  constructor(private readonly mascotasService: MascotasService) {}

  @Get()
  obtenerTodas() {
    return this.mascotasService.obtenerTodas();
  }

  @Post()
  crear(@Body() nuevaMascota: any) {
    return this.mascotasService.crear(nuevaMascota);
  }
}