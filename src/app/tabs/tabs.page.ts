import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor() { }

  setToken = {
    accessToken: "BD9xVS8hyW2XUzAGJcebEExWhK2m",
    developerApp: "miMovistar-Prod",
    expiresIn: "899",
    refreshToken: "eNrB9e3Flk4bXA3OHALsxFUJS4hjAjn8",
    mcsstoken: "UXF_SessionToken:6OC9yX66kbjVve1EK1IaYw==___currentencryptionkey___2neh1EYE519G/WxWf6/+b1np3ancJR/ly0jnQyFdDKl0d4F7djqMKfjpjYzL5X4PQhcmuCCx2eGuKPsQhoWu+a5WEIOga74ZUgiPFtSKYVAh6zxI4sgzwvzycXSU5iCWgxKeuBZJzpbjIyqiNfPg3TGBMLWvMi9rotcf2jY3GjpAASHvkEx40P/J2l1ZaXL9",
    mcsstokenbackup: "UXF_SessionToken:6OC9yX66kbjVve1EK1IaYw==___currentencryptionkey___2neh1EYE519G/WxWf6/+b1np3ancJR/ly0jnQyFdDKl0d4F7djqMKfjpjYzL5X4PQhcmuCCx2eGuKPsQhoWu+a5WEIOga74ZUgiPFtSKYVAh6zxI4sgzwvzycXSU5iCWgxKeuBZJzpbjIyqiNfPg3TGBMLWvMi9rotcf2jY3GjpAASHvkEx40P/J2l1ZaXL9"
  }
  
  setResponseBknd = {
    token: {
      codError: "0",
      codDesc: "OK",
      cliente: {
        id: {
          rut: "18024973",
          dv: "7"
        },
        nombre: "NICOLAS ANDRES",
        apellido_paterno: "GONZALEZ GOMEZ",
        apellido_materno: "",
        segmento: "",
        contacto: {
          mail: "nicolas.gonzalez.cl@gmail.com",
          sms: "972735346",
          preferido: ""
        },
        productos: {
          producto: [
            {
              id: "56988834619",
              tipo: "MOVIL",
              rol: "Titular",
              seleccion: "",
              preferido: "",
              idclie: "136474699",
              idcuen: "",
              rut_titular: "18024973-7",
              codsegmento: "",
              codcategoria: "",
              tipocontrato: "0",
              'vigente-desde': "",
              cod_sub_seg: "",
              desc_sub_seg: "",
              tipoContratoOri: "Contrato",
              permiso: {
                perfil: "1-0;"
              },
              estadomigrado: "migrado",
              idcontacto: ""
            },
            {
              id: "56984238545",
              tipo: "MOVIL",
              rol: "Titular",
              seleccion: "",
              preferido: "",
              idclie: "136474699",
              idcuen: "",
              rut_titular: "18024973-7",
              codsegmento: "",
              codcategoria: "",
              tipocontrato: "0",
              'vigente-desde': "",
              cod_sub_seg: "",
              desc_sub_seg: "",
              tipoContratoOri: "Contrato",
              permiso: {
                perfil: "1-0;"
              },
              estadomigrado: "migrado",
              idcontacto: ""
            },
            {
              id: "56972735346",
              tipo: "MOVIL",
              rol: "Titular",
              seleccion: "",
              preferido: "",
              idclie: "35528603",
              idcuen: "",
              rut_titular: "18024973-7",
              codsegmento: "",
              codcategoria: "",
              tipocontrato: "0",
              'vigente-desde': "",
              cod_sub_seg: "",
              desc_sub_seg: "",
              tipoContratoOri: "Contrato",
              permiso: {
                perfil: "1-0;"
              },
              estadomigrado: "migrado",
              idcontacto: ""
            },
            {
              id: "56232895920",
              tipo: "FIJA",
              rol: "Titular",
              seleccion: "",
              preferido: "",
              idclie: "784090758",
              idcuen: "",
              rut_titular: "18024973-7",
              codsegmento: "",
              codcategoria: "",
              tipocontrato: "0",
              'vigente-desde': "",
              cod_sub_seg: "",
              desc_sub_seg: "",
              tipoContratoOri: "Fija",
              permiso: {
                perfil: "1-0;"
              },
              estadomigrado: "nomigrado",
              idcontacto: ""
            },
            {
              id: "56961120309",
              tipo: "MOVIL",
              rol: "Usuario Autorizado",
              seleccion: "",
              preferido: "",
              idclie: "138756960",
              idcuen: "",
              rut_titular: "18024973-7",
              codsegmento: "",
              codcategoria: "",
              tipocontrato: "1",
              'vigente-desde': "",
              cod_sub_seg: "",
              desc_sub_seg: "",
              tipoContratoOri: "Prepago",
              permiso: {
                perfil: "1-0;"
              },
              estadomigrado: "migrado",
              idcontacto: ""
            }
          ]
        }
      }
    }
  }

  ngOnInit() {
    window.localStorage.setItem('token', JSON.stringify(this.setToken));
    window.localStorage.setItem('responseBknd', JSON.stringify(this.setResponseBknd));
  }
  

}
