import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        { id: 1, name: "Ter Stegen", role: "Goalkeeper", type: "soccer player", image: "https://images.daznservices.com/di/library/goal_es/51/1c/marc-andre-ter-stegen-barcelona_yfz2lnxs6rkz11ppe23wld9p9.jpg?t=-2028827025&quality=100" },
        { id: 2, name: "Nanit Katipunan", role: "Goalkeeper", type: "soccer player", image: "https://i.pinimg.com/originals/89/d4/b9/89d4b971e60fb2e335cad239149ba71f.jpg" },        
        { id: 3, name: "Mary Grace Tiburillo", role: "Defender", type: "soccer player", image: "https://i.pinimg.com/originals/13/3d/23/133d2332ec1ad4861598fe0d29ad466c.jpg" },
        { id: 4, name: "I. Rakitic", role: "Midfielder", type: "soccer player", image: "https://wallpapercave.com/wp/wp1918942.jpg" },
        { id: 5, name: "Sergio", role: "Midfielder", type: "soccer player", image: "https://cdn.wallpapersafari.com/71/10/J4yOmx.jpg" },
        { id: 6, name: "Denis Suárez", role: "Midfielder", type: "soccer player", image: "https://www.fcbarcelona.com/fcbarcelona/photo/2019/01/30/e88164cc-e117-420d-87fe-49d0178524c9/mini_Denis-Suarez.jpg" },
        { id: 7, name: "Arda", role: "Midfielder", type: "soccer player", image: "https://gmsrp.cachefly.net/images/16/07/21/632b1d9bd2e807116cdd9cf34e0264ea/960.jpg" },
        { id: 8, name: "A. Iniesta", role: "Midfielder", type: "soccer player", image: "https://www.hdwallpapers.in/download/andres_iniesta_fc_barcelona-HD.jpg" },
        { id: 9, name: "Suárez", role: "Forward", type: "soccer player", image: "https://images.alphacoders.com/930/930056.jpg" },
        { id: 10, name: "Messi", role: "Forward", type: "soccer player", image: "https://i.pinimg.com/originals/cd/39/ce/cd39ce11174e49991fe4e32ed82714e3.jpg" },
        { id: 11, name: "Neymar", role: "Forward", type: "soccer player", image: "https://www.essentiallysports.com/wp-content/uploads/neymar-psg-04082017_1paf0vz67e5f01myza67bwzsri.jpg" },
        { id: 12, name: "Rafinha", role: "Midfielder", type: "soccer player", image: "https://img.aws.la-croix.com/2018/12/04/1300987414/milieu-FC-Barcelone-Rafinhadu-match-Rayo-Vallecano-Madrid-3-novembre-2018_0_728_486.jpg" },
        { id: 13, name: "Cillessen", role: "Goalkeeper", type: "soccer player", image: "https://cdn.vox-cdn.com/thumbor/J6HEP8Wb7Np4OUOAFKGeOGGXeRc=/0x0:3548x4500/1200x800/filters:focal(1247x738:1813x1304)/cdn.vox-cdn.com/uploads/chorus_image/image/62689260/949990876.jpg.0.jpg" },
        { id: 14, name: "Mascherano", role: "Defender", type: "soccer player", image: "https://images.daznservices.com/di/library/omnisport/49/19/javiermascherano-cropped_ejtd5ltm1t1h1rafsmsg1bzka.jpg?t=958255032&quality=100" },
        { id: 15, name: "Kyrie", role: "Defender", type: "soccer player", image: "https://www.pngkey.com/png/detail/55-550356_kyrie-irving-boston-celtics-playing-png-kyrie-irving.png" },
        { id: 16, name: "Piqué", role: "Defender", type: "soccer player", image: "https://wallpaper.dog/large/5555375.jpg" },
        { id: 17, name: "Paco Alcácer", role: "Forward", type: "soccer player", image: "https://images.daznservices.com/di/library/GOAL/c5/ce/paco-alcacer-borussia-dortmund-2019-20_15y589p884o1n1epzq2x1boc06.jpg?t=-1556206804&quality=100" },
        { id: 18, name: "Jordi Alba", role: "Defender", type: "soccer player", image: "https://images.daznservices.com/di/library/GOAL/8f/5d/jordi-alba-barcelona_q4otrs66whyi1u37cbnrr1lwl.jpg?t=1084427197&quality=100" },
        { id: 19, name: "Digne", role: "Defender", type: "soccer player", image: "https://cdn.vox-cdn.com/thumbor/Mcvtu9DjjTPMLUkYzuQelADfrfQ=/0x0:3000x1688/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/50390621/GettyImages-589515294.0.jpg" },
        { id: 20, name: "Sergi Roberto", role: "Midfielder", type: "soccer player", image: "https://i.ytimg.com/vi/NQ47L-S-c9U/hqdefault.jpg" },
        { id: 21, name: "André Gomes", role: "Midfielder", type: "soccer player", image: "https://img.rasset.ie/0012fb25-700.jpg" },
        { id: 22, name: "Aleix Vidal", role: "Midfielder", type: "soccer player", image: "https://production-354f.kxcdn.com/wp-content/uploads/sites/2/2018/01/889851708-1206x602.jpg" },
        { id: 23, name: "Umtiti", role: "Defender", type: "soccer player", image: "https://imagesvc.timeincapp.com/v3/fan/image?url=https://everythingbarca.com/wp-content/uploads/getty-images/2016/08/588291652-fc-barcelona-v-sampdoria-joan-gamper-trophy.jpg&" },
        { id: 24, name: "Mathieu", role: "Defender", type: "soccer player", image: "https://s.yimg.com/uu/api/res/1.2/6YeRhIi_LakHUE4Zg79Gvg--~B/aD0xMDgwO3c9MTkyMDtzbT0xO2FwcGlkPXl0YWNoeW9u/http://media.zenfs.com/en-GB/homerun/article.sportingnews.com/6f64b1eee45cae7b1f247ef52f0654d7" },
        { id: 25, name: "Masip", role: "Goalkeeper", type: "soccer player", image: "https://cdn.vox-cdn.com/thumbor/30fe8CHdW63EhXpsfnSrZ4MdVyM=/0x0:2397x3539/1200x800/filters:focal(893x778:1275x1160)/cdn.vox-cdn.com/uploads/chorus_image/image/55742611/584836174.0.jpg" },
        { id: 26, name: "Bulldog", role: "Companionship", type: "dog", image: "https://anybulldog.com/wp-content/uploads/2019/01/Webp.net-resizeimage-1-4.jpg" },
        { id: 27, name: "German Shepherd", role: "Military Dog", type: "dog", image: "https://lh3.googleusercontent.com/proxy/p4DFyYDmnU-ADY9IAXvXvV6gObj_BTHxF8Ih-a6K_ZiFy5HZuu7h2h0v_Jmfcd6bbkpLUKpmz__g2Go970Op4FmMBykKE4zGGoE0cM6vqScAHCtjuKqtUXFaQt3OHm-GvaNE-h1aE6ZYAZF7eFS0QlBaVomKyop8bg" },
        { id: 28, name: "Siberian Husky", role: "Protection", type: "dog", image: "https://images.unsplash.com/photo-1489924034176-2e678c29d4c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" },
        { id: 29, name: "Golden Retriever", role: "Companionship", type: "dog", image: "https://cdn-image.realsimple.com/sites/default/files/styles/rs_medium_image/public/smiling-golden-retriever-puppy.jpg?itok=vXRdvIHk&1530110720" },
        { id: 30, name: "Pug", role: "Companionship", type: "dog", image: "https://media.healthday.com/Images/icimages/pug25.jpg" },
        { id: 31, name: "Samoyed", role: "Companionship", type: "dog", image: "https://images6.alphacoders.com/910/thumb-1920-910688.jpg" },
        { id: 32, name: "Chow Chow", role: "Companionship", type: "dog", image: "https://www.pawsplaygrounds.com/wp-content/uploads/2016/12/Chow-Chow-dog.jpg" },
        { id: 33, name: "Havanese", role: "Companionship", type: "dog", image: "https://i.pinimg.com/originals/5d/2e/da/5d2eda0c54f942ff15645e366b1745d3.jpg" },


    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    getPuppies(): Array<Item> {
        var puppies: Array<Item> = []
        this.items.forEach(item => {
            if (item.type == "dog") {
                puppies.push(item)
            }
        });
        return puppies
    }

    getPlayers(): Array<Item> {
        var players: Array<Item> = []
        this.items.forEach(item => {
            if (item.type == "soccer player") {
                players.push(item)
            }
        });
        return players
    }
    getLength(){
        return this.items.length
    }

    addItem(data: Item){
        this.items.push(data)
    }

  
}
