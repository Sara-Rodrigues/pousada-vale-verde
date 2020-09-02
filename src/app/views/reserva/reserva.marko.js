// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada-vale-verde$1.0.0/src/app/views/reserva/reserva.marko",
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

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Pousada Vale Verde</title><link rel=\"stylesheet\" href=\"/resource/fonts/fontawesome/css/all.css\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/resource/css/styles.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-hotel mr-2\"></i> Vale Verde</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/quartos\">Quartos</a></li><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/reserva\">Reserva</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/contato\">Contato</a></li></ul><button type=\"button\" class=\"btn btn-dark\"><a href=\"/admin/reservas\" class=\"text-white\"><i class=\"fas fa-user-lock mr-2\"></i></a></button></div></nav></header><div id=\"reserva\" class=\"container\"><h1 class=\"mt-3 mb-3\">Reservar quarto</h1><form action=\"/reserva\" method=\"POST\"><div class=\"form-group\"><label for=\"id_quarto\">Quarto</label><input type=\"number\" class=\"form-control\" id=\"id_quarto\" name=\"id_quarto\" placeholder=\"Digite o número do quarto\"></div><div class=\"form-group\"><label for=\"id_usuario\">Cliente</label><input type=\"number\" class=\"form-control\" id=\"id_usuario\" name=\"id_usuario\" placeholder=\"Digite o id do cliente\"></div><div class=\"form-group\"><label for=\"data_inicio\">Entrada</label><input type=\"date\" class=\"form-control\" id=\"data_inicio\" name=\"data_inicio\" placeholder=\"Digite a data de entrada\"></div><div class=\"form-group\"><label for=\"data_saida\">Saída</label><input type=\"date\" class=\"form-control\" id=\"\" name=\"data_saida\" placeholder=\"Digite a data de saída\"></div><button type=\"submit\" class=\"btn btn-dark\">Reservar</button></form></div><footer><div class=\"rodape\"><div class=\"col\"><div class=\"col-address\"><h4>ENDEREÇO</h4><p>R. Orlando Bpo. de Queiróz, 406<br> São Miguel, Arcoverde - PE, 56509-330<br> Tel: +52 984 980 0640</p></div></div><div class=\"col\"><ul class=\"redes-sociais\"><li><a href=\"#\" target=\"_blank\"><i class=\"fab fa-facebook-f\"></i></a></li><li><a href=\"#\" target=\"_blank\"><i class=\"fab fa-instagram\"></i></a></li></ul></div></div><div class=\"copyright\"><p>Copyright © Pousada Vale Verde 2020 - Todos os Direitos Reservados</p></div></footer>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "62");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pousada-vale-verde$1.0.0/src/app/views/reserva/reserva.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
