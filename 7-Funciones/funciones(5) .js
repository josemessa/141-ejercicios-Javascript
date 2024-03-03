// Usa el algoritmo de Euclides para diseñar una función que determine el máximo común divisor de dos números. Bueno este algoritmo es bien simple. Para clacular el mcd de A y B:

// Si A = 0 entonces MCD(A,B)=B, ya que el MCD(0,B)=B, y podemos detenernos.  
// Si B = 0 entonces MCD(A,B)=A, ya que el MCD(A,0)=A, y podemos detenernos.  
// Calcula el resto de A/B
// Asigna a A el valor de B
// Asigna a B el resto
// Repite hasta que A o B sean 0.