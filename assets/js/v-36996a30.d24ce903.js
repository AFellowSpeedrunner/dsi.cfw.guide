"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6866],{13554:(e,a,l)=>{l.r(a),l.d(a,{data:()=>n});const n={key:"v-36996a30",path:"/es_ES/dumping-nand.html",title:"Hacer Copia de Seguridad de la NAND",lang:"es-ES",frontmatter:{title:"Hacer Copia de Seguridad de la NAND"},excerpt:"",headers:[{level:2,title:"Sección I - Configuración de la tarjeta SD",slug:"seccion-i-configuracion-de-la-tarjeta-sd",children:[]},{level:2,title:"Seccion II - Volcar la NAND",slug:"seccion-ii-volcar-la-nand",children:[]}],filePathRelative:"es_ES/dumping-nand.md"}},70097:(e,a,l)=>{l.r(a),l.d(a,{default:()=>k});var n=l(66252);const o=(0,n.uE)('<p>Esta página es para hacer un respaldo de la NAND, es decir, una copia de los datos en el almacenamiento interno de la consola. Puedes usar este respaldo para configurar HiyaCFW, también para usarlo con los emuladores no$gba y melonDS para emular una consola Nintendo DSi.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Asegúrate de que la tarjeta SD tenga al menos 250MB de espacio libre, o de lo contrario te encontrarás con un mensaje de error en dumpTool.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Se recomienda encarecidamente realizar este proceso. Un respaldo de la NAND de tu consola se puede usar para restaurar el sistema en el futuro, en caso que tu sistema deje de funcionar.</p></div><h2 id="seccion-i-configuracion-de-la-tarjeta-sd" tabindex="-1"><a class="header-anchor" href="#seccion-i-configuracion-de-la-tarjeta-sd" aria-hidden="true">#</a> Sección I - Configuración de la tarjeta SD</h2><p>::: consejo</p><p>Si ya has descargado dumpTool desde otra sección de esta guía, puedes saltarte esta sección.</p><p>:::</p>',7),r={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},i=(0,n._)("li",null,[(0,n.Uk)("Coloca "),(0,n._)("code",null,"dumpTool.nds"),(0,n.Uk)(" en cualquier lugar de tu tarjeta SD")],-1),d=(0,n.uE)('<h2 id="seccion-ii-volcar-la-nand" tabindex="-1"><a class="header-anchor" href="#seccion-ii-volcar-la-nand" aria-hidden="true">#</a> Seccion II - Volcar la NAND</h2><ol><li>Inicia <code>dumpTool</code> desde TWiLight Menu++</li><li>Presiona el botón <kbd class="face">A</kbd> de la Nintendo DSi para empazar a volcar la NAND <ul><li>Hacer un respaldo de la NAND usualmente toma al rededor de 7 minutos</li></ul></li><li>Cuando el respaldo esté completo, presiona el botón <kbd>START</kbd> de tu consola para salir de dumpTool</li><li>Apaga la consola e introduce la tarjeta SD en tu dispositivo</li><li>Guarda este respaldo en un lugar seguro, donde no puedas perderlo <ul><li>De ser posible, haz multiples copias y almacénalas en dispositivos distintos</li><li>Cuando lo hayas guardado en otro lugar, puedes borrarlo de la tarjeta SD</li></ul></li></ol><p>::: advertencia</p>',3),s=(0,n._)("code",null,"nand.bin",-1),t=(0,n._)("code",null,"nand.bin.sha1",-1),c=(0,n._)("code",null,"nand.bin",-1),u={href:"https://github.com/mondul/HiyaCFW-Helper/releases",target:"_blank",rel:"noopener noreferrer"},p=(0,n._)("p",null,":::",-1),m=(0,n._)("p",null,"::: consejo",-1),h=(0,n._)("p",null,":::",-1),g={},k=(0,l(83744).Z)(g,[["render",function(e,a){const l=(0,n.up)("OutboundLink"),g=(0,n.up)("RouterLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,(0,n._)("ol",null,[(0,n._)("li",null,[(0,n.Uk)("Descarga la última versión de "),(0,n._)("a",r,[(0,n.Uk)("dumpTool"),(0,n.Wm)(l)])]),i]),d,(0,n._)("p",null,[(0,n.Uk)("El hash SHA1 del "),s,(0,n.Uk)(" no coincidirá con el hash almacenado en "),t,(0,n.Uk)('. Esto se debe a que dumpTool añade datos adicionales llamados "no$gba footer" al archivo '),c,(0,n.Uk)(" después de calcular el hash SHA1. Puedes usar "),(0,n._)("a",u,[(0,n.Uk)("hiyaCFW Helper"),(0,n.Wm)(l)]),(0,n.Uk)("para crear una copia sin dichos datos.")]),p,m,(0,n._)("p",null,[(0,n.Uk)("Continuar a "),(0,n.Wm)(g,{to:"/es_ES/installing-unlaunch.html"},{default:(0,n.w5)((()=>[(0,n.Uk)("Instalar Unlaunch")])),_:1}),(0,n.Uk)(" (Opcional)")]),h],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,n]of a)l[e]=n;return l}}}]);