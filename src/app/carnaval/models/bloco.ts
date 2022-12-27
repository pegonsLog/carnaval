export interface Bloco {
  id: number;
  name: string;
  link: string;
}

export interface Blocos extends Array<Bloco> {}
