"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3600],{99821:(e,t,l)=>{l.r(t),l.d(t,{data:()=>a});const a={key:"v-0f5d42d8",path:"/hu_HU/get-started.html",title:"Kezdeti lépések",lang:"hu-HU",frontmatter:{title:"Kezdeti lépések"},excerpt:"",headers:[{level:2,title:"Követelmények",slug:"kovetelmenyek",children:[]},{level:2,title:"I. rész - Előkészületek",slug:"i-resz-elokeszuletek",children:[]},{level:2,title:"II. rész - Az exploit kiválasztása",slug:"ii-resz-az-exploit-kivalasztasa",children:[{level:3,title:"Az Unlaunch telepítése Memory Pit-tel",slug:"az-unlaunch-telepitese-memory-pit-tel",children:[]},{level:3,title:"Flipnote Lenny",slug:"flipnote-lenny",children:[]}]}],filePathRelative:"hu_HU/get-started.md"}},23383:(e,t,l)=>{l.r(t),l.d(t,{default:()=>E});var a=l(66252);const n=(0,a._)("p",null,"A fő homebrew alkalmazás, amit ez az útmutató telepít a TWiLight Menu++, ami egy feljavítása/cseréje a Nintendo DSi Menu-nek, és ami lehetővé teszi más homebrew-ok, kereskedelmi DS játékok, más régebbi rendszerek emulátorainak és egyebeknek a futtatását.",-1),i=(0,a._)("p",null,"A letöltésével fogunk kezdeni, illetve más homebrew eszköz(ök) letöltésével, hogy előkészüljünk az exploit lépéseire.",-1),o={class:"custom-container tip"},s=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),r=(0,a._)("h2",{id:"kovetelmenyek",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#kovetelmenyek","aria-hidden":"true"},"#"),(0,a.Uk)(" Követelmények")],-1),k=(0,a._)("li",null,"Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold",-1),d={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},h=(0,a._)("ul",null,[(0,a._)("li",null,"Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat")],-1),m=(0,a._)("h2",{id:"i-resz-elokeszuletek",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#i-resz-elokeszuletek","aria-hidden":"true"},"#"),(0,a.Uk)(" I. rész - Előkészületek")],-1),p={class:"custom-container warning"},z=(0,a._)("p",{class:"custom-container-title"},"WARNING",-1),c=(0,a._)("li",null,"Tedd be az SD kártyád a PC számítógépedbe",-1),g={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},y={href:"https://github.com/zoogie/dumpTool/releases/latest/download/dumpTool.nds",target:"_blank",rel:"noopener noreferrer"},_=(0,a.uE)("<li>Másold ki az <code>_nds</code> mappát <code>TWiLightMenu-DSi.7z</code> fájlból az SD kártyád gyökerébe</li><li>Másold ki a <code>BOOT.NDS</code> fájlt <code>TWiLightMenu-DSi.7z</code> fájlból az SD kártyád gyökerébe</li><li>Másold a <code>dumpTool.nds</code> fájlt az SD kártyád gyökerébe</li>",3),b={class:"custom-container tip"},U=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),f={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},v=(0,a._)("h2",{id:"ii-resz-az-exploit-kivalasztasa",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#ii-resz-az-exploit-kivalasztasa","aria-hidden":"true"},"#"),(0,a.Uk)(" II. rész - Az exploit kiválasztása")],-1),w=(0,a._)("p",null,"Innentől kezdve két lehetőséged van, egy kis különbséggel, hogy melyik mivel jár.",-1),x=(0,a._)("h3",{id:"az-unlaunch-telepitese-memory-pit-tel",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#az-unlaunch-telepitese-memory-pit-tel","aria-hidden":"true"},"#"),(0,a.Uk)(" Az Unlaunch telepítése Memory Pit-tel")],-1),j=(0,a._)("p",null,"A Memory Pit egy exploit ami a DSi Camera-t használja és kompatibilis minden firmware verzióval. Opcionálisan, ez az exploit használható az Unlaunch telepítésére, ami egy bootcode exploit és telejs hozzáférést ad a konzolhoz bootoláskor.",-1),S=(0,a._)("p",null,[(0,a.Uk)("A Memory Pit valamennyire korlátozott homebrew kompatibilitással rendelkezik, ajánlott, hogy telepítsd az Unlaunch-öt, a Memory Pit önálló használata helyett. Ez a legkönnyebb metódusa az Unlaunch telepítésének, így ez az ajánlott módja. Azonban van egy nagyon kicsi kockázata a konzolod "),(0,a._)("strong",null,"brickelésének"),(0,a.Uk)(" az Unlaunch telepítésekor, így ha ez számít, akkor válassz másik metódust alább.")],-1),T={class:"custom-container tip"},W=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),D=(0,a._)("h3",{id:"flipnote-lenny",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#flipnote-lenny","aria-hidden":"true"},"#"),(0,a.Uk)(" Flipnote Lenny")],-1),M=(0,a._)("p",null,"A Flipnote Lenny egy exploit ami a Flipnote Studio alkalmazást használja.",-1),A=(0,a._)("p",null,"Ha van Flipnote Studio-d és nem tervezed az Unlaunch (fentebb bemutatva) telepítését, akkor ez az exploit ajánlott, mert a Memory Pit problémát okoz néhány játéknál vagy homebrew-nál.",-1),L=(0,a._)("p",null,"Mindig teleptheted az Unlaunch-öt később, ha úgy döntenél, hogy szeretnéd.",-1),I={class:"custom-container tip"},H=(0,a._)("p",{class:"custom-container-title"},"TIP",-1),P={},E=(0,l(83744).Z)(P,[["render",function(e,t){const l=(0,a.up)("RouterLink"),P=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,i,(0,a._)("div",o,[s,(0,a._)("p",null,[(0,a.Uk)("Windows-t, Linux-ot vagy macOS-t használsz? Használd a "),(0,a.Wm)(l,{to:"/hu_HU/lazy-dsi-downloader.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Lazy DSi Downloader")])),_:1}),(0,a.Uk)("-t, hogy automatikusan telepítse az SD kártyád.")])]),r,(0,a._)("ul",null,[k,(0,a._)("li",null,[(0,a.Uk)("Egy alkalmazás, ami ki tud tömöríteni csomagolt állományokat, mint például a"),(0,a._)("a",d,[(0,a.Uk)("7-Zip"),(0,a.Wm)(P)]),(0,a.Uk)(" (Windows) vagy a "),(0,a._)("a",u,[(0,a.Uk)("The Unarchiver"),(0,a.Wm)(P)]),(0,a.Uk)(" (macOS) "),h])]),m,(0,a._)("div",p,[z,(0,a._)("p",null,[(0,a.Uk)("Biztosítsd, hogy az SD kártyád "),(0,a.Wm)(l,{to:"/hu_HU/sd-card-setup.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("megfelelően formázott")])),_:1}),(0,a.Uk)(".")])]),(0,a._)("ol",null,[c,(0,a._)("li",null,[(0,a.Uk)("Töltsd le a "),(0,a._)("a",g,[(0,a.Uk)("TWiLight Menu++"),(0,a.Wm)(P)]),(0,a.Uk)(" legfrissebb kiadását")]),(0,a._)("li",null,[(0,a.Uk)("Töltsd le a "),(0,a._)("a",y,[(0,a.Uk)("dumpTool"),(0,a.Wm)(P)]),(0,a.Uk)(" legfrissebb kiadását")]),_]),(0,a._)("div",b,[U,(0,a._)("p",null,[(0,a.Uk)('Nem tudod, mi az SD "gyökér"? '),(0,a._)("a",f,[(0,a.Uk)("Tekintsd meg ezt a képet"),(0,a.Wm)(P)])])]),v,w,x,j,S,(0,a._)("div",T,[W,(0,a._)("p",null,[(0,a.Uk)("Folytatás "),(0,a.Wm)(l,{to:"/hu_HU/launching-the-exploit.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Az Exploit indítása")])),_:1}),(0,a.Uk)(" útmutatóval")])]),D,M,A,L,(0,a._)("div",I,[H,(0,a._)("p",null,[(0,a.Uk)("Folytatás "),(0,a.Wm)(l,{to:"/hu_HU/launching-the-flipnote-exploit.html"},{default:(0,a.w5)((()=>[(0,a.Uk)("Az Exploit indítása (Flipnote Lenny)")])),_:1}),(0,a.Uk)(" útmutatóval")])]),(0,a._)("p",null,[(0,a.Uk)("Részletesebb előnyök és hátrányok összehasonltásért az elérhető exploitokról tekints meg a "),(0,a.Wm)(l,{to:"/hu_HU/faq.html#which-is-the-best-exploit"},{default:(0,a.w5)((()=>[(0,a.Uk)("Melyik a legjobb exploit?")])),_:1}),(0,a.Uk)(" GYIK-et.")])],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{const l=e.__vccOpts||e;for(const[e,a]of t)l[e]=a;return l}}}]);