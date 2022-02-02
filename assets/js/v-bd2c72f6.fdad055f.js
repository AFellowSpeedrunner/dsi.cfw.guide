"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3142],{3585:(e,a,r)=>{r.r(a),r.d(a,{data:()=>n});const n={key:"v-bd2c72f6",path:"/fr_FR/restoring-nand.html",title:"Restauration d'une sauvegarde de la NAND",lang:"fr-FR",frontmatter:{title:"Restauration d'une sauvegarde de la NAND"},excerpt:"",headers:[{level:2,title:"Prérequis",slug:"prerequis",children:[]},{level:2,title:"Extraction du BIOS pour une utilisation sur no$gba",slug:"extraction-du-bios-pour-une-utilisation-sur-no-gba",children:[]},{level:2,title:"Test de votre sauvegarde NAND",slug:"test-de-votre-sauvegarde-nand",children:[]},{level:2,title:"Uninstalling Unlaunch from your NAND backup (optional)",slug:"uninstalling-unlaunch-from-your-nand-backup-optional",children:[]},{level:2,title:"Flashage de votre sauvegarde NAND (Software)",slug:"flashage-de-votre-sauvegarde-nand-software",children:[]},{level:2,title:"Flashage de votre sauvegarde NAND (Hardmod)",slug:"flashage-de-votre-sauvegarde-nand-hardmod",children:[]}],filePathRelative:"fr_FR/restoring-nand.md"}},1276:(e,a,r)=>{r.r(a),r.d(a,{default:()=>j});var n=r(6252);const o=(0,n._)("div",{class:"custom-container danger"},[(0,n._)("p",{class:"custom-container-title"},"DANGER"),(0,n._)("p",null,[(0,n.Uk)("ATTENTION ! Ceci est "),(0,n._)("em",null,[(0,n._)("strong",null,"dangereux")]),(0,n.Uk)(". Même en suivant exactement ces étapes, il y a toujours un risque potentiel de brick de la DSi car la NAND est de très mauvaise qualité, surtout si vous flashez plusieurs fois ! Cela ne devrait être utilisé qu'en dernier recours!")])],-1),t=(0,n._)("div",{class:"custom-container tip"},[(0,n._)("p",{class:"custom-container-title"},"TIP"),(0,n._)("p",null,[(0,n.Uk)("Ne sautez "),(0,n._)("em",null,"rien"),(0,n.Uk)(" sur cette page, toute erreur augmente considérablement les chances de brick votre DSi.")])],-1),i=(0,n._)("p",null,"Tout d'abord, quelques alternatives plus sûres pour expliquer pourquoi vous pourriez vouloir faire cela :",-1),l=(0,n._)("li",null,"L'installation de titres DSiWare peut être faite en utilisant hiyaCFW ou TWiLight Menu++",-1),s=(0,n.Uk)("Recovering pictures can be done using "),u={href:"https://github.com/ihaveamac/ninfs/releases",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("ninfs"),c=(0,n.Uk)(", in combination with hiyaCFW or TWiLight Menu++ if you want them on console. The latest version of the HiyaCFW Helper allows you to copy your photos from your NAND to the SDNAND during setup"),h=(0,n._)("li",null,[(0,n.Uk)("Restoring an Unlaunch button configuration can be done from the Unlaunch menu, which can be accessed by holding "),(0,n._)("kbd",{class:"face"},"A"),(0,n.Uk)(" + "),(0,n._)("kbd",{class:"face"},"B"),(0,n.Uk)(" while powering the console on")],-1),p=(0,n._)("li",null,"Démarrer sur Unlaunch entraîne une erreur ? Take out your SD card and try starting the system again. Si cela fonctionne, alors c'est un défaut avec votre carte SD et la restauration d'une sauvegarde de la NAND ne le corrigera pas",-1),m=(0,n.Uk)('"An error has occurred..." on boot is likely a hiyaCFW error and is not related to your NAND, see '),g={href:"https://wiki.ds-homebrew.com/hiyacfw/faq",target:"_blank",rel:"noopener noreferrer"},v=(0,n.Uk)("hiyaCFW FAQ & Troubleshooting"),f=(0,n.Uk)(" on the DS-Homebrew Wiki for more information"),b=(0,n.Uk)("Toute erreur dans TWiLight Menu++ n'est pas liée et vous devriez essayer de réinstaller TWiLight Menu++ ou demander de l'aide sur "),N={href:"https://ds-homebrew.com/discord",target:"_blank",rel:"noopener noreferrer"},k=(0,n.Uk)("Discord"),D=(0,n._)("li",null,'La désinstallation de Unlaunch, que ce soit en flashant la NAND ou en utilisant son désinstalleur, devrait être évitée sauf en cas de nécessité absolue, vous pouvez régler les touches de démarrage automatique sur "Launcher" et votre DSi sera comme la version originale',-1),U=(0,n._)("p",null,"La seule chose que vous devriez faire avec votre NAND est d'installer Unlaunch. Utilisez les alternatives autrement.",-1),_=(0,n._)("h2",{id:"prerequis",tabindex:"-1"},[(0,n._)("a",{class:"header-anchor",href:"#prerequis","aria-hidden":"true"},"#"),(0,n.Uk)(" Prérequis")],-1),A=(0,n._)("li",null,[(0,n.Uk)("Votre sauvegarde de la NAND "),(0,n._)("strong",null,"de la même DSi")],-1),S=(0,n.Uk)("La dernière version de "),y={href:"https://github.com/DS-Homebrew/SafeNANDManager/releases/latest/download/SafeNANDManager.nds",target:"_blank",rel:"noopener noreferrer"},z=(0,n.Uk)("SafeNANDManager"),w=(0,n._)("li",null,"Un moyen d'exécuter des homebrews avec un accès à la NAND, comme Unlaunch ou Memory Pit",-1),q={href:"https://problemkaputt.de/gba.htm",target:"_blank",rel:"noopener noreferrer"},x=(0,n.Uk)("no$gba"),E=(0,n.Uk)(", pour vérifier votre sauvegarde de la NAND (téléchargez la « Windows gaming version ») "),W=(0,n.Uk)("les utilisateurs de macOS et Linux peuvent utiliser "),C={href:"https://winehq.org",target:"_blank",rel:"noopener noreferrer"},L=(0,n.Uk)("WINE"),O=(0,n.Uk)(" pour exécuter no$gba"),T={href:"http://melonds.kuribo64.net/downloads/dsibiosdumper.7z",target:"_blank",rel:"noopener noreferrer"},M=(0,n.Uk)("dsibiosdumper"),R=(0,n.uE)('<h2 id="extraction-du-bios-pour-une-utilisation-sur-no-gba" tabindex="-1"><a class="header-anchor" href="#extraction-du-bios-pour-une-utilisation-sur-no-gba" aria-hidden="true">#</a> Extraction du BIOS pour une utilisation sur no$gba</h2><ol><li>Extrayez <code>dsibiosdumper.nds</code> depuis l&#39;archive <code>dsibiosdumper.zip</code> et placez-le n&#39;importe où sur votre carte SD</li><li>Allumez votre console en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd><ul><li>Cela devrait lancer le menu de fichiers de Unlaunch</li></ul></li><li>Lancez dsibiosdumper depuis le menu de fichiers de Unlaunch</li><li>Appuyez sur <kbd class="face">A</kbd> pour extraire le BIOS sur la carte SD</li><li>Appuyez sur <kbd>START</kbd> pour quitter dsibiosdumper</li></ol><h2 id="test-de-votre-sauvegarde-nand" tabindex="-1"><a class="header-anchor" href="#test-de-votre-sauvegarde-nand" aria-hidden="true">#</a> Test de votre sauvegarde NAND</h2><p>Il est très important de tester que votre sauvegarde NAND fonctionne avant d&#39;essayer de la restaurer sur votre console, si elle montre une erreur de brick dans no$gba, il est fort probable que votre console sera également brickée.</p><ol><li>Extrayez <code>NO$GBA.EXE</code> depuis <code>no$gba-w.zip</code> vers un dossier sur votre ordinateur</li><li>Copiez la sauvegarde de votre NAND dans le dossier dans lequel vous avez placé <code>NO$GBA.EXE</code> et renommez-la <code>DSI-1.MMC</code></li><li>Copiez <code>bios7i.bin</code> et <code>bios9i.bin</code> dans le dossier où vous avez mis <code>NO$GBA.EXE</code>, nommés respectivement <code>BIOSDSI7.ROM</code> et <code>BIOSDSI9.ROM</code>.</li><li>Lancez <code>NO$GBA.EXE</code></li><li>Cliquez sur <code>Options</code> &gt; <code>Emulation Setup</code> pour ouvrir la fenêtre de configuration d&#39;émulation</li><li>Changez <code>Reset/Startup Entrypoint</code> en <code>GBA/NDS BIOS (logo Nintendo)</code></li><li>Changez <code>NDS Mode/Colors</code> en <code>DSi (retail/16MB)</code></li><li>Click <code>Save Now</code></li><li>Lancez n&#39;importe quelle ROM Nintendo DS (fichier<code>.nds</code>)</li></ol><p>If no$gba loads the DSi menu (or the Unlaunch Filemenu), then continue to the next section. S&#39;il montre n&#39;importe quel type d&#39;erreur <em><strong>ne flashez pas cette sauvegarde</strong></em> !</p><h2 id="uninstalling-unlaunch-from-your-nand-backup-optional" tabindex="-1"><a class="header-anchor" href="#uninstalling-unlaunch-from-your-nand-backup-optional" aria-hidden="true">#</a> Uninstalling Unlaunch from your NAND backup (optional)</h2><p>Follow this if you dumped your NAND backup after you installed Unlaunch and you would like to uninstall Unlaunch from your system. If you are not trying to uninstall Unlaunch, you do <strong>not</strong> need to do this section.</p>',8),I=(0,n.Uk)("Download the latest version of the "),F={href:"https://problemkaputt.de/unlaunch.zip",target:"_blank",rel:"noopener noreferrer"},B=(0,n.Uk)("Unlaunch installer"),$=(0,n.uE)("<li>Extract <code>UNLAUNCH.DSI</code> from <code>unlaunch.zip</code></li><li>Launch <code>UNLAUNCH.DSI</code> in no$gba and start it from the Game Card slot <ul><li>This should start the Unlaunch installer, which looks similar to to the Unlaunch Filemenu</li></ul></li><li>Choose <code>Uninstall</code></li><li>Once complete, choose <code>Power down</code></li><li>Launch any Nintendo DS ROM again, and ensure your DSi menu loads and is working properly</li>",5),H=(0,n.uE)('<h2 id="flashage-de-votre-sauvegarde-nand-software" tabindex="-1"><a class="header-anchor" href="#flashage-de-votre-sauvegarde-nand-software" aria-hidden="true">#</a> Flashage de votre sauvegarde NAND (Software)</h2><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assurez-vous d&#39;avoir lu les étapes ci-dessus car c&#39;est là que cela devient dangereux. Si vous avez été directement lié ici sans suivre ce qui précède, retournez en haut et lisez toute cette page.</p></div><div class="custom-container danger"><p class="custom-container-title">DANGER</p><p>Assurez-vous que votre console Nintendo DSi est bien chargée avant de commencer cette section.</p></div><ol><li>Avec votre carte SD insérée, branchez votre Nintendo DSi en maintenant <kbd class="face">A</kbd> et <kbd class="face">B</kbd></li><li>Lancez SafeNANDManager</li><li>Appuyez sur le bouton pour <code>commencer la restauration de la NAND</code></li><li>Une fois la restauration terminée, appuyez sur <kbd>START</kbd> pour éteindre votre DSi</li></ol><p>Votre NAND devrait maintenant être restaurée.</p><h2 id="flashage-de-votre-sauvegarde-nand-hardmod" tabindex="-1"><a class="header-anchor" href="#flashage-de-votre-sauvegarde-nand-hardmod" aria-hidden="true">#</a> Flashage de votre sauvegarde NAND (Hardmod)</h2>',6),G=(0,n.Uk)("Si vous ne pouvez pas démarrer votre Nintendo DSi, un hardmod est le seul moyen de restaurer une sauvegarde de la NAND. Le meilleur guide qui existe actuellement est le "),P={href:"https://wiki.ds-homebrew.com/ds-index/hardmod#nintendo-dsi",target:"_blank",rel:"noopener noreferrer"},X=(0,n.Uk)("guide de hardmod Nintendo DSi sur le Wiki DS-Homebrew"),V=(0,n.Uk)("."),Z={},j=(0,r(3744).Z)(Z,[["render",function(e,a){const r=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[o,t,i,(0,n._)("ul",null,[l,(0,n._)("li",null,[s,(0,n._)("a",u,[d,(0,n.Wm)(r)]),c]),h,p,(0,n._)("li",null,[m,(0,n._)("a",g,[v,(0,n.Wm)(r)]),f]),(0,n._)("li",null,[b,(0,n._)("a",N,[k,(0,n.Wm)(r)])]),D]),U,_,(0,n._)("ul",null,[A,(0,n._)("li",null,[S,(0,n._)("a",y,[z,(0,n.Wm)(r)])]),w,(0,n._)("li",null,[(0,n._)("a",q,[x,(0,n.Wm)(r)]),E,(0,n._)("ul",null,[(0,n._)("li",null,[W,(0,n._)("a",C,[L,(0,n.Wm)(r)]),O])])]),(0,n._)("li",null,[(0,n._)("a",T,[M,(0,n.Wm)(r)])])]),R,(0,n._)("ol",null,[(0,n._)("li",null,[I,(0,n._)("a",F,[B,(0,n.Wm)(r)])]),$]),H,(0,n._)("p",null,[G,(0,n._)("a",P,[X,(0,n.Wm)(r)]),V])],64)}]])},3744:(e,a)=>{a.Z=(e,a)=>{const r=e.__vccOpts||e;for(const[e,n]of a)r[e]=n;return r}}}]);