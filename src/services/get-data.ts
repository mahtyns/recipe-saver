import { collection, getDocs, DocumentData, QueryDocumentSnapshot } from 'firebase/firestore';
import { db } from '@/app/lib/firebase/firebase';

export async function fetchCollectionData<T extends DocumentData>(collectionName: string): Promise<(T & { id: string })[]> {
    try {
        const q = collection(db, collectionName);
        const querySnapshot = await getDocs(q);

        const data = querySnapshot.docs.map((docSnap: QueryDocumentSnapshot<DocumentData>) => {
            const typedData = docSnap.data() as T;
            return {
                id: docSnap.id,
                ...typedData, 
            };
        });
        return data as (T & { id: string })[]; 
    } catch (error) {
        console.error("Error fetching collection:", error);
        throw error;
    }
}