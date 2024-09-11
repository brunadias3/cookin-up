export function receitasComItensDeLista2(lista1: string[], lista2: string[]): string[] {
  console.log('list1', lista1);
  console.log('list2', lista2);

  // Filtra receitas (ou itens) da lista1 que contém todos os ingredientes de lista2
  const receitasFiltradas = lista1.filter((receita) =>
    lista2.every((ingrediente) => receita.includes(ingrediente))
  );

  return receitasFiltradas;
}
