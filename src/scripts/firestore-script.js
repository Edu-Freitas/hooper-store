const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyCIbAxCieeyVOjs88oiH1LPNwVFDpFos2k',
  authDomain: 'hooper-s-f2d3c.firebaseapp.com',
  projectId: 'hooper-s-f2d3c',
  storageBucket: 'hooper-s-f2d3c.appspot.com',
  messagingSenderId: '828322098516',
  appId: '1:828322098516:web:97d3cef05d7c9a01b1ecc1'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'sneakers',
    displayName: 'Tênis',
    imageUrl:
      'https://i.pinimg.com/564x/3e/aa/a7/3eaaa77b8c322c02d4d2d8c2ca51efc3.jpg',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'D-Rose Son of Chi 2',
        price: 1.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-adidas-d-rose-son-of-chi-2/08/3ZP-9541-008/3ZP-9541-008_zoom1.jpg?ts=1657391310&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-adidas-d-rose-son-of-chi-2/08/3ZP-9541-008/3ZP-9541-008_zoom2.jpg?ts=1657391310&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-d-rose-son-of-chi-2/08/3ZP-9541-008/3ZP-9541-008_zoom2.jpg?ts=1657391310&?ims=1088x'
        ]
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'NBA Nike Kd Trey 5 X',
        price: 2.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-nba-nike-kd-trey-5-x-masculino/73/2IC-8920-473/2IC-8920-473_zoom1.jpg?ts=1660733919&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-nba-nike-kd-trey-5-x-masculino/73/2IC-8920-473/2IC-8920-473_zoom2.jpg?ts=1660733919&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-nba-nike-kd-trey-5-x-masculino/73/2IC-8920-473/2IC-8920-473_zoom2.jpg?ts=1660733919&?ims=1088x'
        ]
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'Nike Precision VI',
        price: 3.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-nike-precision-vi-masculino/68/2IC-7496-868/2IC-7496-868_zoom1.jpg?ts=1659100370&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-nike-precision-vi-masculino/68/2IC-7496-868/2IC-7496-868_zoom2.jpg?ts=1659100370&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-nike-precision-vi-masculino/68/2IC-7496-868/2IC-7496-868_zoom2.jpg?ts=1659100370&?ims=1088x'
        ]
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Puma Triple Mid',
        price: 2.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-puma-triple-mid/74/2I3-3747-274/2I3-3747-274_zoom1.jpg?ts=1659712006&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-puma-triple-mid/74/2I3-3747-274/2I3-3747-274_zoom2.jpg?ts=1659712006&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-puma-triple-mid/74/2I3-3747-274/2I3-3747-274_zoom2.jpg?ts=1659712006&?ims=1088x'
        ]
      },
      {
        id: '6228fd3bb7e6cb904bbe015a',
        name: 'Under Armour Buzzer',
        price: 1.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-under-armour-buzzer-masculino/72/39W-3125-172/39W-3125-172_zoom1.jpg?ts=1657802554&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-under-armour-buzzer-masculino/72/39W-3125-172/39W-3125-172_zoom2.jpg?ts=1657802554&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-under-armour-buzzer-masculino/72/39W-3125-172/39W-3125-172_zoom2.jpg?ts=1657802554&?ims=1088x'
        ]
      },
      {
        id: '6228fda4b7e6cb904bbe015f',
        name: 'Nike KD15',
        price: 4.9,
        imageUrl: [
          'https://imgnike-a.akamaihd.net/900x900/023704ID.jpg',
          'https://imgnike-a.akamaihd.net/900x900/023704IDA4.jpg'
        ]
      },
      {
        id: '6228fca3b7e6cb904bbe0150',
        name: 'Adidas Pró Next N3XT 2021',
        price: 1.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/tenis-adidas-pro-next-n3xt-2021/02/3ZP-9544-002/3ZP-9544-002_zoom1.jpg?ts=1657402674&ims=544x',
          'https://static.netshoes.com.br/produtos/tenis-adidas-pro-next-n3xt-2021/02/3ZP-9544-002/3ZP-9544-002_zoom2.jpg?ts=1657402674&?ims=544xhttps://static.netshoes.com.br/produtos/tenis-adidas-pro-next-n3xt-2021/02/3ZP-9544-002/3ZP-9544-002_zoom2.jpg?ts=1657402674&?ims=1088x'
        ]
      },
      {
        id: '6228fd63b7e6cb904bbe015c',
        name: 'NIKE KD14 NRG',
        price: 6.9,
        imageUrl: [
          'https://imgnike-a.akamaihd.net/900x900/02333715.jpg',
          'https://imgnike-a.akamaihd.net/900x900/02333715A4.jpg'
        ]
      }
    ]
  },
  {
    id: '6228f760b7e6cb904bbe012e',
    name: 'balls',
    displayName: 'Bolas',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/04/05/09/03/ball-3292243_960_720.jpg',
    products: [
      {
        id: '6228f7a3b7e6cb904bbe0134',
        name: 'Penalty Crossover X',
        price: 0.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-penalty-crossover-x-58/06/D23-4146-206/D23-4146-206_zoom1.jpg?ts=1597845855&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-penalty-crossover-x-58/06/D23-4146-206/D23-4146-206_zoom1.jpg?ts=1597845855&?ims=1088x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-penalty-crossover-x-58/06/D23-4146-206/D23-4146-206_zoom2.jpg?ts=1597845855&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-penalty-crossover-x-58/06/D23-4146-206/D23-4146-206_zoom2.jpg?ts=1597845855&?ims=1088x'
        ]
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'NBA Wilson Authentic Heritage',
        price: 1.0,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-nba-wilson-authentic-heritage/38/D25-4831-138/D25-4831-138_zoom1.jpg?ts=1665505068&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-nba-wilson-authentic-heritage/38/D25-4831-138/D25-4831-138_zoom3.jpg?ts=1665505068&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-nba-wilson-authentic-heritage/38/D25-4831-138/D25-4831-138_zoom3.jpg?ts=1665505068&?ims=1088x'
        ]
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'Spalding Tf-33 3X3 Fiba',
        price: 0.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-basquete-spalding-tf-33-3x3-fiba-micr/74/IJS-0240-074/IJS-0240-074_zoom1.jpg?ts=1617011707&?ims=544xhttps://static.netshoes.com.br/produtos/bola-basquete-spalding-tf-33-3x3-fiba-micr/74/IJS-0240-074/IJS-0240-074_zoom1.jpg?ts=1617011707&?ims=1088x',
          'https://static.netshoes.com.br/produtos/bola-basquete-spalding-tf-33-3x3-fiba-micr/74/IJS-0240-074/IJS-0240-074_zoom2.jpg?ts=1617011707&?ims=544xhttps://static.netshoes.com.br/produtos/bola-basquete-spalding-tf-33-3x3-fiba-micr/74/IJS-0240-074/IJS-0240-074_zoom2.jpg?ts=1617011707&?ims=1088x'
        ]
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Wilson NBA Platinum Edition',
        price: 1.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-platinum-edition-7/01/D25-3632-N01/D25-3632-N01_zoom1.jpg?ts=1656645769&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-platinum-edition-7/01/D25-3632-N01/D25-3632-N01_zoom2.jpg?ts=1656645769&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-platinum-edition-7/01/D25-3632-N01/D25-3632-N01_zoom2.jpg?ts=1656645769&?ims=1088x'
        ]
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Wilson NBA Gold Edition',
        price: 1.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-gold-edition-7/01/D25-3619-N01/D25-3619-N01_zoom1.jpg?ts=1656645774&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-gold-edition-7/01/D25-3619-N01/D25-3619-N01_zoom2.jpg?ts=1656645774&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-gold-edition-7/01/D25-3619-N01/D25-3619-N01_zoom2.jpg?ts=1656645774&?ims=1088x'
        ]
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'NBA Chicago Bulls Wilson Team Alliance',
        price: 1.2,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-nba-chicago-bulls-wilson-team-alliance-7/95/D25-3627-795/D25-3627-795_zoom1.jpg?ts=1629222472&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-nba-chicago-bulls-wilson-team-alliance-7/95/D25-3627-795/D25-3627-795_zoom3.jpg?ts=1629222472&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-nba-chicago-bulls-wilson-team-alliance-7/95/D25-3627-795/D25-3627-795_zoom3.jpg?ts=1629222472&?ims=1088x'
        ]
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Poker Supreme Star',
        price: 1.3,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-supreme-star-n-7-05725/41/D57-4742-D41/D57-4742-D41_zoom1.jpg?ts=1642499804&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-supreme-star-n-7-05725/41/D57-4742-D41/D57-4742-D41_zoom3.jpg?ts=1642499804&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-supreme-star-n-7-05725/41/D57-4742-D41/D57-4742-D41_zoom3.jpg?ts=1642499804&?ims=1088x'
        ]
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Wilson NBA Forge Plus',
        price: 1.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-forge-plus/12/D25-4103-012/D25-4103-012_zoom1.jpg?ts=1643292573&ims=544x',
          'https://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-forge-plus/12/D25-4103-012/D25-4103-012_zoom2.jpg?ts=1643292573&?ims=544xhttps://static.netshoes.com.br/produtos/bola-de-basquete-wilson-nba-forge-plus/12/D25-4103-012/D25-4103-012_zoom2.jpg?ts=1643292573&?ims=1088x'
        ]
      }
    ]
  },
  {
    id: '623064ee22376f1e6b869471',
    name: 'male',
    displayName: 'Masculino',
    imageUrl:
      'https://i.pinimg.com/564x/22/a4/26/22a42640da3a7ea2efd9c8d5a8a37fdb.jpg',
    products: [
      {
        id: '6230655f22376f1e6b869473',
        name: 'Regata  Los Angeles Lakers',
        price: 0.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/regata-new-era-regular-nba-los-angeles-lakers-plus-size-masculino-preto/06/BRJ-1712-006/BRJ-1712-006_zoom1.jpg?ts=1666699928&ims=544x',
          'https://static.netshoes.com.br/produtos/regata-new-era-regular-nba-los-angeles-lakers-plus-size-masculino-preto/06/BRJ-1712-006/BRJ-1712-006_zoom2.jpg?ts=1666699928&?ims=544xhttps://static.netshoes.com.br/produtos/regata-new-era-regular-nba-los-angeles-lakers-plus-size-masculino-preto/06/BRJ-1712-006/BRJ-1712-006_zoom2.jpg?ts=1666699928&?ims=1088x'
        ]
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'Camiseta New Era Boston Celtics',
        price: 0.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/camiseta-new-era-boston-celtics-nba-energy-spirit/60/BRJ-1646-060/BRJ-1646-060_zoom1.jpg?ts=1666372989&ims=544x',
          'https://static.netshoes.com.br/produtos/camiseta-new-era-boston-celtics-nba-energy-spirit/60/BRJ-1646-060/BRJ-1646-060_zoom2.jpg?ts=1666372989&?ims=544xhttps://static.netshoes.com.br/produtos/camiseta-new-era-boston-celtics-nba-energy-spirit/60/BRJ-1646-060/BRJ-1646-060_zoom2.jpg?ts=1666372989&?ims=1088x'
        ]
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'Regata New Era Regular NBA Chicago Bulls ',
        price: 0.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/regata-new-era-regular-nba-chicago-bulls-plus-size-masculino-vermelho/16/BRJ-1713-016/BRJ-1713-016_zoom1.jpg?ts=1666699950&ims=544x',
          'https://static.netshoes.com.br/produtos/regata-new-era-regular-nba-chicago-bulls-plus-size-masculino-vermelho/16/BRJ-1713-016/BRJ-1713-016_zoom2.jpg?ts=1666699950&?ims=544xhttps://static.netshoes.com.br/produtos/regata-new-era-regular-nba-chicago-bulls-plus-size-masculino-vermelho/16/BRJ-1713-016/BRJ-1713-016_zoom2.jpg?ts=1666699950&?ims=1088x'
        ]
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Camiseta Regata Slam Dunk Ryonan',
        price: 0.7,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/camisa-camiseta-regata-slam-dunk-ryonan-7/14/J6W-0225-014/J6W-0225-014_zoom1.jpg?ts=1666087426&ims=544x',
          'https://static.netshoes.com.br/produtos/camisa-camiseta-regata-slam-dunk-ryonan-7/14/J6W-0225-014/J6W-0225-014_zoom2.jpg?ts=1666087426&?ims=544xhttps://static.netshoes.com.br/produtos/camisa-camiseta-regata-slam-dunk-ryonan-7/14/J6W-0225-014/J6W-0225-014_zoom2.jpg?ts=1666087426&?ims=1088x'
        ]
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'Bermuda Basquete M10 Action NY',
        price: 1.4,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bermuda-basquete-plus-size-m10-action-ny-new-york/06/QAH-0123-006/QAH-0123-006_zoom1.jpg?ts=1666201736&ims=544x',
          'https://static.netshoes.com.br/produtos/bermuda-basquete-plus-size-m10-action-ny-new-york/06/QAH-0123-006/QAH-0123-006_zoom2.jpg?ts=1666201736&?ims=544xhttps://static.netshoes.com.br/produtos/bermuda-basquete-plus-size-m10-action-ny-new-york/06/QAH-0123-006/QAH-0123-006_zoom2.jpg?ts=1666201736&?ims=1088x'
        ]
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'CALÇA UNDER ARMOUR SPORTSTYLE',
        price: 1.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/calca-under-armour-sportstyle-tricot-graphic/06/39W-5376-006/39W-5376-006_zoom1.jpg?ts=1664982138&ims=544x',
          'https://static.netshoes.com.br/produtos/calca-under-armour-sportstyle-tricot-graphic/06/39W-5376-006/39W-5376-006_zoom2.jpg?ts=1664982138&?ims=544xhttps://static.netshoes.com.br/produtos/calca-under-armour-sportstyle-tricot-graphic/06/39W-5376-006/39W-5376-006_zoom2.jpg?ts=1664982138&?ims=1088x'
        ]
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'JAQUETA CORTA VENTO NBA LOS ANGELES LAKERS',
        price: 1.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/jaqueta-corta-vento-windbreaker-nba-los-angeles-lakers-neutral-wild-preto-new-era/06/1XB-9639-006/1XB-9639-006_zoom1.jpg?ts=1650895450&ims=544x',
          'https://static.netshoes.com.br/produtos/jaqueta-corta-vento-windbreaker-nba-los-angeles-lakers-neutral-wild-preto-new-era/06/1XB-9639-006/1XB-9639-006_zoom2.jpg?ts=1650895450&?ims=544xhttps://static.netshoes.com.br/produtos/jaqueta-corta-vento-windbreaker-nba-los-angeles-lakers-neutral-wild-preto-new-era/06/1XB-9639-006/1XB-9639-006_zoom2.jpg?ts=1650895450&?ims=1088x'
        ]
      }
    ]
  },
  {
    id: '6228fdd8b7e6cb904bbe0162',
    name: 'female',
    displayName: 'Feminino',
    imageUrl:
      'https://i.pinimg.com/564x/aa/b5/d3/aab5d3afad6fc7e9ec6a7704d066692b.jpg',
    products: [
      {
        id: '6228fe63b7e6cb904bbe0165',
        name: 'Camiseta Nike Chicago Bulls',
        price: 0.8,
        imageUrl: [
          'https://imgnike-a.akamaihd.net/900x900/023689P1.jpg',
          'https://imgnike-a.akamaihd.net/900x900/023689P1A1.jpg'
        ]
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Camiseta Nike Los Angeles Lakers ',
        price: 0.8,
        imageUrl: [
          'https://imgnike-a.akamaihd.net/900x900/0239780L.jpg',
          'https://imgnike-a.akamaihd.net/900x900/0239780LA1.jpg'
        ]
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Shorts Feminino Boxe',
        price: 0.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/shorts-feminino-boxe/16/57G-0083-016/57G-0083-016_zoom1.jpg?ts=1644593807&ims=544x',
          'https://static.netshoes.com.br/produtos/shorts-feminino-boxe/16/57G-0083-016/57G-0083-016_zoom2.jpg?ts=1644593807&?ims=544xhttps://static.netshoes.com.br/produtos/shorts-feminino-boxe/16/57G-0083-016/57G-0083-016_zoom2.jpg?ts=1644593807&?ims=1088x'
        ]
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Shorts UnderArmour Feminino Estampado',
        price: 1.0,
        imageUrl: [
          'https://underarmour.scene7.com/is/image/Underarmour/V5-1370302-002_FC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500',
          'https://underarmour.scene7.com/is/image/Underarmour/V5-1370302-002_BC?rp=standard-0pad|pdpZoomDesktop&scl=0.72&fmt=jpg&qlt=85&resMode=sharp2&cache=on,on&bgc=f0f0f0&wid=1836&hei=1950&size=1500,1500'
        ]
      },
      {
        id: '6228fe80b7e6cb904bbe0168',
        name: 'Moletom Adidas Hoop York City Crewneck',
        price: 1.5,
        imageUrl: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e5c8b2e5a9ac43649d50ae0501590c50_9366/Moletom_Hoop_York_City_Crewneck_Azul_HD2876_01_laydown.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/af2908067610475d8311ae0a01580c4a_9366/Moletom_Hoop_York_City_Crewneck_Azul_HD2876_41_detail.jpg'
        ]
      },
      {
        id: '6228ff31b7e6cb904bbe0172',
        name: 'Shorts Adidas Hoop York City Malha',
        price: 1.0,
        imageUrl: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/d1744e4b585c4823a09eae04000e4438_9366/Shorts_Hoop_York_City_Malha_Turquesa_HB0693_25_model.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ab101a9071534112aba6ae04000cb54e_9366/Shorts_Hoop_York_City_Malha_Turquesa_HB0693_23_hover_model.jpg'
        ]
      },
      {
        id: '62290014b7e6cb904bbe017c',
        name: 'Moletom Capuz Hoop York City',
        price: 1.5,
        imageUrl: [
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a207ae330ff64ea5b232ae46002ac181_9366/Moletom_Capuz_Hoop_York_City_Roxo_HE1264_01_laydown.jpg',
          'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/5ee819089370406187f2ae7c0177fe20_9366/Moletom_Capuz_Hoop_York_City_Roxo_HE1264_42_detail.jpg'
        ]
      }
    ]
  },
  {
    id: '6228f52eb7e6cb904bbe0111',
    name: 'accessories',
    displayName: 'Acessórios',
    imageUrl:
      'https://i.pinimg.com/564x/fb/2e/95/fb2e95e52758d9e69ab92996beb66b15.jpg',
    products: [
      {
        id: '6228f5beb7e6cb904bbe0119',
        name: 'Mochila Nike Hoops Elite Pro ',
        price: 2.5,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/mochila-nike-hoops-elite-pro-unissex/10/JD8-0495-010/JD8-0495-010_zoom2.jpg?ts=1667213859&?ims=544xhttps://static.netshoes.com.br/produtos/mochila-nike-hoops-elite-pro-unissex/10/JD8-0495-010/JD8-0495-010_zoom2.jpg?ts=1667213859&?ims=1088x',
          'https://static.netshoes.com.br/produtos/mochila-nike-hoops-elite-pro-unissex/10/JD8-0495-010/JD8-0495-010_zoom3.jpg?ts=1667213859&?ims=544xhttps://static.netshoes.com.br/produtos/mochila-nike-hoops-elite-pro-unissex/10/JD8-0495-010/JD8-0495-010_zoom3.jpg?ts=1667213859&?ims=1088x'
        ]
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Bone 9twenty Golden State Warriors',
        price: 0.8,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bone-9twenty-golden-state-warriors-tip-off-aba-curva-aba-curva-strapback-preto-new-era/06/BRJ-1822-006/BRJ-1822-006_zoom2.jpg?ts=1667006762&?ims=544xhttps://static.netshoes.com.br/produtos/bone-9twenty-golden-state-warriors-tip-off-aba-curva-aba-curva-strapback-preto-new-era/06/BRJ-1822-006/BRJ-1822-006_zoom2.jpg?ts=1667006762&?ims=1088x',
          'https://static.netshoes.com.br/produtos/bone-9twenty-golden-state-warriors-tip-off-aba-curva-aba-curva-strapback-preto-new-era/06/BRJ-1822-006/BRJ-1822-006_zoom1.jpg?ts=1667006762&ims=544x'
        ]
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'Pulseiras NBA Diversas',
        price: 1.0,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/pulseira-basquete-logo-liga-americana-boston-utah-miami/08/HS2-0061-008/HS2-0061-008_zoom1.jpg?ts=1665765699&ims=544x',
          'https://static.netshoes.com.br/produtos/pulseira-brooklyn-kidd-basquete-kd-irving-james-the-beard/06/HS2-0064-006/HS2-0064-006_zoom1.jpg?ts=1665765857&ims=544x'
        ]
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Mochila Impermeável Hoop',
        price: 2.0,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/mochila-impermeavel-executiva-trabalho-stargap-st-802/06/9IX-0001-006/9IX-0001-006_zoom2.jpg?ts=1665158774&?ims=544xhttps://static.netshoes.com.br/produtos/mochila-impermeavel-executiva-trabalho-stargap-st-802/06/9IX-0001-006/9IX-0001-006_zoom2.jpg?ts=1665158774&?ims=1088x',
          'https://static.netshoes.com.br/produtos/mochila-impermeavel-executiva-trabalho-stargap-st-802/06/9IX-0001-006/9IX-0001-006_zoom1.jpg?ts=1665158774&?ims=544xhttps://static.netshoes.com.br/produtos/mochila-impermeavel-executiva-trabalho-stargap-st-802/06/9IX-0001-006/9IX-0001-006_zoom1.jpg?ts=1665158774&?ims=1088x'
        ]
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Boné Brooklyn Nets NBA',
        price: 0.8,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bone-950-brooklyn-nets-nba-aba-reta-new-era/16/IJX-0265-016/IJX-0265-016_zoom2.jpg?ts=1627668316&?ims=544xhttps://static.netshoes.com.br/produtos/bone-950-brooklyn-nets-nba-aba-reta-new-era/16/IJX-0265-016/IJX-0265-016_zoom2.jpg?ts=1627668316&?ims=1088x',
          'https://static.netshoes.com.br/produtos/bone-950-brooklyn-nets-nba-aba-reta-new-era/16/IJX-0265-016/IJX-0265-016_zoom3.jpg?ts=1627668316&?ims=544xhttps://static.netshoes.com.br/produtos/bone-950-brooklyn-nets-nba-aba-reta-new-era/16/IJX-0265-016/IJX-0265-016_zoom3.jpg?ts=1627668316&?ims=1088x'
        ]
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Bucket NBA Golden State Warriors',
        price: 1.0,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/bucket-new-eranba-golden-state-warriors-global-collection/08/IJX-5119-008/IJX-5119-008_zoom2.jpg?ts=1645014657&?ims=544xhttps://static.netshoes.com.br/produtos/bucket-new-eranba-golden-state-warriors-global-collection/08/IJX-5119-008/IJX-5119-008_zoom2.jpg?ts=1645014657&?ims=1088x',
          'https://static.netshoes.com.br/produtos/bucket-new-eranba-golden-state-warriors-global-collection/08/IJX-5119-008/IJX-5119-008_zoom1.jpg?ts=1645014657&?ims=544xhttps://static.netshoes.com.br/produtos/bucket-new-eranba-golden-state-warriors-global-collection/08/IJX-5119-008/IJX-5119-008_zoom1.jpg?ts=1645014657&?ims=1088x'
        ]
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Gorro Brooklyn Nets',
        price: 0.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/gorro-brooklyn-nets-nba-core-preto-new-era/06/1XB-9246-006/1XB-9246-006_zoom1.jpg?ts=1665496088&ims=544x',
          'https://static.netshoes.com.br/produtos/gorro-brooklyn-nets-nba-core-preto-new-era/06/1XB-9246-006/1XB-9246-006_zoom3.jpg?ts=1665496088&?ims=544xhttps://static.netshoes.com.br/produtos/gorro-brooklyn-nets-nba-core-preto-new-era/06/1XB-9246-006/1XB-9246-006_zoom3.jpg?ts=1665496088&?ims=1088x'
        ]
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Mochila NBA Authentic Series',
        price: 1.9,
        imageUrl: [
          'https://static.netshoes.com.br/produtos/mochila-nba-authentic-series-preto-wilson/06/D25-4014-006/D25-4014-006_zoom1.jpg?ts=1638362098&ims=544x',
          'https://static.netshoes.com.br/produtos/mochila-nba-authentic-series-preto-wilson/06/D25-4014-006/D25-4014-006_zoom2.jpg?ts=1638362098&?ims=544xhttps://static.netshoes.com.br/produtos/mochila-nba-authentic-series-preto-wilson/06/D25-4014-006/D25-4014-006_zoom2.jpg?ts=1638362098&?ims=1088x'
        ]
      }
    ]
  }
]

const main = async () => {
  await Promise.all(
    categories.map(async (category) => {
      await addDoc(collection(db, 'categories'), category)
    })
  )
}

main().then(() => process.exit())
