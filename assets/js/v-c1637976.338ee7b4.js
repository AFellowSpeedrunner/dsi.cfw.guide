"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7555],{24282:(e,a,o)=>{o.r(a),o.d(a,{data:()=>r});const r={key:"v-c1637976",path:"/es_ES/restoring-nand.html",title:"Rstaurar un respaldo de la NAND",lang:"es-ES",frontmatter:{title:"Rstaurar un respaldo de la NAND"},excerpt:"",headers:[{level:2,title:"Requisitos",slug:"requisitos",children:[]},{level:2,title:"Volcar la BIOS para su uso en no$gba",slug:"volcar-la-bios-para-su-uso-en-no-gba",children:[]},{level:2,title:"Probar tu respaldo de la NAND",slug:"probar-tu-respaldo-de-la-nand",children:[]},{level:2,title:"Desinstalar Unlaunch de tu respaldo de NAND (opcional)",slug:"desinstalar-unlaunch-de-tu-respaldo-de-nand-opcional",children:[]},{level:2,title:"Sobreescribir utilizando tu respaldo de la NAND (por software)",slug:"sobreescribir-utilizando-tu-respaldo-de-la-nand-por-software",children:[]},{level:2,title:"Sobreescribir utilizando tu respaldo de la NAND (por modificación del hardware)",slug:"sobreescribir-utilizando-tu-respaldo-de-la-nand-por-modificacion-del-hardware",children:[]}],filePathRelative:"es_ES/restoring-nand.md"}},63770:(e,a,o)=>{o.r(a),o.d(a,{default:()=>w});var r=o(66252);const l=(0,r._)("div",{class:"custom-container danger"},[(0,r._)("p",{class:"custom-container-title"},"DANGER"),(0,r._)("p",null,[(0,r.Uk)("¡ADVERTENCIA! Esto es "),(0,r._)("em",null,[(0,r._)("strong",null,"peligroso")]),(0,r.Uk)(". Incluso siguiendo al pie de la letra estos pasos, existe la poslibilidad de bloquear al completo la consola, ya que la memoria NAND es de muy baja calidad, especialmente si la sobreescribes multiples veces. ¡Esto debería ser usado única y exclusivamente como último recurso!")])],-1),n=(0,r._)("div",{class:"custom-container tip"},[(0,r._)("p",{class:"custom-container-title"},"TIP"),(0,r._)("p",null,[(0,r.Uk)("No te saltes "),(0,r._)("em",null,"nada"),(0,r.Uk)(" de esta página. Cualquier error incrementa las posbilidades de causar un bloqueo total de tu consola.")])],-1),i=(0,r._)("p",null,"Primero te presentaremos algunas alternativas más seguras para solucionar cosas por las que querrías hacer esto.",-1),s=(0,r._)("li",null,"La instalación de títulos DSiWare se puede hacer utilizando hiyaCFW o TWiLight Menu++",-1),d={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},t=(0,r._)("li",null,[(0,r.Uk)("Puedes restaurar alguna de las configuraciones de botónes de Unlaunch desde su menú, al que puedes acceder manteniendo pulsado "),(0,r._)("kbd",{class:"face"},"A"),(0,r.Uk)(" y "),(0,r._)("kbd",{class:"face"},"B"),(0,r.Uk)(" mientras enciendes la consola.")],-1),c=(0,r._)("li",null,"¿Te salta error al iniciar Unlaunch? Saca tu tarjera SD e intenta iniciar el sistema de nuevo. Si funciona, entonces el error es a causa de tu tarjeta SD, y que restaurar la NAND no lo solucionará.",-1),u={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},p=(0,r._)("li",null,"Cualquier error en TWiLight Menu++ no está relacionado con la NAND. Deberías intentar reinstalar TWiLight Menu++ o pedir ayuda en el servidor de Discord.",-1),b=(0,r._)("li",null,'Desinstalar Unlaunch (ya sea sobreescribiendo la NAND o utilizando su desinstalador) debería ser evitado al menos que sea absolutamente necesario. Puedes configurar que el inicio automático ejecute "Launcher" y consola estará como en su estado original.',-1),m=(0,r._)("p",null,"La única cosa que deberías hacer con tu NAND es instalar Unlaunch. De cualquier otra forma, recomendamos usar las alternativas.",-1),h=(0,r._)("h2",{id:"requisitos",tabindex:"-1"},[(0,r._)("a",{class:"header-anchor",href:"#requisitos","aria-hidden":"true"},"#"),(0,r.Uk)(" Requisitos")],-1),g=(0,r._)("li",null,[(0,r.Uk)("Tu respaldo de la NAND "),(0,r._)("strong",null,"de la misma consola DSi"),(0,r.Uk)(".")],-1),N={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},f=(0,r._)("li",null,"Una forma de ejecutar homebrew con acceso a la NAND, como Unlaunch o Memory Pit.",-1),D={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},k={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},v={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},S=(0,r.uE)('<h2 id="volcar-la-bios-para-su-uso-en-no-gba" tabindex="-1"><a class="header-anchor" href="#volcar-la-bios-para-su-uso-en-no-gba" aria-hidden="true">#</a> Volcar la BIOS para su uso en no$gba</h2><ol><li>Extrae <code>dsibiosdumper.nds</code> del archivo <code>dsibiosdumper.zip</code> y colócalo en cualquier lugar de tu tarjeta SD.</li><li>Enciende tu consola manteniendo pulsado <kbd class="face">A</kbd> y <kbd class="face">B</kbd>. <ul><li>Esto debería iniciar el sistema de archivos de Unlaunch.</li></ul></li><li>Ejecuta dsbiosdumper desde el sistema de archivos de Unlaunch.</li><li>Pulsa <kbd class="face">A</kbd> para volcar la BIOS a la tarjeta SD.</li><li>Pulsa <kbd>START</kbd> para salir de dsibiosdumper.</li></ol><h2 id="probar-tu-respaldo-de-la-nand" tabindex="-1"><a class="header-anchor" href="#probar-tu-respaldo-de-la-nand" aria-hidden="true">#</a> Probar tu respaldo de la NAND</h2><p>Es muy importante asegurarse de que tu respaldo de la NAND funciona antes de intentar restaurarla. Si al probarla en no$gba resulta en un bloqueo total, es muy posible que pase lo mismo en tu consola.</p><ol><li>Extrae <code>NO$GBA.EXE</code> del archivo <code>no$gba-w.zip</code> a una carpeta en tu ordenador.</li><li>Copia tu respaldo de la NAND a la carpeta en donde extraíste <code>NO$GBA.EXE</code>, y cámbiale el nombre a <code>DSI-1.MMC</code>.</li><li>Copia los archivos <code>bios7i.bin</code> y <code>bios9i.bin</code> a la carpeta en donde extraíste <code>NO$GBA.EXE</code>, y nómbralos <code>BIOSDSI7.ROM</code> y <code>BIOSDSI9.ROM</code>, respectivamente.</li><li>Executa <code>NO$GBA.EXE</code>.</li><li>Haz clic en <code>Options</code> &gt; <code>Emulation Setup</code> para abrir la ventana de configuración de ejecución.</li><li>Cambia la opción <code>Reset/Startup Entrypoin</code> a <code>GBA/NDS BIOS (Nintendo logo)</code>.</li><li>Cambia la opción <code>NDS Mode/Colors</code> a <code>DSi (retail/16MB)</code>.</li><li>Haz clic en <code>Save Now</code>.</li><li>Ejecuta cualquier rom de Nintendo DS (la extensión de archivo debería ser <code>.nds</code>)</li></ol><p>Si no$gba carga el menú DSi (o el sistema de archivos de Unlaunch), continúa a la siguiente sección. Si en su lugar salta cualquier clase de error, <em>¡no debes usar este respaldo!</em></p><h2 id="desinstalar-unlaunch-de-tu-respaldo-de-nand-opcional" tabindex="-1"><a class="header-anchor" href="#desinstalar-unlaunch-de-tu-respaldo-de-nand-opcional" aria-hidden="true">#</a> Desinstalar Unlaunch de tu respaldo de NAND (opcional)</h2><p>Sigue estos pasos si has volcado tu respaldo de la NAND después de instalar Unlaunch y te gustaría removerlo de tu sistema. Si no estás intentando desinstalar Unlaunch, <strong>no debes</strong> seguir esta sección.</p>',8),_={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},U=(0,r.uE)("<li>Extrae el archivo <code>UNLAUNCH.DSI</code> del archivo comprimido <code>unlaunch.zip</code>.</li><li>Ejecuta <code>UNLAUNCH.DSI</code> como ROM en no$gba e inícialo desde la ranura para cartuchos. <ul><li>Esto debería iniciar el instalador, que se ve parecido al sistema de archivos de Unlaunch.</li></ul></li><li>Elige la opción <code>Uninstall</code>.</li><li>Una vez terminado, elige la opción <code>Power Down</code>.</li><li>Ejecuta cualquier otra ROM de Nintendo DS para segurarte de que el menú carga y funciona correctamente.</li>",5),A=(0,r.uE)('<h2 id="sobreescribir-utilizando-tu-respaldo-de-la-nand-por-software" tabindex="-1"><a class="header-anchor" href="#sobreescribir-utilizando-tu-respaldo-de-la-nand-por-software" aria-hidden="true">#</a> Sobreescribir utilizando tu respaldo de la NAND (por software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Aquí es donde la cosa se vuelve peligrosa, así que asegúrate de haber leído bien los pasos anteriores. Si llegaste aquí a través de un enlace sin seguir los pasos anteriores, vuelve al principio de la página y leela por completo.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Asegúrate de que tu consola está cargada antes de comenzar con esta sección.</p></div><ol><li>Con tu tarjeta SD dentro de tu consola, enciende la misma mientras mantienes pulsados <kbd class="face">A</kbd> y <kbd class="face">B</kbd>.</li><li>Ejecuta SafeNANDManager.</li><li>Pulsa el botón indicado para la opción <code>begin NAND restore</code>.</li><li>Una vez finalizada la restauracion, pulsa <kbd>START</kbd> para apagar tu consola.</li></ol><p>La memoria NAND de tu consola debería estar restaurada.</p><h2 id="sobreescribir-utilizando-tu-respaldo-de-la-nand-por-modificacion-del-hardware" tabindex="-1"><a class="header-anchor" href="#sobreescribir-utilizando-tu-respaldo-de-la-nand-por-modificacion-del-hardware" aria-hidden="true">#</a> Sobreescribir utilizando tu respaldo de la NAND (por modificación del hardware)</h2>',6),E={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},q={},w=(0,o(83744).Z)(q,[["render",function(e,a){const o=(0,r.up)("OutboundLink");return(0,r.wg)(),(0,r.iD)(r.HY,null,[l,n,i,(0,r._)("ul",null,[s,(0,r._)("li",null,[(0,r.Uk)("Puedes recuperar fotos utilizando "),(0,r._)("a",d,[(0,r.Uk)("ninfs"),(0,r.Wm)(o)]),(0,r.Uk)(", en conjuncion con hiyaCFW o TWiLightMenu++ si quieres que estén en la consola. La última version de HiyaCFW Helper te permite copiar las fotos de tu memoria NAND a la SDNAND durante la configuración.")]),t,c,(0,r._)("li",null,[(0,r.Uk)('El mensaje de error "Ha ocurrido un error..." con el texto blanco sobre negro es probable que sea un error de hiyaCFW y que no esté relacionado a la NAND de tu consola. Echa un vistazo a la '),(0,r._)("a",u,[(0,r.Uk)("página de resolución de problemas de hiyaCFW en la wiki de DS-Homebrew"),(0,r.Wm)(o)]),(0,r.Uk)(" para más información.")]),p,b]),m,h,(0,r._)("ul",null,[g,(0,r._)("li",null,[(0,r.Uk)("La última versión de "),(0,r._)("a",N,[(0,r.Uk)("SafeNANDManager"),(0,r.Wm)(o)]),(0,r.Uk)(".")]),f,(0,r._)("li",null,[(0,r._)("a",D,[(0,r.Uk)("no$gba"),(0,r.Wm)(o)]),(0,r.Uk)(', para comprobar si tu respaldo de la NAND funciona y está en buen estado. Descarga el archivo cuyo enlace dice "Download no$gba Windows gaming version". '),(0,r._)("ul",null,[(0,r._)("li",null,[(0,r.Uk)("Los usuarios de macOS y Linux puede usar"),(0,r._)("a",k,[(0,r.Uk)("WINE"),(0,r.Wm)(o)]),(0,r.Uk)(" para ejecutar no$gba.")])])]),(0,r._)("li",null,[(0,r._)("a",v,[(0,r.Uk)("dsibiosdumper"),(0,r.Wm)(o)])])]),S,(0,r._)("ol",null,[(0,r._)("li",null,[(0,r.Uk)("Descarga la última versión del "),(0,r._)("a",_,[(0,r.Uk)("instalador de Unlaunch"),(0,r.Wm)(o)]),(0,r.Uk)(".")]),U]),A,(0,r._)("p",null,[(0,r.Uk)("Si tu consola no enciende o no incia el sistema, hacer una modificación del hardware es la única forma de restaurar un respaldo de la NAND. La mejor guía que existe actualmente es la "),(0,r._)("a",E,[(0,r.Uk)("guía de modificación de hardware de Nintendo DSi en la Wiki de DS-Homebrew"),(0,r.Wm)(o)]),(0,r.Uk)(".")])],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{const o=e.__vccOpts||e;for(const[e,r]of a)o[e]=r;return o}}}]);