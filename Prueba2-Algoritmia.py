# ejemplo del enunciado para hacer la prueba
list = [3,1,5,7,5,9]
sum = 10

def algoritmia(list, sum):
    solution = []
    for i in range(len(list)):
        for j in range(len(list)):
            # basta con comprobar que el indice de la tupla no sea el mismo, y que el indice del primer bucle sea menor que el del segundo y asi logramos:
            # 1. que si la suma es 10 y el primer elemento es un 5, no se añada la tupla [0,0]
            # 2. que no existan permutaciones de los pares
            if(i != j and i<j):
                if(list[i] + list[j] == sum):
                    aux = [i, j]
                    solution.append(aux)

    return solution
print (algoritmia(list, sum))
