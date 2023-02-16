### 2/15 Whiteboard ###

# Push Dominoes
# There are n dominoes in a line, and we place each domino vertically upright. In the beginning, we simultaneously push some of the dominoes either to the left or to the right.

# After each second, each domino that is falling to the left pushes the adjacent domino on the left. 
# Similarly, the dominoes falling to the right push their adjacent dominoes standing on the right.

# When a vertical domino has dominoes falling on it from both sides, it stays still due to the balance of the forces.

# For the purposes of this question, we will consider that a falling domino expends no additional force to a falling or already fallen domino.

# You are given a string dominoes representing the initial state where:

# dominoes[i] = 'L', if the ith domino has been pushed to the left,
# dominoes[i] = 'R', if the ith domino has been pushed to the right, and
# dominoes[i] = '.', if the ith domino has not been pushed.
# Return a string representing the final state.


# ex.1
# Input: dominoes = "RR.L"
# Output: "RR.L"
# Explanation: The first domino expends no additional force on the second domino.

# ex.2 (picture)
# Input: dominoes = ".L.R...LR..L.."
# Output: "LL.RR.LLRRLL.."

def dominoes(string):
    arr = []
    for x in range(len(string)):
        arr.append(string[x])

    print(arr)
        
    i = 1
    new = []
    while i<len(arr)-1:
        if arr[i] == '.':
            if arr[i-1] == 'L' and arr[i+1] == 'R':
                new.append('.')
            elif arr[i-1] == 'L':
                new.append('.')
            elif arr[i+1] == 'R':
                new.append('.')
            i += 1
        elif arr[i] == 'L':
            if arr[i-1] == '.':
                new.append('L')
            new.append('L')
            i += 1
        elif arr[i] == 'R':
            if arr[i+1] == '.':
                new.append('R')
            new.append('R')
            i += 1

    print(new)


dominoes(".L.R...LR..L..")

def dominoes2(string):
    temp = ''
    while string != temp:
        temp = string
        string = string.replace('R.L', 'xxx')
        string = string.replace('R.', 'RR')
        string = string.replace('.L', 'LL')
    
    string = string.replace('xxx', 'R.L')

    return string


print(dominoes2(".L.R...LR..L.."))