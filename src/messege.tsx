

const salutations = 'Hi';
const name = 'Jilian';


const Greet = () => {
  if(name)
  return <h1>{salutations} {name}</h1>
  return <h1>Something went wrong...</h1>
}

export default Greet;