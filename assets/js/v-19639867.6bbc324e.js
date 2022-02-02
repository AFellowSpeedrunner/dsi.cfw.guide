"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7377],{2384:(e,i,a)=>{a.r(i),a.d(i,{data:()=>l});const l={key:"v-19639867",path:"/it_IT/dsiware-backups.html",title:"Backup DSiWare",lang:"it-IT",frontmatter:{title:"Backup DSiWare"},excerpt:"",headers:[{level:2,title:"Requisiti",slug:"requisiti",children:[]},{level:2,title:"Nintendo DSi - Istruzioni",slug:"nintendo-dsi-istruzioni",children:[{level:3,title:"Sezione I - Identificazione del DSiWare desiderato",slug:"sezione-i-identificazione-del-dsiware-desiderato",children:[]},{level:3,title:"Sezione II - Estrazione del DSiWare",slug:"sezione-ii-estrazione-del-dsiware",children:[]},{level:3,title:"Sezione III - Estrazione del file di salvataggio (facoltativo)",slug:"sezione-iii-estrazione-del-file-di-salvataggio-facoltativo",children:[]}]}],filePathRelative:"it_IT/dsiware-backups.md"}},9626:(e,i,a)=>{a.r(i),a.d(i,{default:()=>u});var l=a(6252);const o=(0,l._)("h2",{id:"requisiti",tabindex:"-1"},[(0,l._)("a",{class:"header-anchor",href:"#requisiti","aria-hidden":"true"},"#"),(0,l.Uk)(" Requisiti")],-1),t=(0,l.Uk)("L'ultima versione di "),n={href:"https://github.com/RocketRobz/godmode9i/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("GodMode9i"),r=(0,l._)("ul",null,[(0,l._)("li",null,[(0,l.Uk)("Scarica l'archivio, estrai il contenuto e posizionalo "),(0,l._)("code",null,"GodMode9i.nds"),(0,l.Uk)(" ovunque sulla tua scheda SD")])],-1),s=(0,l.uE)('<h2 id="nintendo-dsi-istruzioni" tabindex="-1"><a class="header-anchor" href="#nintendo-dsi-istruzioni" aria-hidden="true">#</a> Nintendo DSi - Istruzioni</h2><h3 id="sezione-i-identificazione-del-dsiware-desiderato" tabindex="-1"><a class="header-anchor" href="#sezione-i-identificazione-del-dsiware-desiderato" aria-hidden="true">#</a> Sezione I - Identificazione del DSiWare desiderato</h3><ol><li>Avvia GodMode9i e seleziona <code>[nand:] SYSNAND</code></li><li>Naviga fino alla cartella <code>title</code></li><li>Scegli la cartella in base alla categoria che stai cercando <ul><li><code>00030004</code>: DSiWare Standard</li><li><code>00030005</code>: Strumenti di divertimento preinstallati</li><li><code>0003000f</code>: Dati di sistema (file non-DSiWare, non possono essere eseguiti)</li><li><code>00030015</code>: Strumenti base del sistema</li><li><code>00030017</code>: Launcher</li></ul></li><li>Una volta scelto quale tipo di DSiWare si desidera estrarre, entra in una sottocartella, e inserisci <code>content</code></li><li>Adesso dovrebbe essere visibile un file <code>.app</code>. Seleziona il file, e scegli <code>Show NDS file info</code>. Indicherà se è il DSiWare che stai cercando <ul><li>Se non lo è, continua a cercare in altre cartelle fino a quando non lo trovi</li><li>I file in <code>0003000f</code> non possono avere visualizzate le loro informazioni sui file NDS poiché non sono DSiWare avviabili e non contengono un banner valido</li></ul></li></ol><h3 id="sezione-ii-estrazione-del-dsiware" tabindex="-1"><a class="header-anchor" href="#sezione-ii-estrazione-del-dsiware" aria-hidden="true">#</a> Sezione II - Estrazione del DSiWare</h3><ol><li>Evidenzia il file <code>.app</code>, poi premi <kbd class="face">L</kbd> per aggiungerlo agli appunti</li><li>Naviga nella scheda SD fino alla directory in cui si desidera inserire il titolo DSiWare di cui è stato eseguito il dump</li><li>Premi <kbd class="face">Y</kbd> per incollare il titolo DSiWare nella directory in cui stai navigando <ul><li>Puoi cambiare il nome del file dopo averlo incollato premendo <kbd class="face">X</kbd> mentre stai tenendo premuto <kbd class="R">R</kbd></li><li>Ripeti questo processo per tutti i file che si desidera copiare nella stessa directory</li></ul></li></ol><p>Ora dovresti vedere il titolo DSiWare o in TWiLight Menu++ o nel menu di Unlaunch.</p><h3 id="sezione-iii-estrazione-del-file-di-salvataggio-facoltativo" tabindex="-1"><a class="header-anchor" href="#sezione-iii-estrazione-del-file-di-salvataggio-facoltativo" aria-hidden="true">#</a> Sezione III - Estrazione del file di salvataggio (facoltativo)</h3><ol><li>Nella stessa cartella di <code>content</code> per il tuo DSiWare specificato, ci sarà una cartella chiamata <code>data</code></li><li>L&#39;interno della cartella <code>data</code> è il file di salvataggio. Copia questo file nella tua scheda SD nello stesso modo in cui lo hai fatto per il titolo DSiWare <ul><li>Unlaunch e nds-bootstrap usano le estensioni file <code>.pub</code> e <code>.prv</code> per i file di salvataggio dei DSiWare. Se il tuo file di salvataggio DSiWare era inizialmente chiamato <code>public.sav</code>, usa l&#39;estensione <code>.pub</code>, mentre se invece il file di salvataggio era originariamente intitolato <code>private.sav</code>, utilizza l&#39;estensione <code>.prv</code></li><li>Se si desidera utilizzare i file di salvataggio DSiWare con TWiLight Menu++, assicurati di posizionarli nella cartella <code>saves</code> localizzata insieme alle tue ROM</li></ul></li></ol>',8),c={},u=(0,a(3744).Z)(c,[["render",function(e,i){const a=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.iD)(l.HY,null,[o,(0,l._)("ul",null,[(0,l._)("li",null,[t,(0,l._)("a",n,[d,(0,l.Wm)(a)]),r])]),s],64)}]])},3744:(e,i)=>{i.Z=(e,i)=>{const a=e.__vccOpts||e;for(const[e,l]of i)a[e]=l;return a}}}]);