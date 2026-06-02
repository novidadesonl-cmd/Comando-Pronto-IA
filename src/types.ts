export type PromptCategory =
  | 'reels'
  | 'post'
  | 'legenda'
  | 'anuncio'
  | 'whatsapp'
  | 'objecoes'
  | 'pagina'
  | 'calendario'
  | 'humanizar'
  | 'oferta';

export type PromptFormData = {
  nicho: string;
  produto: string;
  publico: string;
  dor: string;
  desejo: string;
  tom: string;
  canal: string;
  objetivo: string;
  observacoes: string;
};

export type PromptTemplate = {
  id: PromptCategory;
  label: string;
  description: string;
  role: string;
  output: string;
  example: PromptFormData;
};
