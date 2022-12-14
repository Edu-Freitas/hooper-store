const { addDoc, collection } = require('firebase/firestore')
const { getFirestore } = require('firebase/firestore')
const { initializeApp } = require('firebase/app')

const firebaseConfig = {
  apiKey: 'AIzaSyBCq1kgY_txFqhxR5PqkgwBdDXl66Ty1PI',
  authDomain: 'hooper-store-7561e.firebaseapp.com',
  projectId: 'hooper-store-7561e',
  storageBucket: 'hooper-store-7561e.appspot.com',
  messagingSenderId: '1001025879729',
  appId: '1:1001025879729:web:5c173bfb297497d086ec90'
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
          'https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
      },
      {
        id: '6228f93db7e6cb904bbe0140',
        name: 'Wilson March Madness',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1523142096306-cca37b5aa001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f8c7b7e6cb904bbe013b',
        name: 'Molten FIBA',
        price: 0.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1505747877606-af82e0613846?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f96bb7e6cb904bbe0142',
        name: 'Wilson NCAA',
        price: 1.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1518989229647-6377f907a0b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80'
        ]
      },
      {
        id: '6228f7f1b7e6cb904bbe0136',
        name: 'Wilson EVO',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1614491740058-397038425e7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f8afb7e6cb904bbe0139',
        name: 'Nike ELITE',
        price: 1.2,
        imageUrl: [
          'https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f986b7e6cb904bbe0145',
        name: 'Spalding NBA',
        price: 1.3,
        imageUrl: [
          'https://images.unsplash.com/photo-1518407613690-d9fc990e795f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f8f9b7e6cb904bbe013d',
        name: 'Spalding TF-250',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1653191584476-9b7b47f9a8c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=801&q=80'
        ]
      }
    ]
  },
  {
    id: '6228fc5cb7e6cb904bbe014b',
    name: 'sneakers',
    displayName: 'T??nis',
    imageUrl:
      'https://i.pinimg.com/564x/3e/aa/a7/3eaaa77b8c322c02d4d2d8c2ca51efc3.jpg',
    products: [
      {
        id: '6228fc8bb7e6cb904bbe014e',
        name: 'Nike Air Branco',
        price: 1.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1645928565297-47f4708dc978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        ]
      },
      {
        id: '6228fcb9b7e6cb904bbe0152',
        name: 'Nike Air Jordan 23',
        price: 2.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1490168105446-f43395eb50b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        ]
      },
      {
        id: '6228fce4b7e6cb904bbe0154',
        name: 'NIke Air Max Preto',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1522005574800-a4365645f893?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228fd19b7e6cb904bbe0157',
        name: 'Nike Air Max Amarelo',
        price: 2.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228fd3bb7e6cb904bbe015a',
        name: 'Nike Zoom Azul',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1635770997862-2b93a75f4856?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228fda4b7e6cb904bbe015f',
        name: 'Fila Azul Cano M??dio',
        price: 0.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1635770997852-57b433492848?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80'
        ]
      },
      {
        id: '6228fca3b7e6cb904bbe0150',
        name: 'Jordan 1 Retro',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1611075893146-1bbb4078560f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80'
        ]
      },
      {
        id: '6228fd63b7e6cb904bbe015c',
        name: 'Nike Jordan Low',
        price: 2.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1579198413527-1d9d1a80dff8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
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
        name: 'Camisa HighSchool Verde',
        price: 0.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1605773741569-9a72c40fc63b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        ]
      },
      {
        id: '623065f422376f1e6b869488',
        name: 'Camiseta Lakers 8',
        price: 0.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1530279281203-4c60af01ee58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6230662e22376f1e6b86948e',
        name: 'Camiseta Bulls',
        price: 0.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1568809391772-503bcd521202?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=445&q=80'
        ]
      },
      {
        id: '6230661122376f1e6b86948a',
        name: 'Camisa Nike Preta',
        price: 0.7,
        imageUrl: [
          'https://images.unsplash.com/photo-1646832916190-9e4c1770e604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=747&q=80'
        ]
      },
      {
        id: '6230661f22376f1e6b86948c',
        name: 'Camisa Street Laranja',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1558563467-6e7ef8faad11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
        ]
      },
      {
        id: '6230658322376f1e6b86947b',
        name: 'UnderArmour Segunda Pele Preta',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1645109496862-2abe27c1aeb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Jaqueta Corta Vento Branca',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1615545362149-85299994b09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
        ]
      },
      {
        id: '623065b022376f1e6b869480',
        name: 'Camiseta Nothing But Net',
        price: 1.5,
        imageUrl: [
          'https://images.pexels.com/photos/9634932/pexels-photo-9634932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
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
        name: 'Moletom Cinza',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        ]
      },
      {
        id: '6228fec7b7e6cb904bbe016f',
        name: 'Conjunto Esportivo Amarelo',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=420&q=80'
        ]
      },
      {
        id: '6228ff71b7e6cb904bbe0175',
        name: 'Top Nike',
        price: 0.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1512399370925-f7b84cf7a66a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80'
        ]
      },
      {
        id: '6228ff93b7e6cb904bbe0177',
        name: 'Camiseta de Time',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1527066413387-de657047c963?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        ]
      },
      {
        id: '6228fe80b7e6cb904bbe0168',
        name: 'Camiseta Lakers 23',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1556441693-e27bc50c45c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80'
        ]
      },
      {
        id: '6228ff31b7e6cb904bbe0172',
        name: 'Camisa Segunda Pele Branca',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1616448208833-f42328fad6e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=427&q=80'
        ]
      },
      {
        id: '62290014b7e6cb904bbe017c',
        name: 'Short Preto e Branco',
        price: 1.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1618374786896-d4985e2df9a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        ]
      }
    ]
  },
  {
    id: '6228f52eb7e6cb904bbe0111',
    name: 'accessories',
    displayName: 'Acess??rios',
    imageUrl:
      'https://i.pinimg.com/564x/fb/2e/95/fb2e95e52758d9e69ab92996beb66b15.jpg',
    products: [
      {
        id: '6228f5beb7e6cb904bbe0119',
        name: 'Bon?? Jordan Preto',
        price: 0.5,
        imageUrl: [
          'https://images.unsplash.com/photo-1656769338693-42e487aeab65?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        ]
      },
      {
        id: '6228f60bb7e6cb904bbe011f',
        name: 'Bon?? TOPA',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1525740615880-50bb88fe0b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
        ]
      },
      {
        id: '6228f6c8b7e6cb904bbe012c',
        name: 'Gorro Lakers',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1530227826287-f12d70f4ee18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f5e8b7e6cb904bbe011d',
        name: 'Garrafa 1lt',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1643665767099-a19f96816171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
        ]
      },
      {
        id: '6228f68eb7e6cb904bbe0125',
        name: 'Rel??gio Fifth',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1474859740426-f0db7f4f5d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'
        ]
      },
      {
        id: '6228f591b7e6cb904bbe0115',
        name: 'Bolsa Esportiva',
        price: 1.0,
        imageUrl: [
          'https://images.unsplash.com/photo-1643467357478-47a617e95340?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
        ]
      },
      {
        id: '6228f625b7e6cb904bbe0121',
        name: 'Mochila Venum',
        price: 0.9,
        imageUrl: [
          'https://images.unsplash.com/photo-1615545362149-85299994b09b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80'
        ]
      },
      {
        id: '6228f648b7e6cb904bbe0123',
        name: 'Bandanas Variadas',
        price: 0.8,
        imageUrl: [
          'https://images.unsplash.com/photo-1601938219471-fb3393955f15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
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
