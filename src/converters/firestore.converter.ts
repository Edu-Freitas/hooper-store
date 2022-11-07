import {
  QueryDocumentSnapshot,
  SnapshotOptions,
  DocumentData
} from 'firebase/firestore'
import Category from '../types/category.types'

export const categoryConverter = {
  toFirestore(category: Category): DocumentData {
    return { ...category }
  },
  fromFirestore(
    snapshot: QueryDocumentSnapshot,
    options: SnapshotOptions
  ): Category {
    const data = snapshot.data()
    return {
      displayName: data.displayName,
      id: data.id,
      imageUrl: data.imageUrl,
      name: data.name,
      products: data.products
    }
  }
}
