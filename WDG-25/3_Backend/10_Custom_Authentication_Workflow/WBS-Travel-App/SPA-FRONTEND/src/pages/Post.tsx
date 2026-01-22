import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { getSinglePost } from '@/data';
import { PostSkeleton } from '@/components';

const Post = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    (async () => {
      if (!id) return;
      try {
        const fetchedPost: Post = await getSinglePost(id);
        setPost(fetchedPost);
      } catch (error: unknown) {
        const message = (error as { message: string }).message;
        toast.error(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <PostSkeleton />;

  if (!post) return <div className='text-center text-xl mt-10'>Post not found.</div>;

  return (
    <>
      <h1 className='text-center text-4xl'>{post.title}</h1>
      <img src={post.image} alt={post.title} className='rounded-lg max-h-96 mx-auto' />
      <p>{post.content}</p>
    </>
  );
};

export default Post;
