const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyD-6FX2AOzPWNtm2LfzkYyXxEa2MjeWSk4',
  authDomain: 'hooper-store-dfdee.firebaseapp.com',
  projectId: 'hooper-store-dfdee',
  storageBucket: 'hooper-store-dfdee.appspot.com',
  messagingSenderId: '851406488096',
  appId: '1:851406488096:web:7466f9ae2aeb3cba1e7245'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

const categories = [
  {
    id: '6228f760b7e6cb904bbe012e',
    name: 'balls',
    displayName: 'Bolas',
    imageUrl:
      'https://cdn.pixabay.com/photo/2018/04/05/09/03/ball-3292243_960_720.jpg',
    products: [
      {
        id: '6228f7a3b7e6cb904bbe0134',
        name: 'Spalding Streetball',
        price: 0.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/711nQzVrEZL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/71UBKrHERdL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'Champion Sports',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/81o+Tek84rL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/81ff1VauIqL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'Molten FIBA',
        price: 0.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/91v6Jz3OteL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/919oJhh2-QL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Spalding Legacy TF-1000',
        price: 1.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/91pLiy70AZS._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/910JL5LCDES._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Wilson NBA DRV',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/81kKAIFHjKL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/81pd0DQMqEL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'Mikasa BX1000',
        price: 1.2,
        imageUrl: [
          'https://m.media-amazon.com/images/I/717bzJLNB1L._AC_UL320_.jpg',
          'https://m.media-amazon.com/images/I/716w4e-Q1jL._AC_SX569_.jpg'
        ]
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Penalty Mirim',
        price: 1.3,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71BnSmkXGXL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/71lr3OV9loL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Penalty Shoot',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/712LKdBMx-L._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/711cEaD-+qL._AC_SX522_.jpg'
        ]
      }
    ]
  },
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'sneakers',
    displayName: 'Tênis',
    imageUrl:
      'https://i.pinimg.com/564x/3e/aa/a7/3eaaa77b8c322c02d4d2d8c2ca51efc3.jpg',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'Adidas Harden vol.6',
        price: 1.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71GXK6eUZhL._AC_SX500_.jpg',
          'https://m.media-amazon.com/images/I/31QKDtvl6SL._AC_US40_.jpg'
        ]
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'Nike LeBron 19 Royalty',
        price: 2.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71bD8OKKF0L._AC_SX500_.jpg',
          'https://m.media-amazon.com/images/I/31DvNvvGudL._AC_US40_.jpg'
        ]
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'UnderArmour Spawn 3',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/5109BViW-3L._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/51WthCS5vML._AC_SY500_.jpg'
        ]
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Nike LeBron 19 Low',
        price: 2.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/714KF2oWsiL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/715jYZriWRL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6228fd3bb7e6cb904bbe015a',
        name: 'Nike Giannis Immortality',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71SqvjUckoL._AC_SX500_.jpg',
          'https://m.media-amazon.com/images/I/61DjbqFwAKL._AC_SX500_.jpg'
        ]
      },
      {
        id: '6228fda4b7e6cb904bbe015f',
        name: 'Adidas Trae Young',
        price: 0.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71ItPVBXJAL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/41KuMeRw6eL._AC_US40_.jpg'
        ]
      },
      {
        id: '6228fca3b7e6cb904bbe0150',
        name: 'Jordan 7 Retro',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/515q5g2F8TL._AC_SX500_.jpg',
          'https://m.media-amazon.com/images/I/51c-n-U9OdL._AC_SX500_.jpg'
        ]
      },
      {
        id: '6228fd63b7e6cb904bbe015c',
        name: 'Nike Air Zoom',
        price: 2.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/710KX7Q0tSL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/71maqvo4TtL._AC_SY500_.jpg'
        ]
      }
    ]
  },
  {
    id: '623064ee22376f1e6b869471',
    name: 'male',
    displayName: 'Masculino',
    imageUrl:
      'https://i.pinimg.com/564x/49/12/d6/4912d68bcc6b6b04670e4dbd70e6cd78.jpg',
    products: [
      {
        id: '6230655f22376f1e6b869473',
        name: 'Bermuda Speedo',
        price: 0.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61LCMxWdDvL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/61IMVNatpWL._AC_SX522_.jpg'
        ]
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'Calção KKCare',
        price: 0.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/618PqDkZnHL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/71EAIJkxhuS._AC_SX522_.jpg'
        ]
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'Adidas Manga Curta',
        price: 0.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/81fsJS72F5L._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/81xHluxbxBL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Camiseta Spalding',
        price: 0.7,
        imageUrl: [
          'https://m.media-amazon.com/images/I/91o0l5sndzL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/91lteSpJ0ZL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'Calça Curtlo Guider',
        price: 1.4,
        imageUrl: [
          'https://m.media-amazon.com/images/I/51fEhy0TaPL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/51VUErTNI4L._AC_SX522_.jpg'
        ]
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'Bermuda New Balance',
        price: 1.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/51sU0y3G8PL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/51agrL9llmL._AC_SX522_.jpg'
        ]
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Casaco Adidas Legend Shooter',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/51EZB+zWuYL._AC_SX385_.jpg',
          'https://m.media-amazon.com/images/I/51VbC6JC3zL._AC_SX385_.jpg'
        ]
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Short Uppercut',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/51rQY39DfDL._AC_SX569_.jpg',
          'https://m.media-amazon.com/images/I/41xXRStl1VL._AC_.jpg'
        ]
      }
    ]
  },
  {
    id: '6228fdd8b7e6cb904bbe0162',
    name: 'female',
    displayName: 'Feminino',
    imageUrl:
      'https://i.pinimg.com/564x/4d/76/0a/4d760aa2a1dfd9bbb065116869d94de5.jpg',
    products: [
      {
        id: '6228fe63b7e6cb904bbe0165',
        name: 'Camiseta Nike Jersey',
        price: 0.8,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71pAa7o6kqL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/71YPEs1KilL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Camiseta Alleson ',
        price: 0.8,
        imageUrl: [
          'https://m.media-amazon.com/images/I/81MmdxK7+VL._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/91ryP3ZtYZL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Shorts CRZ',
        price: 0.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/81JCLjgO21L._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/71oTImcfAzL._AC_SY500_.jpg'
        ]
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Shorts STKOOBQ',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61y3URKjt+L._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/618NRXIDBUL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228fe80b7e6cb904bbe0168',
        name: 'Shorts Running',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/510NckmuxbL._AC_SX679_.jpg',
          'https://m.media-amazon.com/images/I/618NRXIDBUL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228ff31b7e6cb904bbe0172',
        name: 'Calça New Balance',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/41woKlvUyjL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/41PET36cs1L._AC_SX522_.jpg'
        ]
      },
      {
        id: '62290014b7e6cb904bbe017c',
        name: 'Calça Colcci',
        price: 1.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/718ywrZlA6L._AC_SY500_.jpg',
          'https://m.media-amazon.com/images/I/7122P8MJ2aL._AC_SY500_.jpg'
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
        name: 'Xiaomi SmartWatch',
        price: 2.5,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61CH+9X+ynL._AC_SX425_.jpg',
          'https://m.media-amazon.com/images/I/61LHfHqAEVL._AC_SX425_.jpg'
        ]
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Testeira Wilson',
        price: 0.8,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61AtjriUuXL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/51oltoXrGJL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'Adidas Tiara Unissex',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/71TPE88KktL._AC_SX569_.jpg',
          'https://m.media-amazon.com/images/I/81dNp8EuHyL._AC_SX569_.jpg'
        ]
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Mochila Tendy',
        price: 2.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61LflRis5ML._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/61ulr3mbI5L._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Manguito Nike',
        price: 0.8,
        imageUrl: [
          'https://m.media-amazon.com/images/I/51zuNZo8RxL._AC_SX679_.jpg',
          'https://m.media-amazon.com/images/I/81cCt42kVdL._AC_SY879_.jpg'
        ]
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Munhequeira Adidas',
        price: 1.0,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61H+WAZeWZL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/71Sh-IqIxhL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Bucket Nike',
        price: 0.9,
        imageUrl: [
          'https://m.media-amazon.com/images/I/61yntXj5ULL._AC_SX522_.jpg',
          'https://m.media-amazon.com/images/I/61KX6w2e0UL._AC_SX522_.jpg'
        ]
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Boné Nike',
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
