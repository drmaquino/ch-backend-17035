import axios from 'axios'

async function main() {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  )
  console.log(data)
}

main()
