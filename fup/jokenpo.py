def buscarVencedor(jogador01, jogador02):
    if jogador01 == jogador02:
        return "empate"
    if jogador01 < jogador02 and jogador01 + 4 > jogador02:
        return "jog1"
    if jogador01 > jogador02 and jogador01 > jogador02 + 4:
        return "jog1"
    return "jog2"

jogador01 = raw_input("")
jogador02 = raw_input("")

listaJogadas = [ "human", "sponge", "paper", "air", "water", "gun", "rock", "fire", "scissors" ]

print buscarVencedor( listaJogadas.index(jogador01), listaJogadas.index(jogador02) )
