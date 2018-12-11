import { ArticulosService } from './../../providers/articulos.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos-list',
  templateUrl: './articulos-list.component.html',
  styleUrls: ['./articulos-list.component.scss'],
  providers: [ArticulosService]
})
export class ArticulosListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  articulos: Articulo[] = [];
  dtTrigger = new Subject();
  constructor(private articulosService: ArticulosService) { }

  ngOnInit() {
    this.dtOptions = {
      pageLength: 2
    };
    this.articulosService.listar(1)
      .subscribe((res: any) => {
        console.log(res);
        this.articulos = res;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }
}
export interface Articulo {
  AR_CCODIGO: string;
  AR_CDESCRI: string;
  AR_CDESCR2: string;
  AR_CCODIG2: string;
  AR_CUNIDAD: string;
  AR_CCUENTA: string;
  AR_NPRECI1: string;
  AR_NPRECI2: string;
  AR_NPRECI3: string;
  AR_NPRECI4: string;
  AR_NPRECI5: string;
  AR_NPRECI6: string;
  AR_CMONVTA: string;
  AR_NIGVPOR: string;
  AR_NISCPOR: string;
  AR_CTIPO: string;
  AR_CCONTRO: string;
  AR_CTIPDES: string;
  AR_NDESCTO: string;
  AR_NDESCT2: string;
  AR_NPDIS: string;
  AR_NPCOM: string;
  AR_CGRUPO: string;
  AR_CFAMILI: string;
  AR_CMODELO: string;
  AR_CLINEA: string;
  AR_NPESO: string;
  AR_NVOLUME: string;
  AR_NAREA: string;
  AR_NFACTOR: string;
  AR_NANCHO: string;
  AR_NLARGO: string;
  AR_CMONCOS: string;
  AR_NPRECOS: string;
  AR_DFECCOS: string;
  AR_CMONCOM: string;
  AR_NPRECOM: string;
  AR_DFECCOM: string;
  AR_CCODPRO: string;
  AR_CMONFOB: string;
  AR_NPREFOB: string;
  AR_NMARGE1: string;
  AR_NMARGE2: string;
  AR_CCLAART: string;
  AR_CPARARA: string;
  AR_CINFTEC: string;
  AR_CCATALO: string;
  AR_CCATEGO: string;
  AR_CTIPOI: string;
  AR_TOBSERV: string;
  AR_CUNIREF: string;
  AR_NFACREF: string;
  AR_CFUNIRE: string;
  AR_CFSTOCK: string;
  AR_CFDECI: string;
  AR_CFPRELI: string;
  AR_CFRESTA: string;
  AR_CFSERIE: string;
  AR_CFLOTE: string;
  AR_CFROTAB: string;
  AR_CUSUCRE: string;
  AR_CUSUMOD: string;
  AR_CESTADO: string;
  AR_DFECCRE: string;
  AR_DFECMOD: string;
  AR_CCODANT: string;
  AR_NDETRA: string;
  AR_CMEDIDA: string;
  AR_CANNO: string;
  AR_CGROSOR: string;
  AR_NIMAGEN: string;
  AR_CFECABC: string;
  AR_NLONSER: string;
  AR_CFCELU: string;
  AR_NLONCEL: string;
  AR_CMEDNEU: string;
  AR_CINDCAR: string;
  AR_CDISENO: string;
  AR_NPERC1: string;
  AR_NPERC2: string;
  AR_CMARCA: string;
  AR_CANOFAB: string;
  AR_CLUGORI: string;
  AR_CFVEHI: string;
  AR_CAYUVEN: string;
  AR_CCOLOR: string;
  AR_CTALLA: string;
  AR_CTIPEXI: string;
  AR_NMARVTA: string;
  AR_CHORSER: string;
  AR_NIGVCPR: string;
  AR_CCUENTR: string;
  AR_CFLGRCN: string;
  AR_NTASRCN: string;
  AR_CFORSER: string;
  AR_CCODAG1: string;
  AR_CCODAG2: string;
  AR_CCODAG3: string;
  AR_CCODAG4: string;
  AR_CCODAG5: string;
  AR_PERTOPE: string;
  AR_CTASTIP: string;
  AR_CTASISC: string;
  AR_CTASMON: string;
  AR_NTASEQU: string;
  AR_CTASUNI: string;
  AR_CTSIISC: string;
  AR_CTIPTAS: string;
  AR_CAFEDET: string;
}
