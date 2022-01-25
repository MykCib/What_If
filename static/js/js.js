var example = ['Ethereum','Solana','Dogecoin','Cardano','Avalanche','Shiba Inu','Chainlink','XRP'];

        textSequence(0);
        function textSequence(i) {

            if (example.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence").innerHTML = example[i];
                    textSequence(++i);
                }, 3000); // 1 second (in milliseconds)

            } else if (example.length == i) { // Loop
                textSequence(0);
            }

        }

var example2 = ['2015','2018','2014','2017','2020','2021','2017','2012'];

        textSequence2(0);
        function textSequence2(i) {

            if (example2.length > i) {
                setTimeout(function() {
                    document.getElementById("sequence2").innerHTML = example2[i];
                    textSequence2(++i);
                }, 3000); // 1 second (in milliseconds)

            } else if (example2.length == i) { // Loop
                textSequence2(0);
            }

        }



function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

/*An array containing all the country names in the world:*/
var countries = ['Bitcoin',
'Ethereum',
'Tether',
'BNB',
'USD Coin',
'Cardano',
'Solana',
'XRP',
'Terra',
'Dogecoin',
'Polkadot',
'Avalanche',
'Binance USD',
'Shiba Inu',
'TerraUSD',
'Polygon',
'Cosmos',
'Wrapped Bitcoin',
'Dai',
'Crypto.com Coin',
'Litecoin',
'Chainlink',
'NEAR Protocol',
'Uniswap',
'Fantom',
'Algorand',
'TRON',
'Bitcoin Cash',
'FTX Token',
'Stellar',
'Internet Computer',
'Bitcoin BEP2',
'Decentraland',
'Hedera',
'VeChain',
'UNUS SED LEO',
'Ethereum Classic',
'Klaytn',
'Axie Infinity',
'Elrond',
'Filecoin',
'The Sandbox',
'Theta Network',
'Monero',
'Helium',
'Tezos',
'IOTA',
'Harmony',
'EOS',
'Aave',
'PancakeSwap',
'The Graph',
'Maker',
'BitTorrent (New)',
'Bitcoin SV',
'Stacks',
'Kusama',
'Flow',
'TrueUSD',
'Huobi Token',
'OKB',
'eCash',
'Curve DAO Token',
'THORChain',
'Zcash',
'Gala',
'Enjin Coin',
'Neo',
'KuCoin Token',
'Loopring',
'Quant',
'Amp',
'Celo',
'Basic Attention Token',
'Oasis Network',
'Arweave',
'Chiliz',
'Nexo',
'Dash',
'Pax Dollar',
'Kadena',
'yearn.finance',
'Waves',
'NEM',
'Mina',
'Secret',
'Compound',
'XDC Network',
'Holo',
'Decred',
'1inch Network',
'BORA',
'IoTeX',
'Theta Fuel',
'Ravencoin',
'renBTC',
'OMG Network',
'SushiSwap',
'Bancor',
'Celsius',
'SwissBorg',
'Qtum',
'Velas',
'Zilliqa',
'Syscoin',
'WAX',
'Neutrino USD',
'Ankr',
'Bitcoin Gold',
'Voyager Token',
'Livepeer',
'Gnosis',
'GateToken',
'Kava',
'Synthetix',
'Siacoin',
'ICON',
'Perpetual Protocol',
'Immutable X',
'Revain',
'Audius',
'0x',
'Nervos Network',
'Horizen',
'IOST',
'dYdX',
'Ontology',
'UMA',
'Telcoin',
'Ocean Protocol',
'SKALE Network',
'Storj',
'PAX Gold',
'Flux',
'Hive',
'DigiByte',
'Polymath',
'DigitalBits',
'NuCypher',
'Celer Network',
'Golem',
'Chromia',
'Ren',
'Raydium',
'JUST',
'Serum',
'WINkLink',
'XYO',
'Function X',
'WazirX',
'Ultra',
'Gemini Dollar',
'Fetch.ai',
'Dent',
'Casper',
'Swipe',
'CEEK VR',
'Keep3rV1',
'Powerledger',
'Request',
'Reserve Rights',
'COTI',
'Dusk Network',
'Moonriver',
'Cartesi',
'Mdex',
'Lisk',
'Aragon',
'OriginTrail',
'MyNeighborAlice',
'Constellation',
'MXC',
'Energy Web Token',
'Injective',
'Bitcoin Standard Hashrate Token',
'Alpha Finance Lab',
'Propy',
'aelf',
'Reef',
'Ardor',
'Phantasma',
'Orbs',
'MX TOKEN',
'VeThor Token',
'Bitcoin Diamond',
'Ontology Gas',
'Orchid',
'Status',
'Verge',
'Sun (New)',
'HEX',
'Lido stETH',
'BitTorrent',
'Convex Finance',
'ECOMI',
'Venus BNB',
'BitDAO',
'Symbol',
'DeFiChain',
'Spell Token',
'KOK',
'Rally',
'Render Token',
'WhiteCoin',
'HUSD',
'Illuvium',
'Anchor Protocol',
'MobileCoin',
'Tribe',
'Ethereum Name Service',
'Braintrust',
'Bitpanda Ecosystem Token',
'Persistence',
'Kyber Network Crystal v2',
'Coin98',
'Frax Share',
'Rocket Pool',
'SuperFarm',
'Rari Governance Token',
'Keep Network',
'PlayDapp',
'JasmyCoin',
'Bloktopia',
'Chia',
'DEAPcoin',
'Vulcan Forged PYR',
'HedgeTrade',
'MOBOX',
'Akash Network',
'Yield Guild Games',
'Venus BTC',
'Tether Gold',
'LUKSO',
'Trust Wallet Token',
'Veritaseum',
'DAO Maker',
'Pundi X (New)',
'Hathor',
'Alchemix',
'Orion Protocol',
'Mask Network',
'Venus ETH',
'Prometeus',
'Telos',
'Alchemy Pay',
'Divi',
'Starlink',
'Safe',
'Civic',
'iExec RLC',
'API3',
'MaidSafeCoin',
'Polkastarter',
'Hxro',
'CENNZnet',
'Pirate Chain',
'Unibright',
'NKN',
'Radicle',
'Augur',
'KardiaChain',
'StormX',
'Electroneum',
'Aavegotchi',
'ABBC Coin',
'Numeraire',
'Origin Protocol',
'e-Radix',
'Stratis',
'Beefy Finance',
'CRYPTO20',
'Band Protocol',
'STASIS EURO',
'Badger DAO',
'Dawn Protocol',
'Circuits of Value',
'BakeryToken',
'Elastos',
'FUNToken',
'Steem',
'Sologenic',
'Utrust',
'Ampleforth',
'RSK Infrastructure Framework',
'Centrifuge',
'GXChain',
'Ergo',
'Ark',
'Presearch',
'Venus USDC',
'Metadium',
'Celo Dollar',
'MVL',
'Rakon',
'Covalent',
'TrustSwap',
'Sport and Leisure',
'TomoChain',
'DeFi Pulse Index',
'TrueFi',
'Aleph.im',
'Enzyme',
'Gitcoin',
'sUSD',
'Clover Finance',
'Mirror Protocol',
'Handshake',
'Proton',
'Alien Worlds',
'Venus',
'Ellipsis',
'Metal',
'TitanSwap',
'Merit Circle',
'Verasity',
'Standard Tokenization Protocol',
'Uquid Coin',
'Beta Finance',
'Mines of Dalarnia',
'RSK Smart Bitcoin',
'RFOX',
'QuarkChain',
'Vectorspace AI',
'Voxies',
'ZB Token',
'IRISnet',
'Ribbon Finance',
'AllianceBlock',
'Everipedia',
'Balancer',
'DFI.Money',
'SafePal',
'Klever',
'Dero',
'BSCPAD',
'AstroSwap',
'dKargo',
'Efinity Token',
'Wanchain',
'Toko Token',
'Syntropy',
'Terra Virtua Kolect',
'CertiK',
'IDEX',
'Harvest Finance',
'ssv.network',
'Elitium',
'Flamingo',
'HyperDAO',
'ARPA Chain',
'STAKE',
'Venus XVS',
'DIA',
'Phala Network',
'MovieBloc',
'Rai Reflex Index',
'DerivaDAO',
'BitShares',
'Qcash',
'ankrETH',
'Velo',
'LCX',
'MonaCoin',
'Komodo',
'Strong',
'EverRise',
'Somnium Space Cubes',
'DAD',
'KeeperDAO',
'Wrapped NXM',
'BitMart Token',
'BarnBridge',
'Kin',
'Hyperion',
'LTO Network',
'Ethernity Chain',
'Gods Unchained',
'Kava Lend',
'HUNT',
'WHALE',
'Aergo',
'Ambire AdEx',
'GMT Token',
'Venus BUSD',
'Grid+',
'Thunder Token',
'QuickSwap',
'Cortex',
'Adventure Gold',
'Travala.com',
'MiL.k',
'Streamr',
'Assemble Protocol',
'DODO',
'Boson Protocol',
'Tranchess',
'FLETA',
'Loom Network',
'TROY',
'Ampleforth Governance Token',
'Hifi Finance',
'Moss Coin',
'NewYork Exchange',
'Contentos',
'SifChain',
'SIX',
'Maro',
'Rarible',
'Liquity',
'Alpaca Finance',
'Samoyedcoin',
'district0x',
'PARSIQ',
'VideoCoin',
'Kleros',
'Atari Token',
'RChain',
'Litentry',
'Cocos-BCX',
'MixMarvel',
'Sentinel Protocol',
'SuperRare',
'Shiden Network',
'Firo',
'Mirrored ProShares VIX',
'Adshares',
'PlanetWatch',
'FIO Protocol',
'SUKU',
'Karura',
'Wirex Token',
'Tellor',
'Bytom',
'Aion',
'Energi',
'Apollo Currency',
'Akropolis',
'RAMP',
'Haven Protocol',
'Lido DAO Token',
'Measurable Data Token',
'Hacken Token',
'Groestlcoin',
'Fusion',
'Bluzelle',
'Bella Protocol',
'Gas',
'Metronome',
'Refereum',
'Steem Dollars',
'Mirrored iShares Gold Trust',
'LGCY Network',
'DigixDAO',
'Waltonchain',
'AMO Coin',
'PowerPool',
'BOSAGORA',
'NULS',
'CONUN',
'MANTRA DAO',
'LATOKEN',
'BTU Protocol',
'MimbleWimbleCoin',
'Smooth Love Potion',
'AnimalGo',
'Hermez Network',
'SOLVE',
'Super Zero Protocol',
'Newscrypto',
'dForce',
'ERC20',
'Aeternity',
'CoinEx Token',
'VerusCoin',
'BTSE',
'Ultiledger',
'Mithril',
'PAC Protocol',
'Beam',
'TerraKRW',
'SORA',
'Selfkey',
'Kryll',
'Dragonchain',
'Bytecoin',
'Dock',
'Venus USDT',
'Mobius',
'PAID Network',
'Frontier',
'Smart MFG',
'Opulous',
'Marlin',
'GNY',
'MATH',
'Aragon Court',
'Everest',
'Dego Finance',
'Drep [new]',
'InsurAce',
'Unifi Protocol DAO',
'Invictus Hyperion Fund',
'TNC Coin',
'Ternoa',
'New BitShares',
'v.systems',
'Soda Coin',
'Burger Swap',
'Reserve',
'Neutrino Token',
'USDK',
'Hegic',
'Oxen',
'WaykiChain',
'EFFORCE',
'Moneytoken',
'LikeCoin',
'ShareToken',
'CargoX',
'Bounce Finance Governance Token',
'ForTube',
'Dora Factory',
'NFTX',
'Locus Chain',
'BitForex Token',
'AhaToken',
'The Midas Touch Gold',
'DEXTools',
'Student Coin',
'REVV',
'Edgeware',
'Switcheo',
'ApolloX',
'Sentivate',
'AirSwap',
'pNetwork',
'QASH',
'Cream Finance',
'VITE',
'MultiVAC',
'ReddCoin',
'GYEN',
'Internxt',
'Bread',
'Nimiq',
'Gifto',
'Namecoin',
'PIVX',
'Tornado Cash',
'Particl',
'MAP Protocol',
'PERL.eco',
'VIDT Datalink',
'Counterparty',
'King DAG',
'Galaxy Heroes Coin',
'Peony',
'GoChain',
'ChainGuardians',
'Auto',
'NEST Protocol',
'Wing Finance',
'Nexus',
'TEMCO',
'GameCredits',
'Quiztok',
'Opacity',
'Exeedme',
'BLOCKv',
'Crust Network',
'GET Protocol',
'POA Network',
'Bankera',
'Newton',
'BEPRO Network',
'Vertcoin',
'Observer',
'Oxygen',
'VIMworld',
'DxChain Token',
'Aventus',
'Gameswap',
'Populous',
'ChainX',
'BABB',
'Nash',
'BitKan',
'Grin',
'Dovu',
'Quantstamp',
'Arcblock',
'Banano',
'#MetaHash',
'BIDR',
'Validity',
'TokenClub',
'Venus SXP',
'DIGG',
'Smartlands Network',
'Peercoin',
'HyperCash',
'LBRY Credits',
'CUTcoin',
'USDJ',
'Etherisc DIP Token',
'Obyte',
'saffron.finance',
'Poseidon Network',
'Decentral Games ICE',
'Sin City Metaverse',
'IQeon',
'Emirex Token',
'dHedge DAO',
'Safe Haven',
'Life Crypto',
'SafeCoin',
'Zano',
'OneLedger',
'Kylin',
'Decimated',
'Signum',
'Polkamarkets',
'UniLend',
'0Chain',
'Niftyx Protocol',
'Goldcoin',
'suterusu',
'Nebulas',
'BigONE Token',
'mStable Governance Token: Meta (MTA)',
'WELL',
'Nestree',
'Pickle Finance',
'Santiment Network Token',
'Mirrored Apple',
'Venus LINK',
'SENSO',
'Venus LTC',
'Bitcoin 2',
'Cardstack',
'O3 Swap',
'Muse',
'Callisto Network',
'Mirrored Tesla',
'Wabi',
'Darwinia Network',
'Mirrored iShares Silver Trust',
'AC Milan Fan Token',
'Pluton',
'Quantum Resistant Ledger',
'Zynecoin',
'Cashaa',
'Only1',
'CoinPoker',
'SparkPoint',
'UBIX.Network',
'Abyss',
'Factom',
'Tachyon Protocol',
'FOAM',
'Mirrored United States Oil Fund',
'Cindicator',
'Ignis',
'MCDEX Token',
'Raiden Network Token',
'Mirrored Alibaba',
'WOM Protocol',
'Pundi X NEM',
'Navcoin',
'RioDeFi',
'Anchor',
'Huobi Pool Token',
'Numbers Protocol',
'Atletico De Madrid Fan Token',
'Mirrored Invesco QQQ Trust',
'Phoenix Global (new)',
'Stakenet',
'TrueChain',
'Tokenomy',
'0xBitcoin',
'RING X PLATFORM',
'Asch',
'FREEdom Coin',
'Neblio',
'Shopping',
'Agoras: Currency of Tau',
'Mirrored Microsoft',
'Mirrored Amazon',
'Nxt',
'Trias Token (new)',
'PRIZM'];

/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
autocomplete(document.getElementById("coin"), countries);
