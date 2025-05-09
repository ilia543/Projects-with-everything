def func(numb, whicsystem):
    if whicsystem == "decimal to binary" or whicsystem == "decimal to octal" or whicsystem == "decimal to hexadecimal":

        numb = int(numb)
        result = []

        while numb != 0:
            if whicsystem == "decimal to binary":
                result.append(str(numb % 2))
                numb //= 2

            elif whicsystem == "decimal to octal":
                result.append(str(numb % 8))
                numb //= 8

            elif whicsystem == "decimal to hexadecimal":
                v = 0
                r = numb % 16
                if r == 10:
                    v = "a"
                elif r == 11:
                    v = "b"
                elif r == 12:
                    v = "c"
                elif r == 13:
                    v = "d"
                elif r == 14:
                    v = "e"
                elif r == 15:
                    v = "f"
                else:
                    v = str(r)
                result.append(v)
                numb //= 16

        result = result[::-1]
        return "".join(result)
    
    else:

        xarisxi = -1

        numb = numb.split()
        numb = numb[::-1]

        result = []

        for i in numb:

            xarisxi += 1

            if whicsystem == "binary to decimal":
                result.append(int(i) * (2 ** xarisxi))

            elif whicsystem == "octal to decimal":

                if int(i) >= 8:
                    return "ესეთი რიცხვი რვაობით სისტემაში არ არსებობს"
                
                else:
                    result.append(int(i) * (8 ** xarisxi))

            elif whicsystem == "hexadecimal to decimal":
                result.append(int(i) * (16 ** xarisxi))

        return sum(result)
    
    
print(func("1 1 1 1 0 1 0 0 1", "binary to decimal"))
print(func("1 3 4 6", "octal to decimal"))
print(func("1 3 4 6", "hexadecimal to decimal"))
print(func("53", "decimal to binary"))
print(func("127", "decimal to octal"))
print(func("424", "decimal to hexadecimal"))
