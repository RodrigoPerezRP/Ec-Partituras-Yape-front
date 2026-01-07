export interface Partitura{
    id: number 
    nombre: string 
    descripcion: string 
    precio: string 
    dificultad: string 
    arreglista: string 
    slug: string 
    portada: string 
    datecreated: string
    tieneFinale: boolean
    tieneAudio: boolean 
    tieneDestacado: boolean
    categoria?: Categoria
}

export interface Categoria{
    id: number 
    nombre: string
}