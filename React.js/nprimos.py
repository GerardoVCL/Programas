def Nprimos(A):
    cont = 0
    numero = 2
    divisor = 2
    primo = True
    while cont != A:
      while divisor != 2:
        if (numero != 2) and (numero%(divisor-1)) == 0 :
          primo = False
          break
        else:
          divisor = divisor - 1
      if (primo == True):
        print(numero)
        cont = cont + 1
        divisor = numero
        numero = numero + 1   
      else:
        divisor = numero
        numero = numero + 1
        primo = True
    return

Nprimos(168)