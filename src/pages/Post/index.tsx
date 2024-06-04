import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { PostContainer } from './styles'
import { PostContent } from '../../components/PostContent'

const markdown = `
JavaScript promises are a powerful tool for handling asynchronous operations. They represent a value that may be available now, in the future, or never.

Example Code:

~~~js

function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));

~~~
**Key Points:**

- Promises have three states: pending, fulfilled, and rejected.
- Use .then() for handling fulfilled promises and .catch() for handling rejected promises.
- Promises can be chained for sequential asynchronous operations.

Understanding and using promises effectively can make your code cleaner and more manageable, especially when dealing with multiple asynchronous tasks.
`

export function Post() {
  return (
    <div>
      <Header />

      <PostContainer>
        <Profile variant="post" />

        <PostContent>{markdown}</PostContent>
      </PostContainer>
    </div>
  )
}
