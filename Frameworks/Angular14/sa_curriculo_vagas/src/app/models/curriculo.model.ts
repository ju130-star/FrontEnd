export class Curriculo {
  constructor(
    public id: number,
    public nome: string,
    public idade: number,
    public estadoCivil: string,
    public email: string,
    public telefone: string,
    public formacao: string,
    public experiencia: string,
    public habilidades: string,
    public usuarioId: number 
  ) {}

  toMap(): { [key: string]: any } {
    return {
      id: this.id,
      nome: this.nome,
      idade: this.idade,
      estadoCivil: this.estadoCivil,
      email: this.email,
      telefone: this.telefone,
      formacao: this.formacao,
      experiencia: this.experiencia,
      habilidades: this.habilidades,
      usuarioId: this.usuarioId
    };
  }

  static fromMap(map: any): Curriculo {
    return new Curriculo(
      map.id,
      map.nome,
      map.idade,
      map.estadoCivil,
      map.email,
      map.telefone,
      map.formacao,
      map.experiencia,
      map.habilidades,
      map.usuarioId
    );
  }
}
