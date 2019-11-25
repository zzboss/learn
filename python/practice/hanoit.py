# a to c with b
def hanoit(n, a, b, c):
    if n == 1:
        print(str(1) + ':' + a + ' -> ' + c)
    else :
        hanoit(n-1, a, c, b)
        print(str(n) + ':' + a + ' -> ' + c)
        hanoit(n-1, b, a, c)

hanoit(3, 'A', 'B', 'C')