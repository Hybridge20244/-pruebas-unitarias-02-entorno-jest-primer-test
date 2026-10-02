import { Request, Response } from 'express';
import {
  obtenerTodasLasTareas,
  crearTarea as crearTareaService
} from '../services/tareas.service';

export function obtenerTareas(req: Request, res: Response): void {
  res.json(obtenerTodasLasTareas());
}

export function crearTarea(req: Request, res: Response): void {
  const { titulo, descripcion } = req.body;

  if (!titulo || !descripcion) {
    res.status(400).json({
      mensaje: 'El título y la descripción son obligatorios'
    });
    return;
  }

  const nuevaTarea = crearTareaService({
    titulo,
    descripcion,
    completada: false
  });

  res.status(201).json(nuevaTarea);
}