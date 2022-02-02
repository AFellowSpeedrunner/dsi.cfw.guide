"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6097],{4285:(e,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t={key:"v-6058e651",path:"/hu_HU/launching-the-exploit.html",title:"Az Exploit indítása",lang:"hu-HU",frontmatter:{title:"Az Exploit indítása"},excerpt:"",headers:[{level:2,title:"Követelmények",slug:"kovetelmenyek",children:[]},{level:2,title:"I. rész - SD kártya telepítés",slug:"i-resz-sd-kartya-telepites",children:[{level:3,title:"Rendszered verziójának ellenőrzése",slug:"rendszered-verziojanak-ellenorzese",children:[]},{level:3,title:"Memory Pit",slug:"memory-pit",children:[]},{level:3,title:"TWiLight Menu++",slug:"twilight-menu",children:[]}]},{level:2,title:"II. rész - Az Exploit indítása",slug:"ii-resz-az-exploit-inditasa",children:[]},{level:2,title:"III. rész - A TWiLight Menu++ konfigurálása",slug:"iii-resz-a-twilight-menu-konfiguralasa",children:[]}],filePathRelative:"hu_HU/launching-the-exploit.md"}},8826:(e,a,l)=>{l.r(a),l.d(a,{default:()=>G});var t=l(6252);const i=(0,t._)("p",null,'Először az SD kártyád állítjuk be az exploit futtatásához. A legtöbb felhasználónak a "Memory Pit" exploitot ajánljuk, ami a Nintendo DSi Camera alkalmazás kép metaadat kezelésének hibáját használja ki.',-1),n=(0,t._)("p",null,"Az exploit indítása a TWiLight Menu++-ba bootol, egy homebrew alkalmazásba, ami a DSi Menü cseréjeként szolgál.",-1),s=(0,t._)("h2",{id:"kovetelmenyek",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#kovetelmenyek","aria-hidden":"true"},"#"),(0,t.Uk)(" Követelmények")],-1),r=(0,t._)("li",null,"Egy mód arra, hogy a letöltött fájlokat az SD kártyádra másold",-1),o=(0,t.Uk)("Egy alkalmazás, ami ki tud tömöríteni csomagolt állományokat, mint például a"),d={href:"https://www.7-zip.org/",target:"_blank",rel:"noopener noreferrer"},k=(0,t.Uk)("7-Zip"),m=(0,t.Uk)(" (Windows) vagy a "),h={href:"https://apps.apple.com/us/app/the-unarchiver/id425424353",target:"_blank",rel:"noopener noreferrer"},z=(0,t.Uk)("The Unarchiver"),u=(0,t.Uk)(" (macOS) "),p=(0,t._)("ul",null,[(0,t._)("li",null,"Azt tanácsoljuk, hogy ne használj WinRAR-t, mert ismert arról, hogy elront dolgokat")],-1),g=(0,t.uE)('<h2 id="i-resz-sd-kartya-telepites" tabindex="-1"><a class="header-anchor" href="#i-resz-sd-kartya-telepites" aria-hidden="true">#</a> I. rész - SD kártya telepítés</h2><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Biztosítsd, hogy az SD kártyád <a href="sd-card-setup">megfelelően formázott</a>.</p></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Windows-t, Linux-ot vagy macOS-t használsz? Használd a <a href="lazy-dsi-downloader">Lazy DSi Downloader</a>-t, hogy automatikusan telepítse az SD kártyád.</p></div><h3 id="rendszered-verziojanak-ellenorzese" tabindex="-1"><a class="header-anchor" href="#rendszered-verziojanak-ellenorzese" aria-hidden="true">#</a> Rendszered verziójának ellenőrzése</h3><ol><li>Kapcsold be a konzolod</li><li>Nyisd meg a System settings-et</li><li>Jegyezd fel a System Version-t a jobb alsó sarokból a felső képernyőn <img src="/assets/images/system-version-check.png" alt="System Version képernyőjének képernyőfotója"></li><li>Nyomj a &quot;DSi Menu&quot;-re a System Settings-ből kilépéshez</li></ol><h3 id="memory-pit" tabindex="-1"><a class="header-anchor" href="#memory-pit" aria-hidden="true">#</a> Memory Pit</h3><ol><li>Győződj meg róla, hogy a Nintendo DSi Camera alkalmazás nem mutatja az oktató részt indításkor <ul><li>Ha mutatja, menj végig rajta, amíg kész nem lesz <ul><li>Ha a tutorial megjelenik és összeomlik, akkor a Nintendo DSi kamera hardvered valószínűleg hibás valamilyen módon. Használj egy <a href="alternate-exploits">alternatív exploitot</a></li></ul></li></ul></li><li>Töltsd le a Memory Pit binárist a Nintendo DSi rendszered verziójához és régiójához <ul><li><a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.3 U, E, A, J</a> verziókhoz</li><li><a href="/assets/files/memory_pit/768_1024/pit.bin">1.4 - 1.4.5 U, E, A, J</a> verziókhoz</li><li><a href="/assets/files/memory_pit/256/pit.bin">1.0 - 1.4.6 K, C</a> verziókhoz</li></ul></li><li>Ellenőrizd, hogy ez az útvonal létezik az SD kártyádon: <code>sd:/private/ds/app/484E494A/</code><ul><li>Ha már létezik ez a könyvtár, korábban másoltál fotókat az SD kártyádra az Nintendo DSi Camera alkalmazással. Ha így van, nem kell törölnöd és újra létrehoznod</li><li>Ha nem létezik, hozd létre az egyes mappákat</li></ul></li><li>Ha már van egy <code>pit.bin</code> fájl ezen az útvonalon, készíts mentést arról a fájlról</li><li>Rakd a Memory Pit <code>pit.bin</code> fájlját ebbe a mappába</li></ol>',7),c={class:"custom-container tip"},y=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),b=(0,t.Uk)("Hogy megértsd miért csináljuk ezt, tekintsd át a "),f=(0,t.Uk)("GYIK"),v=(0,t.Uk)("-ot."),j=(0,t._)("h3",{id:"twilight-menu",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#twilight-menu","aria-hidden":"true"},"#"),(0,t.Uk)(" TWiLight Menu++")],-1),_=(0,t.Uk)("Töltsd le a "),S={href:"https://github.com/DS-Homebrew/TWiLightMenu/releases/latest/download/TWiLightMenu-DSi.7z",target:"_blank",rel:"noopener noreferrer"},D=(0,t.Uk)("TWiLight Menu++"),U=(0,t.Uk)(" legfrissebb kiadását"),M=(0,t._)("li",null,[(0,t.Uk)("Csomagold ki "),(0,t._)("code",null,"_nds"),(0,t.Uk)(" mappát "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)("-fájlból az SD kártyád gyökerébe")],-1),W=(0,t._)("li",null,[(0,t.Uk)("Csomagold ki "),(0,t._)("code",null,"BOOT.NDS"),(0,t.Uk)(" fájlt "),(0,t._)("code",null,"TWiLightMenu-DSi.7z"),(0,t.Uk)("-fájlból az SD kártyád gyökerébe")],-1),w={class:"custom-container tip"},N=(0,t._)("p",{class:"custom-container-title"},"TIP",-1),T=(0,t.Uk)('Nem tudod, mi az SD "gyökér"? '),x={href:"https://media.discordapp.net/attachments/489307733074640926/756947922804932739/wherestheroot.png",target:"_blank",rel:"noopener noreferrer"},H=(0,t.Uk)("Tekintsd meg ezt a képet"),A=(0,t.uE)('<h2 id="ii-resz-az-exploit-inditasa" tabindex="-1"><a class="header-anchor" href="#ii-resz-az-exploit-inditasa" aria-hidden="true">#</a> II. rész - Az Exploit indítása</h2><ol><li>Biztosítsd, hogy az SD kártyád bekerüljön a Nintendo DSi-dbe</li><li>Bootold be a Nintendo DSi-d és indítsd el a Nintendo DSi Camera alkalmazást</li><li>Válaszd az SD kártya ikont a jobb oldalt felül <ul><li>Ha üzentet kapsz, hogy az SD kártya nincs berakva, használj másik SD kártyát</li><li>Ha üzentet kapsz, hogy az SD kártyád nem használható, biztosítsd, hogy az SD kártyád <a href="sd-card-setup">megfelelően formázott</a></li></ul></li><li>Nyisd meg az albumot a nagy gombot használva a jobb oldalon <ul><li>Ha a képernyő magenta színnel villan, a Memory Pit megfelelően másolásra került</li></ul></li></ol>',2),L={class:"custom-container warning"},I=(0,t._)("p",{class:"custom-container-title"},"WARNING",-1),E=(0,t.Uk)("Ha a felső képernyő zöldre vált, akkor nincs a TWiLight Menu++ "),P=(0,t._)("code",null,"BOOT.NDS",-1),R=(0,t.Uk)(" fájlja az SD kártyád gyökerében. Hajtsd végre a "),C=(0,t.Uk)("TWiLight Menu++ telepítési útmutatót"),O=(0,t.Uk)(" újra."),B=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Ha beléptél az SD kártya kamera albumba és semmi szokatlan nem történt, ellenőrizd, hogy jó verzióját töltötted-e le a Memory Pit-nek, ami a verziódhoz és a régiódhoz tartozik és hogy jó mappába raktad-e az SD kártyádon.</p></div><p>Most már látnod kell a TWiLight Menu++ nyelv választás képernyőjét.</p><h2 id="iii-resz-a-twilight-menu-konfiguralasa" tabindex="-1"><a class="header-anchor" href="#iii-resz-a-twilight-menu-konfiguralasa" aria-hidden="true">#</a> III. rész - A TWiLight Menu++ konfigurálása</h2><ol><li>Amikor kérdezi állítsd be a preferált nyelvet és régiót <ul><li>Az alapértelmezett régió beállítás, játék-specifikus az általánosan ajánlott</li><li>Ha beállításra kerültek, és a konzol összeomlik fehér képernyővel, nyomd meg és tartsd nyomva a POWER gombot a kikapcsoláshoz, majd kapcsold be újra és futtasd újra az exploitot</li></ul></li><li>A TWiLight Menu++-ben nyomj SELECT-et, hogy a DS Classic Menüre válts</li><li>Érintsd meg a DS ikont középen alul a beállítások megnyitásához</li><li>Használd az <kbd class="l">L</kbd> / <kbd class="r">R</kbd> vagy az <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> gombokat, hogy eljuss az Egyéb. beállítások oldalra</li><li>Módosítsd a &quot;SysNAND Régió&quot; bejegyzést a konzolod régiójára</li><li>Nyomj <kbd class="face">B</kbd> gombot a mentéshez és a TWiLight Menu++ beállításokból kilépéshez</li></ol><p>Most már tudod használni a TWiLight Menu++-t, azonban ajánlott, hogy folytasd a NAND mentéssel. Ez potenciálisan használható a konzolod megmentésére, ha bármi rossz történik a jövőben.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Folytatás a <a href="dumping-nand">NAND Dumpolásával</a></p></div>',6),q={},G=(0,l(3744).Z)(q,[["render",function(e,a){const l=(0,t.up)("OutboundLink"),q=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,n,s,(0,t._)("ul",null,[r,(0,t._)("li",null,[o,(0,t._)("a",d,[k,(0,t.Wm)(l)]),m,(0,t._)("a",h,[z,(0,t.Wm)(l)]),u,p])]),g,(0,t._)("div",c,[y,(0,t._)("p",null,[b,(0,t.Wm)(q,{to:"/hu_HU/faq.html#what-functionality-will-i-lose-by-modding-my-system"},{default:(0,t.w5)((()=>[f])),_:1}),v])]),j,(0,t._)("ol",null,[(0,t._)("li",null,[_,(0,t._)("a",S,[D,(0,t.Wm)(l)]),U]),M,W]),(0,t._)("div",w,[N,(0,t._)("p",null,[T,(0,t._)("a",x,[H,(0,t.Wm)(l)])])]),A,(0,t._)("div",L,[I,(0,t._)("p",null,[E,P,R,(0,t.Wm)(q,{to:"/hu_HU/launching-the-exploit.html#twilight-menu"},{default:(0,t.w5)((()=>[C])),_:1}),O])]),B],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,t]of a)l[e]=t;return l}}}]);