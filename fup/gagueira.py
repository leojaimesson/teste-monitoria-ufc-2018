def eVogal(letra):
    return letra.lower() in "aeiou"

def pegarSilabaGaga(palavra):
    silaba = "" + palavra[0]
    for indiceLetra in range(1, len(palavra)):
        if eVogal(palavra[indiceLetra - 1]) and (not eVogal(palavra[indiceLetra])):
            return silaba
        else:
            silaba += palavra[indiceLetra]
    return silaba

def montarFraseGaga(palavras):
    fraseGaguejada = ""
    for palavra in palavras:
        silabaGaga = pegarSilabaGaga(palavra)
        if silabaGaga != palavra:
            fraseGaguejada += silabaGaga + silabaGaga + palavra + " "
        else:
            fraseGaguejada += palavra + " "
    return fraseGaguejada

entrada = raw_input("")

print montarFraseGaga(entrada.split(" "))
