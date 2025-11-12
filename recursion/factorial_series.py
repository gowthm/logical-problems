def factorial(n):
    if n==0 or n==1:
        return n;
    else:
        print(n)
        c = n*factorial(n-1)
        print(f'c={c} {n}')
       
        return c
print(factorial(5));