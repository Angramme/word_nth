exports = n=>n < 1 ? null : "$"+`{\\text{${word}}^`.repeat(n-1)+
    `{\\text{${word}}`+"}".repeat(n)+"$";