let btnEnviar = document.getElementById("btnEnviar");
let container = document.querySelector("#container");
var clear = 0;

btnEnviar.addEventListener("click", (event) => {
  event.preventDefault();
  let listaTimes = gerarTimes();
  if(!validarListaTimes(listaTimes)){
    alert("Devem haver seis times válidos registrados");
    return;
  }
  let turno = gerarJogos(listaTimes);
  console.log(turno)
  imprimirRodadas("Rei - Turno", turno);
  var returno = gerarReturno(turno)
  imprimirRodadas("Rei - Returno", returno);
  clear++;
  gerarPontuacao(turno, listaTimes)
  gerarPontuacao(returno, listaTimes)
  setPontos(listaTimes)
  listaTimes.sort((a,b) => (a.pts < b.pts) ? 1 : ((b.pts < a.pts) ? -1 : 0)); 
  //console.log(listaTimes)
  imprimirTabelaCampeonato(listaTimes)
  

});


function gerarTimes(){
  let listaTimesFormatados = [];
  let listaTimes = document.getElementById("listaTimes").value;
  let arrayTimes1 = listaTimes.split("\n");

  arrayTimes1.map((elemento) => {
    let timeCidadeElemento = elemento.split(";");
    timeCidade = { nome: timeCidadeElemento[0], cidade: timeCidadeElemento[1], v:0, d:0, e:0, pts: 0 };
    listaTimesFormatados.push(timeCidade);
  });

  return listaTimesFormatados;
}

function validarListaTimes(listaTimes){
  if(listaTimes.length != 6){
    return false;
  }
  for(let i = 0; i < listaTimes.length; i++){
    const time = listaTimes[i];
    if(!time.nome || !time.cidade){
      return false;
    }
  }
  
  return true;
}


function gerarJogos(listaTimes){
  shuffle(listaTimes)
  var listaJogos = [];
  listaJogos.push({
    rodada : {
      jogo1 : {
        timeA : {
          nome : listaTimes[0].nome,
          cidade : listaTimes[0].cidade,
          gols : getRandonInt(0, 6)
        },
        timeB : {
          nome : listaTimes[5].nome,
          cidade : listaTimes[5].cidade,
          gols : getRandonInt(0, 6)
        }
      },
      jogo2 : {
        timeA : {
          nome : listaTimes[1].nome,
          cidade : listaTimes[1].cidade,
          gols : getRandonInt(0, 6)
        },
        timeB : {
          nome : listaTimes[4].nome,
          cidade : listaTimes[4].cidade,
          gols : getRandonInt(0, 6)
        }
      },
      jogo3 : {
        timeA : {
          nome : listaTimes[2].nome,
          cidade : listaTimes[2].cidade,
          gols : getRandonInt(0, 6)
        },
        timeB : {
          nome : listaTimes[3].nome,
          cidade : listaTimes[3].cidade,
          gols : getRandonInt(0, 6)
        }
      }
    }
  })
    listaJogos.push({
      rodada : {
        jogo1 : {
          timeA : {
            nome : listaTimes[4].nome,
            cidade : listaTimes[4].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[2].nome,
            cidade : listaTimes[2].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo2 : {
          timeA : {
            nome : listaTimes[3].nome,
            cidade : listaTimes[3].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[5].nome,
            cidade : listaTimes[5].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo3 : {
          timeA : {
            nome : listaTimes[0].nome,
            cidade : listaTimes[0].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[1].nome,
            cidade : listaTimes[1].cidade,
            gols : getRandonInt(0, 6)
          }
        }
      }
    })
    
    listaJogos.push({
      rodada : {
        jogo1 : {
          timeA : {
            nome : listaTimes[3].nome,
            cidade : listaTimes[3].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[4].nome,
            cidade : listaTimes[4].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo2 : {
          timeA : {
            nome : listaTimes[2].nome,
            cidade : listaTimes[2].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[0].nome,
            cidade : listaTimes[0].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo3 : {
          timeA : {
            nome : listaTimes[5].nome,
            cidade : listaTimes[5].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[1].nome,
            cidade : listaTimes[1].cidade,
            gols : getRandonInt(0, 6)
          }
        }
      }
    })
    listaJogos.push({
      rodada : {
        jogo1 : {
          timeA : {
            nome : listaTimes[1].nome,
            cidade : listaTimes[1].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[2].nome,
            cidade : listaTimes[2].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo2 : {
          timeA : {
            nome : listaTimes[0].nome,
            cidade : listaTimes[0].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[3].nome,
            cidade : listaTimes[3].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo3 : {
          timeA : {
            nome : listaTimes[4].nome,
            cidade : listaTimes[4].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[5].nome,
            cidade : listaTimes[5].cidade,
            gols : getRandonInt(0, 6)
          }
        }
      }
    })
    listaJogos.push({
      rodada : {
        jogo1 : {
          timeA : {
            nome : listaTimes[3].nome,
            cidade : listaTimes[3].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[1].nome,
            cidade : listaTimes[1].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo2 : {
          timeA : {
            nome : listaTimes[5].nome,
            cidade : listaTimes[5].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[2].nome,
            cidade : listaTimes[2].cidade,
            gols : getRandonInt(0, 6)
          }
        },
        jogo3 : {
          timeA : {
            nome : listaTimes[4].nome,
            cidade : listaTimes[4].cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : listaTimes[0].nome,
            cidade : listaTimes[0].cidade,
            gols : getRandonInt(0, 6)
          }
        }
      }
    })
  return listaJogos;
}

function gerarReturno(listaJogos){
  var listaReturno = []
  listaJogos.forEach(i => {
    var e = i.rodada;
    listaReturno.push({
      rodada : {
        jogo1 : {
          timeA : {
            nome : e.jogo1.timeB.nome,
            cidade : e.jogo1.timeB.cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : e.jogo1.timeA.nome,
            cidade : e.jogo1.timeA.nome,
            gols : getRandonInt(0, 6)
          }
        },
        jogo2 : {
          timeA : {
            nome : e.jogo2.timeB.nome,
            cidade : e.jogo2.timeB.cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : e.jogo2.timeA.nome,
            cidade : e.jogo2.timeA.nome,
            gols : getRandonInt(0, 6)
          }
        },
        jogo3 : {
          timeA : {
            nome : e.jogo3.timeB.nome,
            cidade : e.jogo3.timeB.cidade,
            gols : getRandonInt(0, 6)
          },
          timeB : {
            nome : e.jogo3.timeA.nome,
            cidade : e.jogo3.timeA.nome,
            gols : getRandonInt(0, 6)
          }
        }
      }
    })
  });
  return listaReturno;
}

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function imprimirRodadas(copa, jogos){
    if(clear > 0){
      container.innerHTML = ""
      clear = 0;
    }
    var tabela = document.createElement("table");
    container.appendChild(tabela)
    for(var i = 0; i < jogos.length; i++){
    var dupla = 0;
    var jogo = jogos[i].rodada;
      

    var linha1 = document.createElement("tr");
    tabela.appendChild(linha1)
    
    var coluna11 = document.createElement("td")
    linha1.appendChild(coluna11);

    var titulo = document.createElement("h2");
    titulo.innerHTML = "Rodada " + (i+1) + " da Copa " + copa;
    coluna11.appendChild(titulo)
      //
    var linha2 = document.createElement("tr");
    tabela.appendChild(linha2)

    var coluna21 = document.createElement("td")
    linha2.appendChild(coluna21);
    coluna21.innerHTML = jogo.jogo1.timeA.nome + " " + jogo.jogo1.timeA.gols + " x " + 
    jogo.jogo1.timeB.gols + " " + jogo.jogo1.timeB.nome  + " - "+ jogo.jogo1.timeA.cidade;
 

    var linha3 = document.createElement("tr");
    tabela.appendChild(linha3)

    var coluna22 = document.createElement("td")
    linha3.appendChild(coluna22);
    coluna22.innerHTML = jogo.jogo2.timeA.nome + " " + jogo.jogo2.timeA.gols + " x " + 
    jogo.jogo2.timeB.gols + " " + jogo.jogo2.timeB.nome + " - "+ jogo.jogo2.timeA.cidade;

 
    var linha4 = document.createElement("tr");
    tabela.appendChild(linha4)

    var coluna23 = document.createElement("td")
    linha4.appendChild(coluna23);
    coluna23.innerHTML = jogo.jogo3.timeA.nome + " " + jogo.jogo3.timeA.gols + " x " + 
    jogo.jogo3.timeB.gols + " " + jogo.jogo3.timeB.nome + " - "+ jogo.jogo3.timeA.cidade;

   
   if(jogo.jogo1.timeA.cidade == jogo.jogo2.timeA.cidade){
      coluna21.innerHTML += " (RODADA DUPLA **)"
      coluna22.innerHTML += " (RODADA DUPLA **)"
    }else if(jogo.jogo1.timeA.cidade == jogo.jogo3.timeA.cidade){
      coluna21.innerHTML += " (RODADA DUPLA **)"
      coluna23.innerHTML += " (RODADA DUPLA **)"
    }else if(jogo.jogo2.timeA.cidade == jogo.jogo3.timeA.cidade){
      coluna22.innerHTML += " (RODADA DUPLA **)"
      coluna23.innerHTML += " (RODADA DUPLA **)"
    }


    
    
  }


}

function gerarPontuacao(rodadas, times){
    rodadas.forEach(function(v){
      if(v.rodada.jogo1.timeA.gols > v.rodada.jogo1.timeB.gols){
        pontuar(times, v.rodada.jogo1.timeA.nome, "v")
        pontuar(times, v.rodada.jogo1.timeB.nome, "d")
      }else if(v.rodada.jogo1.timeA.gols < v.rodada.jogo1.timeB.gols){
        pontuar(times, v.rodada.jogo1.timeA.nome, "d")
        pontuar(times, v.rodada.jogo1.timeB.nome, "v")
      }else{
        pontuar(times, v.rodada.jogo1.timeA.nome, "e")
        pontuar(times, v.rodada.jogo1.timeB.nome, "e")
      }

      if(v.rodada.jogo2.timeA.gols > v.rodada.jogo2.timeB.gols){
        pontuar(times, v.rodada.jogo2.timeA.nome, "v")
        pontuar(times, v.rodada.jogo2.timeB.nome, "d")
      }else if(v.rodada.jogo2.timeA.gols < v.rodada.jogo2.timeB.gols){
        pontuar(times, v.rodada.jogo2.timeA.nome, "d")
        pontuar(times, v.rodada.jogo2.timeB.nome, "v")
      }else{
        pontuar(times, v.rodada.jogo2.timeA.nome, "e")
        pontuar(times, v.rodada.jogo2.timeB.nome, "e")
      }

      if(v.rodada.jogo3.timeA.gols > v.rodada.jogo3.timeB.gols){
        pontuar(times, v.rodada.jogo3.timeA.nome, "v")
        pontuar(times, v.rodada.jogo3.timeB.nome, "d")
      }else if(v.rodada.jogo3.timeA.gols < v.rodada.jogo3.timeB.gols){
        pontuar(times, v.rodada.jogo3.timeA.nome, "d")
        pontuar(times, v.rodada.jogo3.timeB.nome, "v")
      }else{
        pontuar(times, v.rodada.jogo3.timeA.nome, "e")
        pontuar(times, v.rodada.jogo3.timeB.nome, "e")
      }

      
    })
}

function pontuar(times, time, v){
  times.forEach(function(t){
    if(time == t.nome){
      if(v == "v"){
        t.v++
      }else if(v == "d"){
        t.d++
      }else{
        t.e++
      }
    }
    
  })
}

function setPontos(listaTimes){
  listaTimes.forEach(function(t){
    t.pts = (t.v * 3) + t.e
  })
}

function imprimirTabelaCampeonato(listaTimes){
  var tabela = document.createElement("table");
  tabela.classList.add("classificacao")
  container.appendChild(tabela);
      var linha1 = document.createElement("tr")
      tabela.appendChild(linha1)
      
      var th0 = document.createElement("td")
      th0.innerHTML = "Classificação"
      linha1.appendChild(th0);

      var th1 = document.createElement("td")
      th1.innerHTML = "Pontos"
      linha1.appendChild(th1);

      var th2 = document.createElement("td")
      th2.innerHTML = "V"
      linha1.appendChild(th2);

      var th3 = document.createElement("td")
      th3.innerHTML = "D"
      linha1.appendChild(th3);

      var th4 = document.createElement("td")
      th4.innerHTML = "E"
      linha1.appendChild(th4);

  listaTimes.forEach(function(t){
    var linha2 = document.createElement("tr")
    tabela.appendChild(linha2)
    
    var th20 = document.createElement("td")
    th20.innerHTML = t.nome
    linha2.appendChild(th20);

    var th21 = document.createElement("td")
    th21.innerHTML = t.pts
    linha2.appendChild(th21);

    var th22 = document.createElement("td")
    th22.innerHTML = t.v
    linha2.appendChild(th22);

    var th23 = document.createElement("td")
    th23.innerHTML = t.v
    linha2.appendChild(th23);

    var th24 = document.createElement("td")
    th24.innerHTML = t.e
    linha2.appendChild(th24);

  })
}

function getRandonInt(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

