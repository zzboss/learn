# print all prime number. ep: n=5 -> 2,3,5
import copy as copy
def findPrimeNum(n):
    arr = list(range(3,n+1,2))
    tmp = list(range(2,(n+1)//2))
    result = copy.deepcopy(arr)
    result.insert(1,2)
    for x in arr:
        for y in tmp:
            if x % y == 0 and x != y:
                result.remove(x)
                break
    return result
        
arr = findPrimeNum(10000)
print(len(arr))