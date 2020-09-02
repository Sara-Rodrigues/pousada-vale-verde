// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada-vale-verde$1.0.0/src/app/views/quartos/quartos.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Pousada Vale Verde</title><link rel=\"stylesheet\" href=\"/resource/fonts/fontawesome/css/all.css\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/resource/css/styles.css\"><link rel=\"stylesheet\" href=\"/resource/css/quartos.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-hotel mr-2\"></i> Vale Verde</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">Home</a></li><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/quartos\">Quartos</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/reserva\">Reserva</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/contato\">Contato</a></li></ul><button type=\"button\" class=\"btn btn-dark\"><a href=\"/admin/reservas\" class=\"text-white\"><i class=\"fas fa-user-lock mr-2\"></i></a></button></div></nav></header><div id=\"quartos\"><h1>Conheça os nossos quartos</h1><p>A Pousada Vale Verde possui 14 acomodações, decoradas com carinho e preocupação de detalhes. Todos construídos com total atenção de forma a preservar a privacidade, sossego e permitir uma excelente estadia aos nossos hóspedes. Além disto, são espaçosos, arejados e bem higienizados.<br><br> ESCOLHA SUA ACOMODAÇÃO E FAÇA SUA RESERVA.</p><div class=\"content\"><div class=\"apartamento\"><img src=\"/resource/images/apto1.jpeg\" alt=\"...\"><div class=\"card\"><h2>Apartamento</h2><a href=\"/quartos/apartamento\">Ver quartos</a></div></div><div class=\"vip\"><img src=\"/resource/images/apto2.jpeg\" alt=\"...\"><div class=\"card\"><h2>VIP</h2><a href=\"/quartos/vip\">Ver quartos</a></div></div></div></div><footer><div class=\"rodape\"><div class=\"col\"><div class=\"col-address\"><h4>ENDEREÇO</h4><p>R. Orlando Bpo. de Queiróz, 406<br> São Miguel, Arcoverde - PE, 56509-330<br> Tel: +52 984 980 0640</p></div></div><div class=\"col\"><ul class=\"redes-sociais\"><li><a href=\"#\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li><li><a href=\"#\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li></ul></div></div><div class=\"copyright\"><p>Copyright © Pousada Vale Verde 2020 - Todos os Direitos Reservados</p></div></footer><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity=\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "66");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pousada-vale-verde$1.0.0/src/app/views/quartos/quartos.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
