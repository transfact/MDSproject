import sys

result=""

for arg in sys.argv[1:]:
    result+=str(arg).upper()+" "
print(result)