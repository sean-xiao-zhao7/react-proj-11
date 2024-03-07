export default function BlogPost({ params }: { params: { slug: string } }) {
    return (
        <>
            <h2>Blog post {params.slug}</h2>
        </>
    );
}
