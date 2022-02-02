"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7923],{6767:(e,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t={key:"v-9c29f4a0",path:"/hu_HU/installing-unlaunch.html",title:"Unlaunch telepítése",lang:"hu-HU",frontmatter:{title:"Unlaunch telepítése"},excerpt:"",headers:[{level:2,title:"I. rész - SD kártya telepítés",slug:"i-resz-sd-kartya-telepites",children:[]},{level:2,title:"II. rész - Az Unlaunch telepítése/frissítése",slug:"ii-resz-az-unlaunch-telepitese-frissitese",children:[]},{level:2,title:"III. rész - Unlaunch-utáni konfiguráció",slug:"iii-resz-unlaunch-utani-konfiguracio",children:[]},{level:2,title:"IV. rész - Takarítás az SD kártyán",slug:"iv-resz-takaritas-az-sd-kartyan",children:[]}],filePathRelative:"hu_HU/installing-unlaunch.md"}},6867:(e,a,l)=>{l.r(a),l.d(a,{default:()=>w});var t=l(6252);const i=(0,t.uE)('<div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Az Unlaunch nem kompatibilis a Nintendo DSi fejlesztői konzolokkal.</p></div><p>Az Unlaunch egy exploit, ami a rendszer bootnál helyezkedik el. Ez lehetővé tesz, hogy magasabb jogokat szerezünk, mint a normál DSiWare exploitok, mint például Memory Pit, ami lehetővé teszi a következőket:</p><ul><li>Alkalmazások indítása bootoláskor (homebrew vagy DSiWare), az opcionális gomb kombinációkkal</li><li>Hozzáférés a Slot-1-hez, ami lehetővé teszi a játék kártyák dumpolását és inkompatibilis flashcard-ok használatát</li><li>A régiózárak eltávolításra kerülnek a DSi-Enchanced / exkluzív játék kártyák esetében</li><li>Régi Nintendo DS homebrew futtatása nds-bootstrap-hb-n keresztül</li><li>DSiWare indítása a belső SD kártyáról</li><li>A következők Memory Pit felhasználóknak (más exploit-ok már engedélyezték ezeket): <ul><li>Fejlettebb kompatibilitás SD kártyáról indított DSiWare-ekkel</li><li>Jobb hang a GBARunner2-ben</li></ul></li></ul>',3),n={class:"custom-container danger"},s=(0,t._)("p",{class:"custom-container-title"},"DANGER",-1),o=(0,t.Uk)("Ha még nem tetted meg, kérjük készíts egy "),r=(0,t._)("a",{href:"dumping-nand"},"NAND mentést",-1),d=(0,t.Uk)(". Habár az esélyek kicsik, az Unlaunch brickelheti véletlenül a Nintendo DSi-det. Egy NAND mentés + "),k={href:"https://wiki.ds-homebrew.com/ds-index/hardmod",target:"_blank",rel:"noopener noreferrer"},c=(0,t.Uk)("hardmod"),u=(0,t.Uk)(" lehetővé teszi, hogy helyreállítsd ezt a mentést, ha tudod, hogy hogyan kell forrasztani."),h=(0,t.uE)('<div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Biztosítsd, hogy a konzol legyen feltöltve, a következő folyamat alatt. Egy véletlen áram elvesztés komoly hibákhoz vezethet.</p></div><h2 id="i-resz-sd-kartya-telepites" tabindex="-1"><a class="header-anchor" href="#i-resz-sd-kartya-telepites" aria-hidden="true">#</a> I. rész - SD kártya telepítés</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Windows-t, Linux-ot vagy macOS-t használsz? Használd a <a href="lazy-dsi-downloader">Lazy DSi Downloader</a>-t, hogy automatikusan telepítse az SD kártyád.</p></div>',3),z=(0,t.Uk)("Töltsd le az "),m={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},p=(0,t.Uk)("Unlaunch"),g=(0,t.Uk)(" legfrissebb kiadását "),b={href:"https://web.archive.org/web/20201112031436/https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},y=(0,t.Uk)("Tükör link"),f=(0,t.Uk)(", ha a fenti nem működne"),v=(0,t._)("li",null,[(0,t.Uk)("Csomagold ki az "),(0,t._)("code",null,"UNLAUNCH.DSI"),(0,t.Uk)("-t az "),(0,t._)("code",null,"unlaunch.zip"),(0,t.Uk)(" archívból és rakd valahova az SD kártyádon")],-1),U=(0,t._)("li",null,[(0,t.Uk)("Ellenőrizd, hogy még rajta van a TWiLight Menu++ az SD kártyádon "),(0,t._)("ul",null,[(0,t._)("li",null,[(0,t.Uk)("Ha nem vagy biztos benne, kövesd a lépéseket "),(0,t._)("a",{href:"launching-the-exploit#twilight-menu"},"Az Exploit indítása"),(0,t.Uk)(" oldalról")])])],-1),S=(0,t._)("h2",{id:"ii-resz-az-unlaunch-telepitese-frissitese",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#ii-resz-az-unlaunch-telepitese-frissitese","aria-hidden":"true"},"#"),(0,t.Uk)(" II. rész - Az Unlaunch telepítése/frissítése")],-1),D=(0,t.uE)('<li>Indítsd el a TWiLight Menu++-t <ul><li>Ha ez az első alkalom, hogy telepíted az Unlaunch-öt, töltsd újra a TWiLight Menu++-t az exploiton keresztül, amit használsz</li><li>Ha már telepítetted az Unlaunch-öt és frissíteni szeretnéd, tartsd nyomva az <kbd class="face">A</kbd> + <kbd class="face">B</kbd> gombokat, amíg bootolsz és válaszd a <code>TWiLight Menu++-t</code>, ahol a <code>BOOT.NDS</code> van megjelenítve az alsó képernyőn</li></ul></li><li>Indítsd el a TWiLight Menu++ Beállításokat <ul><li>Ha nem cserélted a témádat, kövesd a lépéseket &quot;Az Exploit futtatása&quot; oldalon. Egyéként tekintsd meg a TWiLight Menu++ kézikönyvet</li></ul></li><li>Nyomj <kbd class="l">L</kbd> / <kbd class="r">R</kbd> vagy <kbd class="face">X</kbd> / <kbd class="face">Y</kbd> gombokat, amíg el nem éred az <code>Unlaunch Beállítások</code> oldalt</li>',3),_=(0,t.Uk)("Ha szeretnéd cserélni az Unlaunch hátterét, válaszd a "),A=(0,t._)("code",null,"Háttér",-1),H=(0,t.Uk)(" opciót és válaszd ki a neked tetszőt "),j=(0,t.Uk)("Ha szeretnél saját Unlaunch hátteret, tekintsd meg a "),I={href:"https://wiki.ds-homebrew.com/twilightmenu/custom-unlaunch-backgrounds",target:"_blank",rel:"noopener noreferrer"},T=(0,t.Uk)("DS-Homebrew Wiki oldalt"),N=(0,t.uE)('<li>Ha szeretnéd a Health and Safety képernyőt és a DSi Menu zenét és hangokat, amikor a hivatalos DSi Menut használod, állítsd a <code>Launcher Patchek</code>-et <code>Kikapcsolt</code>-ra <ul><li>Ez megtartja a régió zárolást és a kártya fehérlistát, ami azt jelenti, hogy néhány flashcard nem lesz használható a DSi Menüből</li></ul></li><li>Lépj ki a TWiLight Menu++ Beállításokból</li><li>A fájl navigáció menüből indítsd el az <code>Unlaunch DSi Installer</code>-t</li><li>Válaszd a telepítés opciót <ul><li>Ha az Unlaunch lefagy az <code>ERROR: MISMATCH IN FAT COPIES</code> üzenetnél, tekintsd meg a <a href="troubleshooting">Hibaelhárítás</a> oldalt</li></ul></li><li>Ha végzett, indítsd újra a rendszered</li>',5),E=(0,t.uE)('<p>Ha az Unlaunch Filemenu képernyőt látod ezen a ponton, akkor sikeresen moddoltad a Nintendo DSi-det.</p><ul><li>Ha fekete képernyőt kapsz, tekintsd meg a <a href="troubleshooting">Hibaelhárítás</a> oldalt</li></ul><h2 id="iii-resz-unlaunch-utani-konfiguracio" tabindex="-1"><a class="header-anchor" href="#iii-resz-unlaunch-utani-konfiguracio" aria-hidden="true">#</a> III. rész - Unlaunch-utáni konfiguráció</h2><p>Jelenleg az Unlaunch alapértelmezésben a Filemenu-t indítja bootkor, de ez módosítható bármire, amit szeretnél.</p><ol><li>Kapcsold be a konzolod, miközben nyomva tartod az <kbd class="face">A</kbd> és <kbd class="face">B</kbd> gombokat <ul><li>Ez el kell indítsa az Unlaunch Filemenu-t</li></ul></li><li>Navigálj az <code>OPTIONS</code>-höz és nézd meg az elérhető opciókat <ul><li><kbd class="face">A</kbd> + <kbd class="face">B</kbd> hardkódolt az Unlaunch menühöz, így az nem cserélhető</li><li>A <code>NO BUTTON</code> és <code>BUTTON A / B / X / Y</code> opciók beállíthatók, ahogy szeretnéd, hogy mit töltsön a DSi-d a bootolásnál, attól függően melyik gomb volt lenyomva. Kiválaszthatsz bármilyen DSiWare-t, homebrew-t, a Slot-1 kártyát vagy az Unlaunch Filemenu-t <ul><li>A TWiLight Menu++-hoz válaszd a <code>TWiLight Menu++</code> opciót, ahol a <code>BOOT.NDS</code>-t mutatja az alsó képernyőn</li><li>Az eredeti DSi Menühöz, válaszd a <code>Launcher</code>-t</li></ul></li><li><code>LOAD ERROR</code> az, amit a DSi be fog tölteni, amikor amit beállítottál az hibára fut, mert például az SD kártya nem lett beillesztve</li></ul></li><li>Válaszd a <code>SAVE &amp; EXIT</code> opciót a beállításaid mentéséhez, majd kapcsold ki a DSi konzolod</li></ol><h2 id="iv-resz-takaritas-az-sd-kartyan" tabindex="-1"><a class="header-anchor" href="#iv-resz-takaritas-az-sd-kartyan" aria-hidden="true">#</a> IV. rész - Takarítás az SD kártyán</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Ez a rész opcionális és csak azt a célt szolgálja, hogy az SD kártyádon ne maradjon fájl, amire nincs szükséged.</p></div><ul><li>Töröld az <code>sd:/private/ds/app/484E494A/pit.bin</code> fájlt az SD kártyádról <ul><li>Ha más exploitot használtál, töröld annak az exploitnak a fájljait e helyett</li></ul></li><li>Töröld az <code>UNLAUNCH.DSI</code> fájlt az SD kártyádról</li></ul>',8),W={},w=(0,l(3744).Z)(W,[["render",function(e,a){const l=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[i,(0,t._)("div",n,[s,(0,t._)("p",null,[o,r,d,(0,t._)("a",k,[c,(0,t.Wm)(l)]),u])]),h,(0,t._)("ol",null,[(0,t._)("li",null,[z,(0,t._)("a",m,[p,(0,t.Wm)(l)]),g,(0,t._)("ul",null,[(0,t._)("li",null,[(0,t._)("a",b,[y,(0,t.Wm)(l)]),f])])]),v,U]),S,(0,t._)("ol",null,[D,(0,t._)("li",null,[_,A,H,(0,t._)("ul",null,[(0,t._)("li",null,[j,(0,t._)("a",I,[T,(0,t.Wm)(l)])])])]),N]),E],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const l=e.__vccOpts||e;for(const[e,t]of a)l[e]=t;return l}}}]);