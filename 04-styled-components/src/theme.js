const sharedStyles = {
  sombraMd: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  sombraXl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  raioBorda: '0.5rem',
  duracaoTransicao: '250ms',
};

export const lightTheme = {
  ...sharedStyles,
  corFundo: '#f5f3ff', 
  corSuperficie: '#ffffff', 
  corTextoPrimario: '#1e1b4b', 
  corTextoSecundario: '#5b21b6',
  corPrimaria: '#7c3aed', 
  corPrimariaHover: '#6d28d9',
  corBorda: '#ddd6fe',
  corSkeletonBase: '#eef2ff',
};

export const darkTheme = {
  ...sharedStyles,
  corFundo: '#1e1b4b', 
  corSuperficie: '#312e81',
  corTextoPrimario: '#f5f3ff',
  corTextoSecundario: '#a78bfa',
  corPrimaria: '#a78bfa',
  corPrimariaHover: '#8b5cf6',
  corBorda: '#4338ca',
  corSkeletonBase: '#4f46e5',
};