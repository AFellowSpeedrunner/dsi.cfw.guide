"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7744],{67894:(e,i,t)=>{t.r(i),t.d(i,{data:()=>o});const o={key:"v-8e5c869e",path:"/pl_PL/launching-the-exploit.html",title:"Uruchamianie Eksploratora",lang:"pl-PL",frontmatter:{title:"Uruchamianie Eksploratora"},excerpt:"",headers:[{level:3,title:"Section I - Checking your DSi Camera Version",slug:"section-i-checking-your-dsi-camera-version",children:[]},{level:3,title:"Section II - Memory Pit",slug:"section-ii-memory-pit",children:[]},{level:2,title:"Section III - Launching the exploit",slug:"section-iii-launching-the-exploit",children:[]}],filePathRelative:"pl_PL/launching-the-exploit.md"}},39639:(e,i,t)=>{t.r(i),t.d(i,{default:()=>U});var o=t(66252);const n=(0,o._)("p",null,'Zaczniemy od skonfigurowania karty SD do uruchomienia naszego exploita. Dla większości użytkowników zalecamy użycie exploita o nazwie "Memory Pit", który wykorzystuje lukę w sposobie obsługi metadanych obrazu przez aplikację Nintendo DSi Camera.',-1),a=(0,o._)("p",null,"Uruchomienie exploita spowoduje uruchomienie TWiLight Menu++, aplikacji homebrew, która działa jako zamiennik Menu DSi.",-1),l={class:"custom-container tip"},r=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),s=(0,o._)("h3",{id:"section-i-checking-your-dsi-camera-version",tabindex:"-1"},[(0,o._)("a",{class:"header-anchor",href:"#section-i-checking-your-dsi-camera-version","aria-hidden":"true"},"#"),(0,o.Uk)(" Section I - Checking your DSi Camera Version")],-1),c=(0,o._)("li",null,"Power on your console",-1),u=(0,o._)("li",null,"If you are prompted to complete the camera tutorial, do so now",-1),d=(0,o._)("li",null,"Open the album using the large button on the right",-1),h=(0,o._)("li",null,[(0,o.Uk)("Take note of whether you have a Facebook icon alongside the star, clubs, and heart, outlined in red here: "),(0,o._)("img",{src:"/assets/images/facebook-check.png",alt:"Screenshot of where the Facebook icon is located"})],-1),p=(0,o.uE)('<h3 id="section-ii-memory-pit" tabindex="-1"><a class="header-anchor" href="#section-ii-memory-pit" aria-hidden="true">#</a> Section II - Memory Pit</h3><ol><li>Download the correct Memory Pit binary for your Nintendo DSi Camera version: <ul><li><a href="/assets/files/memory_pit/768_1024/pit.bin">If you <em><strong>did</strong></em> have a Facebook icon</a></li><li><a href="/assets/files/memory_pit/256/pit.bin">If you did <em><strong>not</strong></em> have a Facebook icon</a></li></ul></li><li>Navigate to the <code>sd:/private/ds/app/484E494A/</code> folder on your SD card <ul><li>You will already have this directory if you have previously taken photos to your SD card via the Nintendo DSi Camera application. If so, you do not need to delete it and recreate it</li><li>If it does not exist, please create the individual folders</li></ul></li><li>If there is already a <code>pit.bin</code> file in that path, rename it to <code>tip.bin</code></li><li>Place the Memory Pit <code>pit.bin</code> file in this folder</li><li>If there&#39;s a folder named <code>DCIM</code> in the root of your SD card, make a back up of it so you don&#39;t lose the pictures inside, and then remove it from the SD card</li></ol><h2 id="section-iii-launching-the-exploit" tabindex="-1"><a class="header-anchor" href="#section-iii-launching-the-exploit" aria-hidden="true">#</a> Section III - Launching the exploit</h2>',3),m=(0,o._)("li",null,"Ensure your SD card is inserted into your Nintendo DSi",-1),y=(0,o._)("li",null,"Boot your Nintendo DSi and launch the Nintendo DSi Camera application",-1),k=(0,o._)("li",null,"If you receive a message saying your SD card isn't inserted, please use another SD card",-1),f=(0,o._)("li",null,[(0,o.Uk)("Open the album using the large button on the right "),(0,o._)("ul",null,[(0,o._)("li",null,"The screen should flash magenta if Memory Pit was copied correctly")])],-1),g={class:"custom-container warning"},_=(0,o._)("p",{class:"custom-container-title"},"WARNING",-1),w=(0,o._)("code",null,"BOOT.NDS",-1),b=(0,o._)("div",{class:"custom-container warning"},[(0,o._)("p",{class:"custom-container-title"},"WARNING"),(0,o._)("p",null,[(0,o.Uk)("If you enter the SD card camera album and nothing unusual happens, ensure that you downloaded the correct version of Memory Pit for your version and region, and placed it into the correct folder on your SD card. Also ensure that the "),(0,o._)("code",null,"DCIM"),(0,o.Uk)(" folder does not exist on your SD card.")])],-1),S=(0,o._)("p",null,"You can now use TWiLight Menu++! First, it will ask you to select your language and region. These do not need to match your console's language or region so set them to whichever you prefer. Next it's recommended to continue on and make a NAND backup. This can potentially be used to save your console if anything bad happens in the future.",-1),D={class:"custom-container tip"},v=(0,o._)("p",{class:"custom-container-title"},"TIP",-1),I={},U=(0,t(83744).Z)(I,[["render",function(e,i){const t=(0,o.up)("RouterLink");return(0,o.wg)(),(0,o.iD)(o.HY,null,[n,a,(0,o._)("div",l,[r,(0,o._)("p",null,[(0,o.Uk)("If you don't plan on installing Unlaunch and have Flipnote Studio, it is recommended to use "),(0,o.Wm)(t,{to:"/pl_PL/launching-the-flipnote-exploit.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Flipnote Lenny")])),_:1}),(0,o.Uk)(" instead. "),(0,o.Wm)(t,{to:"/pl_PL/faq.html#which-is-the-best-exploit"},{default:(0,o.w5)((()=>[(0,o.Uk)("Which is the best exploit?")])),_:1})])]),s,(0,o._)("ol",null,[c,(0,o._)("li",null,[(0,o.Uk)("Open Nintendo DSi Camera "),(0,o._)("ul",null,[u,(0,o._)("li",null,[(0,o.Uk)("If the tutorial crashes as you try to complete it, your Nintendo DSi camera hardware is likely broken in some way and you will not be able to use Memory Pit. Please use an "),(0,o.Wm)(t,{to:"/pl_PL/alternate-exploits.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("alternate exploit")])),_:1})])])]),d,h]),p,(0,o._)("ol",null,[m,y,(0,o._)("li",null,[(0,o.Uk)("Select the SD Card icon in the top-right "),(0,o._)("ul",null,[k,(0,o._)("li",null,[(0,o.Uk)("If you receive a message saying that your SD card cannot be used, ensure your SD card is "),(0,o.Wm)(t,{to:"/pl_PL/sd-card-setup.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("formatted correctly")])),_:1})])])]),f]),(0,o._)("div",g,[_,(0,o._)("p",null,[(0,o.Uk)("If the top screen turns green, you do not have TWiLight Menu++'s "),w,(0,o.Uk)(" on the root of your SD card. Follow the "),(0,o.Wm)(t,{to:"/pl_PL/get-started.html#section-i-prep-work"},{default:(0,o.w5)((()=>[(0,o.Uk)("prep work")])),_:1}),(0,o.Uk)(" again.")])]),b,S,(0,o._)("div",D,[v,(0,o._)("p",null,[(0,o.Uk)("Continue to "),(0,o.Wm)(t,{to:"/pl_PL/dumping-nand.html"},{default:(0,o.w5)((()=>[(0,o.Uk)("Dumping NAND")])),_:1})])])],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{const t=e.__vccOpts||e;for(const[e,o]of i)t[e]=o;return t}}}]);