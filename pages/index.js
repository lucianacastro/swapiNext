import Header from '../components/Header'
import fetch from 'isomorphic-unfetch'

const Index = (props) =>  (
    <div>
        <Header/>
        <h1>People</h1>
        <ul>
            {props.people.map((person) => (
                <li key={person.name}>{person.name}</li> 
        ))}
        </ul>
    </div>
)



Index.getInitialProps = async function() {
  let counter = 0
  const basicUrl =  'https://swapi.co/api/people/'
  let res = await fetch('https://swapi.co/api/people/')
  const data = await res.json()
  let people = []
  people.push(data.results)

  while(data.result != null) {
    counter++
    res = await fetch(basicUrl + '?page=' + counter)
    console.log('esta es la url:' + res)
    people.push(data.results)
  }
    console.log(`Show data fetched. Count: ${data.results.length}`)
    console.log('esta es al lista:' + people)
    return {
        people
    }
}

export default Index