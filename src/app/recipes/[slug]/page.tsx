export default async function RecipePage({
    params,
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params
    // const post = await getRecipe(slug)

    return (
        <div>
            {/* <h1>{post.title}</h1>
            <p>{post.content}</p> */}
        </div>
    )
}