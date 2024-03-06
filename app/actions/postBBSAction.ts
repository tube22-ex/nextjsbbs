"use server"

import { z } from "zod"
// import { formSchema } from "../bbs-posts/create/page"
import prisma from "../../lib/prismaClient";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const formSchema = z.object({
    username : 
      z.string()
      .min(2, {message:"ユーザー名は2文字以上で入力してください。"}),
    title :
      z.string()
      .min(2, {message:"タイトルは2文字以上で入力してください。"}),
    content : 
      z.string()
      .min(10, {message:"本文は10文字以上で入力してください。"})
      .max(140, {message:"本文は140文字以上で入力してください。"}),
  })


export const postBBS = async({username, title, content}: z.infer<typeof formSchema>) => {
    await prisma.post.create({
        data:{
            username,
            title,
            content,
        }
    });

    revalidatePath("/");

    redirect("/");
}

