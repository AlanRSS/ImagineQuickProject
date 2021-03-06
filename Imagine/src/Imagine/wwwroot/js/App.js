﻿(function () {
    var app = angular.module('Imagine', []);
    
    app.controller('home', function ($rootScope, $scope) {
        var self = this;   
        $scope.selectTab = function (id) {
            if (tab != id-1) {
                tab = id-1;
                var pages = ["#p1", "#p2", "#p3", "#p4"];
                setTimeout(function () {
                    var pages = ["#p1", "#p2", "#p3", "#p4"];
                    $.each(pages, function (index, object) {
                        $(object).css("display", "none")
                    });
                }, 200);
                setTimeout(function () {
                    $(pages[id - 1]).css({ "display": "block", "opacity": "1" });

                }, 260);
                $.each(pages, function (index, object) {
                    $(object).css("opacity", "0");
                });
            }
             
        }
        this.objects = [{
            "nome": "#As Ferramentas",
            "texto": "As ferramentas certas para produzir melhor.",
            "src": "../images/Cogs.png",
            "id": 2
        }, {
            "nome": "#O Time",
            "texto": "Um conjunto coeso é chave para o sucesso.",
            "src": "../images/team.png",
            "id": 3
        },{
            "nome": "#Eu",
            "texto": "Auto-conhecimento e dicas para o desenvolvimento contínuo.",
            "src": "../images/cool.png",
            "id": 4
    }];
    });
    app.controller('ferramentas', function () {
        this.move = function (url) {
            window.location.assign(url);
        }
        this.plat = {
            "nome": "ASP.NET",
            "texto": "ASP.NET é uma plataforma desenvolvida pela Microsoft para desenvolvimento Web e produção de páginas dinâmicas, foi desenvolvida pela Microsoft e teve o seu Debut em 2002/Jan.",
            "bullets": ["ASP.NET 5, É a mais nova versão da plataforma, que traz consigo grandes melhorias de performance;", "Multiplataforma;", "Open source e focado à comunidade;", "Pronto para a Cloud;", "Suporte para injecção de dependências."],
            "url": "http://www.asp.net/"
        };
        this.ide = [{
            "nome": "Visual Studio",
            "texto": "IDE(integrated development environment), ambiente de desenvolvimento integrado, Possuí múltiplas funções que permitem desenvolver diversos tipos de aplicações:",
            "bullets": ["Editor de código;", "Debugger/depurador;", "Designer;", "Team Explorer;", "Suporta C, C++, VB, C#, F# e também M, Python, Ruby e outros através da instalação de serviços;", "Intelissense;", "Nuget."],
            "src": "../images/VS.png",
            "url": "https://www.visualstudio.com/products/visual-studio-community-vs"
        }, {
            "nome": "Visual Studio Code",
            "texto": "IDE leve desenvolvido pela Microsoft para desenvolvimento de programas, websites e etc",
            "bullets": ["Editor de Texto;", "Multiplataformas;", "Assistência por via de cores para Batch, C++, CoffeeScript, DockerFile, F#, Java, HandleBars, Ini, Lua, Makefile, Objective-C, Perl, PowerShell, Python, R, Razor, Ruby, Rust, SQL, Visual Basic e XML;", "Utilização de linha de comandos para execução de certas tarefas;", "Debugger/Depurador;", "Git integrado;", "Intelissense;", "Suporte de NPM."],
            "src": "/images/VSCode.png",
            "url": "https://www.visualstudio.com/products/code-vs"
        }];
        this.tpa = [{
            "nome": "Bootstrap",
            "texto": "Crie aplicações com visuais e funcionalidades incríveis.",
            "src": "../images/BS.png",
            "url": "http://getbootstrap.com/"
        },{
            "nome": "Jquery",
            "texto": "Manipulação, gestão de eventos, posts e Ajax requests simplificadas.",
            "src": "../images/jquery.jpg",
            "url": "https://jquery.com/"
        },{
            "nome": "Bower",
            "texto": "Gestão de recursos e componentes automatizada.",
            "src": "../images/Bower.png",
            "url": "http://bower.io/"
        },{
            "nome": "Gulp",
            "texto": "Automatização de processos como  compressão de imagens, minifiação de ficheiros, e mais.",
            "src": "../images/gulp.png",
            "url": "http://gulpjs.com/"
        },{
            "nome": "AngularJS",
            "texto": "Client-side MVC.",
            "src": "../images/ajs.png",
            "url": "http://angularjs.org"
        },{
            "nome": "Git",
            "texto": "Controlo de versão.",
            "src": "../images/Octocat.png",
            "url": "https://git-scm.com/"
        }];
    });
    app.controller('team', function () {
        this.tips = ["Imaginem o resultado e construam reversamente;", "Tomada de decisão em conjunto;", "Comunicação aberta e respeitosa;", "Criar expectativas reais;", "Conhecer o grupo;", "Todos são alunos e professores;", "Criatividade e Inovação."];
    })
    app.controller('eu', function () {
        this.tips = ["Know Yourself, O auto-conhecimento dos nossos pontos fortes e fracos permite-nos aproveitar o melhor de nós;","A mente também precisa de descansar, fazer intervalos é importante;","Preparação prévia e refinamento das suas habilidades na plataforma de escolha para criar mais dinamicamente."];
    })
})();
var tab = 0;
