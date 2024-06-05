import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { PostContainer } from './styles'
import { PostContent } from '../../components/PostContent'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'
import { useParams } from 'react-router-dom'

export function Post() {
  const { filterIssue } = useContext(IssuesContext)
  const { id } = useParams()

  const issue = filterIssue(Number(id))

  return (
    <div>
      <Header />

      <PostContainer>
        <Profile
          variant="post"
          postTitle={issue?.title}
          postUsername={issue?.user.login}
          postComments={issue?.comments}
          postDate={issue?.created_at}
          postURL={issue?.html_url}
        />

        <PostContent>
          {typeof issue?.body === 'string' ? issue.body : ''}
        </PostContent>
      </PostContainer>
    </div>
  )
}
