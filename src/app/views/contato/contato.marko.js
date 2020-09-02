// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/pousada-vale-verde$1.0.0/src/app/views/contato/contato.marko",
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

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><title>Pousada Vale Verde</title><link rel=\"stylesheet\" href=\"/resource/fonts/fontawesome/css/all.css\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css\" integrity=\"sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z\" crossorigin=\"anonymous\"><link rel=\"stylesheet\" href=\"/resource/css/styles.css\"><link rel=\"stylesheet\" href=\"/resource/css/contato.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<header><nav class=\"navbar navbar-expand-lg navbar-light bg-light\"><a class=\"navbar-brand\" href=\"#\"><i class=\"fas fa-hotel mr-2\"></i> Vale Verde</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/quartos\">Quartos</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/reserva\">Reserva</a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/contato\">Contato</a></li></ul><button type=\"button\" class=\"btn btn-dark\"><a href=\"/admin/reservas\" class=\"text-white\"><i class=\"fas fa-user-lock mr-2\"></i></a></button></div></nav></header><section><div id=\"banner-contato\"><iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.7707345214453!2d-37.06527758460871!3d-8.424162293941828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a81b936b5a5a8d%3A0xf38e1fd85e475ec0!2sR.+Orlando+Bpo.+de+Queir%C3%B3z%2C+406+-+S%C3%A3o+Miguel%2C+Arcoverde+-+PE!5e0!3m2!1spt-BR!2sbr!4v1504474485005\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe></div><div id=\"contato\" class=\"container\"><div class=\"row text-center\"><h2>Contato</h2></div><div class=\"col-md-6 col-formulario\"><form class=\"formulario\" name=\"contatoform\" method=\"post\" action=\"/contato\"><label for=\"email\"></label><input id=\"nome\" type=\"text\" name=\"nome\" class=\"cont bradius\" placeholder=\"Digite o seu nome\" size=\"30\" maxlength=\"50\"><br><label for=\"email\"></label><input id=\"email\" type=\"text\" name=\"email\" class=\"cont bradius\" placeholder=\"Digite seu email\" size=\"30\" maxlength=\"50\"><br><label for=\"assunto\"></label><input id=\"assunto\" type=\"text\" name=\"assunto\" class=\"cont bradius\" placeholder=\"Digite o assunto\" size=\"30\" maxlength=\"50\"><br><label for=\"mensagem\"></label><textarea id=\"mensagem\" name=\"mensagem\" class=\"men bradius\" rows=\"8\" cols=\"50\"></textarea><br><button type=\"submit\" class=\"sb bradius\">Enviar</button></form></div></div></section><script src=\"https://code.jquery.com/jquery-3.5.1.slim.min.js\" integrity=\"sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj\" crossorigin=\"anonymous\"></script><script src=\"https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js\" integrity=\"sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js\" integrity=\"sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "53");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/pousada-vale-verde$1.0.0/src/app/views/contato/contato.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
