import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const app = express();

app.get("/users", async (req, res) => {
  const posts = await prisma.user.findMany();
  res.json(posts);
});

app.post("/users", async (req, res) => {
  //const { name, content, authorEmail } = req.body
  const post = await prisma.user.create({
    data: {
      name: "Ricardo dddd",
    },
  });
  res.json(post);
});

const server = app.listen(3000);