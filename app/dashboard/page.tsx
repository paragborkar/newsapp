import Post from '@/components/Post'
import { postsData } from '@/data'
import Link from 'next/link'
import React from 'react'
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/sign-in");
  }
  return (
    <div>
      <h1>My Posts</h1>
      { postsData && postsData.length > 0 ? postsData.map(post =>(
      <Post key={post.id} id={post.id}  author={post.author}  authorEmail={"test@gmail.com"} 
      date={post.datepublished} thumbnail={post.thumbnail} category={post.category} 
      title={post.title} content={post.content}  links={post.links  || []}
      />
    ))   : (
      <div className='p-6 ' >No Post Created Yet. {" "}
      <Link href={"/create-post"} className='underline' >Create New</Link>
      </div>
    )}
    </div>
  )
}

export default Dashboard
