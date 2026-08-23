import { ReactNode } from "react";
import { Loading } from "../../status-components/Loading";
import { Error } from "../../status-components/Error";

interface ListContentProps<T> {
    isPending: boolean,
    error: globalThis.Error | null,
    data: T[] | undefined,
    renderItem: (item: T) => ReactNode,
    mainClass: string
}
export const ListContent = <T,>(props: ListContentProps<T>) => {
    return (
        <div className={`${props.mainClass}__list`}>
            {
                props.isPending && <Loading />
            }
            {
                props.error && <Error message={props.error.message} />
            }
            {
                props.data && props.data.map((item) => props.renderItem(item))
            }
        </div>
    )
}