# reverse a character string. ep: 'hello world' -> 'world hello'
def reverseString(s):
    arr = s.split(' ')
    arr.reverse()
    return ' '.join(arr)

print(reverseString('hello world'))
print(reverseString('1 2 3 4 5 6 7'))


