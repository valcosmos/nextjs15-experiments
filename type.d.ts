interface Response {
  posts: Post[]
}

interface Post {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string

}
