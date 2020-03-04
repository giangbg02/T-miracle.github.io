const ap = new APlayer({
    container: document.getElementById('APlayer'),
    fixed: true,
    volume: 1,
    lrcType: 3,
    mutex: true,
    order: 'list',
    preload: 'none',
    listFolded: false,
    theme: 'grey',
    audio: [
        {
            name: 'ベースラインやってる?笑',
            artist: 'ななひら',
            url: 'https://music.163.com/song/media/outer/url?id=526904525',
            cover: 'http://p1.music.126.net/MtWOQCc_JLINjKgzZFoJXQ==/109951163098306222.jpg',
            lrc: '/statics/music/ベースラインやってる笑.lrc',
            theme: 'rgb(98, 153, 109)'
        }, {
            name: 'Trouble Maker',
            artist: 'Soundroll',
            url: 'https://music.163.com/song/media/outer/url?id=39224325',
            cover: 'http://p1.music.126.net/pNrh9cQMc8S8s2saGFrDwA==/3223768095974144.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(41, 41, 41)'
        }, {
            name: 'Hard Rock House (Radio Edit)',
            artist: 'Maison & Dragen',
            url: 'https://music.163.com/song/media/outer/url?id=29713344',
            cover: 'http://p2.music.126.net/VmarTq38UedIi4ZUMIDdZg==/109951163115805589.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(92, 112, 141)'
        }, {
            name: '独法師',
            artist: 'TetraCalyx',
            url: 'https://music.163.com/song/media/outer/url?id=468513224',
            cover: 'http://p2.music.126.net/emDsTR9lK3t6Wo-wE2OGPQ==/19064432114058121.jpg',
            lrc: '/statics/music/独法師.lrc',
            theme: 'rgb(120, 132, 156)'
        }, {
            name: 'Won(*3*)Chu Kiss Me!',
            artist: '戸松遥...',
            url: 'https://music.163.com/song/media/outer/url?id=28240590',
            cover: 'http://p2.music.126.net/ZD0e3J4bnE2Wzx4TlA4v2A==/109951163597746905.jpg',
            lrc: '/statics/music/Won Chu Kiss Me!.lrc',
            theme: 'rgb(240, 194, 207)'
        }, {
            name: 'Creepin\' Up On You',
            artist: 'Darren Hayes',
            url: 'https://music.163.com/song/media/outer/url?id=17282443',
            cover: 'http://p2.music.126.net/zK08kbZP--y-ybuZmOwR8g==/2532175278948132.jpg',
            lrc: '/statics/music/Creepin\' Up On You.lrc',
            theme: 'rgb(12, 8, 22)'
        }, {
            name: '夏恋',
            artist: 'Otokaze',
            url: 'https://music.163.com/song/media/outer/url?id=493911',
            cover: 'http://p1.music.126.net/5gNt0nW6l-2hSAtJAnaNCw==/4450823069239492.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(170, 203, 138)'
        }, {
            name: 'Fluffing a Duck',
            artist: 'Kevin MacLeod',
            url: 'https://music.163.com/song/media/outer/url?id=41672846',
            cover: 'http://p2.music.126.net/1sYSTrnjxLNE6541z1zJvg==/109951163424718948.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(192, 42, 182)'
        }, {
            name: '超级玛丽二胡版',
            artist: 'Various Artists',
            url: 'https://music.163.com/song/media/outer/url?id=29825389',
            cover: 'http://p2.music.126.net/Bnd2VwFCu8nWWZ8DY5BWcg==/3294136838291285.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(187, 165, 124)'
        }, {
            name: 'Counting Sheep',
            artist: 'SAFIA',
            url: 'https://music.163.com/song/media/outer/url?id=31081299',
            cover: 'http://p1.music.126.net/MXzI7ExXb6ru3CeW_P1HSw==/7906588115831440.jpg',
            lrc: '/statics/music/Counting Sheep.lrc',
            theme: 'rgb(39, 36, 27)'
        }, {
            name: 'Hocus Pocus',
            artist: 'Focus',
            url: 'https://music.163.com/song/media/outer/url?id=486069579',
            cover: 'http://p1.music.126.net/r5pftI6p4JbYOwGjQROIEw==/18826937604409661.jpg',
            lrc: '/statics/music/Hocus Pocus.lrc',
            theme: 'rgb(230, 71, 103)'
        }, {
            name: 'CHIKI CHIKI',
            artist: 'Starclub',
            url: 'https://music.163.com/song/media/outer/url?id=25862806',
            cover: 'http://p1.music.126.net/bDNd-r-7vVwFIqdE0cb02Q==/2454109953255262.jpg',
            lrc: '/statics/music/CHIKI CHIKI.lrc',
            theme: 'rgb(70, 68, 73)'
        }, {
            name: 'Come Back (Radio Mix)',
            artist: 'Relanium...',
            url: 'https://music.163.com/song/media/outer/url?id=517890064',
            cover: 'http://p2.music.126.net/ZAfh6DaRXT5wuYjQ9IqqmA==/109951163059365640.jpg',
            lrc: '/statics/music/Come Back.lrc',
            theme: 'rgb(210, 93, 115)'
        }, {
            name: 'Living For The Moment',
            artist: 'Croatia Squad',
            url: 'https://music.163.com/song/media/outer/url?id=420125428',
            cover: 'http://p1.music.126.net/4Ez5Ix1Jn_vpOxYw8t28fg==/109951163177492482.jpg',
            lrc: '/statics/music/Living For The Moment.lrc',
            theme: 'rgb(66, 133, 90)'
        }, {
            name: 'Charlie Puth-Betty Boop (TØm Bootleg)',
            artist: 'TØm',
            url: 'https://music.163.com/song/media/outer/url?id=1365071885',
            cover: 'http://p1.music.126.net/b7PL0B-_iVrZwBfC9w-tBQ==/109951164072192167.jpg',
            lrc: '/statics/music/Charlie Puth-Betty Boop (TØm Bootleg).lrc',
            theme: 'rgb(35, 22, 13)'
        }, {
            name: 'Beautiful Lies',
            artist: 'B-Complex',
            url: 'https://music.163.com/song/media/outer/url?id=24851086',
            cover: 'http://p1.music.126.net/mI6_o5_aZvovEbGwLMI4yw==/109951163872289808.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(27, 124, 173)'
        }, {
            name: 'Make You Hustle',
            artist: 'Croatia Squad',
            url: 'https://music.163.com/song/media/outer/url?id=475073477',
            cover: 'http://p1.music.126.net/tRSwLUzGrgks3I4-tINaGg==/109951163291773139.jpg',
            lrc: '/statics/music/Make You Hustle.lrc',
            theme: 'rgb(136, 150, 56)'
        }, {
            name: 'ZEIT DES MONDLICHTS',
            artist: 'Babbe Music',
            url: 'https://music.163.com/song/media/outer/url?id=34045251',
            cover: 'http://p1.music.126.net/q6tZl0W-hveQ35TCatZpUQ==/7784542325775624.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(35, 38, 31)'
        }, {
            name: 'Los! Los! Los!',
            artist: '悠木碧',
            url: 'https://music.163.com/song/media/outer/url?id=461301612',
            cover: 'http://p2.music.126.net/k2v3XeOLzLKOqRiVtVGcJg==/18494885092595840.jpg',
            lrc: '/statics/music/Los! Los! Los!.lrc',
            theme: 'rgb(95, 140, 116)'
        }, {
            name: 'Battle of Rose',
            artist: '光宗信吉',
            url: 'https://music.163.com/song/media/outer/url?id=471780',
            cover: 'http://p2.music.126.net/UDg3xzspn_afSY5HT9lDSw==/576144092966612.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(197, 61, 74)'
        }, {
            name: 'Retro Funky',
            artist: 'Persephone',
            url: 'https://music.163.com/song/media/outer/url?id=33346943',
            cover: 'http://p1.music.126.net/yEzEk-Oe6ltO5lxdUVXFyA==/7991250512075081.jpg',
            lrc: '/statics/music/null.lrc',
            theme: 'rgb(177, 152, 111)'
        }, {
            name: 'Tiger Toy',
            artist: 'Electrocute',
            url: 'https://music.163.com/song/media/outer/url?id=4056597',
            cover: 'http://p1.music.126.net/RfTD18zJrkOpQ4bpKsi3Fg==/1661362069579056.jpg',
            lrc: '/statics/music/Tiger Toy.lrc',
            theme: 'grey'
        }, {
            name: 'D.I.S.C.O.',
            artist: 'N-Trance',
            url: 'https://music.163.com/song/media/outer/url?id=5106467',
            cover: 'http://p2.music.126.net/JP5iDlBrts5qfH0YQoaxwQ==/5866994046101652.jpg',
            lrc: '/statics/music/DISCO.lrc',
            theme: 'rgb(249, 32, 53)'
        }, {
            name: 'All Night',
            artist: 'Parov Stelar',
            url: 'https://music.163.com/song/media/outer/url?id=1832647',
            cover: 'http://p2.music.126.net/ypMFgWiXA3nb4u2Nw2K3PA==/1772412743975490.jpg',
            lrc: '/statics/music/All Night.lrc',
            theme: 'rgb(89, 113, 123)'
        }, {
            name: 'Reality',
            artist: 'Lost Frequencies...',
            url: 'https://music.163.com/song/media/outer/url?id=32835377',
            cover: 'http://p1.music.126.net/LKFWPd5m8ZStX8gm_536Ag==/109951163131792528.jpg',
            lrc: '/statics/music/Reality.lrc',
            theme: 'rgb(255, 224, 119)'
        }, {
            name: 'Time Machine',
            artist: 'Waterflame',
            url: 'https://music.163.com/song/media/outer/url?id=436355180',
            cover: 'http://p2.music.126.net/IwQgnyjP8ybALQPb-afh_w==/18722483998490986.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#d49148'
        }, {
            name: 'Everybody',
            artist: 'Backstreet Boys',
            url: 'https://music.163.com/song/media/outer/url?id=16835302',
            cover: 'http://p1.music.126.net/OEkTr8qjNJhlbiZy9cRoww==/109951163063194564.jpg',
            lrc: '/statics/music/Everybody.lrc',
            theme: '#515a81'
        }, {
            name: 'It\'s Ok',
            artist: 'DJ Maxwell',
            url: 'https://music.163.com/song/media/outer/url?id=28708061',
            cover: 'http://p1.music.126.net/uIk-PChIFWqPJdnXRrjfeA==/109951163922816713.jpg',
            lrc: '/statics/music/It\'s Ok.lrc',
            theme: '#d8d2b3'
        }, {
            name: 'Intro: The Dawn',
            artist: 'Dreamtale',
            url: 'https://music.163.com/song/media/outer/url?id=4017240',
            cover: 'http://p2.music.126.net/N9KUUZHsDXrrLKQz5d--dw==/6639950720964639.jpg',
            lrc: '/statics/music/The Dawn.lrc',
            theme: '#312f45'
        }, {
            name: 'Bomba',
            artist: 'Jessy Matador',
            url: 'https://music.163.com/song/media/outer/url?id=423227267',
            cover: 'http://p1.music.126.net/VOOjccuwLPx8rf1lWUZQMA==/3400789473359154.jpg',
            lrc: '/statics/music/Bomba.lrc',
            theme: '#d61824'
        }, {
            name: '我爱上你就像是春天爱上樱桃树',
            artist: '别网恋',
            url: 'https://music.163.com/song/media/outer/url?id=1336528090',
            cover: 'http://p1.music.126.net/6yq7K03aVaju3w3fthO6wQ==/109951164384587024.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#48336b'
        }, {
            name: 'Striker (Extended)',
            artist: 'Waterflame',
            url: 'https://music.163.com/song/media/outer/url?id=448917844',
            cover: 'http://p1.music.126.net/LZZpQgWMrL5iNuBKSHZPSQ==/18636722092470961.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ff82a0'
        }, {
            name: '【飛行場姫】レンドエンズ',
            artist: 'キネマ106',
            url: 'https://music.163.com/song/media/outer/url?id=31356680',
            cover: 'http://p2.music.126.net/o3Zjwjkq6oKY0V5sSIgcZA==/2944492139372542.jpg',
            lrc: '/statics/music/レンドエンズ.lrc',
            theme: '#453832'
        }, {
            name: 'Me and You',
            artist: 'Lucky Twice',
            url: 'https://music.163.com/song/media/outer/url?id=4160632',
            cover: 'http://p1.music.126.net/sv0aUBMy4X_FCeiWzI6SOQ==/19242552997927491.jpg',
            lrc: '/statics/music/Me and You.lrc',
            theme: '#130f0c'
        }, {
            name: 'ふたりのきもちのほんとのひみつ',
            artist: '愛殺寶貝',
            url: 'https://music.163.com/song/media/outer/url?id=28629028',
            cover: 'http://p1.music.126.net/Ygj0jGI0AH3xbaHHUd5Esg==/109951163597240474.jpg',
            lrc: '/statics/music/ふたりのきもちのほんとのひみつ.lrc',
            theme: '#e09abc'
        }, {
            name: '[A]ddiction',
            artist: 'EVO+',
            url: 'https://music.163.com/song/media/outer/url?id=41654827',
            cover: 'http://p2.music.126.net/MqPASWNd9f60mic6scZ_EA==/109951163597238996.jpg',
            lrc: '/statics/music/[A]ddiction.lrc',
            theme: '#bc0068'
        }, {
            name: 'Dance of The Violins',
            artist: 'F-777',
            url: 'https://music.163.com/song/media/outer/url?id=41644447',
            cover: 'http://p2.music.126.net/SDGt0yZhZFamJDfFJUBqhA==/528865144148711.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#1d3b17'
        }, {
            name: 'Dancin (Krono Remix)',
            artist: 'Aaron Smith、Luvli、Krono',
            url: 'https://music.163.com/song/media/outer/url?id=439121233',
            cover: 'http://p2.music.126.net/0VY_IeJo5ACPDhTWilamuw==/18610333812708197.jpg',
            lrc: '/statics/music/Dancin.lrc',
            theme: '#3a2a1b'
        }, {
            name: '大田後生仔',
            artist: '丫蛋蛋',
            url: 'https://music.163.com/song/media/outer/url?id=1396973729',
            cover: 'http://p1.music.126.net/zBSqcj15lxJ0vdoSAkh63Q==/109951164427560286.jpg',
            lrc: '/statics/music/大田後生仔.lrc',
            theme: '#7d8897'
        }, {
            name: '出山',
            artist: '花粥、王胜娚',
            url: 'https://music.163.com/song/media/outer/url?id=1313354324',
            cover: 'http://p2.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg',
            lrc: '/statics/music/出山.lrc',
            theme: '#a7a7a7'
        }, {
            name: 'Wild Wild Web',
            artist: 'John The Whistler',
            url: 'https://music.163.com/song/media/outer/url?id=1600454',
            cover: 'http://p1.music.126.net/FQ1-Q_WcAVqrFf5GQSapbQ==/5837307232041041.jpg',
            lrc: '/statics/music/Wild Wild Web.lrc',
            theme: '#5884a7'
        }, {
            name: 'Ark',
            artist: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=484056609',
            cover: 'http://p1.music.126.net/YC4pwc7iaLoO_-bR0wBJsA==/19198572532779991.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#181250'
        }, {
            name: 'Anonymous',
            artist: 'Dirtyphonics',
            url: 'https://music.163.com/song/media/outer/url?id=33419706',
            cover: 'http://p1.music.126.net/ZjLPxenrfXIqaJA7qaCjNg==/7929677861013136.jpg',
            lrc: '/statics/music/Anonymous.lrc',
            theme: '#000000'
        }, {
            name: 'Feel the Jank (extended)',
            artist: 'Adhesive Wombat',
            url: 'https://music.163.com/song/media/outer/url?id=26588058',
            cover: 'http://p2.music.126.net/GjTtvKdNL8mfx4Gaa7NeYA==/4460718673901071.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#b3d79a'
        }, {
            name: 'The Happy Troll (Griefing Theme Song)',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=31365070',
            cover: 'http://p1.music.126.net/be1_ulzh8DAJeaRSiwffVA==/2918103860283419.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#fdf1d7'
        }, {
            name: 'Funky Stars',
            artist: 'Quazar',
            url: 'https://music.163.com/song/media/outer/url?id=428350808',
            cover: 'http://p1.music.126.net/Q14bFw6rRIhF2QijhLx8fQ==/18689498649065658.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#020014'
        }, {
            name: 'Monkeybiz',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=412911649',
            cover: 'http://p2.music.126.net/sM1SgGwADPXLYeUwGypd4Q==/1376588566231447.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#aa905f'
        }, {
            name: 'The Party Troll',
            artist: 'D1ofaquavibe',
            url: 'https://music.163.com/song/media/outer/url?id=38358820',
            cover: 'http://p2.music.126.net/u2sWlV-BqYyqDV7_zskZyw==/6634453163551437.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#8c8c8c'
        }, {
            name: 'Generic Techno',
            artist: 'EnV',
            url: 'https://music.163.com/song/media/outer/url?id=27794733',
            cover: 'http://p2.music.126.net/6YmT2-uSWdsOV57JBPFUtw==/3147901790408589.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ef6fa8'
        }, {
            name: 'DisChipo',
            artist: 'FantomenK',
            url: 'https://music.163.com/song/media/outer/url?id=17744071',
            cover: 'http://p1.music.126.net/j2Qjf6vEa3V7aSU26nzLfQ==/6638851209100144.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#bd0800'
        }, {
            name: 'Innerlink',
            artist: 'HOYO-MiX',
            url: 'https://music.163.com/song/media/outer/url?id=468513221',
            cover: 'http://p2.music.126.net/emDsTR9lK3t6Wo-wE2OGPQ==/19064432114058121.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#535179'
        }, {
            name: 'Switchblade',
            artist: 'EnV',
            url: 'https://music.163.com/song/media/outer/url?id=27794735',
            cover: 'http://p2.music.126.net/6YmT2-uSWdsOV57JBPFUtw==/3147901790408589.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ff7ee3'
        }, {
            name: 'Sony Vegas 9.x Keygen Music',
            artist: 'Joey Mizers..',
            url: 'https://music.163.com/song/media/outer/url?id=433103958',
            cover: 'http://p1.music.126.net/CNXsiA_m6pEBhYLhE-9nrA==/18178225742776745.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#494949'
        }, {
            name: 'てってってー',
            artist: 'V.A.',
            url: 'https://music.163.com/song/media/outer/url?id=28442271',
            cover: 'http://p2.music.126.net/Txs14AuCLDzw_aNgJSIIvg==/109951163927000844.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ccbd97'
        }, {
            name: 'Sweet Dreams',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=2537070',
            cover: 'http://p2.music.126.net/QcxeYrnQkPl4Db7grP3z3Q==/904898069704028.jpg',
            lrc: '/statics/music/Sweet Dreams.lrc',
            theme: '#000000'
        }, {
            name: 'Bleeder',
            artist: 'Sebastian Komor',
            url: 'https://music.163.com/song/media/outer/url?id=408140175',
            cover: 'http://p1.music.126.net/WCXRxbEz1QHrdRTckKFc0w==/1402976840840031.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#698b2c'
        }, {
            name: 'Funky Stars (Byproduct remix)',
            artist: 'Byproduct',
            url: 'https://music.163.com/song/media/outer/url?id=401386026',
            cover: 'http://p2.music.126.net/mGoCYYbELhOYlXnXqkhGng==/3384296791681736.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#ddd5b0'
        }, {
            name: 'Ignition',
            artist: 'DDRKirby(ISQ)',
            url: 'https://music.163.com/song/media/outer/url?id=431259493',
            cover: 'http://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#1c75a1'
        }, {
            name: 'ACE',
            artist: 'mihoyo',
            url: 'https://music.163.com/song/media/outer/url?id=1315333110',
            cover: 'http://p2.music.126.net/5ADSkBzhwaTSX1XM1LdrWg==/109951163586223038.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#9a8fb7'
        }, {
            name: 'Up In My Jam (All Of A Sudden)',
            artist: 'Kubbi',
            url: 'https://music.163.com/song/media/outer/url?id=26316672',
            cover: 'http://p1.music.126.net/Mth2rovpXP1pmJR8qeOtpw==/2517881627662597.jpg',
            lrc: '/statics/music/null.lrc',
            theme: '#19182d'
        }, {
            name: 'Bloody Stream',
            artist: 'Coda(小田和奏)',
            url: 'https://music.163.com/song/media/outer/url?id=26239032',
            cover: 'http://p2.music.126.net/hfOhoxdxhwGGCIeIhwWFHw==/109951163682864420.jpg',
            lrc: '/statics/music/Bloody Stream.lrc',
            theme: '#eb3a97'
        }, {
            name: 'GBL♂男神殿',
            artist: '咖啡师qwq',
            url: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.mp3',
            cover: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.jpg',
            lrc: '/statics/music/咖啡師qwq - GBL ♂ 男神殿.lrc',
            theme: '#2d2d2d'
        }
    ]
});

// 获取歌词json： http://music.163.com/api/song/media?id=歌曲id
// 获取歌曲： https://music.163.com/song/media/outer/url?id=歌曲id


