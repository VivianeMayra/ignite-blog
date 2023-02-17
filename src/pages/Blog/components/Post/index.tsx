import { IPost } from "../.."
import { dateFormatter } from "../../../../utils/formatter"
import { PostContainer } from "./styles"

interface PostProps {
  post: IPost
}

export function Post({ post }: PostProps) {
  return (
    <PostContainer to={`/post/${post.number}`}>
      <div>
        <strong>{post.title}</strong>
        <span> {dateFormatter.format(new Date(post.created_at))}</span>
      </div>
      <p>{post.body}</p>
    </PostContainer>
  )
}
