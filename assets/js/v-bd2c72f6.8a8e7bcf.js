"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3142],{43585:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n={key:"v-bd2c72f6",path:"/fr_FR/restoring-nand.html",title:"Restauration d'une sauvegarde de la NAND",lang:"fr-FR",frontmatter:{title:"Restauration d'une sauvegarde de la NAND"},excerpt:"",headers:[{level:2,title:"Prérequis",slug:"prerequis",children:[]},{level:2,title:"Dumping du BIOS pour une utilisation sur no$gba",slug:"dumping-du-bios-pour-une-utilisation-sur-no-gba",children:[]},{level:2,title:"Test de votre sauvegarde NAND",slug:"test-de-votre-sauvegarde-nand",children:[]},{level:2,title:"Désinstallation d'Unlaunch à partir de votre sauvegarde NAND (facultatif)",slug:"desinstallation-d-unlaunch-a-partir-de-votre-sauvegarde-nand-facultatif",children:[]},{level:2,title:"Flashage de votre sauvegarde NAND (logiciel)",slug:"flashage-de-votre-sauvegarde-nand-logiciel",children:[]},{level:2,title:"Flashage de votre sauvegarde NAND (hardmod)",slug:"flashage-de-votre-sauvegarde-nand-hardmod",children:[]}],filePathRelative:"fr_FR/restoring-nand.md"}},72006:(e,a,r)=>{r.r(a),r.d(a,{default:()=>y});var n=r(66252);const i=(0,n._)("div",{class:"custom-container danger"},[(0,n._)("p",{class:"custom-container-title"},"DANGER"),(0,n._)("p",null,[(0,n.Uk)("ATTENTION ! Ceci est "),(0,n._)("em",null,[(0,n._)("strong",null,"dangereux")]),(0,n.Uk)(". Même en suivant exactement ces étapes, il y a toujours un risque potentiel de brick de la DSi car la NAND est de très mauvaise qualité, surtout si vous flashez plusieurs fois ! Cela ne devrait être utilisé qu'en dernier recours !")])],-1),t=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("Ne sautez "),(0,n._)("em",null,"rien"),(0,n.Uk)(" sur cette page, toute erreur augmente considérablement les chances de bricker votre DSi.")])],-1),l=(0,n._)("p",null,"Tout d'abord, quelques alternatives plus sûres pour expliquer pourquoi vous pourriez vouloir faire cela :",-1),s=(0,n._)("li",null,"L'installation de titres DSiWare peut être faite en utilisant hiyaCFW ou TWiLight Menu++",-1),o={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},u=(0,n._)("li",null,[(0,n.Uk)("La restauration d'une configuration de boutons d'Unlaunch peut se faire à partir du menu d'Unlaunch, auquel on accède en maintenant "),(0,n._)("kbd",{class:"face"},"A"),(0,n.Uk)(" + "),(0,n._)("kbd",{class:"face"},"B"),(0,n.Uk)(" tout en allumant la console")],-1),d=(0,n._)("li",null,"Démarrer sur Unlaunch entraîne une erreur ? Retirez votre carte SD et essayez de redémarrer le système. Si cela fonctionne, alors c'est un défaut avec votre carte SD et la restauration d'une sauvegarde de la NAND ne le corrigera pas",-1),c={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},v={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},p=(0,n._)("li",null,"La désinstallation d'Unlaunch, que ce soit en flashant la NAND ou en utilisant son désinstallateur, devrait être évitée sauf en cas de nécessité absolue, vous pouvez régler les touches de démarrage automatique sur « Launcher » et votre DSi sera comme avant",-1),h=(0,n._)("p",null,"La seule chose que vous devriez faire avec votre NAND est d'installer Unlaunch. Sinon, utilisez les alternatives.",-1),m=(0,n._)("h2",{id:"prerequis",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#prerequis","aria-hidden":"true"},"#"),(0,n.Uk)(" Prérequis")],-1),g=(0,n._)("li",null,[(0,n.Uk)("Votre sauvegarde de la NAND "),(0,n._)("strong",null,"de la même DSi")],-1),f={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},b=(0,n._)("li",null,"Un moyen d'exécuter des homebrews avec un accès à la NAND, comme Unlaunch ou Memory Pit",-1),N={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},k={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},D={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},z=(0,n.uE)('<h2 id="dumping-du-bios-pour-une-utilisation-sur-no-gba" tabindex="-1"><a class="header-anchor" href="#dumping-du-bios-pour-une-utilisation-sur-no-gba" aria-hidden="true">#</a> Dumping du BIOS pour une utilisation sur no$gba</h2><ol><li>Extrayez <code>dsibiosdumper.nds</code> depuis l&#39;archive <code>dsibiosdumper.zip</code> et placez-le n&#39;importe où sur votre carte SD</li><li>Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd><ul><li>Cela devrait lancer le menu Fichier d&#39;Unlaunch</li></ul></li><li>Lancez dsibiosdumper depuis le menu Fichier d&#39;Unlaunch</li><li>Appuyez sur <kbd class="face">A</kbd> pour dumper le BIOS sur la carte SD</li><li>Appuyez sur <kbd>START</kbd> pour quitter dsibiosdumper</li></ol><h2 id="test-de-votre-sauvegarde-nand" tabindex="-1"><a class="header-anchor" href="#test-de-votre-sauvegarde-nand" aria-hidden="true">#</a> Test de votre sauvegarde NAND</h2><p>Il est très important de tester que votre sauvegarde NAND fonctionne avant d&#39;essayer de la restaurer sur votre console, si elle montre une erreur de brick dans no$gba, il est fort probable que votre console sera également brickée.</p><ol><li>Extrayez <code>NO$GBA.EXE</code> depuis <code>no$gba-w.zip</code> vers un dossier sur votre ordinateur</li><li>Copiez la sauvegarde de votre NAND dans le dossier dans lequel vous avez placé <code>NO$GBA.EXE</code> et renommez-la <code>DSI-1.MMC</code></li><li>Copiez <code>bios7i.bin</code> et <code>bios9i.bin</code> dans le dossier où vous avez mis <code>NO$GBA.EXE</code>, nommés respectivement <code>BIOSDSI7.ROM</code> et <code>BIOSDSI9.ROM</code>.</li><li>Lancez <code>NO$GBA.EXE</code></li><li>Cliquez sur <code>Options</code> &gt; <code>Emulation Setup</code> pour ouvrir la fenêtre de configuration d&#39;émulation</li><li>Changez <code>Reset/Startup Entrypoint</code> en <code>GBA/NDS BIOS (Nintendo logo)</code></li><li>Changez <code>NDS Mode/Colors</code> en <code>DSi (retail/16MB)</code></li><li>Cliquez sur <code>Save Now</code></li><li>Lancez n&#39;importe quelle ROM Nintendo DS (fichier<code>.nds</code>)</li></ol><p>Si no$gba charge le menu DSi (ou le menu Fichier d&#39;Unlaunch), passez à la section suivante. S&#39;il montre n&#39;importe quel type d&#39;erreur <em><strong>ne flashez pas cette sauvegarde</strong></em> !</p><h2 id="desinstallation-d-unlaunch-a-partir-de-votre-sauvegarde-nand-facultatif" tabindex="-1"><a class="header-anchor" href="#desinstallation-d-unlaunch-a-partir-de-votre-sauvegarde-nand-facultatif" aria-hidden="true">#</a> Désinstallation d&#39;Unlaunch à partir de votre sauvegarde NAND (facultatif)</h2><p>Suivez ceci si vous avez dumpé votre sauvegarde NAND après avoir installé Unlaunch et que vous souhaitez désinstaller Unlaunch de votre système. Si vous n&#39;essayez pas de désinstaller Unlaunch, vous n&#39;avez <strong>pas</strong> besoin de suivre cette section.</p>',8),_={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},U=(0,n.uE)("<li>Extrayez <code>UNLAUNCH.DSI</code> de <code>unlaunch.zip</code></li><li>Lancez <code>UNLAUNCH.DSI</code> dans no$gba et démarrez-le depuis l&#39;emplacement de la carte de jeu <ul><li>Cela devrait démarrer le programme d&#39;installation d&#39;Unlaunch, qui ressemble au menu Fichier d&#39;Unlaunch</li></ul></li><li>Choisissez <code>Uninstall</code></li><li>Une fois terminé, choisissez <code>Power down</code></li><li>Lancez à nouveau n&#39;importe quelle ROM Nintendo DS et assurez-vous que votre menu DSi se charge et fonctionne correctement</li>",5),A=(0,n.uE)('<h2 id="flashage-de-votre-sauvegarde-nand-logiciel" tabindex="-1"><a class="header-anchor" href="#flashage-de-votre-sauvegarde-nand-logiciel" aria-hidden="true">#</a> Flashage de votre sauvegarde NAND (logiciel)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assurez-vous d&#39;avoir lu les étapes ci-dessus car c&#39;est là que cela devient dangereux. Si vous avez été directement lié ici sans suivre ce qui précède, retournez en haut et lisez toute cette page.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assurez-vous que votre console Nintendo DSi est bien chargée avant de commencer cette section.</p></div><ol><li>Avec votre carte SD insérée, allumez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd></li><li>Lancez SafeNANDManager</li><li>Appuyez sur le bouton pour <code>commencer la restauration de la NAND</code></li><li>Une fois la restauration terminée, appuyez sur <kbd>START</kbd> pour éteindre votre DSi</li></ol><p>Votre NAND devrait maintenant être restaurée.</p><h2 id="flashage-de-votre-sauvegarde-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#flashage-de-votre-sauvegarde-nand-hardmod" aria-hidden="true">#</a> Flashage de votre sauvegarde NAND (hardmod)</h2>',6),S={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},q={},y=(0,r(83744).Z)(q,[["render",function(e,a){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[i,t,l,(0,n._)("ul",null,[s,(0,n._)("li",null,[(0,n.Uk)("La récupération des images peut se faire en utilisant "),(0,n._)("a",o,[(0,n.Uk)("ninfs"),(0,n.Wm)(r)]),(0,n.Uk)(", en combinaison avec hiyaCFW ou TWiLight Menu++ si vous les voulez sur console. La dernière version de HiyaCFW Helper vous permet de copier vos photos de votre NAND vers la SDNAND pendant l'installation")]),u,d,(0,n._)("li",null,[(0,n.Uk)("« Une erreur est survenue… » au démarrage est probablement une erreur de hiyaCFW et n'est pas liée à votre NAND, consultez "),(0,n._)("a",c,[(0,n.Uk)("FAQ et dépannage de hiyaCFW"),(0,n.Wm)(r)]),(0,n.Uk)(" sur le wiki DS-Homebrew pour plus d'informations")]),(0,n._)("li",null,[(0,n.Uk)("Toute erreur dans TWiLight Menu++ n'est pas liée et vous devriez essayer de réinstaller TWiLight Menu++ ou demander de l'aide sur "),(0,n._)("a",v,[(0,n.Uk)("Discord"),(0,n.Wm)(r)])]),p]),h,m,(0,n._)("ul",null,[g,(0,n._)("li",null,[(0,n.Uk)("La dernière version de "),(0,n._)("a",f,[(0,n.Uk)("SafeNANDManager"),(0,n.Wm)(r)])]),b,(0,n._)("li",null,[(0,n._)("a",N,[(0,n.Uk)("no$gba"),(0,n.Wm)(r)]),(0,n.Uk)(", pour vérifier votre sauvegarde de la NAND (téléchargez la « Windows gaming version ») "),(0,n._)("ul",null,[(0,n._)("li",null,[(0,n.Uk)("Les utilisateurs de macOS et Linux peuvent utiliser "),(0,n._)("a",k,[(0,n.Uk)("WINE"),(0,n.Wm)(r)]),(0,n.Uk)(" pour exécuter no$gba")])])]),(0,n._)("li",null,[(0,n._)("a",D,[(0,n.Uk)("dsibiosdumper"),(0,n.Wm)(r)])])]),z,(0,n._)("ol",null,[(0,n._)("li",null,[(0,n.Uk)("Téléchargez la dernière version de l'"),(0,n._)("a",_,[(0,n.Uk)("installateur d'Unlaunch"),(0,n.Wm)(r)])]),U]),A,(0,n._)("p",null,[(0,n.Uk)("Si vous ne pouvez pas démarrer votre Nintendo DSi, un hardmod est le seul moyen de restaurer une sauvegarde de la NAND. Le meilleur guide qui existe actuellement est le "),(0,n._)("a",S,[(0,n.Uk)("guide de hardmod Nintendo DSi sur le wiki DS-Homebrew"),(0,n.Wm)(r)]),(0,n.Uk)(".")])],64)}]])},83744:(e,a)=>{a.Z=(e,a)=>{const r=e.__vccOpts||e;for(const[e,n]of a)r[e]=n;return r}}}]);