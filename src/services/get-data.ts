import { collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/app/lib/firebase/firebase';

export async function fetchCollectionData<T extends DocumentData>(collectionName: string): Promise<(T & { id: string })[]> {
    try {
        const q = collection(db, collectionName);
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((docSnap: QueryDocumentSnapshot<DocumentData>) => {
            // Cast the result of docSnap.data() to your expected generic type T
            const typedData = docSnap.data() as T;
            return {
                id: docSnap.id,
                ...typedData, // Spread the now-typed data
            };
        });
        return data as (T & { id: string })[]; // Explicitly cast the final return type
    } catch (error) {
        console.error("Error fetching collection:", error);
        throw error;
    }
}