const getPostDetails = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const postDetails = await getPostDetails(params.id);
  return (
    <div className='min-h-screen mx-24 space-y-16'>
      <h1 className='text-center text-3xl font-bold '>{params.id}</h1>
      <h1 className='text-center text-3xl font-bold '>
        Post title: {postDetails.title}
      </h1>
      <p className='text-center w-1/2 mx-auto  '>{postDetails.body}</p>
    </div>
  );
};

export default page;
